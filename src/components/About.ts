import { t } from '../i18n';
import { orgInfo } from '../data/info';
import { getLang } from '../i18n';

export function renderAbout(): string {
  const tr = t();
  const lang = getLang();
  return `
    <section class="about section" id="about">
      <div class="container">
        <div class="section-header reveal">
          <h2 class="section-title">${tr.about.title}</h2>
          <div class="section-divider"></div>
          <p class="section-subtitle">${orgInfo.description[lang]}</p>
        </div>
        <div class="about-grid">
          <div class="about-card glass-card reveal">
            <div class="card-icon">${orgInfo.description[lang] ? '🎯' : '🎯'}</div>
            <h3 class="card-title">${tr.about.mission_title}</h3>
            <p class="card-text">${orgInfo.mission[lang]}</p>
          </div>
          <div class="about-card glass-card reveal reveal--delay-1">
            <div class="card-icon">🌍</div>
            <h3 class="card-title">${tr.about.vision_title}</h3>
            <p class="card-text">${orgInfo.vision[lang]}</p>
          </div>
        </div>
      </div>
    </section>
  `;
}
