// A slow breath continues at both the resting and raised hover heights.
export function attachCubeHover(stage, group, draw, THREE, camera, canvas) {
  const motion=matchMedia('(prefers-reduced-motion: reduce)');
  const rest=group.position.clone(),rotation=group.rotation.clone();
  const ray=new THREE.Raycaster(),pointer=new THREE.Vector2();
  let hovered=false,focused=false,visible=false,frame=0,last=0,elapsed=0,lift=0;
  function tick(now){
    frame=0;
    if(!visible||document.hidden||motion.matches){last=0;return;}
    const dt=last?Math.min((now-last)/1000,.05):0;last=now;elapsed+=dt;
    // Ease over roughly two seconds, without restarting the breathing phase.
    lift+=((hovered||focused?1:0)-lift)*(1-Math.exp(-1.8*dt));
    const breath=Math.sin(elapsed*Math.PI*2/5.8);
    group.position.set(rest.x,rest.y+lift*4+breath*(.65+lift*.2),rest.z);
    group.rotation.copy(rotation);
    draw();frame=requestAnimationFrame(tick);
  }
  function sync(){
    if(frame)cancelAnimationFrame(frame);frame=0;last=0;
    if(motion.matches){
      lift=0;group.position.copy(rest);group.rotation.copy(rotation);draw();
    }else if(visible&&!document.hidden)frame=requestAnimationFrame(tick);
  }
  stage.addEventListener('pointermove',e=>{
    if(e.pointerType==='touch')return;
    const rect=canvas.getBoundingClientRect();
    pointer.set((e.clientX-rect.left)/rect.width*2-1,-(e.clientY-rect.top)/rect.height*2+1);
    // Keep the hover target still while the rendered cube breathes above it.
    const position=group.position.clone(),pose=group.rotation.clone();
    group.position.copy(rest);group.rotation.copy(rotation);
    group.updateMatrixWorld(true);camera.updateMatrixWorld(true);
    ray.setFromCamera(pointer,camera);hovered=ray.intersectObject(group,true).length>0;
    group.position.copy(position);group.rotation.copy(pose);group.updateMatrixWorld(true);
  });
  stage.addEventListener('pointerleave',()=>{hovered=false;});
  stage.addEventListener('pointerdown',()=>{focused=false;});
  stage.addEventListener('focus',()=>{focused=stage.matches(':focus-visible');});
  stage.addEventListener('blur',()=>{focused=false;});
  motion.addEventListener('change',sync);
  document.addEventListener('visibilitychange',sync);
  new IntersectionObserver(entries=>{visible=entries[0].isIntersecting;sync();}).observe(stage);
}
