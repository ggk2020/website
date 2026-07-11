import { t } from '../i18n';
import { orgInfo } from '../data/info';

export function renderFooter(): string {
  const tr = t();
  const social = orgInfo.social_media;
  return `
    <footer class="site-footer">
      <div class="container">
        <div class="footer-grid">
          <div class="footer-brand">
            <div class="footer-logo">
              <span class="logo-icon">⚔️</span>
              <span class="logo-text">${orgInfo.name}</span>
            </div>
            <p class="footer-tagline">${tr.footer.copyright}</p>
          </div>
          <div class="footer-links">
            <a href="#hero" class="footer-link">${tr.nav.home}</a>
            <a href="#about" class="footer-link">${tr.nav.about}</a>
            <a href="#services" class="footer-link">${tr.nav.services}</a>
            <a href="#contact" class="footer-link">${tr.nav.contact}</a>
          </div>
          <div class="footer-social">
            <p class="footer-follow">${tr.footer.follow}</p>
            <div class="footer-social-links">
              <a href="${social.facebook}" target="_blank" rel="noopener noreferrer" aria-label="Facebook">📘</a>
              <a href="${social.twitter}" target="_blank" rel="noopener noreferrer" aria-label="Twitter">𝕏</a>
              <a href="${social.instagram}" target="_blank" rel="noopener noreferrer" aria-label="Instagram">📸</a>
            </div>
          </div>
        </div>
        <div class="footer-bottom">
          <div class="footer-divider"></div>
          <p class="footer-copy">🇲🇾 Malaysia &nbsp;•&nbsp; ${tr.footer.copyright}</p>
        </div>
      </div>
    </footer>
  `;
}
