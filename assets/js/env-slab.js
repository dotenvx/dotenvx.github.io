// Keysee-inspired silver slab. Logo contours are copied from logo-env.svg.
// Letter recesses are real cavities in a continuous outer shell.
import tokenMesh from './env-slab-mesh.js';

const roots = document.querySelectorAll('[data-env-slab]');
if (roots.length) {
  import('https://unpkg.com/three@0.167.1/build/three.module.js').then(THREE => {
    roots.forEach(root => {
      if (root.dataset.mounted) return;
      const stage = root.querySelector('.env-slab-stage');
      let renderer;
      try { renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true }); }
      catch { return; } // Leave the reserved stage empty when WebGL is unavailable.
      root.dataset.mounted = 'true';
      renderer.setPixelRatio(Math.min(devicePixelRatio, 2));
      renderer.setClearColor(0, 0);
      renderer.outputColorSpace = THREE.SRGBColorSpace;
      renderer.toneMapping = THREE.ACESFilmicToneMapping;
      renderer.toneMappingExposure = 1.15;
      stage.appendChild(renderer.domElement);
      const scene = new THREE.Scene();
      const camera = new THREE.PerspectiveCamera(32, 1, 0.1, 500);
      camera.position.z = 112;
      scene.add(new THREE.HemisphereLight(0xf1f4f7, 0x565b63, 2.4));
      [[-55, 65, 85, 0xffffff, 2.8], [55, 20, 45, 0xe9eff7, 1.4], [0, -35, -40, 0xffffff, 1.8]].forEach(([x,y,z,color,intensity]) => {
        const light = new THREE.DirectionalLight(color, intensity);
        light.position.set(x,y,z); scene.add(light);
      });
      // Generated from the same validated geometry as membership.stl.
      const group = new THREE.Group();
      group.rotation.set(-.60, 0, 0);
      scene.add(group);
      const silver = new THREE.MeshStandardMaterial({color:0xbfc2c6,metalness:.68,roughness:.48});
      const recessSilver = new THREE.MeshStandardMaterial({color:0x686c72,metalness:.65,roughness:.48});
      const geometry = new THREE.BufferGeometry();
      geometry.setAttribute('position', new THREE.Float32BufferAttribute(tokenMesh.positions, 3));
      geometry.setAttribute('normal', new THREE.Float32BufferAttribute(tokenMesh.normals, 3));
      tokenMesh.groups.forEach(g => geometry.addGroup(g.start, g.count, g.materialIndex));
      geometry.translate(0, 0, -tokenMesh.thickness / 2);
      group.add(new THREE.Mesh(geometry, [silver, recessSilver]));
      const draw=()=>renderer.render(scene,camera);
      const resize=()=>{const {width,height}=stage.getBoundingClientRect();renderer.setSize(width,height,false);camera.aspect=width/height;camera.updateProjectionMatrix();draw();};
      new ResizeObserver(resize).observe(stage);resize();
      root.classList.add('is-rendered');
      let drag=null;
      stage.addEventListener('pointerdown',e=>{stage.dataset.pointerActive='true';drag={x:e.clientX,y:e.clientY};stage.setPointerCapture(e.pointerId);});
      stage.addEventListener('pointermove',e=>{if(!drag)return;group.rotation.y+=(e.clientX-drag.x)*.012;group.rotation.x+=(e.clientY-drag.y)*.012;drag={x:e.clientX,y:e.clientY};draw();});
      stage.addEventListener('blur',()=>delete stage.dataset.pointerActive);
      stage.addEventListener('keydown',()=>delete stage.dataset.pointerActive);
      ['pointerup','pointercancel','lostpointercapture'].forEach(event=>stage.addEventListener(event,()=>drag=null));
      stage.addEventListener('keydown',e=>{if(!['ArrowLeft','ArrowRight','ArrowUp','ArrowDown','Home'].includes(e.key))return;e.preventDefault();if(e.key==='Home')group.rotation.set(-.60,0,0);else {group.rotation.y+=e.key==='ArrowLeft'?-.15:e.key==='ArrowRight'?.15:0;group.rotation.x+=e.key==='ArrowUp'?-.15:e.key==='ArrowDown'?.15:0;}draw();});
    });
  }).catch(() => {});
}
