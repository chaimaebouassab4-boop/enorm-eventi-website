import React, { useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { MdKeyboardArrowDown } from 'react-icons/md';
import { GiWineGlass, GiSteeringWheel } from 'react-icons/gi';
import { FaStar, FaCalendarAlt, FaFileAlt } from 'react-icons/fa';
import { MdDiamond } from 'react-icons/md';
import { images } from '../../constants';
import './Hero.css';

/* ── Fallback si i18n ne charge pas ── */
const fallback = {
  kicker: 'ENOMIS EVENTI',
  title: "L'icône italienne qui transforme vos événements en souvenirs inoubliables",
  description:
    "Chez ENOMIS EVENTI, nous avons réinventé la restauration événementielle à travers une légende : la Fiat 500 vintage. Plus qu'un restaurant mobile, c'est une expérience sensorielle, un symbole de raffinement et d'émotion.",
  cta_primary: 'Réserver un événement',
  cta_secondary: 'Demander un devis',
  badge1: 'Fiat 500 Vintage',
  badge2: 'Restauration Premium',
  badge3: 'Événementiel',
  stat1_num: '200+',
  stat1_label: 'Événements',
  stat2_num: '5★',
  stat2_label: 'Avis clients',
  stat3_num: '8+',
  stat3_label: "Années d'expérience",
  overlay_label: '100% Premium',
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

  const galleryImages = [
    { src: images.gallery01, alt: 'Événement 1' },
    { src: images.gallery02, alt: 'Événement 2' },
    { src: images.gallery03, alt: 'Événement 3' },
    { src: images.gallery04, alt: 'Événement 4' },
  ];

  return (
    <section className="hero" id="home" ref={heroRef}>

      {/* Grain texture overlay */}
      <div className="hero__grain" aria-hidden="true" />

      <div className={`hero__inner ${visible ? 'hero__inner--visible' : ''}`}>

        {/* ════════════════════════════════
            COLONNE GAUCHE
            ════════════════════════════════ */}
        <div className="hero__left">

          {/* Kicker */}
          <p className="hero__kicker hero__anim hero__anim--1">
            <span className="hero__kicker-line" />
            {tx('kicker')}
          </p>

          {/* H1 */}
          <h1 className="hero__title hero__anim hero__anim--2">
            {tx('title')}
          </h1>

          {/* Description */}
          <p className="hero__description hero__anim hero__anim--3">
            {tx('description')}
          </p>

          {/* Badges */}
          <div className="hero__badges hero__anim hero__anim--4">
            <span className="hero__badge">
              <GiSteeringWheel size={13} /> {tx('badge1')}
            </span>
            <span className="hero__badge">
              <GiWineGlass size={13} /> {tx('badge2')}
            </span>
            <span className="hero__badge">
              <MdDiamond size={13} /> {tx('badge3')}
            </span>
          </div>

          {/* CTAs */}
          <div className="hero__ctas hero__anim hero__anim--5">
            <button className="hero__btn hero__btn--primary" type="button">
              <FaCalendarAlt size={14} />
              {tx('cta_primary')}
            </button>
            <button className="hero__btn hero__btn--secondary" type="button">
              <FaFileAlt size={14} />
              {tx('cta_secondary')}
            </button>
          </div>

          {/* Stats */}
          <div className="hero__stats hero__anim hero__anim--6">
            <div className="hero__stat">
              <span className="hero__stat-num">{tx('stat1_num')}</span>
              <span className="hero__stat-label">{tx('stat1_label')}</span>
            </div>
            <div className="hero__stat-divider" />
            <div className="hero__stat">
              <span className="hero__stat-num">{tx('stat2_num')}</span>
              <span className="hero__stat-label">{tx('stat2_label')}</span>
            </div>
            <div className="hero__stat-divider" />
            <div className="hero__stat">
              <span className="hero__stat-num">{tx('stat3_num')}</span>
              <span className="hero__stat-label">{tx('stat3_label')}</span>
            </div>
          </div>
        </div>

        {/* ════════════════════════════════
            COLONNE DROITE
            ════════════════════════════════ */}
        <div className="hero__right hero__anim hero__anim--2">

          {/* Image principale */}
          <div className="hero__main-img-wrap">
            <img
              src={images.welcome}
              alt="ENOMIS EVENTI Fiat 500"
              className="hero__main-img"
            />

            {/* Overlay card */}
            <div className="hero__img-card">
              <FaStar size={12} className="hero__img-card-icon" />
              <div>
                <p className="hero__img-card-title">{tx('overlay_label')}</p>
                <p className="hero__img-card-sub">{tx('overlay_sub')}</p>
              </div>
            </div>

            {/* Décoration dorée */}
            <div className="hero__img-deco" aria-hidden="true" />
          </div>

          {/* Mini galerie */}
          <div className="hero__gallery">
            {galleryImages.map((img, i) => (
              <div
                key={i}
                className="hero__gallery-item"
                style={{ animationDelay: `${0.6 + i * 0.1}s` }}
              >
                <img src={img.src} alt={img.alt} />
                <div className="hero__gallery-overlay" />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="hero__scroll-indicator">
        <span className="hero__scroll-label">{tx('scroll_label')}</span>
        <div className="hero__scroll-arrow">
          <MdKeyboardArrowDown size={22} />
        </div>
      </div>

    </section>
  );
};

export default Hero;
