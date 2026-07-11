/* ══════════════════════════════════════════════════════
   Grup Gerak Khas — 3D Website Engine & Interactivity (Pure JS)
   ══════════════════════════════════════════════════════ */

// ── State Management ────────────────────────────────────
let currentLang = 'ms'; // Default language

// Three.js instances
let scene, camera, renderer;
let globeGroup, radarGrid, radarSweep, beacon, shield;
let particleSystem;
let beaconWaves = [];

// Camera positions/angles for each section (Hero, About, Services, Contact)
const sectionStates = [
  { x: 0, y: 3, z: 12, rx: -0.2, ry: 0, rz: 0 },      // Hero
  { x: -5, y: 1, z: 7, rx: -0.1, ry: 0.8, rz: 0.1 },  // About
  { x: 4, y: 6, z: 8, rx: -0.6, ry: -0.5, rz: -0.2 }, // Services
  { x: 0, y: -2, z: 5, rx: 0.3, ry: 0, rz: 0 }        // Contact
];

let targetCamera = { ...sectionStates[0] };
let mouseX = 0, mouseY = 0;

// ── i18n & UI Renderer ──────────────────────────────────
function renderContent() {
  const t = TRANSLATIONS[currentLang];
  const info = ORG_INFO;

  // Language Button Toggle
  document.getElementById('lang-btn').textContent = t.lang_btn;

  // Navigation Link Texts
  document.querySelector('[data-translate="nav.home"]').textContent = t.nav.home;
  document.querySelector('[data-translate="nav.about"]').textContent = t.nav.about;
  document.querySelector('[data-translate="nav.services"]').textContent = t.nav.services;
  document.querySelector('[data-translate="nav.contact"]').textContent = t.nav.contact;

  // Hero Section
  document.querySelector('[data-translate="hero.badge"]').textContent = `🇲🇾 ${info.name}`;
  document.querySelector('[data-translate="hero.title"]').textContent = t.hero.title;
  document.querySelector('[data-translate="hero.subtitle"]').textContent = t.hero.subtitle;
  document.querySelector('[data-translate="hero.cta"]').textContent = t.hero.cta;
  document.querySelector('[data-translate="hero.contact"]').textContent = t.nav.contact;

  document.querySelector('[data-translate="hero.stat1.label"]').textContent = currentLang === 'ms' ? 'Tahun Berkhidmat' : 'Years of Service';
  document.querySelector('[data-translate="hero.stat2.label"]').textContent = currentLang === 'ms' ? 'Unit Khusus' : 'Special Units';
  document.querySelector('[data-translate="hero.stat3.label"]').textContent = currentLang === 'ms' ? 'Komitmen' : 'Commitment';
  document.querySelector('[data-translate="hero.scroll"]').textContent = currentLang === 'ms' ? 'Tatal ke bawah' : 'Scroll down';

  // About Section
  document.querySelector('[data-translate="about.title"]').textContent = t.about.title;
  document.querySelector('[data-translate="about.desc"]').textContent = info.description[currentLang];
  document.querySelector('[data-translate="about.mission_title"]').textContent = t.about.mission_title;
  document.querySelector('[data-translate="about.mission"]').textContent = info.mission[currentLang];
  document.querySelector('[data-translate="about.vision_title"]').textContent = t.about.vision_title;
  document.querySelector('[data-translate="about.vision"]').textContent = info.vision[currentLang];

  // Services Section
  document.querySelector('[data-translate="services.title"]').textContent = t.services.title;
  document.querySelector('[data-translate="services.subtitle"]').textContent = t.services.subtitle;

  const servicesContainer = document.getElementById('services-list');
  servicesContainer.innerHTML = info.services.map((service, idx) => `
    <div class="service-card glass-card reveal reveal--delay-${idx % 3}">
      <div class="service-icon">${service.icon}</div>
      <h3 class="service-title">${service[currentLang]}</h3>
    </div>
  `).join('');

  // Contact Section
  document.querySelector('[data-translate="contact.title"]').textContent = t.contact.title;
  document.querySelector('[data-translate="contact.subtitle"]').textContent = t.contact.subtitle;
  document.querySelector('[data-translate="contact.email_label"]').textContent = t.contact.email_label;
  document.querySelector('[data-translate="contact.email"]').textContent = info.contact.email;
  document.querySelector('[data-translate="contact.email"]').href = `mailto:${info.contact.email}`;
  document.querySelector('[data-translate="contact.phone_label"]').textContent = t.contact.phone_label;
  document.querySelector('[data-translate="contact.phone"]').textContent = info.contact.phone;
  document.querySelector('[data-translate="contact.phone"]').href = `tel:${info.contact.phone.replace(/\s/g, '')}`;
  document.querySelector('[data-translate="contact.address_label"]').textContent = t.contact.address_label;
  document.querySelector('[data-translate="contact.address"]').textContent = info.contact.address[currentLang];

  // Footer Section
  document.querySelector('[data-translate="footer.logo"]').innerHTML = `<span class="logo-icon">⚔️</span><span class="logo-text">${info.name}</span>`;
  document.querySelector('[data-translate="footer.tagline"]').textContent = t.footer.copyright;
  document.querySelector('[data-translate="footer.follow"]').textContent = t.footer.follow;
  document.querySelector('[data-translate="footer.copy"]').innerHTML = `🇲🇾 Malaysia &nbsp;•&nbsp; ${t.footer.copyright}`;

  // Footer Nav Links
  document.querySelector('[data-translate="footer.link.home"]').textContent = t.nav.home;
  document.querySelector('[data-translate="footer.link.about"]').textContent = t.nav.about;
  document.querySelector('[data-translate="footer.link.services"]').textContent = t.nav.services;
  document.querySelector('[data-translate="footer.link.contact"]').textContent = t.nav.contact;

  // Re-initialize scroll reveal for new elements
  initScrollReveal();
}

