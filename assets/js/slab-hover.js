// Flip around the upright axis while keeping the token's original presentation tilt.
export function attachSlabHover(stage, group, draw) {
  const motion=matchMedia('(prefers-reduced-motion: reduce)');
  const front=group.rotation.y,restY=group.position.y;
  let pressTime=Infinity,pressStart=0;
  let hovered=false,focused=false,touched=false,frame=0,last=0;
  const target=()=>front+(hovered||focused||touched?Math.PI:0);
  function tick(now){
    frame=0;
    const dt=last?Math.min((now-last)/1000,.05):1/60;last=now;
    const end=target();
    group.rotation.y=motion.matches?end:group.rotation.y+(end-group.rotation.y)*(1-Math.exp(-9*dt));
    if(Math.abs(end-group.rotation.y)<.001)group.rotation.y=end;
    stage.dataset.side=group.rotation.y===front?'front':group.rotation.y===front+Math.PI?'back':'turning';
    pressTime+=dt;
    // A short downward press followed by a longer, monotonic release.
    const ease=t=>t*t*(3-2*t);
    let dip=0;
    if(!motion.matches&&pressTime<.16)dip=pressStart+(1.2-pressStart)*ease(pressTime/.16);
    else if(!motion.matches&&pressTime<1.36)dip=1.2*(1-ease((pressTime-.16)/1.2));
    group.position.y=restY-dip;
    stage.dataset.pressing=String(dip>0);
    draw();
    if(group.rotation.y!==end||(!motion.matches&&pressTime<1.36))frame=requestAnimationFrame(tick);else last=0;
  }
  function update(){
    stage.setAttribute('aria-pressed',String(hovered||focused||touched));
    if(!frame&&!document.hidden)frame=requestAnimationFrame(tick);
  }
  function press(){
    if(motion.matches)return;
    pressStart=restY-group.position.y;pressTime=0;update();
  }
  stage.addEventListener('click',press);
  stage.addEventListener('pointerenter',e=>{if(e.pointerType!=='touch'){hovered=true;update();}});
  stage.addEventListener('pointerleave',()=>{hovered=false;update();});
  stage.addEventListener('focus',()=>{focused=stage.matches(':focus-visible');update();});
  stage.addEventListener('blur',()=>{focused=false;touched=false;update();});
  stage.addEventListener('pointerup',e=>{if(e.pointerType==='touch'){touched=!touched;update();}});
  stage.addEventListener('keydown',e=>{
    if(e.key!=='Enter'&&e.key!==' ')return;
    e.preventDefault();if(!e.repeat)press();
  });
  motion.addEventListener('change',update);
  document.addEventListener('visibilitychange',()=>{
    if(document.hidden){cancelAnimationFrame(frame);frame=0;last=0;}else update();
  });
  stage.dataset.side='front';stage.setAttribute('aria-pressed','false');
}
