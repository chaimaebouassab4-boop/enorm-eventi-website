import React from 'react';
import { useTranslation } from 'react-i18next';
import { images } from '../../constants';
import './Chef.css';

/* ── Fallback si i18n ne charge pas ── */
const fallback = {
  subtitle: 'Notre Histoire',
  title: "Une passion italienne au service de vos événements",
  quote: "Chaque événement mérite une touche d'élégance et de raffinement inoubliable.",
  description:
    "ENOMIS EVENTI réinvente la restauration événementielle avec la légendaire Fiat 500 vintage. Nous proposons une expérience sensorielle unique alliant gastronomie italienne, art de vivre et sophistication, pour transformer chacun de vos événements en un souvenir inoubliable.",
  signatureRole: 'Bar Mobile Vintage · Événementiel Premium',
};

const Chef = () => {
  const { t, ready } = useTranslation();

  const tx = (key) => {
    if (!ready) return fallback[key] ?? '';
    const val = t(`chef.${key}`);
    return val && !val.startsWith('chef.') ? val : (fallback[key] ?? '');
  };

  return (
    <section className="chef">

      {/* ── COLONNE IMAGE ── */}
      <div className="chef__img-col">
        <div className="chef__img-deco" aria-hidden="true" />
        <div className="chef__img-wrap">
          <img
            src={images.chef}
            alt="ENOMIS EVENTI"
            className="chef__img"
          />

          {/* Badge flottant */}
          <div className="chef__img-badge">
            <span className="chef__img-badge-dot" />
            <span className="chef__img-badge-text">Fiat 500 Vintage</span>
          </div>
        </div>
      </div>

      {/* ── COLONNE TEXTE ── */}
      <div className="chef__text-col">

        {/* Kicker */}
        <p className="chef__kicker">
          <span className="chef__kicker-line" />
          {tx('subtitle')}
        </p>

        {/* Titre */}
        <h2 className="chef__title">
          {tx('title')}
        </h2>

        {/* Séparateur */}
        <div className="chef__divider" aria-hidden="true" />

        {/* Citation */}
        <div className="chef__quote-block">
          {images.quote ? (
            <img src={images.quote} alt="" className="chef__quote-icon" aria-hidden="true" />
          ) : (
            <svg className="chef__quote-icon" viewBox="0 0 40 30" fill="none" aria-hidden="true">
              <path d="M0 30V18C0 7.333 5.333 1.333 16 0l2 4C12.667 5.333 10 8.667 10 14h6V30H0zm22 0V18C22 7.333 27.333 1.333 38 0l2 4C34.667 5.333 32 8.667 32 14h6V30H22z" fill="#b86b77"/>
            </svg>
          )}
          <p className="chef__quote-text">
            {tx('quote')}
          </p>
        </div>

        {/* Description */}
        <p className="chef__desc">
          {tx('description')}
        </p>

        {/* Signature */}
        <div className="chef__sign">
          <p className="chef__sign-name">ENOMIS EVENTI</p>
          <p className="chef__sign-role">{tx('signatureRole')}</p>
        </div>
      </div>

    </section>
  );
};

export default Chef;