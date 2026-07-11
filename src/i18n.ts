import type { Language, Translations } from './types';
import { ms } from './locales/ms';
import { en } from './locales/en';

const translations: Record<Language, Translations> = { ms, en };

let currentLang: Language = 'ms';

/** Returns the current translations object */
export function t(): Translations {
  return translations[currentLang];
}

/** Returns the current language code */
export function getLang(): Language {
  return currentLang;
}

/** Switches the active language and re-renders the page */
export function setLang(lang: Language): void {
  currentLang = lang;
  document.documentElement.lang = lang;
}

/** Toggles between 'ms' and 'en' */
export function toggleLang(): Language {
  currentLang = currentLang === 'ms' ? 'en' : 'ms';
  document.documentElement.lang = currentLang;
  return currentLang;
}
