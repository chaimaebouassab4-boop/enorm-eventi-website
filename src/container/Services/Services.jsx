import React, { useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import {
  FaWineGlassAlt,
  FaCocktail,
  FaConciergeBell,
  FaBriefcase,
  FaCheckCircle,
  FaArrowRight,
} from 'react-icons/fa';
import './Services.css';
import images from '../../constants/images';

const Services = () => {
  const { t } = useTranslation();

  const cards = useMemo(
    () => [
      {
        image: images.fiat500,
        icon: <FaWineGlassAlt />,
        titleKey: 'services.cards.wine.title',
        descKey: 'services.cards.wine.desc',
        pointsKey: 'services.cards.wine.points',
      },
      {
        image: images.cocktails,
        icon: <FaCocktail />,
        titleKey: 'services.cards.cocktail.title',
        descKey: 'services.cards.cocktail.desc',
        pointsKey: 'services.cards.cocktail.points',
      },
      {
        image: images.dinner,
        icon: <FaConciergeBell />,
        titleKey: 'services.cards.dinner.title',
        descKey: 'services.cards.dinner.desc',
        pointsKey: 'services.cards.dinner.points',
      },
      {
        image: images.corporate,
        icon: <FaBriefcase />,
        titleKey: 'services.cards.corporate.title',
        descKey: 'services.cards.corporate.desc',
        pointsKey: 'services.cards.corporate.points',
      },
    ],
    []
  );

  const scrollToContact = () => {
    const el = document.querySelector('#contact');
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    else window.location.hash = '#contact';
  };

  return (
    <section className="en-sv" id="services">
      <div className="en-sv__container">
        {/* Header */}
        <div className="en-sv__head">
          <p className="en-sv__kicker">{t('services.kicker')}</p>
          <h2 className="en-sv__title">{t('services.title')}</h2>
          <p className="en-sv__subtitle">{t('services.subtitle')}</p>
        </div>

        {/* Cards */}
        <div className="en-sv__grid">
          {cards.map((c, idx) => {
            const points = t(c.pointsKey, { returnObjects: true });
            return (
              <article className="en-sv__card" key={idx}>
                <div className="en-sv__cardTop">
                  <div className="en-sv__icon">{c.icon}</div>
                  <h3 className="en-sv__cardTitle">{t(c.titleKey)}</h3>
                </div>
                <p className="en-sv__cardDesc">{t(c.descKey)}</p>

                <ul className="en-sv__points">
                  {(Array.isArray(points) ? points : []).map((p, i) => (
                    <li key={i}>
                      <FaCheckCircle className="en-sv__check" />
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>

                <button className="en-sv__miniCta" type="button" onClick={scrollToContact}>
                  {t('services.cardCta')}
                  <FaArrowRight />
                </button>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;