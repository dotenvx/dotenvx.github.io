// Shuffle only the sample directory; homepage identity stays unchanged.
document.querySelectorAll('[data-shuffle-members]').forEach(grid=>{
  const cards=[...grid.children];
  for(let i=cards.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[cards[i],cards[j]]=[cards[j],cards[i]];}
  grid.append(...cards);
});
// Hover or focus reveals a member's website; touch reveals first, then follows.
document.querySelectorAll('a.member-portrait-square').forEach(tile=>{
  let hover=false,focus=false,touch=false,lastPointer='';
  const update=()=>tile.dataset.revealed=String(hover||focus||touch);
  tile.addEventListener('pointerenter',e=>{if(e.pointerType!=='touch'){hover=true;update();}});
  tile.addEventListener('pointerleave',()=>{hover=false;update();});
  tile.addEventListener('pointerdown',e=>{lastPointer=e.pointerType;});
  tile.addEventListener('focus',()=>{focus=tile.matches(':focus-visible');update();});
  tile.addEventListener('blur',()=>{focus=false;touch=false;update();});
  tile.addEventListener('click',e=>{
    if((e.pointerType==='touch'||(e.detail>0&&lastPointer==='touch'))&&!touch){
      e.preventDefault();touch=true;update();
    }
  });
});

// Hover reveals the back; clicking swaps its portrait and full name.
function initializePhotoCard(tile){
  let hover=false, focus=false, pinned=false, showName=false, hasPhoto=true, press;
  const reducedMotion=window.matchMedia('(prefers-reduced-motion: reduce)');
  const back=tile.querySelector('.member-portrait-back');
  const update=()=>{
    const revealed=hover||focus||pinned;
    if(!revealed) showName=false;
    tile.dataset.revealed=String(revealed);
    tile.dataset.detail=(showName||!hasPhoto)?'name':'photo';
    tile.setAttribute('aria-pressed',String(showName));
  };
  tile.addEventListener('pointerenter',e=>{if(e.pointerType!=='touch'){hover=true;update();}});
  tile.addEventListener('pointerleave',()=>{hover=false;pinned=false;update();});
  tile.addEventListener('focus',()=>{focus=tile.matches(':focus-visible');update();});
  tile.addEventListener('blur',()=>{focus=false;pinned=false;update();});
  const img=tile.querySelector('.member-portrait-photo img');
  img?.addEventListener('error',()=>{hasPhoto=false;img.parentElement.hidden=true;update();});
  tile.addEventListener('click',()=>{
    // First touch turns the card over; subsequent taps change its content.
    if(tile.dataset.revealed!=='true'){pinned=true;update();return;}
    showName=!showName;
    update();
    press?.cancel();
    if(!reducedMotion.matches) press=back.animate([
      {transform:'rotateY(180deg) scale(1)'},
      {transform:'rotateY(180deg) scale(.96)',offset:.3},
      {transform:'rotateY(180deg) scale(1)'}
    ],{duration:360,easing:'cubic-bezier(.22,.65,.25,1)'});
  });
}
document.querySelectorAll('[data-photo-flip]').forEach(initializePhotoCard);

