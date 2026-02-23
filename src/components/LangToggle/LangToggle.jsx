import { useTranslation } from 'react-i18next';
import './LangToggle.css';

const LangToggle = () => {
  const { i18n } = useTranslation();
  const currentLang = i18n.language?.startsWith('fr') ? 'fr' : 'it';

  const toggle = () => {
    const next = currentLang === 'it' ? 'fr' : 'it';
    i18n.changeLanguage(next);
  };

  return (
    <button
      className="lang-toggle"
      onClick={toggle}
      aria-label="Changer de langue"
      title={currentLang === 'it' ? 'Passer en Français' : 'Passa all\'Italiano'}
    >
      {/* Drapeau actif */}
      <span className="lang-toggle__flag">
        {currentLang === 'it' ? '🇮🇹' : '🇫🇷'}
      </span>

      {/* Label */}
      <span className="lang-toggle__label">
        {currentLang === 'it' ? 'IT' : 'FR'}
      </span>

      {/* Flèche switch */}
      <svg
        className="lang-toggle__arrow"
        width="12" height="12"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.5"
      >
        <path d="M7 16V4m0 0L3 8m4-4l4 4M17 8v12m0 0l4-4m-4 4l-4-4" />
      </svg>

      {/* Langue cible */}
      <span className="lang-toggle__target">
        {currentLang === 'it' ? 'FR' : 'IT'}
      </span>
    </button>
  );
};

export default LangToggle;
