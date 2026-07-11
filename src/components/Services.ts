import { t } from '../i18n';
import { orgInfo } from '../data/info';
import { getLang } from '../i18n';

export function renderServices(): string {
  const tr = t();
  const lang = getLang();
  const items = orgInfo.services
    .map(
      (s, i) => `
    <div class="service-card glass-card reveal reveal--delay-${i % 3}" role="article">
      <div class="service-icon">${s.icon}</div>
      <h3 class="service-title">${s[lang]}</h3>
    </div>
  `
    )
    .join('');

  return `
    <section class="services section" id="services">
      <div class="container">
        <div class="section-header reveal">
          <h2 class="section-title">${tr.services.title}</h2>
          <div class="section-divider"></div>
          <p class="section-subtitle">${tr.services.subtitle}</p>
        </div>
        <div class="services-grid">
          ${items}
        </div>
      </div>
    </section>
  `;
}
