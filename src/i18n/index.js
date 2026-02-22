import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import fr from './fr.json';
import it from './it.json';

const STORAGE_KEY = 'enorm_lang';
const DEFAULT_LANG = 'fr';

const getInitialLanguage = () => {
  const stored = localStorage.getItem(STORAGE_KEY);
  if (stored === 'fr' || stored === 'it') {
    return stored;
  }
  return DEFAULT_LANG;
};

i18n
  .use(initReactI18next)
  .init({
    resources: {
      fr: { translation: fr },
      it: { translation: it },
    },
    lng: getInitialLanguage(),
    fallbackLng: 'fr',
    supportedLngs: ['fr', 'it'],
    load: 'languageOnly',
    react: {
      useSuspense: false,
    },
    interpolation: {
      escapeValue: false,
    },
  });

i18n.on('languageChanged', (lng) => {
  if (lng === 'fr' || lng === 'it') {
    localStorage.setItem(STORAGE_KEY, lng);
  }
});

export default i18n;
