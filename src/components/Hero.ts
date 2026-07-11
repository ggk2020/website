import { t } from '../i18n';
import { orgInfo } from '../data/info';
import { getLang } from '../i18n';

export function renderHero(): string {
  const tr = t();
  const lang = getLang();
  return `
    <section class="hero" id="hero">
      <div class="hero-bg-grid"></div>
      <div class="hero-particles">
        ${Array.from({ length: 20 }, () => '<span class="particle"></span>').join('')}
      </div>
      <div class="hero-content">
        <div class="hero-badge">🇲🇾 ${orgInfo.name}</div>
        <h1 class="hero-title">${tr.hero.title}</h1>
        <p class="hero-subtitle">${tr.hero.subtitle}</p>
        <div class="hero-actions">
          <a href="#services" class="btn btn-primary">${tr.hero.cta}</a>
          <a href="#contact" class="btn btn-outline">${tr.nav.contact}</a>
        </div>
        <div class="hero-stats">
          <div class="stat-item">
            <span class="stat-number">30+</span>
            <span class="stat-label">${lang === 'ms' ? 'Tahun Berkhidmat' : 'Years of Service'}</span>
          </div>
          <div class="stat-divider"></div>
          <div class="stat-item">
            <span class="stat-number">6</span>
            <span class="stat-label">${lang === 'ms' ? 'Unit Khusus' : 'Special Units'}</span>
          </div>
          <div class="stat-divider"></div>
          <div class="stat-item">
            <span class="stat-number">100%</span>
            <span class="stat-label">${lang === 'ms' ? 'Komitmen' : 'Commitment'}</span>
          </div>
        </div>
      </div>
      <div class="hero-scroll-hint">
        <span>${lang === 'ms' ? 'Tatal ke bawah' : 'Scroll down'}</span>
        <div class="scroll-arrow"></div>
      </div>
    </section>
  `;
}
