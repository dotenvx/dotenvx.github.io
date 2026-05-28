---
title: Open Source
permalink: /open-source/
---

<style>
  .os-artifact-card::after {
    background: linear-gradient(90deg, rgba(255,255,255,0.01) 0%, rgba(255,255,255,0.035) 20%, rgba(236,213,63,0.12) 50%, rgba(255,255,255,0.035) 80%, rgba(255,255,255,0.01) 100%);
    bottom: 0;
    content: "";
    height: 1px;
    left: 0;
    pointer-events: none;
    position: absolute;
    right: 0;
  }

  .os-artifact-window {
    position: relative;
  }

  .os-artifact-window::after {
    background:
      linear-gradient(rgba(236,213,63,0.34), rgba(236,213,63,0.34)) left top / 1.15rem 1px no-repeat,
      linear-gradient(rgba(236,213,63,0.34), rgba(236,213,63,0.34)) right top / 1.15rem 1px no-repeat,
      linear-gradient(rgba(236,213,63,0.2), rgba(236,213,63,0.2)) left bottom / 1.15rem 1px no-repeat,
      linear-gradient(rgba(236,213,63,0.2), rgba(236,213,63,0.2)) right bottom / 1.15rem 1px no-repeat,
      linear-gradient(rgba(236,213,63,0.34), rgba(236,213,63,0.34)) left top / 1px 1.15rem no-repeat,
      linear-gradient(rgba(236,213,63,0.34), rgba(236,213,63,0.34)) right top / 1px 1.15rem no-repeat,
      linear-gradient(rgba(236,213,63,0.2), rgba(236,213,63,0.2)) left bottom / 1px 1.15rem no-repeat,
      linear-gradient(rgba(236,213,63,0.2), rgba(236,213,63,0.2)) right bottom / 1px 1.15rem no-repeat;
    content: "";
    inset: 0.55rem;
    opacity: 0.75;
    pointer-events: none;
    position: absolute;
    transition: opacity 200ms ease;
  }

  .os-artifact-card:hover .os-artifact-window::after {
    opacity: 1;
  }

  .os-keysee-tile {
    cursor: grab;
    touch-action: none;
  }

  .os-keysee-tile:active {
    cursor: grabbing;
  }

  .os-keysee-canvas {
    height: 100% !important;
    inset: 0;
    opacity: 0;
    position: absolute;
    transform: scale(0.98);
    transition: opacity 180ms ease, transform 220ms ease;
    width: 100% !important;
  }

  .os-keysee-tile[data-keysee-active="true"] .os-keysee-canvas {
    opacity: 1;
    transform: scale(1);
  }
</style>

<section class="mx-auto w-full max-w-4xl px-5 pt-8 pb-14 md:pt-12 md:pb-20">
  <div class="grid items-center gap-10 md:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] md:gap-8">
    <div>
      <h1 class="pb-2 font-canela text-[2.9rem] font-normal leading-[0.98] tracking-[-0.018em] text-zinc-100 md:text-[3.65rem] lg:text-[4.25rem]">Open Source</h1>
      <p class="mt-8 max-w-2xl text-xl leading-relaxed text-zinc-400 md:text-2xl">Our open work and contributions to the community.</p>
    </div>
    <div
      class="os-keysee-tile relative min-h-[17rem] overflow-hidden rounded-lg bg-transparent md:min-h-[23rem]"
      data-open-source-keysee
      data-keysee-public-key="025ba50c55b823bcb7841fe43643fe827ef74c183b2544040943aa5856c7c39646"
    >
      <div class="absolute inset-0" data-keysee-viewer></div>
    </div>
  </div>
</section>

