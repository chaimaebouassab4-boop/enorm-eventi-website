import { useState, useEffect } from 'react';
import { images } from '../../constants';
import './Navbar.css';
import logo from '../../assets/finallogo.png';
const navItems = [
  { href: '#home',          label: 'Accueil' },
  { href: '#about',         label: 'À Propos' },
  { href: '#services',      label: 'Services' },
  { href: '#distinctions',  label: 'Distinctions' },
  { href: '#contact',       label: 'Contact' },
];

const Navbar = ({ theme, onToggleTheme }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState('#home');

  /* Sticky scroll effect */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  /* Smooth scroll + active state */
  const handleNav = (e, href) => {
    e.preventDefault();
    setActive(href);
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <header className={`en-navbar ${scrolled ? 'en-navbar--scrolled' : ''}`}>
      <div className="en-navbar__inner">

        {/* ── Logo ── */}
        {/* <a href="#home" className="en-navbar__logo" onClick={(e) => handleNav(e, '#home')}>
          <div className="en-navbar__logo-badge">E</div>
          <div className="en-navbar__logo-text">
            <span className="en-navbar__logo-main">ENOMIS</span>
            <span className="en-navbar__logo-sub">EVENTI</span>
          </div>
        </a> */}

        <a
  href="#home"
  className="en-navbar__logo"
  onClick={(e) => handleNav(e, '#home')}
>
  <img src={logo} alt="ENOMIS EVENTI" className="en-navbar__logo-img" />
</a>

        {/* ── Navigation desktop ── */}
        <nav className="en-navbar__nav" aria-label="Navigation principale">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={`en-navbar__link ${active === item.href ? 'en-navbar__link--active' : ''}`}
              onClick={(e) => handleNav(e, item.href)}
            >
              {item.label}
              {active === item.href && <span className="en-navbar__link-bar" />}
            </a>
          ))}
        </nav>

        {/* ── Boutons CTA desktop ── */}
        <div className="en-navbar__actions">
          {/* Ghost — Galerie */}
          <a
            href="#gallery"
            className="en-btn en-btn--ghost"
            onClick={(e) => handleNav(e, '#gallery')}
          >
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/></svg>
            Galerie
          </a>

          {/* Solid — Menu & Services */}
          <a
            href="#services"
            className="en-btn en-btn--outline"
            onClick={(e) => handleNav(e, '#services')}
          >
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
            Nos Services
          </a>

          {/* Primary — Réserver */}
          <a
            href="#contact"
            className="en-btn en-btn--primary"
            onClick={(e) => handleNav(e, '#contact')}
          >
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
            Réserver un événement
          </a>
        </div>

        {/* ── Burger mobile ── */}
        <button
          className={`en-navbar__burger ${menuOpen ? 'en-navbar__burger--open' : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
        >
          <span /><span /><span />
        </button>
      </div>

      {/* ── Menu mobile ── */}
      <div className={`en-navbar__mobile ${menuOpen ? 'en-navbar__mobile--open' : ''}`}>
        <nav className="en-navbar__mobile-nav">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={`en-navbar__mobile-link ${active === item.href ? 'en-navbar__mobile-link--active' : ''}`}
              onClick={(e) => handleNav(e, item.href)}
            >
              {item.label}
            </a>
          ))}
        </nav>
        <div className="en-navbar__mobile-actions">
          <a href="#gallery"  className="en-btn en-btn--ghost   en-btn--full" onClick={(e) => handleNav(e, '#gallery')}>Galerie</a>
          <a href="#services" className="en-btn en-btn--outline  en-btn--full" onClick={(e) => handleNav(e, '#services')}>Nos Services</a>
          <a href="#contact"  className="en-btn en-btn--primary  en-btn--full" onClick={(e) => handleNav(e, '#contact')}>Réserver un événement</a>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
