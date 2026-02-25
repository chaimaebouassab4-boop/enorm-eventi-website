import { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import './Navbar.css';
import logo from '../../assets/finallogo.png';
import LangToggle from '../LangToggle/LangToggle';

const navItems = [
  { to: '/',         label: 'Accueil',  end: true  },
  { to: '/apropos',  label: 'À Propos', end: false },
  { to: '/services', label: 'Services', end: false },
  { to: '/galerie',  label: 'Galerie',  end: false },
  { to: '/contact',  label: 'Contact',  end: false },
];

const Navbar = ({ theme, onToggleTheme }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => { setMenuOpen(false); }, [location]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className={`en-navbar ${scrolled ? 'en-navbar--scrolled' : ''}`}>
      <div className="en-navbar__inner">

        <Link to="/" className="en-navbar__logo">
          <img src={logo} alt="ENOMIS EVENTI" className="en-navbar__logo-img" />
        </Link>

        <nav className="en-navbar__nav">
          {navItems.map(({ to, label, end }) => (
            <NavLink key={to} to={to} end={end}
              className={({ isActive }) =>
                `en-navbar__link${isActive ? ' en-navbar__link--active' : ''}`
              }
            >
              {({ isActive }) => (
                <>{label}{isActive && <span className="en-navbar__link-bar" />}</>
              )}
            </NavLink>
          ))}
        </nav>

        <div className="en-navbar__actions">
          <LangToggle />
         
    
          <Link to="/contact?scroll=form" className="en-btn en-btn--primary">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
              <rect x="3" y="4" width="18" height="18" rx="2"/>
              <line x1="16" y1="2" x2="16" y2="6"/>
              <line x1="8" y1="2" x2="8" y2="6"/>
              <line x1="3" y1="10" x2="21" y2="10"/>
            </svg>
  Réserver un événement          </Link>
        </div>

        <button
          className={`en-navbar__burger ${menuOpen ? 'en-navbar__burger--open' : ''}`}
          onClick={() => setMenuOpen((v) => !v)}
          aria-label={menuOpen ? 'Fermer' : 'Menu'}
        >
          <span /><span /><span />
        </button>
      </div>

      <div className={`en-navbar__mobile ${menuOpen ? 'en-navbar__mobile--open' : ''}`}>
        <nav className="en-navbar__mobile-nav">
          {navItems.map(({ to, label, end }) => (
            <NavLink key={to} to={to} end={end}
              className={({ isActive }) =>
                `en-navbar__mobile-link${isActive ? ' en-navbar__mobile-link--active' : ''}`
              }
            >
              {label}
            </NavLink>
          ))}
        </nav>
        <div className="en-navbar__mobile-actions">
          <Link to="/galerie"  className="en-btn en-btn--ghost   en-btn--full">Galerie</Link>
          <Link to="/services" className="en-btn en-btn--outline en-btn--full">Nos Services</Link>
          <Link to="/contact"  className="en-btn en-btn--primary en-btn--full">Reserver</Link>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
