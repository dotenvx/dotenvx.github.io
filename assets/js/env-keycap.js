// A single polished laptop key, presented face-on with a gentle slab-like tilt.
const roots = document.querySelectorAll('[data-env-keycap]');
if (roots.length) import('https://unpkg.com/three@0.167.1/build/three.module.js').then(THREE => {
  for (const root of roots) {
    if (root.dataset.mounted) continue;
    const stage = root.querySelector('button');
    let renderer;
    try { renderer = new THREE.WebGLRenderer({alpha: true, antialias: true}); }
    catch { stage.textContent = '.ENV'; continue; }
    root.dataset.mounted = 'true';
    renderer.localClippingEnabled = true;
    renderer.setPixelRatio(Math.min(devicePixelRatio, 2));
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.15;
    stage.appendChild(renderer.domElement);
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(32, 1, .1, 500);
    camera.position.set(0, 108, 74);
    camera.lookAt(0, 0, 0);
    scene.add(new THREE.HemisphereLight(0xf1f4f7, 0x565b63, 2.4));
    [[-55,65,85,2.8],[55,20,45,1.4],[0,-35,-40,1.8]].forEach(([x,y,z,intensity]) => {
      const light = new THREE.DirectionalLight(0xffffff, intensity);
      light.position.set(x,y,z); scene.add(light);
    });
    // Broad studio reflections give the glossy black face and edges a polished highlight.
    const studio = document.createElement('canvas'); studio.width=1024; studio.height=512;
    const studioCtx = studio.getContext('2d');
    const studioGradient = studioCtx.createLinearGradient(0,0,1024,0);
    [[0,'#717c8c'],[.18,'#f9fbff'],[.32,'#ffffff'],[.39,'#8e98a7'],[.52,'#343e4d'],[.66,'#dce3eb'],[.8,'#ffffff'],[1,'#717c8c']].forEach(([stop,color])=>studioGradient.addColorStop(stop,color));
    studioCtx.fillStyle=studioGradient; studioCtx.fillRect(0,0,1024,512);
    const studioTexture=new THREE.CanvasTexture(studio);
    studioTexture.mapping=THREE.EquirectangularReflectionMapping;
    studioTexture.colorSpace=THREE.SRGBColorSpace;
    const pmrem=new THREE.PMREMGenerator(renderer);
    const environment=pmrem.fromEquirectangular(studioTexture);
    scene.environment=environment.texture;
    studioTexture.dispose(); pmrem.dispose();
    const shape = new THREE.Shape();
    const h = 21, r = 3;
    shape.moveTo(-h+r,-h); shape.lineTo(h-r,-h);
    shape.quadraticCurveTo(h,-h,h,-h+r); shape.lineTo(h,h-r);
    shape.quadraticCurveTo(h,h,h-r,h); shape.lineTo(-h+r,h);
    shape.quadraticCurveTo(-h,h,-h,h-r); shape.lineTo(-h,-h+r);
    shape.quadraticCurveTo(-h,-h,-h+r,-h);
    const geometry = new THREE.ExtrudeGeometry(shape, {depth:2, steps:1, bevelEnabled:true, bevelSize:.5, bevelThickness:.35, bevelSegments:5, curveSegments:16});
    const position = geometry.attributes.position;
    for (let i=0; i<position.count; i++) {
      const taper = 1-.025*THREE.MathUtils.clamp(position.getZ(i)/2.35,0,1);
      position.setXY(i,position.getX(i)*taper,position.getY(i)*taper);
    }
    geometry.computeVertexNormals();
    const key = new THREE.Group();
    key.rotation.x = -Math.PI/2;

    scene.add(key);
    const metal = new THREE.MeshPhysicalMaterial({color:0x07090c,metalness:.3,roughness:.18,clearcoat:1,clearcoatRoughness:.12,envMapIntensity:.65});
    // Clip the moving key at the keyboard surface as it sinks into the opening.
    const surface = new THREE.Plane(new THREE.Vector3(0,1,0),-.25);
    metal.clippingPlanes=[surface];
    key.add(new THREE.Mesh(geometry,metal));
    const well=new THREE.Mesh(new THREE.ShapeGeometry(shape),new THREE.MeshBasicMaterial({color:0x090a0c}));
    well.rotation.x=-Math.PI/2; well.position.y=-2.1; scene.add(well);
    // A pale legend with a subtle inset edge for contrast on the black key.
    const legend = document.createElement('canvas'); legend.width=1024; legend.height=512;
    const ctx = legend.getContext('2d');
    ctx.textAlign='center'; ctx.textBaseline='middle'; ctx.font='500 280px monospace';
    ctx.fillStyle='#1c222a'; ctx.fillText('.ENV',512,266);
    ctx.fillStyle='#ffffff'; ctx.fillText('.ENV',512,255);
    const texture = new THREE.CanvasTexture(legend); texture.colorSpace=THREE.SRGBColorSpace;
    const label = new THREE.Mesh(new THREE.PlaneGeometry(23,11.5),new THREE.MeshBasicMaterial({map:texture,transparent:true,toneMapped:false,depthWrite:false,polygonOffset:true,polygonOffsetFactor:-1}));
    label.position.set(7,-10,2.37); key.add(label);
    // Soft contact shadow under the key.
    const shadowCanvas=document.createElement('canvas'); shadowCanvas.width=256; shadowCanvas.height=256;
    const shadowCtx=shadowCanvas.getContext('2d');
    const gradient=shadowCtx.createRadialGradient(128,128,28,128,128,125);
    gradient.addColorStop(0,'rgba(0,0,0,.24)'); gradient.addColorStop(1,'rgba(0,0,0,0)');
    shadowCtx.fillStyle=gradient; shadowCtx.fillRect(0,0,256,256);
    const shadowTexture=new THREE.CanvasTexture(shadowCanvas);
    const shadow=new THREE.Mesh(new THREE.PlaneGeometry(60,60),new THREE.MeshBasicMaterial({map:shadowTexture,transparent:true,depthWrite:false}));
    shadow.rotation.x=-Math.PI/2; shadow.position.y=-2; scene.add(shadow);
    const draw=()=>renderer.render(scene,camera);
    const resize=()=>{
      const {width,height}=stage.getBoundingClientRect(); if(!width||!height)return;
      renderer.setSize(width,height,false); camera.aspect=width/height; camera.updateProjectionMatrix(); draw();
    };
    new ResizeObserver(resize).observe(stage); resize();
    const reduced=matchMedia('(prefers-reduced-motion: reduce)');
    let frame=0, target=0, pointerId=null, keyboardHeld=false, lastTime=0;
    const updateDepth=()=>{
      const depth=Math.min(1,-key.position.y/2);
      shadow.material.opacity=1-depth*.75;
      shadow.scale.setScalar(1-depth*.12);
    };
    const tick=now=>{
      frame=0;
      const dt=lastTime?Math.min((now-lastTime)/1000,.05):1/60; lastTime=now;
      key.position.y+=(target-key.position.y)*(1-Math.exp(-26*dt));
      if(Math.abs(target-key.position.y)<.005)key.position.y=target;
      updateDepth(); draw();
      if(key.position.y!==target)frame=requestAnimationFrame(tick); else lastTime=0;
    };
    const update=()=>{
      const held=pointerId!==null||keyboardHeld;
      target=held?-2:0;
      stage.dataset.pressed=String(held);
      if(reduced.matches){cancelAnimationFrame(frame);frame=0;lastTime=0;key.position.y=target;updateDepth();draw();}
      else if(!frame)frame=requestAnimationFrame(tick);
    };
    stage.addEventListener('pointerdown',e=>{
      if(e.button!==0||pointerId!==null)return;
      pointerId=e.pointerId; stage.setPointerCapture(pointerId); update();
    });
    const release=e=>{
      if(e.pointerId!==pointerId)return;
      pointerId=null; update();
    };
    stage.addEventListener('pointerup',release);
    stage.addEventListener('pointercancel',release);
    stage.addEventListener('lostpointercapture',release);
    stage.addEventListener('keydown',e=>{
      if(e.key!==' '&&e.key!=='Enter')return;
      e.preventDefault(); keyboardHeld=true; update();
    });
    stage.addEventListener('keyup',e=>{
      if(e.key!==' '&&e.key!=='Enter')return;
      e.preventDefault(); keyboardHeld=false; update();
    });
    const reset=()=>{pointerId=null;keyboardHeld=false;update();};
    stage.addEventListener('blur',reset);
    window.addEventListener('blur',reset);
    document.addEventListener('visibilitychange',()=>{if(document.hidden)reset();});
    reduced.addEventListener('change',update);
    stage.dataset.pressed='false';
  }
}).catch(()=>{});
