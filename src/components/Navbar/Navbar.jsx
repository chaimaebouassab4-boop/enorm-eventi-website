import React, { useEffect, useMemo, useState } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { MdOutlineRestaurantMenu } from 'react-icons/md';
import { useTranslation } from 'react-i18next';

import ThemeToggle from '../ThemeToggle';
import LanguageToggle from '../LanguageToggle';
import { images } from '../../constants';
import './Navbar.css';

const NAV_ITEMS = [
  { key: 'nav.home', href: '#home' },
  { key: 'nav.about', href: '#about' },
  { key: 'nav.services', href: '#menu' },     // si ton id c'est #services change ici
  { key: 'nav.awards', href: '#awards' },     // si tu n'as pas "awards", supprime
  { key: 'nav.contact', href: '#contact' },
];

const Navbar = ({ theme, onToggleTheme }) => {
  const { t } = useTranslation();
  const [toggleMenu, setToggleMenu] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeHash, setActiveHash] = useState('#home');

  const items = useMemo(() => NAV_ITEMS, []);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 8);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const onHash = () => {
      const h = window.location.hash || '#home';
      setActiveHash(h);
    };
    window.addEventListener('hashchange', onHash);
    onHash();
    return () => window.removeEventListener('hashchange', onHash);
  }, []);

  const handleNavClick = (href) => {
    setActiveHash(href);
    setToggleMenu(false);
  };

  return (
    <header className={`en__nav ${isScrolled ? 'en__nav--scrolled' : ''}`} role="banner">
      <nav className="en__nav-inner" aria-label="Primary">
        {/* Logo */}
        <a className="en__brand" href="#home" onClick={() => handleNavClick('#home')}>
          <img
            src={images.logoooo}
            alt="ENOMIS EVENTI"
            className="en__brand-logo"
          />
          <div className="en__brand-text">
            <span className="en__brand-name">ENOMIS EVENTI</span>
            <span className="en__brand-tag">{t('nav.tagline', 'Fiat 500 • Bar & Restauration Premium')}</span>
          </div>
        </a>

        {/* Desktop links */}
        <ul className="en__links" role="list">
          {items.map((it) => (
            <li key={it.href} className="en__link-item">
              <a
                href={it.href}
                onClick={() => handleNavClick(it.href)}
                className={`en__link ${activeHash === it.href ? 'is-active' : ''}`}
              >
                {t(it.key)}
              </a>
            </li>
          ))}
        </ul>

        {/* Actions */}
        <div className="en__actions">
          <div className="en__controls">
            <LanguageToggle />
            <ThemeToggle theme={theme} onToggle={onToggleTheme} />
          </div>

          <div className="en__cta">
            <a href="#contact" className="en__btn en__btn--ghost" onClick={() => handleNavClick('#contact')}>
              {t('nav.quote', 'Devis')}
            </a>
            <a href="#contact" className="en__btn en__btn--primary" onClick={() => handleNavClick('#contact')}>
              {t('nav.book', 'Réserver')}
            </a>
          </div>

          {/* Mobile button */}
          <button
            className="en__burger"
            type="button"
            aria-label="Open menu"
            aria-expanded={toggleMenu}
            onClick={() => setToggleMenu(true)}
          >
            <GiHamburgerMenu />
          </button>
        </div>
      </nav>

      {/* Mobile overlay */}
      {toggleMenu && (
        <div className="en__overlay" role="dialog" aria-modal="true" aria-label="Menu">
          <div className="en__overlay-top">
            <a className="en__overlay-brand" href="#home" onClick={() => handleNavClick('#home')}>
              <img src={images.logoooo} alt="ENOMIS EVENTI" />
              <span>ENOMIS EVENTI</span>
            </a>

            <button
              className="en__overlay-close"
              type="button"
              aria-label="Close menu"
              onClick={() => setToggleMenu(false)}
            >
              <MdOutlineRestaurantMenu />
            </button>
          </div>

          <ul className="en__overlay-links" role="list">
            {items.map((it) => (
              <li key={it.href}>
                <a
                  href={it.href}
                  onClick={() => handleNavClick(it.href)}
                  className={activeHash === it.href ? 'is-active' : ''}
                >
                  {t(it.key)}
                </a>
              </li>
            ))}
          </ul>

          <div className="en__overlay-actions">
            <div className="en__overlay-controls">
              <LanguageToggle />
              <ThemeToggle theme={theme} onToggle={onToggleTheme} />
            </div>

            <div className="en__overlay-cta">
              <a href="#contact" className="en__btn en__btn--ghost" onClick={() => handleNavClick('#contact')}>
                {t('nav.quote', 'Demander un devis')}
              </a>
              <a href="#contact" className="en__btn en__btn--primary" onClick={() => handleNavClick('#contact')}>
                {t('nav.book', 'Réserver un événement')}
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;