<section class="mx-auto w-full max-w-7xl px-5 pb-28 md:pb-36">
  <div class="relative mx-auto max-w-4xl overflow-hidden rounded-lg border border-zinc-800/70 bg-black/20">
    <div class="pointer-events-none absolute inset-x-0 top-0 h-px bg-[linear-gradient(90deg,rgba(255,255,255,0.01)_0%,rgba(255,255,255,0.04)_20%,rgba(236,213,63,0.22)_50%,rgba(255,255,255,0.04)_80%,rgba(255,255,255,0.01)_100%)]" aria-hidden="true"></div>
    <div class="pointer-events-none absolute left-1/2 top-0 h-10 w-[42%] -translate-x-1/2 bg-[radial-gradient(ellipse_at_top,rgba(236,213,63,0.075)_0%,rgba(236,213,63,0.03)_36%,rgba(0,0,0,0)_74%)] blur-[1px]" aria-hidden="true"></div>
    <div class="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-[linear-gradient(90deg,rgba(255,255,255,0.01)_0%,rgba(255,255,255,0.04)_20%,rgba(236,213,63,0.16)_50%,rgba(255,255,255,0.04)_80%,rgba(255,255,255,0.01)_100%)]" aria-hidden="true"></div>
    <div class="pointer-events-none absolute left-1/2 bottom-0 h-10 w-[38%] -translate-x-1/2 bg-[radial-gradient(ellipse_at_bottom,rgba(236,213,63,0.055)_0%,rgba(236,213,63,0.022)_36%,rgba(0,0,0,0)_74%)] blur-[1px]" aria-hidden="true"></div>

    <div class="grid grid-cols-[6.5rem_1fr_auto] gap-4 border-b border-zinc-900 px-5 py-3 font-mono text-[0.64rem] font-normal uppercase tracking-[0.16em] text-zinc-600 md:grid-cols-[8rem_1fr_7rem_2rem] md:px-7">
      <span>Project</span>
      <span>Purpose</span>
      <span class="hidden text-right md:block" aria-hidden="true"></span>
      <span class="sr-only">Open</span>
    </div>

    <a href="https://github.com/motdotla/dotenv" target="_blank" rel="noopener noreferrer" class="group grid gap-3 border-b border-zinc-900 px-5 py-5 no-underline transition-colors duration-200 hover:bg-zinc-950/60 hover:no-underline md:grid-cols-[8rem_1fr_7rem_2rem] md:items-center md:px-7">
      <span class="font-mono text-xs font-normal text-zinc-500">dotenv</span>
      <span class="text-sm font-normal leading-6 text-zinc-600 transition-colors duration-200 group-hover:text-zinc-500">Load environment variables from .env files.</span>
      <span class="font-mono text-xs font-normal text-zinc-700 transition-colors duration-200 group-hover:text-zinc-500 md:text-right">20.4k ★</span>
      <span aria-hidden="true" class="text-right text-base font-normal leading-none text-zinc-700 transition-colors duration-200 group-hover:text-zinc-500">›</span>
    </a>

    <a href="https://github.com/motdotla/dotenv-expand" target="_blank" rel="noopener noreferrer" class="group grid gap-3 border-b border-zinc-900 px-5 py-5 no-underline transition-colors duration-200 hover:bg-zinc-950/60 hover:no-underline md:grid-cols-[8rem_1fr_7rem_2rem] md:items-center md:px-7">
      <span class="font-mono text-xs font-normal text-zinc-500">dotenv-expand</span>
      <span class="text-sm font-normal leading-6 text-zinc-600 transition-colors duration-200 group-hover:text-zinc-500">Expand variables already loaded from .env files.</span>
      <span class="font-mono text-xs font-normal text-zinc-700 transition-colors duration-200 group-hover:text-zinc-500 md:text-right">1.1k ★</span>
      <span aria-hidden="true" class="text-right text-base font-normal leading-none text-zinc-700 transition-colors duration-200 group-hover:text-zinc-500">›</span>
    </a>

    <a href="https://github.com/dotenvx/dotenvx" target="_blank" rel="noopener noreferrer" class="group relative grid gap-3 border-b border-zinc-900 px-5 py-5 no-underline transition-colors duration-200 hover:bg-zinc-950/60 hover:no-underline md:grid-cols-[8rem_1fr_7rem_2rem] md:items-center md:px-7">
      <span class="font-mono text-xs font-normal text-zinc-500">dotenvx</span>
      <span class="text-sm font-normal leading-6 text-zinc-500 transition-colors duration-200 group-hover:text-zinc-400">Encrypt .env files and run them anywhere.</span>
      <span class="font-mono text-xs font-normal text-zinc-700 transition-colors duration-200 group-hover:text-zinc-500 md:text-right">5.5k ★</span>
      <span aria-hidden="true" class="text-right text-base font-normal leading-none text-zinc-700 transition-colors duration-200 group-hover:text-zinc-500">›</span>
    </a>

    <a href="https://keysee.io" target="_blank" rel="noopener noreferrer" class="group grid gap-3 border-b border-zinc-900 px-5 py-5 no-underline transition-colors duration-200 hover:bg-zinc-950/60 hover:no-underline md:grid-cols-[8rem_1fr_7rem_2rem] md:items-center md:px-7">
      <span class="font-mono text-xs font-normal text-zinc-500">KEYSEE⎔</span>
      <span class="text-sm font-normal leading-6 text-zinc-600 transition-colors duration-200 group-hover:text-zinc-500">Visual fingerprints for public keys.</span>
      <span aria-hidden="true" class="hidden md:block"></span>
      <span aria-hidden="true" class="text-right text-base font-normal leading-none text-zinc-700 transition-colors duration-200 group-hover:text-zinc-500">›</span>
    </a>

    <a href="https://github.com/vestauth/vestauth" target="_blank" rel="noopener noreferrer" class="group grid gap-3 border-b border-zinc-900 px-5 py-5 no-underline transition-colors duration-200 hover:bg-zinc-950/60 hover:no-underline md:grid-cols-[8rem_1fr_7rem_2rem] md:items-center md:px-7">
      <span class="font-mono text-xs font-normal text-zinc-500">vestauth</span>
      <span class="text-sm font-normal leading-6 text-zinc-600 transition-colors duration-200 group-hover:text-zinc-500">Verifiable identity and authentication for autonomous software.</span>
      <span class="font-mono text-xs font-normal text-zinc-700 transition-colors duration-200 group-hover:text-zinc-500 md:text-right">139 ★</span>
      <span aria-hidden="true" class="text-right text-base font-normal leading-none text-zinc-700 transition-colors duration-200 group-hover:text-zinc-500">›</span>
    </a>

    <a href="https://github.com/dotenvx/llmstxt" target="_blank" rel="noopener noreferrer" class="group grid gap-3 px-5 py-5 no-underline transition-colors duration-200 hover:bg-zinc-950/60 hover:no-underline md:grid-cols-[8rem_1fr_7rem_2rem] md:items-center md:px-7">
      <span class="font-mono text-xs font-normal text-zinc-500">llmstxt</span>
      <span class="text-sm font-normal leading-6 text-zinc-600 transition-colors duration-200 group-hover:text-zinc-500">Convert sitemap.xml to llms.txt.</span>
      <span class="font-mono text-xs font-normal text-zinc-700 transition-colors duration-200 group-hover:text-zinc-500 md:text-right">145 ★</span>
      <span aria-hidden="true" class="text-right text-base font-normal leading-none text-zinc-700 transition-colors duration-200 group-hover:text-zinc-500">›</span>
    </a>
  </div>
