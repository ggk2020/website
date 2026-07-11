import { t, getLang, toggleLang } from '../i18n';

let headerEl: HTMLElement | null = null;

export function renderHeader(): string {
  const tr = t();
  const lang = getLang();
  return `
    <header class="site-header" id="site-header">
      <div class="header-inner">
        <div class="logo">
          <span class="logo-icon">⚔️</span>
          <span class="logo-text">Grup Gerak Khas</span>
        </div>
        <nav class="nav" id="main-nav">
          <a href="#hero" class="nav-link" data-section="hero">${tr.nav.home}</a>
          <a href="#about" class="nav-link" data-section="about">${tr.nav.about}</a>
          <a href="#services" class="nav-link" data-section="services">${tr.nav.services}</a>
          <a href="#contact" class="nav-link" data-section="contact">${tr.nav.contact}</a>
        </nav>
        <div class="header-actions">
          <button class="lang-btn" id="lang-btn" aria-label="Switch language">
            ${lang === 'ms' ? '🇬🇧 EN' : '🇲🇾 BM'}
          </button>
          <button class="menu-toggle" id="menu-toggle" aria-label="Toggle menu" aria-expanded="false">
            <span></span><span></span><span></span>
          </button>
        </div>
      </div>
    </header>
  `;
}

export function mountHeader(container: HTMLElement, onUpdate: () => void): void {
  container.innerHTML = renderHeader();
  headerEl = container.querySelector('#site-header');

  // Language toggle
  container.querySelector('#lang-btn')?.addEventListener('click', () => {
    toggleLang();
    onUpdate();
  });

  // Mobile menu toggle
  const menuToggle = container.querySelector('#menu-toggle') as HTMLButtonElement;
  const nav = container.querySelector('#main-nav') as HTMLElement;
  menuToggle?.addEventListener('click', () => {
    const isOpen = nav.classList.toggle('nav--open');
    menuToggle.setAttribute('aria-expanded', String(isOpen));
  });

  // Scroll shadow effect
  window.addEventListener('scroll', () => {
    if (headerEl) {
      headerEl.classList.toggle('header--scrolled', window.scrollY > 50);
    }
  });

  // Close mobile nav on link click
  container.querySelectorAll('.nav-link').forEach((link) => {
    link.addEventListener('click', () => {
      nav.classList.remove('nav--open');
      menuToggle.setAttribute('aria-expanded', 'false');
    });
  });
}
