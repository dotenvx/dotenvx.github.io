// A soft ground projection of the cube, refreshed only when the view changes.
export function createCubeShadow(THREE, scene, geometry) {
  geometry.computeBoundingBox();
  const {min,max}=geometry.boundingBox;
  const corners=[];
  for(const x of [min.x,max.x])for(const y of [min.y,max.y])for(const z of [min.z,max.z])corners.push(new THREE.Vector3(x,y,z));
  const canvas=document.createElement('canvas');canvas.width=canvas.height=1024;
  const ctx=canvas.getContext('2d');
  const texture=new THREE.CanvasTexture(canvas);
  const material=new THREE.MeshBasicMaterial({map:texture,transparent:true,opacity:.22,depthWrite:false,toneMapped:false});
  const shadow=new THREE.Mesh(new THREE.PlaneGeometry(224,36),material);
  shadow.position.set(0,-44,-42);
  scene.add(shadow);
  function hull(points) {
    points.sort((a,b)=>a.x-b.x||a.y-b.y);
    const cross=(a,b,c)=>(b.x-a.x)*(c.y-a.y)-(b.y-a.y)*(c.x-a.x);
    const lower=[],upper=[];
    for(const p of points){while(lower.length>1&&cross(lower.at(-2),lower.at(-1),p)<=0)lower.pop();lower.push(p);}
    for(const p of [...points].reverse()){while(upper.length>1&&cross(upper.at(-2),upper.at(-1),p)<=0)upper.pop();upper.push(p);}
    return [...lower.slice(0,-1),...upper.slice(0,-1)];
  }
  let previousRotation='';
  return group=>{
    const lift=Math.max(0,Math.min(1,(group.position.y-3)/4));
    shadow.scale.set(1+lift*.06,1+lift*.1,1);
    material.opacity=.22-lift*.04;
    const rotation=[...group.rotation.toArray(),...group.position.toArray()].join(',');
    if(rotation===previousRotation)return;
    previousRotation=rotation;
    group.updateMatrixWorld(true);
    const projected=corners.map(c=>{
      const p=c.clone().applyMatrix4(group.matrixWorld);
      // A slightly angled overhead light projects the footprint onto the ground.
      const height=Math.max(0,p.y+34);
      return {x:512+(p.x-group.position.x+height*.12)*3.7,y:512+(p.z-group.position.z+height*.08)*3.7};
    });
    const polygon=hull(projected);
    ctx.clearRect(0,0,1024,1024);
    ctx.filter='blur(48px)';ctx.fillStyle='#000';ctx.beginPath();
    polygon.forEach((p,i)=>i?ctx.lineTo(p.x,p.y):ctx.moveTo(p.x,p.y));
    ctx.closePath();ctx.fill();ctx.filter='none';texture.needsUpdate=true;
  };
}
