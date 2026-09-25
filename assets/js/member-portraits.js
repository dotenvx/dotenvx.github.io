// Shuffle only the sample directory; homepage identity stays unchanged.
document.querySelectorAll('[data-shuffle-members]').forEach(grid=>{
  const cards=[...grid.children];
  for(let i=cards.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[cards[i],cards[j]]=[cards[j],cards[i]];}
  grid.append(...cards);
});
// Hover or focus reveals a member's website; touch reveals first, then follows.
function initializeWebsiteCard(tile){
  let hover=false,focus=false,touch=false,lastPointer='';
  const update=()=>{
    tile.dataset.revealed=String(hover||focus||touch);
    if(tile.tagName==='BUTTON') tile.setAttribute('aria-pressed',tile.dataset.revealed);
  };
  tile.addEventListener('pointerenter',e=>{if(e.pointerType!=='touch'){hover=true;update();}});
  tile.addEventListener('pointerleave',()=>{hover=false;if(tile.tagName==='BUTTON')touch=false;update();});
  tile.addEventListener('pointerdown',e=>{lastPointer=e.pointerType;});
  tile.addEventListener('focus',()=>{focus=tile.matches(':focus-visible');update();});
  tile.addEventListener('blur',()=>{focus=false;touch=false;update();});
  tile.addEventListener('click',e=>{
    if(tile.tagName==='BUTTON'){touch=!touch;update();return;}
    if((e.pointerType==='touch'||(e.detail>0&&lastPointer==='touch'))&&!touch){
      e.preventDefault();touch=true;update();
    }
  });
}
document.querySelectorAll('a.member-portrait-square').forEach(initializeWebsiteCard);

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

function publicWebsite(value){
  try {
    const url=new URL(value);
    if(!['https:','http:'].includes(url.protocol)||url.username||url.password) return null;
    const host=url.hostname.toLowerCase().replace(/^www\./,'');
    if(['example.com','example.org','example.net'].some(domain=>host===domain||host.endsWith('.'+domain))) return null;
    return url;
  } catch {return null;}
}

function initializeExecutiveDetails(tile,team,website){
  const button=tile.querySelector('.member-company-toggle');
  const back=tile.querySelector('.member-company-back');
  const photo=tile.querySelector('.member-company-owner-photo');
  const image=photo.querySelector('img');
  const name=tile.querySelector('.member-company-owner-name');
  const link=tile.querySelector('.member-company-website');
  const reducedMotion=window.matchMedia('(prefers-reduced-motion: reduce)');
  let steps=[];
  for(const owner of team.owners){
    try {const url=new URL(owner.image,location.href);if(url.protocol==='https:'||url.origin===location.origin)steps.push({kind:'photo',owner,url:url.href});}catch{}
    steps.push({kind:'name',owner});
  }
  if(website){
    steps.push({kind:'website'});link.href=website.href;
    link.textContent=website.hostname.replace(/^www\./,'');
    link.setAttribute('aria-label',`Visit ${team.name}`);
  }
  let index=0,hover=false,focus=false,pinned=false,press;
  const render=()=>{
    const revealed=hover||focus||pinned;
    if(!revealed)index=0;
    const step=steps[index];
    tile.dataset.revealed=String(revealed);tile.dataset.executiveDetail=step.kind;
    photo.hidden=step.kind!=='photo';name.hidden=step.kind!=='name';link.hidden=!revealed||step.kind!=='website';
    if(step.kind==='photo'&&image.getAttribute('src')!==step.url)image.src=step.url;
    if(step.kind==='name')name.textContent=step.owner.name.trim();
    const next=steps[(index+1)%steps.length];
    const detail=next.kind==='photo'?"owner photo":next.kind==='name'?"owner name":"website";
    const current=step.owner?step.owner.name.trim():website.hostname;
    button.setAttribute('aria-label',revealed?`${team.name} — ${current}. Show ${detail}`:`${team.name} — show owner details`);
  };
  image.addEventListener('error',()=>{
    if(steps[index]?.kind!=='photo')return;
    steps.splice(index,1);index%=steps.length;render();
  });
  tile.addEventListener('pointerenter',e=>{if(e.pointerType!=='touch'){hover=true;render();}});
  tile.addEventListener('pointerleave',()=>{hover=false;pinned=false;render();});
  tile.addEventListener('focusin',e=>{focus=e.target.matches(':focus-visible');render();});
  tile.addEventListener('focusout',e=>{if(!tile.contains(e.relatedTarget)){focus=false;pinned=false;render();}});
  button.addEventListener('click',()=>{
    if(tile.dataset.revealed!=='true'){pinned=true;render();return;}
    index=(index+1)%steps.length;render();press?.cancel();
    if(!reducedMotion.matches){
      press=back.animate([{transform:'rotateY(180deg) scale(1)'},{transform:'rotateY(180deg) scale(.96)',offset:.3},{transform:'rotateY(180deg) scale(1)'}],{duration:360,easing:'cubic-bezier(.22,.65,.25,1)'});
      const content=steps[index].kind==='photo'?photo:steps[index].kind==='website'?link:name;
      content.animate([{opacity:0,scale:'.86'},{opacity:1,scale:'1'}],{duration:260,easing:'cubic-bezier(.22,.65,.25,1)'});
    }
  });
  render();
}

