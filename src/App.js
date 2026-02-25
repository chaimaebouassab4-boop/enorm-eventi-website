import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation, Link } from 'react-router-dom';

import { Navbar } from './components';
import {
  Footer, Header, AboutUs, SpecialMenu, Chef, Intro, Laurels,
  Gallery, FindUs, ContactSection, Services
} from './container';
import ScrollToTop from './components/ScrollToTop/ScrollToTop';
import './App.css';
import './theme.css';

const THEME_STORAGE_KEY = 'ENOMIS_theme';
const getInitialTheme = () => {
  const stored = localStorage.getItem(THEME_STORAGE_KEY);
  if (stored === 'dark' || stored === 'light') return stored;
  if (window.matchMedia?.('(prefers-color-scheme: light)').matches) return 'light';
  return 'dark';
};

/* ─────────────────────────────────────────────────────
   ScrollToTopOnRoute
   - Remonte en haut à chaque changement de route
   - Re-déclenche les animations .reveal (fix page blanche)
   - Si ?scroll=form → scrolle vers le formulaire contact
───────────────────────────────────────────────────── */
const ScrollToTopOnRoute = () => {
  const { pathname, search } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });

    const timer = setTimeout(() => {
      /* ✅ Fix animations reveal — force visible après navigation */
      document.querySelectorAll('.reveal').forEach((el) => {
        el.classList.add('visible');
      });
      window.dispatchEvent(new Event('scroll'));

      /* ✅ Scroll vers formulaire si ?scroll=form */
      if (search.includes('scroll=form')) {
        const form = document.getElementById('contact-form');
        if (form) form.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, 150);

    return () => clearTimeout(timer);
  }, [pathname, search]);

  return null;
};

/* ─── Pages ─── */
const HomePage = () => (
  <>
    <Header />
    <AboutUs />
    <SpecialMenu />
    <Chef />
    <Intro />
    <Laurels />
  </>
);

const ServicesPage = () => <Services />;

const GalleryPage = () => <Gallery />;

/* ✅ AboutPage — sans Header (évite le doublon de hero) */
const AboutPage = () => (
  <>
    <AboutUs />
    <Chef />
    <Intro />
    <Laurels />
  </>
);

const ContactPage = () => (
  <>
    <FindUs />
    <ContactSection />
  </>
);

const NotFoundPage = () => (
  <div style={{
    minHeight: '70vh', display: 'flex', flexDirection: 'column',
    alignItems: 'center', justifyContent: 'center',
    background: '#FAF6EF', gap: '1rem', textAlign: 'center', padding: '2rem'
  }}>
    <span style={{ fontSize: '3rem' }}>🍾</span>
    <h1 style={{ fontFamily: 'Cormorant Upright, serif', fontSize: '6rem', color: 'rgba(184,107,119,0.2)', margin: 0 }}>404</h1>
    <p style={{ color: '#6B4423', fontFamily: 'Open Sans, sans-serif' }}>
      Cette page s'est envolée comme une bulle de champagne…
    </p>
    <Link to="/" style={{
      background: 'linear-gradient(135deg,#b86b77,#9a525d)', color: '#fff',
      borderRadius: '999px', padding: '0.7rem 1.8rem', textDecoration: 'none',
      fontFamily: 'Open Sans, sans-serif', fontWeight: 700, fontSize: '0.85rem'
    }}>
      Retour à l'accueil
    </Link>
  </div>
);

/* ─── Router ─── */
const AppRoutes = ({ theme, toggleTheme }) => (
  <>
    <ScrollToTopOnRoute />
    <Navbar theme={theme} onToggleTheme={toggleTheme} />
    <main>
      <Routes>
        <Route path="/"         element={<HomePage />}     />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/contact"  element={<ContactPage />}  />
        <Route path="/galerie"  element={<GalleryPage />}  />
        <Route path="/apropos"  element={<AboutPage />}    />
        <Route path="*"         element={<NotFoundPage />} />
      </Routes>
    </main>
    <Footer />
    <ScrollToTop />
  </>
);

/* ─── App root ─── */
const App = () => {
  const [theme, setTheme] = useState(getInitialTheme);

  useEffect(() => {
    document.body.classList.remove('theme-dark', 'theme-light');
    document.body.classList.add(`theme-${theme}`);
    localStorage.setItem(THEME_STORAGE_KEY, theme);
  }, [theme]);

  const toggleTheme = () => setTheme((t) => (t === 'dark' ? 'light' : 'dark'));

  return (
    <div className="app">
      <Router>
        <AppRoutes theme={theme} toggleTheme={toggleTheme} />
      </Router>
    </div>
  );
};

export default App;