</section>

<script type="module">
  import * as THREE from 'https://unpkg.com/three@0.167.1/build/three.module.js';

  const tile = document.querySelector('[data-open-source-keysee]:not([data-keysee-mounted])');

  if (tile && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    tile.dataset.keyseeMounted = 'true';

    const publicKey = tile.dataset.keyseePublicKey;
    const viewer = tile.querySelector('[data-keysee-viewer]');
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(42, 1, 0.01, 100);
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true, premultipliedAlpha: false });
    const material = new THREE.MeshStandardMaterial({
      color: 0xaeaaa0,
      metalness: 0.78,
      roughness: 0.38,
      side: THREE.FrontSide
    });

    let keyGroup;
    let keyMesh;
    let animationFrame;
    let dragging = false;
    let dragPointerId = null;
    let lastPointerX = 0;
    let lastPointerY = 0;
    const angularVelocity = new THREE.Vector2(0.003, 0);
    const pointer = new THREE.Vector2();
    const raycaster = new THREE.Raycaster();

    renderer.setClearColor(0x000000, 0);
    renderer.setClearAlpha(0);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
    renderer.shadowMap.enabled = true;
    renderer.domElement.className = 'os-keysee-canvas';
    viewer.appendChild(renderer.domElement);

    scene.add(new THREE.HemisphereLight(0xe8f0ea, 0x242a27, 2.4));

    const keyLight = new THREE.DirectionalLight(0xffffff, 3);
    keyLight.position.set(3, -4, 4);
    keyLight.castShadow = true;
    scene.add(keyLight);

    const fillLight = new THREE.DirectionalLight(0xb7d4ff, 1.2);
    fillLight.position.set(-4, 2, 2);
    scene.add(fillLight);

    const resize = () => {
      const rect = tile.getBoundingClientRect();
      const size = Math.max(1, Math.floor(Math.min(rect.width, rect.height)));
      renderer.setSize(size, size, false);
      camera.aspect = 1;
      camera.updateProjectionMatrix();
    };

    const geometryFromPayload = (payload) => {
      const geometry = new THREE.BufferGeometry();

      for (const [name, attribute] of Object.entries(payload.attributes)) {
        geometry.setAttribute(name, new THREE.BufferAttribute(new Float32Array(attribute.array), attribute.itemSize));
      }

      if (payload.index) {
        const indexArray = payload.index.length > 65535 ? new Uint32Array(payload.index) : new Uint16Array(payload.index);
        geometry.setIndex(new THREE.BufferAttribute(indexArray, 1));
      }

      geometry.computeBoundingBox();
      geometry.computeBoundingSphere();
      return geometry;
    };

    const markTexture = (textTop, textBottom, fontSize = 70, mirror = false) => {
      const canvas = document.createElement('canvas');
      canvas.width = 256;
      canvas.height = 320;
      const ctx = canvas.getContext('2d');
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = 'hsla(41, 8%, 47%, 0.72)';
      ctx.lineJoin = 'round';
      ctx.font = `700 ${fontSize}px ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace`;
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';

      if (mirror) {
        ctx.translate(canvas.width, 0);
        ctx.scale(-1, 1);
      }

      if (textBottom) {
        ctx.fillText(textTop, canvas.width / 2, 105);
        ctx.fillText(textBottom, canvas.width / 2, 215);
      } else {
        ctx.fillText(textTop, canvas.width / 2, canvas.height / 2);
      }

      const texture = new THREE.CanvasTexture(canvas);
      texture.anisotropy = renderer.capabilities.getMaxAnisotropy();
      return texture;
    };

    const markPlane = (mark, side, texture) => {
      const markMaterial = new THREE.MeshBasicMaterial({
        map: texture,
        transparent: true,
        side,
        depthTest: true,
        depthWrite: false,
        polygonOffset: true,
        polygonOffsetFactor: -4,
        polygonOffsetUnits: -4
      });
      const plane = new THREE.Mesh(new THREE.PlaneGeometry(mark.width, mark.height), markMaterial);
      plane.position.set(mark.x, mark.y, mark.z);
      plane.renderOrder = 7;
      return plane;
    };

    const makeKeyMarks = (marks) => {
      const group = new THREE.Group();
      group.add(markPlane(marks.front, THREE.FrontSide, markTexture(marks.front.top, marks.front.bottom, marks.front.fontSize)));
      group.add(markPlane(marks.back, THREE.BackSide, markTexture(marks.back.text, '', marks.back.fontSize, marks.back.mirror)));
      return group;
    };

    const positionCamera = (center, distance, size) => {
      camera.position.set(center.x, center.y, center.z + distance);
      camera.near = Math.max(Math.min(distance, size) / 100, 0.01);
      camera.far = Math.max(distance + size * 2, distance * 100);
      camera.lookAt(center);
      camera.updateProjectionMatrix();
    };

    const projectedBoxSize = (box, center, distance) => {
      const size = box.getSize(new THREE.Vector3()).length();
      positionCamera(center, distance, size);

      const points = [
        new THREE.Vector3(box.min.x, box.min.y, box.min.z),
        new THREE.Vector3(box.min.x, box.min.y, box.max.z),
        new THREE.Vector3(box.min.x, box.max.y, box.min.z),
        new THREE.Vector3(box.min.x, box.max.y, box.max.z),
        new THREE.Vector3(box.max.x, box.min.y, box.min.z),
        new THREE.Vector3(box.max.x, box.min.y, box.max.z),
        new THREE.Vector3(box.max.x, box.max.y, box.min.z),
        new THREE.Vector3(box.max.x, box.max.y, box.max.z)
      ].map((point) => point.project(camera));
      const xs = points.map((point) => point.x);
      const ys = points.map((point) => point.y);

      return Math.max(Math.max(...xs) - Math.min(...xs), Math.max(...ys) - Math.min(...ys));
    };

    const frameKeyMesh = () => {
      const box = new THREE.Box3().setFromObject(keyMesh);
      const center = box.getCenter(new THREE.Vector3());
      const size = box.getSize(new THREE.Vector3());
      const maxSize = Math.max(size.x, size.y, size.z);
      const targetProjectedSize = 2 / 1.15;
      let nearDistance = Math.max(maxSize / 100, 0.01);
      let farDistance = Math.max(maxSize, 1);

      while (projectedBoxSize(box, center, farDistance) > targetProjectedSize) {
        farDistance *= 2;
      }

      for (let index = 0; index < 24; index++) {
        const distance = (nearDistance + farDistance) / 2;
        if (projectedBoxSize(box, center, distance) > targetProjectedSize) {
          nearDistance = distance;
        } else {
          farDistance = distance;
        }
      }

      positionCamera(center, farDistance, maxSize);
    };

    const animate = () => {
      if (!keyGroup) return;

      if (!dragging) {
        keyGroup.rotation.y += angularVelocity.x;
        keyGroup.rotation.x += angularVelocity.y;
        angularVelocity.multiplyScalar(0.965);
        if (Math.abs(angularVelocity.x) < 0.003) angularVelocity.x = 0.003;
        if (Math.abs(angularVelocity.y) < 0.0006) angularVelocity.y = 0;
      }

      renderer.render(scene, camera);
      animationFrame = window.requestAnimationFrame(animate);
    };

    const clamp = (value, min, max) => Math.max(min, Math.min(max, value));

    const spinFromPointerDelta = (dx, dy) => {
      if (!keyGroup) return;
      const poleSpin = clamp(dx * 0.012, -0.55, 0.55);
      const tumbleSpin = clamp(dy * 0.007, -0.32, 0.32);
      keyGroup.rotation.y += poleSpin;
      keyGroup.rotation.x += tumbleSpin;
      angularVelocity.set(poleSpin, tumbleSpin);
    };

    const keyWasTapped = (event) => {
      if (!keyMesh) return false;
      const rect = tile.getBoundingClientRect();
      pointer.x = ((event.clientX - rect.left) / Math.max(rect.width, 1)) * 2 - 1;
      pointer.y = -((event.clientY - rect.top) / Math.max(rect.height, 1)) * 2 + 1;
      raycaster.setFromCamera(pointer, camera);
      return raycaster.intersectObject(keyMesh, false).length > 0;
    };

    const pointerStart = (event) => {
      if (!keyGroup || (event.pointerType === 'mouse' && event.button !== 0)) return;
      dragging = true;
      dragPointerId = event.pointerId;
      lastPointerX = event.clientX;
      lastPointerY = event.clientY;
      if (tile.setPointerCapture) tile.setPointerCapture(event.pointerId);
      event.preventDefault();
    };

    const pointerMove = (event) => {
      if (!dragging || dragPointerId !== event.pointerId) return;
      const deltaX = event.clientX - lastPointerX;
      const deltaY = event.clientY - lastPointerY;
      lastPointerX = event.clientX;
      lastPointerY = event.clientY;
      spinFromPointerDelta(deltaX, deltaY);
      event.preventDefault();
    };

    const pointerEnd = (event) => {
      if (!dragging || dragPointerId !== event.pointerId) return;
      dragging = false;
      dragPointerId = null;
      if (tile.hasPointerCapture?.(event.pointerId)) tile.releasePointerCapture(event.pointerId);

      if (keyWasTapped(event)) {
        keyGroup.rotation.set(0, 0, 0);
        angularVelocity.set(0.003, 0);
      }
    };

    tile.addEventListener('pointerdown', pointerStart);
    tile.addEventListener('pointermove', pointerMove);
    tile.addEventListener('pointerup', pointerEnd);
    tile.addEventListener('pointercancel', pointerEnd);
    window.addEventListener('resize', resize);

    resize();

    fetch(`https://keysee.dotenvx.com/api/${encodeURIComponent(publicKey)}.json`)
      .then((response) => {
        if (!response.ok) throw new Error(`KEYSEE JSON failed: HTTP ${response.status}`);
        return response.json();
      })
      .then((payload) => {
        keyGroup = new THREE.Group();
        keyMesh = new THREE.Mesh(geometryFromPayload(payload.geometry), material);
        keyMesh.castShadow = true;
        keyMesh.receiveShadow = true;
        keyGroup.add(keyMesh);
        keyGroup.add(makeKeyMarks(payload.marks));
        scene.add(keyGroup);
        frameKeyMesh();
        tile.dataset.keyseeActive = 'true';
        animate();
      })
      .catch((error) => {
        console.error(error);
        if (animationFrame) window.cancelAnimationFrame(animationFrame);
      });
  }