document.querySelectorAll('[data-executive-owner]').forEach(tile=>{
  initializeExecutiveDetails(tile,{
    name:tile.dataset.teamName,
    owners:[{name:tile.dataset.executiveOwner,image:tile.dataset.ownerImage}]
  },publicWebsite(tile.dataset.teamUrl));
});

function populateExecutives(executives){
  const grid=document.querySelector('[data-executive-members]');
  if(!grid) return;
  const template=document.getElementById('executive-member-template');
  const teams=new Map();
  for(const member of executives){
    const team=member.team;
    if(!team||typeof team.name!=='string'||!team.name.trim()) continue;
    const name=team.name.trim();
    const key=name.normalize('NFKC').toLowerCase().replace(/\s+/g,' ');
    const existing=teams.get(key);
    if(!existing) teams.set(key,{...team,name,owners:[member]});
    else {
      if(!existing.owners.some(owner=>owner.name===member.name&&owner.image===member.image)) existing.owners.push(member);
      if(!publicWebsite(existing.url)&&publicWebsite(team.url)) existing.url=team.url;
      if(!existing.image&&team.image) existing.image=team.image;
    }
  }
  const fragment=document.createDocumentFragment();
  for(const team of teams.values()){
    const tile=template.content.firstElementChild.cloneNode(true);
    const website=publicWebsite(team.url);
    tile.querySelector('.member-company-initials').textContent=team.owners[0].initials.trim();
    const badge=tile.querySelector('.member-company-badge');
    badge.setAttribute('aria-label',team.name);
    const image=badge.querySelector('img');
    const fallback=()=>badge.remove();
    image.addEventListener('error',fallback);
    try {
      const url=new URL(team.image);
      if(url.protocol!=='https:'||/(^|\.)ui-avatars\.com$/.test(url.hostname)) throw new Error('No uploaded team logo');
      image.src=url.href;
    } catch {fallback();}
    initializeExecutiveDetails(tile,team,website);fragment.append(tile);
  }
  grid.replaceChildren(fragment);
  const status=document.querySelector('[data-executive-status]');
  status.textContent=teams.size?'':'No public teams yet.';status.hidden=teams.size>0;
}

// Use the same Liquid partial as the homepage; API values are assigned as text.
document.querySelectorAll('[data-members-url]').forEach(async grid=>{
  const status=grid.parentElement.querySelector('.member-directory-status');
  const template=document.getElementById('professional-member-template');
  try {
    const response=await fetch(grid.dataset.membersUrl,{credentials:'omit',signal:AbortSignal.timeout(10000)});
    if(!response.ok) throw new Error('Members request failed');
    const data=await response.json();
    if(!data||!Array.isArray(data.professional)||!Array.isArray(data.executive)) throw new Error('Invalid members response');
    const members=data.professional;
    const allMembers=[...members,...data.executive];
    if(allMembers.some(member=>!member||typeof member.name!=='string'||!member.name.trim()||typeof member.initials!=='string'||!member.initials.trim())) throw new Error('Invalid members response');
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
      if(member.team?.image){
        try {
          const url=new URL(member.team.image);
          if(url.protocol==='https:'&&!/(^|\.)ui-avatars\.com$/.test(url.hostname)){
            const badge=document.createElement('span');
            badge.className='member-professional-badge';
            const logo=document.createElement('img');
            logo.alt=member.team.name||'';logo.loading='lazy';
            logo.addEventListener('error',()=>badge.remove());
            logo.src=url.href;badge.append(logo);
            tile.querySelector('.member-portrait-initials').append(badge);
          }
        } catch {}
      }
      fragment.append(tile);
    }
    grid.replaceChildren(fragment);
    populateMemberHero(allMembers);
    populateExecutives(data.executive);
    status.textContent=members.length?'':'No public members yet.';
    status.hidden=members.length>0;
  } catch {
    status.textContent='Members could not be loaded. Please refresh to try again.';
    const executiveStatus=document.querySelector('[data-executive-status]');
    if(executiveStatus) executiveStatus.textContent='Teams could not be loaded. Please refresh to try again.';
  } finally {
    grid.setAttribute('aria-busy','false');
    document.querySelector('[data-executive-members]')?.setAttribute('aria-busy','false');
  }
});
