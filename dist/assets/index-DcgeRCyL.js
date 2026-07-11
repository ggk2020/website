(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))o(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const l of i.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&o(l)}).observe(document,{childList:!0,subtree:!0});function t(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function o(s){if(s.ep)return;s.ep=!0;const i=t(s);fetch(s.href,i)}})();const g={nav:{home:"Utama",about:"Tentang",services:"Perkhidmatan",contact:"Hubungi"},hero:{title:"Bersama Kita Maju 🚀",subtitle:"Melindungi Negara, Mempertahankan Bangsa. Grup Gerak Khas berdiri teguh untuk keselamatan dan kesejahteraan Malaysia.",cta:"Ketahui Lebih Lanjut"},about:{title:"Tentang Kami",mission_title:"🎯 Misi Kami",vision_title:"🌍 Visi Kami"},services:{title:"Perkhidmatan Kami",subtitle:"Kami menyediakan pelbagai perkhidmatan keselamatan dan pertahanan yang komprehensif."},contact:{title:"Hubungi Kami",subtitle:"Kami sedia membantu. Hubungi kami pada bila-bila masa.",email_label:"📧 E-mel",phone_label:"📞 Telefon",address_label:"📍 Alamat"},footer:{copyright:"© 2024 Grup Gerak Khas. Semua hak terpelihara.",follow:"Ikuti kami di media sosial"},lang_toggle:"🇬🇧 English"},f={nav:{home:"Home",about:"About",services:"Services",contact:"Contact"},hero:{title:"Together We Advance 🚀",subtitle:"Protecting the Nation, Defending the People. Grup Gerak Khas stands firm for the safety and prosperity of Malaysia.",cta:"Learn More"},about:{title:"About Us",mission_title:"🎯 Our Mission",vision_title:"🌍 Our Vision"},services:{title:"Our Services",subtitle:"We provide comprehensive security and defense services across multiple domains."},contact:{title:"Contact Us",subtitle:"We are ready to help. Reach out to us anytime.",email_label:"📧 Email",phone_label:"📞 Phone",address_label:"📍 Address"},footer:{copyright:"© 2024 Grup Gerak Khas. All rights reserved.",follow:"Follow us on social media"},lang_toggle:"🇲🇾 Bahasa Melayu"},b={ms:g,en:f};let r="ms";function c(){return b[r]}function d(){return r}function k(){return r=r==="ms"?"en":"ms",document.documentElement.lang=r,r}let v=null;function $(){const e=c(),a=d();return`
    <header class="site-header" id="site-header">
      <div class="header-inner">
        <div class="logo">
          <span class="logo-icon">⚔️</span>
          <span class="logo-text">Grup Gerak Khas</span>
        </div>
        <nav class="nav" id="main-nav">
          <a href="#hero" class="nav-link" data-section="hero">${e.nav.home}</a>
          <a href="#about" class="nav-link" data-section="about">${e.nav.about}</a>
          <a href="#services" class="nav-link" data-section="services">${e.nav.services}</a>
          <a href="#contact" class="nav-link" data-section="contact">${e.nav.contact}</a>
        </nav>
        <div class="header-actions">
          <button class="lang-btn" id="lang-btn" aria-label="Switch language">
            ${a==="ms"?"🇬🇧 EN":"🇲🇾 BM"}
          </button>
          <button class="menu-toggle" id="menu-toggle" aria-label="Toggle menu" aria-expanded="false">
            <span></span><span></span><span></span>
          </button>
        </div>
      </div>
    </header>
  `}function m(e,a){var s;e.innerHTML=$(),v=e.querySelector("#site-header"),(s=e.querySelector("#lang-btn"))==null||s.addEventListener("click",()=>{k(),a()});const t=e.querySelector("#menu-toggle"),o=e.querySelector("#main-nav");t==null||t.addEventListener("click",()=>{const i=o.classList.toggle("nav--open");t.setAttribute("aria-expanded",String(i))}),window.addEventListener("scroll",()=>{v&&v.classList.toggle("header--scrolled",window.scrollY>50)}),e.querySelectorAll(".nav-link").forEach(i=>{i.addEventListener("click",()=>{o.classList.remove("nav--open"),t.setAttribute("aria-expanded","false")})})}const n={name:"Grup Gerak Khas",description:{ms:"Grup Gerak Khas adalah sebuah organisasi yang berfokus pada keselamatan dan pertahanan negara.",en:"Grup Gerak Khas is an organization focused on national security and defense."},mission:{ms:"Misi kami adalah untuk melindungi dan mempertahankan negara dengan penuh dedikasi.",en:"Our mission is to protect and defend the nation with utmost dedication."},vision:{ms:"Visi kami adalah untuk menjadi pasukan keselamatan yang terkemuka di dunia.",en:"Our vision is to be a leading security force in the world."},contact:{email:"info@grupgerakkhas.my",phone:"+60 12-345 6789",address:{ms:"Jalan Keselamatan, Kuala Lumpur, Malaysia",en:"Safety Street, Kuala Lumpur, Malaysia"}},social_media:{facebook:"https://facebook.com/grupgerakkhas",twitter:"https://twitter.com/grupgerakkhas",instagram:"https://instagram.com/grupgerakkhas"},services:[{icon:"🏋️",ms:"Kepimpinan dan Latihan",en:"Leadership & Training"},{icon:"🛡️",ms:"Keselamatan Awam",en:"Public Security"},{icon:"🚨",ms:"Perkhidmatan Kecemasan",en:"Emergency Services"},{icon:"🎯",ms:"Operasi Khas",en:"Special Operations"},{icon:"🌍",ms:"Misi Antarabangsa",en:"International Missions"},{icon:"📡",ms:"Perisikan & Pengawasan",en:"Intelligence & Surveillance"}]};function y(){const e=c(),a=d();return`
    <section class="hero" id="hero">
      <div class="hero-bg-grid"></div>
      <div class="hero-particles">
        ${Array.from({length:20},()=>'<span class="particle"></span>').join("")}
      </div>
      <div class="hero-content">
        <div class="hero-badge">🇲🇾 ${n.name}</div>
        <h1 class="hero-title">${e.hero.title}</h1>
        <p class="hero-subtitle">${e.hero.subtitle}</p>
        <div class="hero-actions">
          <a href="#services" class="btn btn-primary">${e.hero.cta}</a>
          <a href="#contact" class="btn btn-outline">${e.nav.contact}</a>
        </div>
        <div class="hero-stats">
          <div class="stat-item">
            <span class="stat-number">30+</span>
            <span class="stat-label">${a==="ms"?"Tahun Berkhidmat":"Years of Service"}</span>
          </div>
          <div class="stat-divider"></div>
          <div class="stat-item">
            <span class="stat-number">6</span>
            <span class="stat-label">${a==="ms"?"Unit Khusus":"Special Units"}</span>
          </div>
          <div class="stat-divider"></div>
          <div class="stat-item">
            <span class="stat-number">100%</span>
            <span class="stat-label">${a==="ms"?"Komitmen":"Commitment"}</span>
          </div>
        </div>
      </div>
      <div class="hero-scroll-hint">
        <span>${a==="ms"?"Tatal ke bawah":"Scroll down"}</span>
        <div class="scroll-arrow"></div>
      </div>
    </section>
  `}function L(){const e=c(),a=d();return`
    <section class="about section" id="about">
      <div class="container">
        <div class="section-header reveal">
          <h2 class="section-title">${e.about.title}</h2>
          <div class="section-divider"></div>
          <p class="section-subtitle">${n.description[a]}</p>
        </div>
        <div class="about-grid">
          <div class="about-card glass-card reveal">
            <div class="card-icon">${n.description[a],"🎯"}</div>
            <h3 class="card-title">${e.about.mission_title}</h3>
            <p class="card-text">${n.mission[a]}</p>
          </div>
          <div class="about-card glass-card reveal reveal--delay-1">
            <div class="card-icon">🌍</div>
            <h3 class="card-title">${e.about.vision_title}</h3>
            <p class="card-text">${n.vision[a]}</p>
          </div>
        </div>
      </div>
    </section>
  `}function w(){const e=c(),a=d(),t=n.services.map((o,s)=>`
    <div class="service-card glass-card reveal reveal--delay-${s%3}" role="article">
      <div class="service-icon">${o.icon}</div>
      <h3 class="service-title">${o[a]}</h3>
    </div>
  `).join("");return`
    <section class="services section" id="services">
      <div class="container">
        <div class="section-header reveal">
          <h2 class="section-title">${e.services.title}</h2>
          <div class="section-divider"></div>
          <p class="section-subtitle">${e.services.subtitle}</p>
        </div>
        <div class="services-grid">
          ${t}
        </div>
      </div>
    </section>
  `}function K(){const e=c(),a=d(),t=n.social_media;return`
    <section class="contact section" id="contact">
      <div class="container">
        <div class="section-header reveal">
          <h2 class="section-title">${e.contact.title}</h2>
          <div class="section-divider"></div>
          <p class="section-subtitle">${e.contact.subtitle}</p>
        </div>
        <div class="contact-grid">
          <div class="contact-info glass-card reveal">
            <div class="contact-item">
              <span class="contact-label">${e.contact.email_label}</span>
              <a href="mailto:${n.contact.email}" class="contact-value">${n.contact.email}</a>
            </div>
            <div class="contact-item">
              <span class="contact-label">${e.contact.phone_label}</span>
              <a href="tel:${n.contact.phone.replace(/\s/g,"")}" class="contact-value">${n.contact.phone}</a>
            </div>
            <div class="contact-item">
              <span class="contact-label">${e.contact.address_label}</span>
              <span class="contact-value">${n.contact.address[a]}</span>
            </div>
            <div class="social-links">
              <a href="${t.facebook}" target="_blank" rel="noopener noreferrer" class="social-link social-link--fb" aria-label="Facebook">
                <svg viewBox="0 0 24 24" fill="currentColor"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
              </a>
              <a href="${t.twitter}" target="_blank" rel="noopener noreferrer" class="social-link social-link--tw" aria-label="Twitter/X">
                <svg viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
              </a>
              <a href="${t.instagram}" target="_blank" rel="noopener noreferrer" class="social-link social-link--ig" aria-label="Instagram">
                <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
              </a>
            </div>
          </div>
          <div class="contact-map glass-card reveal reveal--delay-1">
            <div class="map-placeholder">
              <div class="map-pin">📍</div>
              <p>Kuala Lumpur, Malaysia</p>
              <div class="map-coordinates">3.1390° N, 101.6869° E</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `}function M(){const e=c(),a=n.social_media;return`
    <footer class="site-footer">
      <div class="container">
        <div class="footer-grid">
          <div class="footer-brand">
            <div class="footer-logo">
              <span class="logo-icon">⚔️</span>
              <span class="logo-text">${n.name}</span>
            </div>
            <p class="footer-tagline">${e.footer.copyright}</p>
          </div>
          <div class="footer-links">
            <a href="#hero" class="footer-link">${e.nav.home}</a>
            <a href="#about" class="footer-link">${e.nav.about}</a>
            <a href="#services" class="footer-link">${e.nav.services}</a>
            <a href="#contact" class="footer-link">${e.nav.contact}</a>
          </div>
          <div class="footer-social">
            <p class="footer-follow">${e.footer.follow}</p>
            <div class="footer-social-links">
              <a href="${a.facebook}" target="_blank" rel="noopener noreferrer" aria-label="Facebook">📘</a>
              <a href="${a.twitter}" target="_blank" rel="noopener noreferrer" aria-label="Twitter">𝕏</a>
              <a href="${a.instagram}" target="_blank" rel="noopener noreferrer" aria-label="Instagram">📸</a>
            </div>
          </div>
        </div>
        <div class="footer-bottom">
          <div class="footer-divider"></div>
          <p class="footer-copy">🇲🇾 Malaysia &nbsp;•&nbsp; ${e.footer.copyright}</p>
        </div>
      </div>
    </footer>
  `}const u=document.getElementById("header"),_=document.getElementById("main"),S=document.getElementById("footer");function p(){_.innerHTML=y()+L()+w()+K(),S.innerHTML=M(),E()}function h(){u.innerHTML="",m(u,h),p()}m(u,h);p();function E(){const e=new IntersectionObserver(a=>{a.forEach(t=>{t.isIntersecting&&(t.target.classList.add("revealed"),e.unobserve(t.target))})},{threshold:.12});document.querySelectorAll(".reveal").forEach(a=>e.observe(a))}const H=["hero","about","services","contact"];window.addEventListener("scroll",()=>{const e=window.scrollY;H.forEach(a=>{const t=document.getElementById(a);if(!t)return;const o=t.offsetTop-100,s=o+t.offsetHeight;document.querySelectorAll(`[data-section="${a}"]`).forEach(l=>{l.classList.toggle("nav-link--active",e>=o&&e<s)})})},{passive:!0});
