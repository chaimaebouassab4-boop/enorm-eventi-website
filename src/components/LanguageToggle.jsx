import React from 'react';
import { useTranslation } from 'react-i18next';
import './ToggleControls.css';

const LanguageToggle = () => {
  const { i18n, t } = useTranslation();
  const lang = i18n.resolvedLanguage === 'it' ? 'it' : 'fr';
  const nextLang = lang === 'fr' ? 'it' : 'fr';

  const handleLanguageChange = () => {
    i18n.changeLanguage(nextLang);
  };

  return (
    <button
      type="button"
      className="app__control-btn"
      onClick={handleLanguageChange}
      aria-label={nextLang === 'fr' ? t('toggles.langToFr') : t('toggles.langToIt')}
      title={nextLang === 'fr' ? t('toggles.langToFr') : t('toggles.langToIt')}
    >
      <span>{lang.toUpperCase()}</span>
    </button>
  );
};

export default LanguageToggle;
