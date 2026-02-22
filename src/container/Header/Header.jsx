import React, { useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { MdKeyboardArrowDown } from 'react-icons/md';
import { GiWineGlass, GiSteeringWheel } from 'react-icons/gi';
import { FaStar } from 'react-icons/fa';
import { MdDiamond } from 'react-icons/md';
import { images } from '../../constants';
import './Header.css';

/* ── Fallback si i18n ne charge pas ── */
const fallback = {
  kicker: 'ENOMIS EVENTI',
  title: "L'icône italienne qui transforme vos événements en souvenirs inoubliables",
  description:
    "Chez ENOMIS EVENTI, nous avons réinventé la restauration événementielle à travers une légende : la Fiat 500 vintage. Plus qu'un restaurant mobile, c'est une expérience sensorielle, un symbole de raffinement et d'émotion.",
  badge1: 'Fiat 500 Vintage',
  badge2: 'Restauration Premium',
  badge3: 'Événementiel ',

  overlay_sub: 'Fiat 500 Vintage',
  scroll_label: 'Découvrir',
};

const Hero = () => {
  const { t, ready } = useTranslation();
  const heroRef = useRef(null);
  const [visible, setVisible] = useState(false);

  /* Stagger reveal au montage */
  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  /* Helper : récupère la traduction ou le fallback */
  const tx = (key) => {
    if (!ready) return fallback[key] ?? '';
    const val = t(`hero.${key}`);
    return val && !val.startsWith('hero.') ? val : (fallback[key] ?? '');
  };
  return (
    <section className="hs" id="home" ref={heroRef}>

      {/* ── Image de fond ── MANQUAIT dans l'ancien JSX */}
      <div
        className="hs__bg"
        style={{ backgroundImage: `url(${images.grain})` }}
        aria-hidden="true"
      />

      {/* ── Overlay sombre dégradé ── MANQUAIT dans l'ancien JSX */}
      <div className="hs__overlay" aria-hidden="true" />

      {/* ── Grain texture ── */}
      <div className="hs__grain" aria-hidden="true" />

      {/* ════════════════════════════════
          CONTENU PRINCIPAL (deux colonnes)
          ════════════════════════════════ */}
      <div className={`hs__inner ${visible ? 'hs__inner--visible' : ''}`}>

        {/* ── COLONNE GAUCHE ── */}
        <div className="hs__left">

          {/* Kicker */}
          <p className="hs__kicker hs__anim hs__anim--1">
            <span className="hs__kicker-line" />
            {tx('kicker')}
          </p>

          {/* H1 */}
          <h1 className="hs__title hs__anim hs__anim--2">
            {tx('title')}
          </h1>

          {/* Description */}
          <p className="hs__desc hs__anim hs__anim--3">
            {tx('description')}
          </p>

          {/* Badges */}
          <div className="hs__badges hs__anim hs__anim--4">
            <span className="hs__badge">
              <GiSteeringWheel size={13} /> {tx('badge1')}
            </span>
            <span className="hs__badge">
              <GiWineGlass size={13} /> {tx('badge2')}
            </span>
            <span className="hs__badge">
              <MdDiamond size={13} /> {tx('badge3')}
            </span>
          </div>

        </div>

        {/* ── COLONNE DROITE ── */}
        <div className="hs__right hs__anim hs__anim--2">

          {/* Image principale */}
          <div className="hs__main-img-wrap">
            {/* <img
              src={images.welcome}
              alt="ENOMIS EVENTI Fiat 500"
              className="hs__main-img"
            /> */}

            {/* Overlay card */}
            <div className="hs__img-card">
              <FaStar size={12} className="hs__img-card-icon" />
              <div>
                <p className="hs__img-card-title">{tx('overlay_label')}</p>
                <p className="hs__img-card-sub">{tx('overlay_sub')}</p>
              </div>
            </div>

            {/* Décoration dorée */}
            <div className="hs__img-deco" aria-hidden="true" />
          </div>

          {/* Mini galerie */}
          {/* <div className="hs__gallery">
            {galleryImages.map((img, i) => (
              <div
                key={i}
                className="hs__gallery-item"
                style={{ animationDelay: `${0.6 + i * 0.1}s` }}
              >
                <img src={img.src} alt={img.alt} />
                <div className="hs__gallery-overlay" />
              </div>
            ))}
          </div> */}
        </div>
      </div>

      {/* ── Scroll indicator ── */}
      <div className="hs__scroll">
        <span className="hs__scroll-label">{tx('scroll_label')}</span>
        <div className="hs__scroll-icon">
          <MdKeyboardArrowDown size={22} />
        </div>
      </div>

    </section>
  );
};

export default Hero;

