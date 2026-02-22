import React from 'react';
import { useTranslation } from 'react-i18next';
import { MdDirectionsCar, MdDiamond } from 'react-icons/md';
import { GiWineGlass } from 'react-icons/gi';
import { FaAward } from 'react-icons/fa';
import { SubHeading } from '../../components';
import { images } from '../../constants';
import './Header.css';

const Header = () => {
  const { t } = useTranslation();

  return (
    <>
      <div className="app__header app__wrapper section__padding" id="home">

        {/* ── Gauche ── */}
        <div className="app__wrapper_info">
          <div className="reveal from-left">
            <SubHeading title={t('header.subtitle')} />
          </div>
          <h1 className="app__header-h1 reveal from-left delay-1">
            {t('header.title')}
          </h1>
          <p className="p__opensans reveal from-left delay-2" style={{ margin: '1.2rem 0' }}>
            {t('header.description')}
          </p>

          {/* Badges */}
          <div className="app__header-badges reveal from-left delay-3">
            <span className="app__header-badge"><GiWineGlass size={14}/> Bar à Vin</span>
            <span className="app__header-badge"><MdDirectionsCar size={14}/> Bar Mobile</span>
            <span className="app__header-badge"><MdDiamond size={14}/> Premium</span>
          </div>

          {/* Stats */}
          <div className="app__header-stats reveal from-left delay-4">
            <div className="app__header-stat">
              <span className="app__header-stat_num">200+</span>
              <span className="app__header-stat_label">Événements</span>
            </div>
            <div className="app__header-stat_divider" />
            <div className="app__header-stat">
              <span className="app__header-stat_num">5★</span>
              <span className="app__header-stat_label">Avis clients</span>
            </div>
            <div className="app__header-stat_divider" />
            <div className="app__header-stat">
              <span className="app__header-stat_num">8+</span>
              <span className="app__header-stat_label">Années exp.</span>
            </div>
          </div>

          <div className="reveal from-bottom delay-5" style={{ marginTop: '1.8rem' }}>
            <button type="button" className="custom__button">{t('header.cta')}</button>
          </div>
        </div>

        {/* ── Droite — photos ── */}
        <div className="app__header-photo-grid reveal from-right delay-1">
          <div className="app__header-photo-main">
            <img src={images.welcome} alt="ENORM EVENTI" />
            <div className="app__header-floating-badge">
              <FaAward size={16} />
              <span className="app__header-floating-badge_num">100%</span>
              <span className="app__header-floating-badge_txt">Premium</span>
            </div>
          </div>
          <div className="app__header-photo-secondary">
            <img src={images.gallery01} alt="Événement" />
            <div className="app__header-photo-overlay">
              <p>Bar Mobile Vintage</p>
            </div>
          </div>
        </div>

      </div>

      {/* ── Bande défilante ── */}
      <div className="app__header-gallery">
        <div className="app__header-gallery_track">
          {[...Array(2)].map((_, i) => (
            <React.Fragment key={i}>
              <div className="app__header-gallery_item"><img src={images.gallery01} alt="e1" /></div>
              <div className="app__header-gallery_item"><img src={images.gallery02} alt="e2" /></div>
              <div className="app__header-gallery_item"><img src={images.gallery03} alt="e3" /></div>
              <div className="app__header-gallery_item"><img src={images.gallery04} alt="e4" /></div>
            </React.Fragment>
          ))}
        </div>
      </div>
    </>
  );
};

export default Header;