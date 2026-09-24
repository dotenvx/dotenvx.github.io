// Local membership experiment, borrowing Keysee's rounded tag paths,
// cut-through windows, beveled extrusion, and metallic lighting treatment.
const roots = document.querySelectorAll('[data-executive-badge]');
if (roots.length) {
  import('https://unpkg.com/three@0.167.1/build/three.module.js').then(THREE => {
    roots.forEach(root => {
      if (root.dataset.mounted) return;
      const stage = root.querySelector('.executive-badge-stage');
      let renderer;
      try { renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true }); }
      catch { return; } // The illustrated fallback remains visible without WebGL.
      root.dataset.mounted = 'true';
      renderer.setPixelRatio(Math.min(devicePixelRatio, 2));
      renderer.setClearColor(0, 0);
      renderer.outputColorSpace = THREE.SRGBColorSpace;
      stage.appendChild(renderer.domElement);
      const scene = new THREE.Scene();
      const camera = new THREE.PerspectiveCamera(32, 1, 0.1, 500);
      camera.position.z = 112;
      scene.add(new THREE.HemisphereLight(0xfff4df, 0x3a4048, 3));
      [[-40, 50, 60, 0xffffff, 5], [50, 0, 30, 0xc6d8ed, 3], [0, -40, -20, 0xe1c999, 4]].forEach(([x,y,z,color,intensity]) => {
        const light = new THREE.DirectionalLight(color, intensity);
        light.position.set(x,y,z); scene.add(light);
      });
      function rounded(Path, x, y, w, h, r) {
        const p = new Path();
        p.moveTo(x+r,y); p.lineTo(x+w-r,y); p.quadraticCurveTo(x+w,y,x+w,y+r);
        p.lineTo(x+w,y+h-r); p.quadraticCurveTo(x+w,y+h,x+w-r,y+h);
        p.lineTo(x+r,y+h); p.quadraticCurveTo(x,y+h,x,y+h-r);
        p.lineTo(x,y+r); p.quadraticCurveTo(x,y,x+r,y); return p;
      }
      const shape = rounded(THREE.Shape,-17,-24,34,48,3);
      const hole = new THREE.Path(); hole.absarc(-11,18,1.9,0,Math.PI*2,true); shape.holes.push(hole);
      [[4,-13,9],[1,-17,12],[5,-21,8]].forEach(([x,y,w]) => shape.holes.push(rounded(THREE.Path,x,y,w,1.5,.7)));
      const geometry = new THREE.ExtrudeGeometry(shape, {depth:1.5,bevelEnabled:true,bevelThickness:.25,bevelSize:.25,bevelSegments:3,curveSegments:24});
      geometry.translate(0,0,-.75);
      const group = new THREE.Group();
      group.rotation.set(.13,-.34,-.13); scene.add(group);
      const metal = new THREE.MeshStandardMaterial({color:0x585750,metalness:.8,roughness:.4});
      group.add(new THREE.Mesh(geometry,metal));
      const edges = new THREE.LineSegments(new THREE.EdgesGeometry(geometry,35),new THREE.LineBasicMaterial({color:0xc1b38e,transparent:true,opacity:.35}));
      group.add(edges);
      function inscription(back=false) {
        const canvas=document.createElement('canvas'); canvas.width=680;canvas.height=960;
        const c=canvas.getContext('2d');
        c.fillStyle='#d8c69a'; c.textBaseline='top';
        if (!back) {
          c.font='bold 154px monospace'; c.fillText('.ENV',72,254);
          c.fillStyle='#9e9480';c.fillRect(76,452,520,2);
          c.fillStyle='#d8c69a';c.font='bold 49px monospace';c.fillText('EXECUTIVE',76,494);
          c.fillStyle='#b1a58e';c.font='25px monospace';c.fillText('DOTENV MEMBER',78,567);
          c.font='18px monospace';c.fillText('EST. 2013',78,817);
        } else {
          c.font='bold 39px monospace';c.fillText('FOR HUMANS',72,300);c.fillText('AND AGENTS.',72,355);
          c.font='24px monospace';c.fillText('dotenvx.com',72,530);
        }
        const texture=new THREE.CanvasTexture(canvas);texture.colorSpace=THREE.SRGBColorSpace;
        const plane=new THREE.Mesh(new THREE.PlaneGeometry(34,48),new THREE.MeshBasicMaterial({map:texture,transparent:true,depthWrite:false,polygonOffset:true,polygonOffsetFactor:-2}));
        plane.position.z=back?-1.015:1.015;if(back)plane.rotation.y=Math.PI;group.add(plane);
      }
      inscription(); inscription(true);
      const draw=()=>renderer.render(scene,camera);
      const resize=()=>{const {width,height}=stage.getBoundingClientRect();renderer.setSize(width,height,false);camera.aspect=width/height;camera.updateProjectionMatrix();draw();};
      new ResizeObserver(resize).observe(stage);resize();
      root.classList.add('is-rendered');
      let drag=null;
      stage.addEventListener('pointerdown',e=>{drag={x:e.clientX,y:e.clientY};stage.setPointerCapture(e.pointerId);});
      stage.addEventListener('pointermove',e=>{if(!drag)return;group.rotation.y+=(e.clientX-drag.x)*.012;group.rotation.x+=(e.clientY-drag.y)*.012;drag={x:e.clientX,y:e.clientY};draw();});
      ['pointerup','pointercancel','lostpointercapture'].forEach(event=>stage.addEventListener(event,()=>drag=null));
      stage.addEventListener('keydown',e=>{if(!['ArrowLeft','ArrowRight','ArrowUp','ArrowDown','Home'].includes(e.key))return;e.preventDefault();if(e.key==='Home')group.rotation.set(.13,-.34,-.13);else {group.rotation.y+=e.key==='ArrowLeft'?-.15:e.key==='ArrowRight'?.15:0;group.rotation.x+=e.key==='ArrowUp'?-.15:e.key==='ArrowDown'?.15:0;}draw();});
    });
  }).catch(() => {});
}