// A fresh, overlapping group of nine portraits from the directory response.
function populateMemberHero(members){
  const group=document.querySelector('[data-member-hero-portraits]');
  if(!group) return;
  const seen=new Set();
  const candidates=members.filter(member=>{
    try {
      const url=new URL(member.image);
      if(url.protocol!=='https:'||seen.has(url.href)) return false;
      seen.add(url.href);return true;
    } catch {return false;}
  });
  const inUse=new Set();
  const failed=new Set();
  const reducedMotion=window.matchMedia('(prefers-reduced-motion: reduce)');
  const positions=[[48,49,3.9],[46,16,2.5],[74,29,3.4],[88,59,2],[68,78,2.8],[39,87,2.1],[21,69,3.2],[24,35,2.8],[17,13,1.6]];
  const mirror=Math.random()<.5;
  const slots=Math.min(positions.length,candidates.length);
  const preload=member=>new Promise(resolve=>{
    const image=new Image();
    const finish=ok=>{clearTimeout(timer);image.onload=null;image.onerror=null;resolve(ok);};
    const timer=setTimeout(()=>finish(false),5000);
    image.onload=()=>finish(true);image.onerror=()=>finish(false);image.src=member.image;
  });
  for(let i=0;i<slots;i++){
    const button=document.createElement('button');
    button.type='button';button.className='member-hero-portrait';
    const image=document.createElement('img');
    image.width=64;image.height=64;image.decoding='async';
    button.append(image);
    const [x,y,size]=positions[i];
    button.style.left=`${(mirror?100-x:x)+(Math.random()-.5)*4}%`;
    button.style.top=`${y+(Math.random()-.5)*4}%`;
    button.style.setProperty('--portrait-size',`${size*(.95+Math.random()*.1)}rem`);
    button.style.setProperty('--portrait-angle',`${(Math.random()-.5)*16}deg`);
    button.style.zIndex=String(9-i);
    button.style.visibility='hidden';
    button.style.setProperty('--portrait-delay',`${Math.round(Math.random()*180)}ms`);
    button.style.setProperty('--portrait-entry-x',`${(Math.random()-.5)*12}px`);
    let current=null,busy=false;
    const replace=async()=>{
      if(busy) return;
      const available=candidates.filter(member=>!inUse.has(member.image)&&!failed.has(member.image));
      if(!available.length) return;
      busy=true;button.setAttribute('aria-disabled','true');
      if(current) button.classList.add('is-leaving');
      const exit=current&&!reducedMotion.matches?new Promise(resolve=>setTimeout(resolve,140)):Promise.resolve();
      let next=null;
      while(available.length){
        const member=available.splice(Math.floor(Math.random()*available.length),1)[0];
        if(inUse.has(member.image)||failed.has(member.image)) continue;
        inUse.add(member.image);
        if(await preload(member)){next=member;break;}
        inUse.delete(member.image);failed.add(member.image);
      }
      await exit;
      if(next){
        if(current) inUse.delete(current.image);
        image.alt=next.name.trim();image.src=next.image;
        button.setAttribute('aria-label',`${next.name.trim()} — show another member`);
        if(current) button.style.setProperty('--portrait-delay','0ms');
        current=next;button.style.visibility='';
      }
      button.classList.remove('is-leaving');
      if(current) button.classList.add('is-loaded');
      else button.remove();
      button.removeAttribute('aria-disabled');busy=false;
    };
    button.addEventListener('click',replace);
    group.append(button);replace();
  }
}

// Use the same Liquid partial as the homepage; API values are assigned as text.
document.querySelectorAll('[data-members-url]').forEach(async grid=>{
  const status=grid.parentElement.querySelector('.member-directory-status');
  const template=document.getElementById('professional-member-template');
  try {
    const response=await fetch(grid.dataset.membersUrl,{credentials:'omit',signal:AbortSignal.timeout(10000)});
    if(!response.ok) throw new Error('Members request failed');
    const members=await response.json();
    if(!Array.isArray(members)||members.some(member=>!member||typeof member.name!=='string'||!member.name.trim()||typeof member.initials!=='string'||!member.initials.trim())) throw new Error('Invalid members response');
    const fragment=document.createDocumentFragment();
    for(const member of members){
      const tile=template.content.firstElementChild.cloneNode(true);
      const name=member.name.trim();
      tile.setAttribute('aria-label',`${name} — show full name`);
      tile.querySelector('.member-portrait-initials').textContent=member.initials.trim();
      tile.querySelector('.member-portrait-name').textContent=name;
      const img=tile.querySelector('img');
      initializePhotoCard(tile);
      try {
        const url=new URL(member.image);
        if(url.protocol!=='https:') throw new Error('Invalid avatar URL');
        img.src=url.href;
      } catch {
        img.dispatchEvent(new Event('error'));
      }
      fragment.append(tile);
    }
    grid.replaceChildren(fragment);
    const heading=document.getElementById('member-people-heading');
    if(heading) heading.textContent=`${members.length.toLocaleString()} ${members.length===1?'Professional':'Professionals'}`;
    populateMemberHero(members);
    status.textContent=members.length?'':'No public members yet.';
    status.hidden=members.length>0;
  } catch {
    status.textContent='Members could not be loaded. Please refresh to try again.';
  } finally {
    grid.setAttribute('aria-busy','false');
  }
});
