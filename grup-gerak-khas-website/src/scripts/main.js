// This file contains JavaScript code for interactivity and functionality, including language switching and dynamic content updates.

const languageSwitcher = document.getElementById('language-switcher');
const contentElements = document.querySelectorAll('[data-translate]');

let currentLanguage = 'ms'; // Default language

const translations = {
    ms: {
        welcome: "Selamat datang ke Grup Gerak Khas! 🎉",
        about: "Kami adalah organisasi yang berdedikasi untuk...",
        contact: "Hubungi kami",
    },
    en: {
        welcome: "Welcome to Grup Gerak Khas! 🎉",
        about: "We are an organization dedicated to...",
        contact: "Contact us",
    }
};

function updateContent() {
    contentElements.forEach(element => {
        const key = element.getAttribute('data-translate');
        element.textContent = translations[currentLanguage][key];
    });
}

languageSwitcher.addEventListener('change', (event) => {
    currentLanguage = event.target.value;
    updateContent();
});

// Initial content update
updateContent();