</script>

<section class="mx-auto w-full max-w-7xl px-5 pb-28 md:pb-36">
  <div class="relative mx-auto max-w-4xl">
    <h2 class="text-4xl font-normal tracking-[-0.02em] text-zinc-100 md:text-5xl">Published Work</h2>
    <p class="mt-4 max-w-4xl text-base leading-7 text-zinc-500 md:text-lg">Technical papers and presentations from our work on secrets, cryptography, and identity.</p>
  </div>

  <div class="relative mx-auto mt-12 max-w-4xl overflow-hidden rounded-lg border border-zinc-800/70 bg-black/20">
    <div class="pointer-events-none absolute inset-x-0 top-0 h-px bg-[linear-gradient(90deg,rgba(255,255,255,0.01)_0%,rgba(255,255,255,0.04)_20%,rgba(236,213,63,0.22)_50%,rgba(255,255,255,0.04)_80%,rgba(255,255,255,0.01)_100%)]" aria-hidden="true"></div>
    <div class="pointer-events-none absolute left-1/2 top-0 h-10 w-[42%] -translate-x-1/2 bg-[radial-gradient(ellipse_at_top,rgba(236,213,63,0.075)_0%,rgba(236,213,63,0.03)_36%,rgba(0,0,0,0)_74%)] blur-[1px]" aria-hidden="true"></div>
    <div class="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-[linear-gradient(90deg,rgba(255,255,255,0.01)_0%,rgba(255,255,255,0.04)_20%,rgba(236,213,63,0.16)_50%,rgba(255,255,255,0.04)_80%,rgba(255,255,255,0.01)_100%)]" aria-hidden="true"></div>

    <div class="grid grid-cols-[4.25rem_1fr_auto] gap-4 border-b border-zinc-900 px-5 py-3 font-mono text-[0.64rem] font-normal uppercase tracking-[0.16em] text-zinc-600 md:grid-cols-[5.5rem_1fr_7rem_2rem] md:px-7">
      <span>File</span>
      <span>Title</span>
      <span class="hidden text-right md:block">Format</span>
      <span class="sr-only">Open</span>
    </div>

    <a href="https://dotenvx.com/whitepaper.pdf" target="_blank" rel="noopener noreferrer" class="group grid gap-4 border-b border-zinc-900 px-5 py-4 no-underline transition-colors duration-200 hover:bg-zinc-950/60 hover:no-underline md:grid-cols-[5.5rem_1fr_7rem_2rem] md:items-center md:px-7">
      <span class="flex h-16 w-12 items-center justify-center overflow-hidden rounded border border-zinc-900 bg-black/70">
        <img src="https://dotenvx.com/assets/img/whitepaper-thumb.png" alt="" aria-hidden="true" class="h-full w-full object-cover opacity-75 transition duration-200 group-hover:opacity-95" loading="lazy">
      </span>
      <span class="text-sm font-normal leading-6 text-zinc-500 transition-colors duration-200 group-hover:text-zinc-400">Dotenvx: Reducing Secrets Risk with Cryptographic Separation</span>
      <span class="font-mono text-xs font-normal text-zinc-700 transition-colors duration-200 group-hover:text-zinc-500 md:text-right">PDF</span>
      <span aria-hidden="true" class="text-right text-base font-normal leading-none text-zinc-700 transition-colors duration-200 group-hover:text-zinc-500">›</span>
    </a>

    <a href="https://keysee.io/whitepaper.pdf" target="_blank" rel="noopener noreferrer" class="group grid gap-4 px-5 py-4 no-underline transition-colors duration-200 hover:bg-zinc-950/60 hover:no-underline md:grid-cols-[5.5rem_1fr_7rem_2rem] md:items-center md:px-7">
      <span class="flex h-16 w-12 items-center justify-center overflow-hidden rounded border border-zinc-900 bg-black/70">
        <img src="https://keysee.io/whitepaper.png" alt="" aria-hidden="true" class="h-full w-full object-cover opacity-75 transition duration-200 group-hover:opacity-95" loading="lazy">
      </span>
      <span class="text-sm font-normal leading-6 text-zinc-500 transition-colors duration-200 group-hover:text-zinc-400">KEYSEE⎔: Deterministic Visual Identity for Public Keys</span>
      <span class="font-mono text-xs font-normal text-zinc-700 transition-colors duration-200 group-hover:text-zinc-500 md:text-right">PDF</span>
      <span aria-hidden="true" class="text-right text-base font-normal leading-none text-zinc-700 transition-colors duration-200 group-hover:text-zinc-500">›</span>
    </a>
  </div>
