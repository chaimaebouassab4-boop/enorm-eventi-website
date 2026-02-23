import React from 'react';
import { MdLocationOn, MdEmail, MdWhatsapp, MdAccessTime } from 'react-icons/md';
import { SubHeading } from '../../components';
import { images } from '../../constants';
import './FindUs.css';

const cards = [
  {
    icon: <MdLocationOn color="#dcca87" size={22} />,
    title: "Zone d'Intervention",
    text: "Disponibles pour vos événements partout en Italie et à l'international. Devis personnalisé selon localisation.",
    delay: '',
  },
  {
    icon: <MdAccessTime color="#dcca87" size={22} />,
    title: 'Disponibilités',
    text: "Lundi – Dimanche : 10h00 – 22h00. Événements en soirée et week-end. Réservation recommandée à l'avance.",
    delay: 'delay-1',
  },
  {
    icon: <MdEmail color="#dcca87" size={22} />,
    title: 'Email',
    text: 'contact@ENOMISeventi.com — Réponse garantie sous 24h pour toute demande de devis ou information.',
    delay: 'delay-2',
  },
  {
    icon: <MdWhatsapp color="#dcca87" size={22} />,
    title: 'WhatsApp',
    text: 'Contactez-nous directement sur WhatsApp pour un échange rapide et personnalisé.',
    delay: 'delay-3',
  },
];

const FindUs = () => (
  <div className="app__bg app__wrapper section__padding" id="contact">

    <div className="app__wrapper_info">
      <div className="reveal from-left">
        <SubHeading title="Venez Nous Rencontrer" />
        <h1 className="headtext__cormorant" style={{ marginBottom: '1.5rem' }}>Nous Trouver</h1>
      </div>

      <p className="p__opensans reveal from-left delay-1" style={{ marginBottom: '2rem', lineHeight: '1.8' }}>
        ENOMIS EVENTI se déplace partout en Italie et à l'international pour sublimer
        vos événements les plus précieux. Que ce soit un mariage en Toscane, une soirée
        VIP à Milan ou un événement d'entreprise à Rome, nous sommes là pour vous.
      </p>

      <div className="app__findus-cards">
        {cards.map((card) => (
          <div key={card.title} className={`app__findus-card reveal from-left ${card.delay}`}>
            <div className="app__findus-card_icon">{card.icon}</div>
            <div>
              <p className="p__cormorant" style={{ color: '#dcca87', fontSize: '1.1rem' }}>{card.title}</p>
              <p className="p__opensans">{card.text}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="reveal from-bottom delay-4" style={{ marginTop: '2rem' }}>
        <button type="button" className="custom__button">Demander un Devis Gratuit</button>
      </div>
    </div>

    <div className="app__wrapper_img reveal from-right delay-2">
      <img src={images.gallery05}  alt="événement 1" />
      <img src={images.gallery044} alt="événement 2" />
      <img src={images.gallery022} alt="événement 3" />
    </div>

  </div>
);

export default FindUs;