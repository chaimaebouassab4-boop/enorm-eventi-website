import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import fr from './fr.json';
import it from './it.json';

i18n
  .use(initReactI18next)
  .init({
    resources: {
      fr: { translation: fr },
      it: { translation: it },
    },
    lng: 'it',           // ← langue par défaut : ITALIEN
    fallbackLng: 'it',   // ← si clé manquante → fallback italien
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
