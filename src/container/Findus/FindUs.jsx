import React, { useEffect, useRef } from 'react';
import { MdLocationOn, MdEmail, MdWhatsapp } from 'react-icons/md';
import { images } from '../../constants';
import './FindUs.css';
import { useNavigate } from 'react-router-dom';

const cards = [
  {
    icon: <MdLocationOn size={18} />,
    title: "Zone d'Intervention",
    text: "Disponibles pour vos événements partout en Italie et à l'international. Devis personnalisé selon localisation.",
    delay: 0,
    number: '01',
  },
  {
    icon: <MdEmail size={18} />,
    title: 'Email',
    text: 'contact@ENOMISeventi.com — Réponse garantie sous 24h pour toute demande de devis ou information.',
    delay: 160,
    number: '02',
  },
  {
    icon: <MdWhatsapp size={18} />,
    title: 'WhatsApp',
    text: 'Contactez-nous directement sur WhatsApp pour un échange rapide et personnalisé.',
    delay: 240,
    number: '03',
  },
];

const FindUs = () => {
  const sectionRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add('fu--in-view');
        });
      },
      { threshold: 0.06 }
    );

    const el = sectionRef.current;
    if (el) observer.observe(el);
    return () => el && observer.unobserve(el);
  }, []);

  return (
    <section className="fu" id="contact" ref={sectionRef}>
      <div className="fu__grain" aria-hidden="true" />
      <span className="fu__watermark" aria-hidden="true">ENOMIS</span>

      <div className="fu__inner">
        <div className="fu__left">
          {/* <div className="fu__eyebrow">
            <span className="fu__eyebrow-line" />
            <span>Venez Nous Rencontrer</span>
          </div> */}

          <h2 className="fu__title">
            Venez nous <em>rencontrer</em>
          </h2>

          <p className="fu__lead">
            ENOMIS EVENTI se déplace partout en Italie et à l'international
            pour sublimer vos événements les plus précieux — mariage en Toscane,
            soirée VIP à Milan, événement d'entreprise à Rome.
          </p>

          <div className="fu__cards">
            {cards.map((card) => (
              <div className="fu__card" key={card.title} style={{ '--delay': `${card.delay}ms` }}>
                <span className="fu__card-num">{card.number}</span>
                <div className="fu__card-icon">{card.icon}</div>
                <div className="fu__card-body">
                  <p className="fu__card-title">{card.title}</p>
                  <p className="fu__card-text">{card.text}</p>
                </div>
              </div>
            ))}
          </div>

          <button
            type="button"
            className="fu__cta"
            onClick={() => navigate('/contact?scroll=form')}
          >
            <span>Demander un Devis Gratuit</span>
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
              <path d="M2.5 7h9M8 3.5l3.5 3.5L8 10.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </div>

        <div className="fu__right">
          <div className="fu__mosaic">
            <div className="fu__photo fu__photo--a">
              <img src={images.gallery05} alt="Événement ENOMIS" />
              <div className="fu__photo-caption" />
            </div>

            <div className="fu__photo fu__photo--b">
              <img src={images.gallery044} alt="Bar mobile vintage" />
            </div>

            <div className="fu__photo fu__photo--c">
              <img src={images.gallery022} alt="Événement premium" />
            </div>

            <div className="fu__badge">
              <span className="fu__badge-stars">★★★★★</span>
              <span className="fu__badge-label">Excellence</span>
            </div>

            <div className="fu__deco-ring" aria-hidden="true" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FindUs;
