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
        <div className="app__wrapper_info">
          <SubHeading title={t('header.subtitle')} />
          <h1 className="app__header-h1">{t('header.title')}</h1>
          <p className="p__opensans" style={{ margin: '2rem 0' }}>
            {t('header.description')}
          </p>
          <button type="button" className="custom__button">{t('header.cta')}</button>
        </div>

        <div className="app__wrapper_img">
          <img src={images.welcome} alt="ENORM EVENTI Bar Mobile" />
        </div>
      </div>

      {/* ── Bande de photos défilantes ── */}
      <div className="app__header-gallery">
        <div className="app__header-gallery_track">
          {/* On duplique les images pour un scroll infini */}
          {[...Array(2)].map((_, loopIdx) => (
            <React.Fragment key={loopIdx}>
              <div className="app__header-gallery_item">
                <img src={images.gallery001} alt="événement 1" />
              </div>
              <div className="app__header-gallery_item">
                <img src={images.gallery022} alt="événement 2" />
              </div>
              <div className="app__header-gallery_item">
                <img src={images.gallery03} alt="événement 3" />
              </div>
              <div className="app__header-gallery_item">
                <img src={images.gallery044} alt="événement 4" />
              </div>
            </React.Fragment>
          ))}
        </div>
      </div>
    </>
  );
};

export default Header;