function initLanguageSwitching() {
  document.getElementById('lang-btn').addEventListener('click', () => {
    currentLang = currentLang === 'ms' ? 'en' : 'ms';
    document.documentElement.lang = currentLang;
    renderContent();
  });
}

// ── Mobile Navigation Toggle ─────────────────────────────
function initNavigation() {
  const menuToggle = document.getElementById('menu-toggle');
  const mainNav = document.getElementById('main-nav');

  menuToggle.addEventListener('click', () => {
    const isOpen = mainNav.classList.toggle('nav--open');
    menuToggle.setAttribute('aria-expanded', String(isOpen));
  });

  document.querySelectorAll('.nav-link').forEach((link) => {
    link.addEventListener('click', () => {
      mainNav.classList.remove('nav--open');
      menuToggle.setAttribute('aria-expanded', 'false');
    });
  });

  // Header scroll shadow
  const header = document.getElementById('site-header');
  window.addEventListener('scroll', () => {
    header.classList.toggle('header--scrolled', window.scrollY > 50);
  }, { passive: true });
}

// ── Scroll Reveal ───────────────────────────────────────
function initScrollReveal() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));
}

// ── Three.js Scene Setup ─────────────────────────────────
function initThree() {
  const container = document.getElementById('three-canvas-container');

  // Scene
  scene = new THREE.Scene();
  scene.fog = new THREE.FogExp2(0x060c08, 0.05);

  // Camera
  camera = new THREE.PerspectiveCamera(
    60,
    window.innerWidth / window.innerHeight,
    0.1,
    100
  );
  camera.position.set(targetCamera.x, targetCamera.y, targetCamera.z);
  camera.rotation.set(targetCamera.rx, targetCamera.ry, targetCamera.rz);

  // Renderer
  renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  container.appendChild(renderer.domElement);

  // Lights
  const ambientLight = new THREE.AmbientLight(0xffffff, 0.3);
  scene.add(ambientLight);

  const dirLight1 = new THREE.DirectionalLight(0x00e676, 1.5);
  dirLight1.position.set(5, 10, 7);
  scene.add(dirLight1);

  const dirLight2 = new THREE.DirectionalLight(0xffd700, 0.8);
  dirLight2.position.set(-5, -5, 5);
  scene.add(dirLight2);

  // 1. Globe (Hero)
  globeGroup = new THREE.Group();
  scene.add(globeGroup);

  const globeGeom = new THREE.SphereGeometry(3, 24, 24);
  
  const wireMaterial = new THREE.MeshBasicMaterial({
    color: 0x00e676,
    wireframe: true,
    transparent: true,
    opacity: 0.15,
  });
  const globeWire = new THREE.Mesh(globeGeom, wireMaterial);
  globeGroup.add(globeWire);

  const pointsMaterial = new THREE.PointsMaterial({
    color: 0x00e676,
    size: 0.08,
    transparent: true,
    opacity: 0.8,
  });
  const globePoints = new THREE.Points(globeGeom, pointsMaterial);
  globeGroup.add(globePoints);

  const coreGeom = new THREE.SphereGeometry(1.5, 16, 16);
  const coreMat = new THREE.MeshBasicMaterial({
    color: 0x003311,
    transparent: true,
    opacity: 0.4,
  });
  const globeCore = new THREE.Mesh(coreGeom, coreMat);
  globeGroup.add(globeCore);

  const arcGroup = new THREE.Group();
  for (let i = 0; i < 5; i++) {
    const radius = 3.2 + Math.random() * 0.8;
    const ringGeom = new THREE.RingGeometry(radius, radius + 0.02, 32);
    const ringMat = new THREE.MeshBasicMaterial({
      color: 0xffd700,
      side: THREE.DoubleSide,
      transparent: true,
      opacity: 0.2,
    });
    const ring = new THREE.Mesh(ringGeom, ringMat);
    ring.rotation.x = Math.random() * Math.PI;
    ring.rotation.y = Math.random() * Math.PI;
    arcGroup.add(ring);
  }
  globeGroup.add(arcGroup);

  // 2. Shield (About)
  shield = new THREE.Group();
  shield.position.set(-6, 1, 0);
  scene.add(shield);

  const ringGeom = new THREE.TorusGeometry(2, 0.08, 8, 32);
  const ringMat = new THREE.MeshStandardMaterial({
    color: 0xffd700,
    metalness: 0.8,
    roughness: 0.2,
    emissive: 0xffd700,
    emissiveIntensity: 0.2
  });
  const shieldRing = new THREE.Mesh(ringGeom, ringMat);
  shield.add(shieldRing);

  const innerRingGeom = new THREE.RingGeometry(1.5, 1.55, 4);
  const innerRing = new THREE.Mesh(innerRingGeom, new THREE.MeshBasicMaterial({
    color: 0x00e676,
    side: THREE.DoubleSide,
    transparent: true,
    opacity: 0.5
  }));
  shield.add(innerRing);

  const starGeom = new THREE.ConeGeometry(0.6, 1.2, 4);
  const starMat = new THREE.MeshStandardMaterial({ color: 0x00e676, wireframe: true });
  const star = new THREE.Mesh(starGeom, starMat);
  star.rotation.x = Math.PI / 2;
  shield.add(star);

  // 3. Radar Grid (Services)
  radarGrid = new THREE.GridHelper(20, 20, 0x00e676, 0x003311);
  radarGrid.position.set(5, -2, 0);
  radarGrid.material.transparent = true;
  radarGrid.material.opacity = 0.25;
  scene.add(radarGrid);

  const sweepGeom = new THREE.PlaneGeometry(10, 10);
  const sweepMat = new THREE.MeshBasicMaterial({
    color: 0x00e676,
    transparent: true,
    opacity: 0.08,
    side: THREE.DoubleSide
  });
  radarSweep = new THREE.Mesh(sweepGeom, sweepMat);
  radarSweep.rotation.x = Math.PI / 2;
  radarSweep.position.set(5, -1.98, 0);
  scene.add(radarSweep);

  // 4. Communication Beacon (Contact)
  beacon = new THREE.Group();
  beacon.position.set(0, -5, 0);
  scene.add(beacon);

  const beaconCore = new THREE.Mesh(
    new THREE.SphereGeometry(0.4, 8, 8),
    new THREE.MeshBasicMaterial({ color: 0xffd700 })
  );
  beacon.add(beaconCore);

  for (let i = 0; i < 3; i++) {
    const wave = new THREE.Mesh(
      new THREE.RingGeometry(0.5, 0.6, 16),
      new THREE.MeshBasicMaterial({
        color: 0x00e676,
        side: THREE.DoubleSide,
        transparent: true,
        opacity: 0.6
      })
    );
    wave.rotation.x = Math.PI / 2;
    wave.scale.setScalar(1 + i * 1.5);
    beacon.add(wave);
    beaconWaves.push(wave);
  }

  // 5. Data Particle Field
  const particleCount = 600;
  const particleGeom = new THREE.BufferGeometry();
  const positions = new Float32Array(particleCount * 3);
  const colors = new Float32Array(particleCount * 3);

  const colorPrimary = new THREE.Color(0x00e676);
  const colorSecondary = new THREE.Color(0xffd700);

  for (let i = 0; i < particleCount * 3; i += 3) {
    positions[i] = (Math.random() - 0.5) * 40;
    positions[i + 1] = (Math.random() - 0.5) * 40;
    positions[i + 2] = (Math.random() - 0.5) * 40;

    const chosenColor = Math.random() > 0.3 ? colorPrimary : colorSecondary;
    colors[i] = chosenColor.r;
    colors[i + 1] = chosenColor.g;
    colors[i + 2] = chosenColor.b;
  }

  particleGeom.setAttribute('position', new THREE.BufferAttribute(positions, 3));
  particleGeom.setAttribute('color', new THREE.BufferAttribute(colors, 3));

  const pMaterial = new THREE.PointsMaterial({
    size: 0.05,
    vertexColors: true,
    transparent: true,
    opacity: 0.6,
  });

  particleSystem = new THREE.Points(particleGeom, pMaterial);
  scene.add(particleSystem);

  // Mouse parallax trigger
  window.addEventListener('mousemove', (e) => {
    mouseX = (e.clientX / window.innerWidth - 0.5) * 0.8;
    mouseY = (e.clientY / window.innerHeight - 0.5) * 0.8;
  });

  window.addEventListener('resize', onWindowResize);

  // Start animation loop
  const clock = new THREE.Clock();

  function animateLoop() {
    requestAnimationFrame(animateLoop);
    const elapsedTime = clock.getElapsedTime();

    // Rotations
    globeGroup.rotation.y = elapsedTime * 0.15;
    globeGroup.rotation.x = elapsedTime * 0.05;

    shield.rotation.y = elapsedTime * 0.3;
    shield.rotation.z = Math.sin(elapsedTime) * 0.1;

    radarSweep.rotation.z = -elapsedTime * 0.8;

    // Beacon pulses
    beaconWaves.forEach((wave, idx) => {
      const scaleVal = 1 + ((elapsedTime * 2 + idx * 2) % 6);
      wave.scale.setScalar(scaleVal);
      wave.material.opacity = 1 - (scaleVal - 1) / 5;
    });

    // Float particles
    const posArr = particleSystem.geometry.attributes.position.array;
    for (let i = 1; i < posArr.length; i += 3) {
      posArr[i] -= 0.005;
      if (posArr[i] < -20) posArr[i] = 20;
    }
    particleSystem.geometry.attributes.position.needsUpdate = true;

    // Interpolate camera positioning (Scroll-driven + parallax)
    camera.position.x += (targetCamera.x + mouseX - camera.position.x) * 0.05;
    camera.position.y += (targetCamera.y - mouseY - camera.position.y) * 0.05;
    camera.position.z += (targetCamera.z - camera.position.z) * 0.05;

    camera.rotation.x += (targetCamera.rx - camera.rotation.x) * 0.05;
    camera.rotation.y += (targetCamera.ry - camera.rotation.y) * 0.05;
    camera.rotation.z += (targetCamera.rz - camera.rotation.z) * 0.05;

    renderer.render(scene, camera);
  }

  animateLoop();
}

