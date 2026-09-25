// Membership token and corporate desk cube. Logo contours come from logo-env.svg.
// Letter recesses are real cavities in a continuous outer shell.

const assetVersion = new URL(import.meta.url).search;
const roots = document.querySelectorAll('[data-env-slab]');
if (roots.length) {
  import('https://unpkg.com/three@0.167.1/build/three.module.js').then(THREE => {
    return Promise.all([...roots].map(async root => {
      const isCube = root.dataset.envSlab === 'cube';
      const grounded = root.dataset.grounded === 'true';
      const {default: tokenMesh} = await import((isCube ? './corporate-cube-mesh.js' : './env-slab-mesh.js') + assetVersion);
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
      camera.position.z = isCube ? 165 : 112;
      if (isCube) camera.position.y = 4;
      scene.add(new THREE.HemisphereLight(0xf1f4f7, 0x565b63, 2.4));
      [[-55, 65, 85, 0xffffff, 2.8], [55, 20, 45, 0xe9eff7, 1.4], [0, -35, -40, 0xffffff, 1.8]].forEach(([x,y,z,color,intensity]) => {
        const light = new THREE.DirectionalLight(color, intensity);
        light.position.set(x,y,z); scene.add(light);
      });
      // Generated from the same validated geometry as the corresponding STL.
      const group = new THREE.Group();
      if (isCube) group.position.y = 3;
      const resetRotation = () => group.rotation.set(isCube ? (grounded ? .24 : (root.dataset.scale ? -.29 : -.24)) : -.60, Number(root.dataset.turn) || 0, 0);
      resetRotation();
      scene.add(group);
      // Satin-gloss steel: clearer edge highlights, with softer recessed floors.
      const metal = new THREE.MeshStandardMaterial({color:0xc5c8cc,metalness:.75,roughness:.28});
      const recessMetal = new THREE.MeshStandardMaterial({color:0x686c72,metalness:.7,roughness:.38});
      const geometry = new THREE.BufferGeometry();
      geometry.setAttribute('position', new THREE.Float32BufferAttribute(tokenMesh.positions, 3));
      geometry.setAttribute('normal', new THREE.Float32BufferAttribute(tokenMesh.normals, 3));
      tokenMesh.groups.forEach(g => geometry.addGroup(g.start, g.count, g.materialIndex));
      geometry.translate(0, 0, -tokenMesh.thickness / 2);
      const plate = new THREE.Mesh(geometry, [metal, recessMetal]);
      group.add(plate);
      if (root.dataset.scale) {
        group.scale.setScalar(Number(root.dataset.scale) || 1);
        group.updateMatrixWorld(true);
        const bounds = new THREE.Box3().setFromObject(group);
        // Tier cubes hover close to the ground; the hero keeps its own height.
        group.position.y += (grounded ? -25 : -34) - bounds.min.y;
      }
      let updateShadow;
      if (isCube) {
        const {createCubeShadow} = await import('./cube-shadow.js' + assetVersion);
        updateShadow = createCubeShadow(THREE, scene, geometry, {grounded});
      }
      const draw=()=>{updateShadow?.(group);renderer.render(scene,camera);};
      const resize=()=>{
        const {width,height}=stage.getBoundingClientRect();
        if(!width||!height)return;
        // Extra transparent render space protects the shadow without moving the title
        // or shrinking the cube: expand the field of view by the same height ratio.
        const padding=isCube?64:0, renderHeight=height+padding*2;
        const renderWidth=width;
        renderer.setSize(renderWidth,renderHeight,false);
        renderer.domElement.style.width=`${renderWidth}px`;
        renderer.domElement.style.left='0';
        renderer.domElement.style.top=`${-padding}px`;
        renderer.domElement.style.bottom='auto';
        renderer.domElement.style.height=`${renderHeight}px`;
        camera.aspect=renderWidth/renderHeight;
        camera.fov=THREE.MathUtils.radToDeg(2*Math.atan(Math.tan(THREE.MathUtils.degToRad(16))*renderHeight/height));
        camera.updateProjectionMatrix();draw();
      };
      new ResizeObserver(resize).observe(stage);resize();
      if(isCube)window.addEventListener('resize',resize);
      root.classList.add('is-rendered');
      if (isCube && !grounded) {
        const {attachCubeHover} = await import('./cube-hover.js' + assetVersion);
        attachCubeHover(stage, group, draw, THREE, camera, renderer.domElement);
      } else if (!isCube) {
        const {attachSlabHover} = await import('./slab-hover.js' + assetVersion);
        attachSlabHover(stage, group, draw);
      }
    }));
  }).catch(() => {});
}
