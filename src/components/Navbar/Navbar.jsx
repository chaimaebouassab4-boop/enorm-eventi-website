import React, { useState } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { MdOutlineRestaurantMenu } from 'react-icons/md';
import { useTranslation } from 'react-i18next';
import ThemeToggle from '../ThemeToggle';
import LanguageToggle from '../LanguageToggle';
import './Navbar.css';

const Navbar = ({ theme, onToggleTheme }) => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const { t } = useTranslation();

  return (
    <nav className="app__navbar">
      <div className="app__navbar-logo">
        <p className="app__navbar-logo-text">ENORM EVENTI</p>
      </div>

      <ul className="app__navbar-links">
        <li className="p__opensans"><a href="#home">{t('nav.home')}</a></li>
        <li className="p__opensans"><a href="#about">{t('nav.about')}</a></li>
        <li className="p__opensans"><a href="#menu">{t('nav.services')}</a></li>
        <li className="p__opensans"><a href="#awards">{t('nav.awards')}</a></li>
        <li className="p__opensans"><a href="#contact">{t('nav.contact')}</a></li>
      </ul>

      <div className="app__navbar-actions">
        <div className="app__navbar-login">
          <a href="#contact" className="p__opensans">{t('nav.login')}</a>
          <div />
          <a href="#contact" className="p__opensans">{t('nav.book')}</a>
        </div>

        <div className="app__navbar-controls">
          <LanguageToggle />
          <ThemeToggle theme={theme} onToggle={onToggleTheme} />
        </div>
      </div>

      <div className="app__navbar-smallscreen">
        <GiHamburgerMenu color="#dcca87" fontSize={27} onClick={() => setToggleMenu(true)} />

        {toggleMenu && (
          <div className="app__navbar-smallscreen_overlay flex__center slide-bottom">
            <MdOutlineRestaurantMenu fontSize={27} className="overlay__close" onClick={() => setToggleMenu(false)} />

            <ul className="app__navbar-smallscreen_links">
              <li><a href="#home" onClick={() => setToggleMenu(false)}>{t('nav.home')}</a></li>
              <li><a href="#about" onClick={() => setToggleMenu(false)}>{t('nav.about')}</a></li>
              <li><a href="#menu" onClick={() => setToggleMenu(false)}>{t('nav.services')}</a></li>
              <li><a href="#awards" onClick={() => setToggleMenu(false)}>{t('nav.awards')}</a></li>
              <li><a href="#contact" onClick={() => setToggleMenu(false)}>{t('nav.contact')}</a></li>
            </ul>

            <div className="app__navbar-controls app__navbar-controls--overlay">
              <LanguageToggle />
              <ThemeToggle theme={theme} onToggle={onToggleTheme} />
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