function onWindowResize() {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
}

// ── Scroll Animation Bindings ────────────────────────────
function updateScrollProgress() {
  const scrollTop = window.scrollY;
  const docHeight = document.documentElement.scrollHeight - window.innerHeight;
  const ratio = docHeight > 0 ? scrollTop / docHeight : 0;

  // Linearly interpolate camera position based on ratio
  const segmentCount = sectionStates.length - 1;
  const rawIdx = ratio * segmentCount;
  const idx = Math.min(Math.floor(rawIdx), segmentCount - 1);
  const segmentRatio = rawIdx - idx;

  const stateStart = sectionStates[idx];
  const stateEnd = sectionStates[idx + 1];

  targetCamera.x = stateStart.x + (stateEnd.x - stateStart.x) * segmentRatio;
  targetCamera.y = stateStart.y + (stateEnd.y - stateStart.y) * segmentRatio;
  targetCamera.z = stateStart.z + (stateEnd.z - stateStart.z) * segmentRatio;

  targetCamera.rx = stateStart.rx + (stateEnd.rx - stateStart.rx) * segmentRatio;
  targetCamera.ry = stateStart.ry + (stateEnd.ry - stateStart.ry) * segmentRatio;
  targetCamera.rz = stateStart.rz + (stateEnd.rz - stateStart.rz) * segmentRatio;

  // Active navigation highlights
  const sectionIds = ['hero', 'about', 'services', 'contact'];
  sectionIds.forEach((id) => {
    const sectionEl = document.getElementById(id);
    if (!sectionEl) return;
    const top = sectionEl.offsetTop - 100;
    const bottom = top + sectionEl.offsetHeight;
    const links = document.querySelectorAll(`[data-section="${id}"]`);
    links.forEach((link) => {
      link.classList.toggle('nav-link--active', scrollTop >= top && scrollTop < bottom);
    });
  });
}

// ── Initialization ──────────────────────────────────────
window.addEventListener('DOMContentLoaded', () => {
  renderContent();
  initLanguageSwitching();
  initNavigation();
  initThree();

  window.addEventListener('scroll', updateScrollProgress, { passive: true });
  updateScrollProgress(); // Initial run
});
