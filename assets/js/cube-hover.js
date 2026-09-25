// The cube gently rises on hover; its resting pose never changes.
export function attachCubeHover(stage, group, draw, THREE, camera, canvas) {
  const motion=matchMedia('(prefers-reduced-motion: reduce)');
  const rest=group.position.y;
  const ray=new THREE.Raycaster(),pointer=new THREE.Vector2();
  let target=rest,frame=0,last=0;
  function tick(now){
    const dt=last?Math.min((now-last)/1000,.05):1/60;last=now;
    group.position.y+=(target-group.position.y)*(1-Math.exp(-12*dt));
    if(Math.abs(target-group.position.y)<.005){group.position.y=target;frame=0;last=0;draw();return;}
    draw();frame=requestAnimationFrame(tick);
  }
  function hover(active){
    target=active&&!motion.matches?rest+4:rest;
    if(motion.matches){cancelAnimationFrame(frame);frame=0;last=0;group.position.y=rest;draw();return;}
    if(!frame)frame=requestAnimationFrame(tick);
  }
  stage.addEventListener('pointermove',e=>{
    if(e.pointerType==='touch')return;
    const rect=canvas.getBoundingClientRect();
    pointer.set((e.clientX-rect.left)/rect.width*2-1,-(e.clientY-rect.top)/rect.height*2+1);
    // Test the resting silhouette so the lift cannot move out from under the pointer.
    const y=group.position.y;group.position.y=rest;group.updateMatrixWorld(true);camera.updateMatrixWorld(true);
    ray.setFromCamera(pointer,camera);const over=ray.intersectObject(group,true).length>0;
    group.position.y=y;group.updateMatrixWorld(true);hover(over);
  });
  stage.addEventListener('pointerleave',()=>hover(false));
  stage.addEventListener('focus',()=>hover(true));
  stage.addEventListener('blur',()=>hover(false));
  motion.addEventListener('change',()=>hover(false));
  document.addEventListener('visibilitychange',()=>{if(document.hidden)hover(false);});
}
