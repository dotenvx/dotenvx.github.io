// Direct manipulation only: rotation stops as soon as the pointer stops.
export function attachSlabControls(stage, group, draw, resetRotation) {
  let drag=null;
  stage.addEventListener('pointerdown',e=>{
    if(!e.isPrimary||e.button!==0||drag)return;
    drag={id:e.pointerId,x:e.clientX,y:e.clientY};
    stage.setPointerCapture(e.pointerId);
  });
  stage.addEventListener('pointermove',e=>{
    if(!drag||drag.id!==e.pointerId)return;
    group.rotation.y+=(e.clientX-drag.x)*.012;
    group.rotation.x+=(e.clientY-drag.y)*.012;
    drag={id:e.pointerId,x:e.clientX,y:e.clientY};draw();
  });
  for(const event of ['pointerup','pointercancel','lostpointercapture']){
    stage.addEventListener(event,e=>{if(drag?.id===e.pointerId)drag=null;});
  }
  stage.addEventListener('blur',()=>{drag=null;});
  stage.addEventListener('keydown',e=>{
    if(!['ArrowLeft','ArrowRight','ArrowUp','ArrowDown','Home'].includes(e.key))return;
    e.preventDefault();
    if(e.key==='Home')resetRotation();
    else{
      group.rotation.y+=e.key==='ArrowLeft'?-.15:e.key==='ArrowRight'?.15:0;
      group.rotation.x+=e.key==='ArrowUp'?-.15:e.key==='ArrowDown'?.15:0;
    }
    draw();
  });
}
