import React from 'react';
import { BsMoonStarsFill, BsSunFill } from 'react-icons/bs';
import { useTranslation } from 'react-i18next';
import './ToggleControls.css';

const ThemeToggle = ({ theme, onToggle }) => {
  const { t } = useTranslation();
  const isDark = theme === 'dark';

  return (
    <button
      type="button"
      className="app__control-btn"
      onClick={onToggle}
      aria-label={isDark ? t('toggles.themeLight') : t('toggles.themeDark')}
      title={isDark ? t('toggles.themeLight') : t('toggles.themeDark')}
    >
      {isDark ? <BsSunFill aria-hidden="true" /> : <BsMoonStarsFill aria-hidden="true" />}
      <span>{isDark ? 'LIGHT' : 'DARK'}</span>
    </button>
  );
};

export default ThemeToggle;
