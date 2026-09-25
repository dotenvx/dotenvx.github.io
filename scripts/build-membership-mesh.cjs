// node scripts/build-membership-mesh.cjs /path/to/three [cube]
// Exports ASCII STL, like Keysee. Coordinates are millimeters.
// Generates the identical rounded engraving for the STL and browser preview.
const fs = require('node:fs');
const path = require('node:path');
const THREE = require(process.argv[2] || 'three');
const root = path.resolve(__dirname, '..');
const isCube = process.argv[3] === 'cube';
const design = {...require('./membership-token-design.json')};
if (isCube) {
  design.scale = 50 / 41.6;
  design.engravingDepthMm = 1.5;
  design.engravingLipRadiusMm = 0.4;
}
const outputName = isCube ? 'corporate-plaque' : 'membership';
const meshName = isCube ? 'corporate-plaque-mesh' : 'env-slab-mesh';
const tokenScale = design.scale;
if (!Number.isFinite(tokenScale) || tokenScale <= 0) throw new Error('Invalid token scale');
const contours = design.logoContours.map(points => points.map(p => [...p]));
contours.forEach(p => { if (JSON.stringify(p[0]) === JSON.stringify(p.at(-1))) p.pop(); });
const radius = isCube ? 3 / tokenScale : .8, thickness = isCube ? 41.6 : 5.15;
const floor = thickness - design.engravingDepthMm / tokenScale;
const lipRadius = design.engravingLipRadiusMm / tokenScale;
// Mitered offsets retain the original letter silhouettes; a quarter-circle
// profile softens only the lip where each recess meets the face.
function offsetContour(points, amount) {
  const p = points.map(v => new THREE.Vector2(...v));
  if (!THREE.ShapeUtils.isClockWise(p)) p.reverse();
  return p.map((v, i) => {
    const before = v.clone().sub(p[(i + p.length - 1) % p.length]).normalize();
    const after = p[(i + 1) % p.length].clone().sub(v).normalize();
    const n1 = new THREE.Vector2(-before.y, before.x);
    const n2 = new THREE.Vector2(-after.y, after.x);
    return v.clone().add(n1.clone().add(n2).multiplyScalar(amount / (1 + n1.dot(n2))));
  });
}
const openings = contours.map(p => offsetContour(p, lipRadius));
function outline(offset = 0) {
  const half = isCube ? thickness / 2 - radius : 20;
  const x = -half-offset, y=x, w=2*half+2*offset, r=(isCube ? 0 : 2)+offset;
  if (isCube) {
    const p = new THREE.Shape();
    p.moveTo(x+r,y); p.lineTo(x+w-r,y); p.absarc(x+w-r,y+r,r,-Math.PI/2,0,false);
    p.lineTo(x+w,y+w-r); p.absarc(x+w-r,y+w-r,r,0,Math.PI/2,false);
    p.lineTo(x+r,y+w); p.absarc(x+r,y+w-r,r,Math.PI/2,Math.PI,false);
    p.lineTo(x,y+r); p.absarc(x+r,y+r,r,Math.PI,Math.PI*1.5,false);
    return p;
  }
  const p = new THREE.Shape();
  p.moveTo(x+r,y); p.lineTo(x+w-r,y); p.quadraticCurveTo(x+w,y,x+w,y+r);
  p.lineTo(x+w,y+w-r); p.quadraticCurveTo(x+w,y+w,x+w-r,y+w);
  p.lineTo(x+r,y+w); p.quadraticCurveTo(x,y+w,x,y+w-r);
  p.lineTo(x,y+r); p.quadraticCurveTo(x,y,x+r,y);
  return p;
}
const vertices=[], indices=[], lookup=new Map();
function vertex(v) {
  const rounded=v.map(n=>Number(Math.fround(n).toFixed(6))), key=rounded.join(',');
  if(!lookup.has(key)) { lookup.set(key,vertices.length/3); vertices.push(...rounded); }
  return lookup.get(key);
}
function triangle(a,b,c) {
  const ids=[a,b,c].map(vertex);
  if(new Set(ids).size===3) indices.push(...ids);
}
function cap(shape,z,reverse=false) {
  const g=new THREE.ShapeGeometry(shape,24).toNonIndexed(), p=g.attributes.position;
  for(let i=0;i<p.count;i+=3) {
    const pts=[0,1,2].map(j=>[p.getX(i+j),p.getY(i+j),z]);
    if(reverse) pts.reverse(); triangle(...pts);
  }
  g.dispose();
}
const face=outline();
openings.forEach(points=>{
  const hole=new THREE.Path(points);
  hole.closePath(); face.holes.push(hole);
});
cap(face,thickness); cap(outline(),0,true);
const rings=[];
const edgeSegments = isCube ? 24 : 12;
for(let i=0;i<=edgeSegments;i++) { const a=i/edgeSegments*Math.PI/2; rings.push([radius*Math.sin(a),thickness-radius+radius*Math.cos(a)]); }
for(let i=0;i<=edgeSegments;i++) { const a=i/edgeSegments*Math.PI/2; rings.push([radius*Math.cos(a),radius-radius*Math.sin(a)]); }
const ringPoints=rings.map(([offset,z])=>{
  if (isCube) {
    const half=thickness/2-radius, result=[];
    [[half,-half,-Math.PI/2],[half,half,0],[-half,half,Math.PI/2],[-half,-half,Math.PI]].forEach(([cx,cy,start])=>{
      for(let i=0;i<=edgeSegments;i++){const angle=start+i/edgeSegments*Math.PI/2;result.push([cx+offset*Math.cos(angle),cy+offset*Math.sin(angle),z]);}
    });
    return result;
  }
  const p=outline(offset).getPoints(24); if(p[0].equals(p.at(-1))) p.pop();
  return p.map(v=>[v.x,v.y,z]);
});
for(let r=0;r<ringPoints.length-1;r++) {
  const a=ringPoints[r],b=ringPoints[r+1];
  for(let i=0;i<a.length;i++) { const j=(i+1)%a.length; triangle(a[i],b[i],a[j]); triangle(a[j],b[i],b[j]); }
}
const shellVertexCount = vertices.length / 3;
if (isCube) {
  const half = thickness / 2 - radius, edgeCoverage = new Set();
  let maximumError = 0;
  for(let id=0;id<shellVertexCount;id++) {
    const p=[vertices[id*3],vertices[id*3+1],vertices[id*3+2]-thickness/2];
    const distances=p.map(n=>Math.max(0,Math.abs(n)-half));
    maximumError=Math.max(maximumError,Math.abs(Math.hypot(...distances)-radius)*tokenScale);
    const axes=p.map((n,i)=>distances[i]>1e-5 ? `${i}${n>0?'+':'-'}` : '').filter(Boolean);
    if(axes.length===2)edgeCoverage.add(axes.join(','));
  }
  if(maximumError>0.00001 || edgeCoverage.size!==12)throw new Error('Cube edges do not share a uniform radius');
  console.log(`All 12 cube edges: ${(radius*tokenScale).toFixed(2)} mm radius, ${edgeSegments} segments per quarter-circle; maximum surface error ${maximumError.toFixed(7)} mm`);
}
contours.forEach(points => {
  const p = offsetContour(points, 0);
  cap(new THREE.Shape(p), floor);
  const profiles = [];
  for (let i = 0; i <= 10; i++) {
    const angle = i / 10 * Math.PI / 2;
    const offset = lipRadius * (1 - Math.sin(angle));
    const z = thickness - lipRadius * (1 - Math.cos(angle));
    profiles.push(offsetContour(points, offset).map(v => [v.x, v.y, z]));
  }
  profiles.push(p.map(v => [v.x, v.y, floor]));
  for (let r = 0; r < profiles.length - 1; r++) {
    const upper = profiles[r], lower = profiles[r + 1];
    for (let i = 0; i < p.length; i++) {
      const j = (i + 1) % p.length;
      triangle(upper[i], lower[i], upper[j]);
      triangle(upper[j], lower[i], lower[j]);
    }
  }
});
// Earcut can bridge aligned letter edges across an existing vertex. Split
// those collinear edges so the exported solid has no T-junctions.
const candidates=openings.flat().map(({x,y})=>vertex([x,y,thickness]));
const pending=[];
for(let i=0;i<indices.length;i+=3) pending.push(indices.slice(i,i+3));
indices.length=0;
while(pending.length) {
  const t=pending.pop(); let split=false;
  for(let e=0;e<3&&!split;e++) {
    const a=t[e],b=t[(e+1)%3],c=t[(e+2)%3];
    if(Math.abs(vertices[a*3+2]-thickness)>1e-5 || Math.abs(vertices[b*3+2]-thickness)>1e-5) continue;
    const ax=vertices[a*3],ay=vertices[a*3+1],dx=vertices[b*3]-ax,dy=vertices[b*3+1]-ay,length=dx*dx+dy*dy;
    for(const v of candidates) {
      if(t.includes(v)) continue;
      const vx=vertices[v*3]-ax,vy=vertices[v*3+1]-ay,u=(vx*dx+vy*dy)/length;
      if(u>1e-6&&u<1-1e-6&&Math.abs(vx*dy-vy*dx)<1e-5) {
        pending.push([a,v,c],[v,b,c]);split=true;break;
      }
    }
  }
  if(!split) indices.push(...t);
}
// Verify every welded edge has exactly two oppositely directed incident faces.
const edges=new Map();
for(let i=0;i<indices.length;i+=3) for(let j=0;j<3;j++) {
  const a=indices[i+j],b=indices[i+(j+1)%3],key=[Math.min(a,b),Math.max(a,b)].join(',');
  const e=edges.get(key)||{count:0,direction:0}; e.count++; e.direction+=a<b?1:-1; edges.set(key,e);
}
const bad=[...edges.values()].filter(e=>e.count!==2 || e.direction!==0);
if(bad.length) throw new Error(`${bad.length} non-manifold or inconsistently wound edges`);
const lines = [`solid dotenv_${outputName}`];
const point = id => new THREE.Vector3(...vertices.slice(id * 3, id * 3 + 3)).multiplyScalar(tokenScale);
const format = v => v.toArray().map(n => {
  if (!Number.isFinite(n)) throw new Error('Non-finite STL coordinate');
  return n.toPrecision(10);
}).join(' ');
for (let i = 0; i < indices.length; i += 3) {
  const [a, b, c] = indices.slice(i, i + 3).map(point);
  const normal = b.clone().sub(a).cross(c.clone().sub(a));
  if (normal.lengthSq() === 0) throw new Error('Degenerate STL triangle');
  normal.normalize();
  lines.push(`  facet normal ${format(normal)}`, '    outer loop',
    ...[a, b, c].map(v => `      vertex ${format(v)}`),
    '    endloop', '  endfacet');
}
lines.push(`endsolid dotenv_${outputName}`);
fs.writeFileSync(path.join(root, `${outputName}.stl`), lines.join('\n') + '\n');
console.log(`${outputName}.stl: ${vertices.length/3} vertices, ${indices.length/3} triangles; closed manifold verified; ${(41.6 * tokenScale).toFixed(2)} × ${(41.6 * tokenScale).toFixed(2)} × ${(thickness * tokenScale).toFixed(4)} mm`);

