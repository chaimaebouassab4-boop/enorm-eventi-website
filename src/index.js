import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App';
import './i18n';
// ═══════════════════════════════════════════════════════
// COLLE CE CODE dans src/index.js  JUSTE AVANT  ReactDOM.render(...)
// ou ReactDOM.createRoot(...)
// ═══════════════════════════════════════════════════════

// Lance l'observateur une fois que le DOM est prêt
document.addEventListener('DOMContentLoaded', () => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target); // une seule fois
        }
      });
    },
    { threshold: 0.12 } // déclenche quand 12% de l'élément est visible
  );

  // Observe tous les éléments avec la classe .reveal
  document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));
});

// ── Si DOMContentLoaded est déjà passé (cas SPA React), on le relance ──
setTimeout(() => {
  const observer2 = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer2.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12 }
  );
  document.querySelectorAll('.reveal:not(.visible)').forEach((el) => observer2.observe(el));
}, 500);
const container = document.getElementById('root');
const root = createRoot(container);

root.render(<App />);