</section>

<section class="mx-auto w-full max-w-7xl px-5 pb-24 md:pb-32">
  <div class="relative mx-auto max-w-4xl">
    <h2 class="text-4xl font-normal tracking-[-0.02em] text-zinc-100 md:text-5xl">Talks</h2>
    <p class="mt-4 max-w-4xl text-base leading-7 text-zinc-500 md:text-lg">Conference talks and presentations from our work on application configuration.</p>
  </div>

  <div class="relative mx-auto mt-12 max-w-4xl overflow-hidden rounded-lg border border-zinc-800/70 bg-black/20">
    <div class="pointer-events-none absolute inset-x-0 top-0 h-px bg-[linear-gradient(90deg,rgba(255,255,255,0.01)_0%,rgba(255,255,255,0.04)_20%,rgba(236,213,63,0.22)_50%,rgba(255,255,255,0.04)_80%,rgba(255,255,255,0.01)_100%)]" aria-hidden="true"></div>
    <div class="pointer-events-none absolute left-1/2 top-0 h-10 w-[42%] -translate-x-1/2 bg-[radial-gradient(ellipse_at_top,rgba(236,213,63,0.075)_0%,rgba(236,213,63,0.03)_36%,rgba(0,0,0,0)_74%)] blur-[1px]" aria-hidden="true"></div>
    <div class="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-[linear-gradient(90deg,rgba(255,255,255,0.01)_0%,rgba(255,255,255,0.04)_20%,rgba(236,213,63,0.16)_50%,rgba(255,255,255,0.04)_80%,rgba(255,255,255,0.01)_100%)]" aria-hidden="true"></div>

    <div class="grid grid-cols-[4.25rem_1fr_auto] gap-4 border-b border-zinc-900 px-5 py-3 font-mono text-[0.64rem] font-normal uppercase tracking-[0.16em] text-zinc-600 md:grid-cols-[5.5rem_1fr_7rem_2rem] md:px-7">
      <span>Video</span>
      <span>Title</span>
      <span class="hidden text-right md:block">Venue</span>
      <span class="sr-only">Open</span>
    </div>

    <a href="https://www.youtube.com/watch?v=BCKGvKTk3cU&t=3205s" target="_blank" rel="noopener noreferrer" class="group grid gap-4 px-5 py-4 no-underline transition-colors duration-200 hover:bg-zinc-950/60 hover:no-underline md:grid-cols-[5.5rem_1fr_7rem_2rem] md:items-center md:px-7">
      <span class="flex h-12 w-16 items-center justify-center overflow-hidden rounded border border-zinc-900 bg-black/70">
        <img src="/assets/img/laruby-thumb.png" alt="" aria-hidden="true" class="h-full w-full object-cover opacity-75 transition duration-200 group-hover:opacity-95" loading="lazy">
      </span>
      <span class="text-sm font-normal leading-6 text-zinc-500 transition-colors duration-200 group-hover:text-zinc-400">The Dark Ages of App Configuration</span>
      <span class="font-mono text-xs font-normal text-zinc-700 transition-colors duration-200 group-hover:text-zinc-500 md:text-right">SF Ruby</span>
      <span aria-hidden="true" class="text-right text-base font-normal leading-none text-zinc-700 transition-colors duration-200 group-hover:text-zinc-500">›</span>
    </a>
  </div>
