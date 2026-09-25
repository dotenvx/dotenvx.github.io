// Personalized remote meshes share one renderer. Only visible slots draw;
// animation stops when every hover flip has settled.
const root=document.querySelector('[data-member-token-grid]');
if(root){
  import('https://unpkg.com/three@0.167.1/build/three.module.js').then(THREE=>{
    const renderer=new THREE.WebGLRenderer({alpha:true,antialias:true});
    renderer.setPixelRatio(Math.min(devicePixelRatio,2));
    renderer.setClearColor(0,0);renderer.outputColorSpace=THREE.SRGBColorSpace;
    renderer.toneMapping=THREE.ACESFilmicToneMapping;renderer.toneMappingExposure=1.15;
    renderer.domElement.className='member-token-grid-canvas';
    renderer.domElement.setAttribute('aria-hidden','true');document.body.appendChild(renderer.domElement);
    const scene=new THREE.Scene(),camera=new THREE.PerspectiveCamera(32,1,.1,500);
    camera.position.z=80;
    scene.add(new THREE.HemisphereLight(0xf1f4f7,0x565b63,2.4));
    for(const [x,y,z,color,intensity] of [[-55,65,85,0xffffff,2.8],[55,20,45,0xe9eff7,1.4],[0,-35,-40,0xffffff,1.8]]){
      const light=new THREE.DirectionalLight(color,intensity);light.position.set(x,y,z);scene.add(light);
    }
    const materials=[new THREE.MeshStandardMaterial({color:0xc5c8cc,metalness:.75,roughness:.28}),new THREE.MeshStandardMaterial({color:0x686c72,metalness:.7,roughness:.38})];
    const token=new THREE.Mesh(new THREE.BufferGeometry(),materials);scene.add(token);
    const reducedMotion=matchMedia('(prefers-reduced-motion: reduce)');
    let frame=0,width=0,height=0,lastTime=0;
    function draw(time){
      frame=0;
      if(document.hidden)return;
      const dt=Math.min((time-lastTime)/1000,.05);lastTime=time;
      let animating=false;
      renderer.setScissorTest(false);renderer.clear();renderer.setScissorTest(true);
      for(const view of views){
        const {stage,geometry}=view;
        if(!geometry)continue;
        const r=stage.getBoundingClientRect();
        if(r.bottom<=0||r.top>=height||r.right<=0||r.left>=width||!r.width||!r.height)continue;
        const target=view.back?Math.PI:0;
        view.angle=reducedMotion.matches?target:view.angle+(target-view.angle)*(1-Math.exp(-9*dt));
        if(Math.abs(target-view.angle)<.001)view.angle=target;else animating=true;
        stage.dataset.side=view.angle===Math.PI?'back':view.angle===0?'front':'turning';
        const left=Math.max(0,r.left),top=Math.max(0,r.top),right=Math.min(width,r.right),bottom=Math.min(height,r.bottom);
        renderer.setViewport(r.left,height-r.bottom,r.width,r.height);
        renderer.setScissor(left,height-bottom,right-left,bottom-top);
        camera.aspect=r.width/r.height;camera.updateProjectionMatrix();token.geometry=geometry;token.rotation.set(-.60,view.angle,0);
        renderer.render(scene,camera);
      }
      if(animating)requestDraw();
    }
    function requestDraw(){if(!frame)frame=requestAnimationFrame(draw);}
    const usedInitials=new Set();
    const stages=[...root.querySelectorAll('[data-token-slot]')];
    const views=stages.map(stage=>{
      let initials;
      do { initials=Array.from(crypto.getRandomValues(new Uint8Array(2)),n=>String.fromCharCode(65+n%26)).join(''); } while(usedInitials.has(initials));
      usedInitials.add(initials);
      const view={stage,initials,geometry:null,angle:0,back:false,hover:false,focused:false};
      stage.dataset.initials=initials;
      stage.textContent='Loading…';
      stage.setAttribute('aria-label',`Membership token ${initials}. Hover or focus to see the initials on the back.`);
      function update(){view.back=view.hover||view.focused;stage.setAttribute('aria-pressed',String(view.back));requestDraw();}
      stage.addEventListener('pointerenter',event=>{if(event.pointerType!=='touch'){view.hover=true;update();}});
      stage.addEventListener('pointerleave',()=>{view.hover=false;update();});
      stage.addEventListener('focus',()=>{view.focused=stage.matches(':focus-visible');update();});
      stage.addEventListener('blur',()=>{view.focused=false;update();});
      stage.addEventListener('click',event=>{
        if(stage.dataset.error){load(view);return;}
        // Keyboard activation and touch can toggle the back without a hover device.
        if(event.detail===0||event.pointerType==='touch'){view.focused=!view.back;view.hover=false;update();}
      });
      return view;
    });
    async function load(view){
      const {stage,initials}=view;
      delete stage.dataset.error;stage.textContent='Loading…';
      try {
        const response=await fetch(`https://keysee.io/api/tokens/${initials}.json`,{signal:AbortSignal.timeout(45000)});
        if(!response.ok)throw new Error(`Token ${initials}: HTTP ${response.status}`);
        const mesh=await response.json();
        const geometry=new THREE.BufferGeometry();
        for(const name of ['position','normal']){
          const attribute=mesh.geometry.attributes[name];
          geometry.setAttribute(name,new THREE.Float32BufferAttribute(attribute.array,attribute.itemSize));
        }
        if(mesh.geometry.index)geometry.setIndex(mesh.geometry.index);
        mesh.geometry.groups.forEach(g=>geometry.addGroup(g.start,g.count,g.materialIndex));
        view.geometry=geometry;
        stage.textContent='';stage.dataset.loaded='true';requestDraw();
      }catch(error){stage.textContent='Retry';stage.dataset.error='true';console.warn('Could not load membership token',initials,error);}
    }
    // Bound simultaneous requests so 32 personalized meshes do not flood the API.
    let next=0;
    async function worker(){while(next<views.length)await load(views[next++]);}
    Promise.all(Array.from({length:4},worker)).then(()=>{root.dataset.loaded=String(views.filter(view=>view.geometry).length);});
    function resize(){width=document.documentElement.clientWidth;height=innerHeight;renderer.setSize(width,height);requestDraw();}
    const observer=new ResizeObserver(resize);observer.observe(root);
    window.addEventListener('resize',resize);window.addEventListener('scroll',requestDraw,{passive:true});
    document.addEventListener('visibilitychange',requestDraw);window.addEventListener('pageshow',requestDraw);
    resize();root.dataset.ready='true';
  }).catch(error=>{console.error('Member token grid failed to render',error);});
}
