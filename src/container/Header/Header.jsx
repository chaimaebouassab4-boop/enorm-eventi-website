import React from 'react';
import { useTranslation } from 'react-i18next';
import { SubHeading } from '../../components';
import { images } from '../../constants';
import './Header.css';

const Header = () => {
  const { t } = useTranslation();

  return (
    <>
      <div className="app__header app__wrapper section__padding" id="home">

        {/* ── Côté gauche ── */}
        <div className="app__wrapper_info">
          <div className="reveal from-left">
            <SubHeading title={t('header.subtitle')} />
          </div>

          <h1 className="app__header-h1 reveal from-left delay-1">
            {t('header.title')}
          </h1>

          <p className="p__opensans reveal from-left delay-2" style={{ margin: '1.5rem 0' }}>
            {t('header.description')}
          </p>

          {/* Badges services */}
          <div className="app__header-badges reveal from-left delay-3">
            <span className="app__header-badge">🍾 Bar à Vin</span>
            <span className="app__header-badge">🚐 Bar Mobile</span>
            <span className="app__header-badge">✨ Premium</span>
          </div>

          <div className="reveal from-bottom delay-4" style={{ marginTop: '2rem' }}>
            <button type="button" className="custom__button">{t('header.cta')}</button>
          </div>
        </div>

        {/* ── Côté droit ── */}
        <div className="app__wrapper_img reveal from-right delay-1">
          <div className="app__header-img-frame">
            <img src={images.welcome} alt="ENORM EVENTI Bar Mobile" />
            {/* Badge flottant */}
            <div className="app__header-floating-badge">
              <span className="app__header-floating-badge_num">100%</span>
              <span className="app__header-floating-badge_txt">Premium</span>
            </div>
          </div>
        </div>

      </div>

      {/* ── Bande de photos défilantes ── */}
      <div className="app__header-gallery">
        <div className="app__header-gallery_track">
          {[...Array(2)].map((_, i) => (
            <React.Fragment key={i}>
              <div className="app__header-gallery_item"><img src={images.gallery01} alt="event 1" /></div>
              <div className="app__header-gallery_item"><img src={images.gallery02} alt="event 2" /></div>
              <div className="app__header-gallery_item"><img src={images.gallery03} alt="event 3" /></div>
              <div className="app__header-gallery_item"><img src={images.gallery04} alt="event 4" /></div>
            </React.Fragment>
          ))}
        </div>
      </div>
    </>
  );
};

export default Header;