</section>

<section class="mx-auto w-full max-w-7xl px-5 pb-24 md:pb-32">
  <div class="relative pt-16 md:pt-20">
    <div class="relative mx-auto max-w-4xl">
      <h2 class="text-4xl font-normal tracking-[-0.02em] text-zinc-100 md:text-5xl">Sponsorship</h2>
      <p class="mt-4 max-w-2xl text-base leading-7 text-zinc-500 md:text-lg">Our financial contributions to the community through direct sponsorship.</p>
    </div>

    <div class="relative mx-auto mt-14 max-w-4xl overflow-hidden rounded-lg border border-zinc-800/70 bg-black/20">
      <div class="pointer-events-none absolute inset-x-0 top-0 h-px bg-[linear-gradient(90deg,rgba(255,255,255,0.01)_0%,rgba(255,255,255,0.04)_20%,rgba(236,213,63,0.22)_50%,rgba(255,255,255,0.04)_80%,rgba(255,255,255,0.01)_100%)]" aria-hidden="true"></div>
      <div class="pointer-events-none absolute left-1/2 top-0 h-10 w-[42%] -translate-x-1/2 bg-[radial-gradient(ellipse_at_top,rgba(236,213,63,0.075)_0%,rgba(236,213,63,0.03)_36%,rgba(0,0,0,0)_74%)] blur-[1px]" aria-hidden="true"></div>
      <div class="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-[linear-gradient(90deg,rgba(255,255,255,0.01)_0%,rgba(255,255,255,0.04)_20%,rgba(236,213,63,0.16)_50%,rgba(255,255,255,0.04)_80%,rgba(255,255,255,0.01)_100%)]" aria-hidden="true"></div>

      <div class="grid grid-cols-[4.25rem_1fr_auto] gap-4 border-b border-zinc-900 px-5 py-3 font-mono text-[0.64rem] font-normal uppercase tracking-[0.16em] text-zinc-600 md:grid-cols-[5.5rem_1fr_8rem_2rem] md:px-7">
        <span>Project</span>
        <span>Repository</span>
        <span class="hidden text-right md:block">Maintainer</span>
        <span class="sr-only">Open</span>
      </div>

      <a href="https://github.com/yao-pkg/pkg" target="_blank" rel="noopener noreferrer" class="group grid gap-4 border-b border-zinc-900 px-5 py-4 no-underline transition-colors duration-200 hover:bg-zinc-950/60 hover:no-underline md:grid-cols-[5.5rem_1fr_8rem_2rem] md:items-center md:px-7">
        <span class="flex h-12 w-12 items-center justify-center overflow-hidden rounded border border-zinc-900 bg-black/70">
          <img src="https://opengraph.githubassets.com/ac3f8d5cf843f6baa1eafd2ea05edaceecb4be06ecb2ec9cc7c56db954b66d29/yao-pkg/pkg" alt="" aria-hidden="true" class="h-full w-full object-cover opacity-75 transition duration-200 group-hover:opacity-95" loading="lazy">
        </span>
        <span class="font-mono text-xs font-normal text-zinc-500 transition-colors duration-200 group-hover:text-zinc-400">yao-pkg/pkg</span>
        <span class="font-mono text-xs font-normal text-zinc-700 transition-colors duration-200 group-hover:text-zinc-500 md:text-right">@robertsLando</span>
        <span aria-hidden="true" class="text-right text-base font-normal leading-none text-zinc-700 transition-colors duration-200 group-hover:text-zinc-500">›</span>
      </a>

      <a href="https://github.com/ecies/js" target="_blank" rel="noopener noreferrer" class="group grid gap-4 border-b border-zinc-900 px-5 py-4 no-underline transition-colors duration-200 hover:bg-zinc-950/60 hover:no-underline md:grid-cols-[5.5rem_1fr_8rem_2rem] md:items-center md:px-7">
        <span class="flex h-12 w-12 items-center justify-center overflow-hidden rounded border border-zinc-900 bg-black/70">
          <img src="https://opengraph.githubassets.com/f730c56355f8b9ff50160668f1de9cbfe60d26642abe0430ddd86442f25603db/ecies/js" alt="" aria-hidden="true" class="h-full w-full object-cover opacity-75 transition duration-200 group-hover:opacity-95" loading="lazy">
        </span>
        <span class="font-mono text-xs font-normal text-zinc-500 transition-colors duration-200 group-hover:text-zinc-400">ecies/js</span>
        <span class="font-mono text-xs font-normal text-zinc-700 transition-colors duration-200 group-hover:text-zinc-500 md:text-right">@kigawas</span>
        <span aria-hidden="true" class="text-right text-base font-normal leading-none text-zinc-700 transition-colors duration-200 group-hover:text-zinc-500">›</span>
      </a>

      <a href="https://github.com/abetomo" target="_blank" rel="noopener noreferrer" class="group grid gap-4 px-5 py-4 no-underline transition-colors duration-200 hover:bg-zinc-950/60 hover:no-underline md:grid-cols-[5.5rem_1fr_8rem_2rem] md:items-center md:px-7">
        <span class="flex h-12 w-12 items-center justify-center overflow-hidden rounded border border-zinc-900 bg-black/70">
          <img src="https://avatars.githubusercontent.com/u/846454?v=4?s=400" alt="" aria-hidden="true" class="h-full w-full object-cover opacity-75 transition duration-200 group-hover:opacity-95" loading="lazy">
        </span>
        <span class="font-mono text-xs font-normal text-zinc-500 transition-colors duration-200 group-hover:text-zinc-400">abetomo</span>
        <span class="font-mono text-xs font-normal text-zinc-700 transition-colors duration-200 group-hover:text-zinc-500 md:text-right">@abetomo</span>
        <span aria-hidden="true" class="text-right text-base font-normal leading-none text-zinc-700 transition-colors duration-200 group-hover:text-zinc-500">›</span>
      </a>
    </div>
  </div>
</section>
