import { translations } from './i18n';

export function applyLanguage() {
  const language =
    document.documentElement.lang === 'pt' ? 'pt' : 'en';

  const dictionary = translations[language];

  document.querySelectorAll<HTMLElement>('[data-i18n]').forEach((element) => {
    const key = element.dataset.i18n as keyof typeof dictionary;

    if (key && key in dictionary) {
      element.textContent = dictionary[key];
    }
  });

  document.querySelectorAll<HTMLElement>('[data-i18n-aria-label]').forEach((element) => {
    const key = element.dataset.i18nAriaLabel as keyof typeof dictionary;

    if (key && key in dictionary) {
      element.setAttribute('aria-label', dictionary[key]);
    }
  });

  document.querySelectorAll<HTMLTimeElement>('time[data-i18n-date]').forEach((element) => {
    const dateValue = element.getAttribute('datetime');
    if (!dateValue) return;

    const date = new Date(dateValue);
    if (Number.isNaN(date.getTime())) return;

    element.textContent = date.toLocaleDateString(
      language === 'pt' ? 'pt-BR' : 'en-US',
      {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        timeZone: 'UTC',
      }
    );
  });

}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', applyLanguage, {
    once: true,
  });
} else {
  applyLanguage();
}

window.addEventListener('site-language-change', applyLanguage);
