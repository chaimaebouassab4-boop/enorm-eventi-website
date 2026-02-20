import React from 'react';
import { BsArrowLeftShort, BsArrowRightShort } from 'react-icons/bs';
import { useTranslation } from 'react-i18next';
import { SubHeading } from '../../components';
import { images } from '../../constants';
import './Gallery.css';

const Gallery = () => {
  const scrollRef = React.useRef(null);
  const { t } = useTranslation();

  const scroll = (direction) => {
    const { current } = scrollRef;

    if (direction === 'left') {
      current.scrollLeft -= 300;
    } else {
      current.scrollLeft += 300;
    }
  };

  return (
    <div className="app__gallery flex__center section__padding">
      <div className="app__gallery-content">
        <SubHeading title={t('gallery.subtitle')} />
        <h1 className="headtext__cormorant">{t('gallery.title')}</h1>

        <p className="p__opensans" style={{ color: 'var(--color-grey)', marginTop: '2rem' }}>
          {t('gallery.description')}
        </p>

        <button type="button" className="custom__button">
          {t('gallery.cta')}
        </button>
      </div>

      <div className="app__gallery-images">
        <div className="app__gallery-images_container" ref={scrollRef}>
          {[images.gallery01, images.gallery02, images.gallery03, images.gallery04, images.gallery05].map((image, index) => (
            <div className="app__gallery-images_card flex__center" key={`gallery_image-${index + 1}`}>
              <img src={image} alt={`enorm_event_${index + 1}`} />
            </div>
          ))}
        </div>

        <div className="app__gallery-images_arrows">
          <BsArrowLeftShort className="gallery__arrow-icon" onClick={() => scroll('left')} />
          <BsArrowRightShort className="gallery__arrow-icon" onClick={() => scroll('right')} />
        </div>
      </div>
    </div>
  );
};

export default Gallery;