// Preserve sharp letter corners and floor edges while smoothing the rounded
// outer rim and engraving lip. Geometry positions are identical to the STL.
const faceNormals = [], adjacent = vertices.map(() => []);
for (let i = 0; i < indices.length; i += 3) {
  const [a, b, c] = indices.slice(i, i + 3).map(point);
  const normal = b.clone().sub(a).cross(c.clone().sub(a)).normalize();
  faceNormals.push(normal);
  for (const id of indices.slice(i, i + 3)) adjacent[id].push(normal);
}
const positions = [], normals = [], groups = [];
for (let i = 0; i < indices.length; i += 3) {
  const normal = faceNormals[i / 3];
  const ids = indices.slice(i, i + 3);
  const isFloor = ids.every(id => Math.abs(vertices[id * 3 + 2] - floor) < 1e-5);
  const materialIndex = isFloor ? 1 : 0;
  const last = groups.at(-1);
  if (last && last.materialIndex === materialIndex) last.count += 3;
  else groups.push({start: i, count: 3, materialIndex});
  for (const id of ids) {
    positions.push(...point(id).toArray().map(n => Number(n.toFixed(8))));
    const smooth = new THREE.Vector3();
    adjacent[id].forEach(n => { if (n.dot(normal) > Math.cos(Math.PI / 4)) smooth.add(n); });
    // Flat faces must stay optically flat rather than inherit the lip's slope
    // through the large triangles spanning the front of the token.
    const z = vertices[id * 3 + 2];
    if (isCube && id < shellVertexCount) {
      // Exact rounded-box normals keep the broad faces flat and all fillets smooth.
      const half = thickness / 2 - radius;
      const x = vertices[id * 3], y = vertices[id * 3 + 1], centeredZ = z - thickness / 2;
      const clamp = value => Math.max(-half, Math.min(half, value));
      smooth.set(x-clamp(x), y-clamp(y), centeredZ-clamp(centeredZ));
    }
    if (Math.abs(z - thickness) < 1e-5) smooth.set(0, 0, 1);
    else if (Math.abs(z) < 1e-5) smooth.set(0, 0, -1);
    else if (isFloor) smooth.set(0, 0, 1);
    normals.push(...smooth.normalize().toArray().map(n => Number(n.toFixed(6))));
  }
}
fs.writeFileSync(path.join(root, `assets/js/${meshName}.js`),
  '// Generated by scripts/build-membership-mesh.cjs; do not edit.\nexport default ' +
  JSON.stringify({thickness: thickness * tokenScale, positions, normals, groups}) + ';\n');
console.log(`Engraving: ${design.engravingDepthMm} mm deep, ${design.engravingLipRadiusMm} mm rounded lip; preview mesh regenerated`);
