import './styles/main.css';
import { mountHeader } from './components/Header';
import { renderHero } from './components/Hero';
import { renderAbout } from './components/About';
import { renderServices } from './components/Services';
import { renderContact } from './components/Contact';
import { renderFooter } from './components/Footer';

const headerContainer = document.getElementById('header')!;
const mainContainer = document.getElementById('main')!;
const footerContainer = document.getElementById('footer')!;

/** Renders all content sections */
function renderMain(): void {
  mainContainer.innerHTML =
    renderHero() +
    renderAbout() +
    renderServices() +
    renderContact();
  footerContainer.innerHTML = renderFooter();
  initScrollReveal();
}

/** Re-renders everything when language changes */
function update(): void {
  headerContainer.innerHTML = '';
  mountHeader(headerContainer, update);
  renderMain();
}

// Initial render
mountHeader(headerContainer, update);
renderMain();

// ── Scroll-reveal via IntersectionObserver ─────────────────────────────────
function initScrollReveal(): void {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12 }
  );
  document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));
}

// ── Active nav highlight on scroll ─────────────────────────────────────────
const sections = ['hero', 'about', 'services', 'contact'];
window.addEventListener('scroll', () => {
  const scrollY = window.scrollY;
  sections.forEach((id) => {
    const section = document.getElementById(id);
    if (!section) return;
    const top = section.offsetTop - 100;
    const bottom = top + section.offsetHeight;
    const links = document.querySelectorAll(`[data-section="${id}"]`);
    links.forEach((link) => {
      link.classList.toggle('nav-link--active', scrollY >= top && scrollY < bottom);
    });
  });
}, { passive: true });
