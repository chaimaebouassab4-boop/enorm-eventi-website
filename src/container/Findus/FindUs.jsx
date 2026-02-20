import React from 'react';
import { MdLocationOn, MdEmail, MdWhatsapp, MdAccessTime } from 'react-icons/md';
import { SubHeading } from '../../components';
import { images } from '../../constants';
import './FindUs.css';

const FindUs = () => (
  <div className="app__bg app__wrapper section__padding" id="contact">
    <div className="app__wrapper_info">
      <SubHeading title="Venez Nous Rencontrer" />
      <h1 className="headtext__cormorant" style={{ marginBottom: '1.5rem' }}>Nous Trouver</h1>

      <p className="p__opensans" style={{ marginBottom: '2rem', lineHeight: '1.8' }}>
        ENORM EVENTI se déplace partout en Italie et à l'international pour sublimer
        vos événements les plus précieux. Que ce soit un mariage en Toscane, une soirée
        VIP à Milan ou un événement d'entreprise à Rome, nous sommes là pour vous.
      </p>

      {/* Cards contact */}
      <div className="app__findus-cards">

        <div className="app__findus-card">
          <div className="app__findus-card_icon">
            <MdLocationOn color="#dcca87" size={22} />
          </div>
          <div>
            <p className="p__cormorant" style={{ color: '#dcca87', fontSize: '1.1rem' }}>Zone d'Intervention</p>
            <p className="p__opensans">Disponibles pour vos événements partout en Italie et à l'international. Devis personnalisé selon localisation.</p>
          </div>
        </div>

        <div className="app__findus-card">
          <div className="app__findus-card_icon">
            <MdAccessTime color="#dcca87" size={22} />
          </div>
          <div>
            <p className="p__cormorant" style={{ color: '#dcca87', fontSize: '1.1rem' }}>Disponibilités</p>
            <p className="p__opensans">Lundi – Dimanche : 10h00 – 22h00. Événements en soirée et week-end. Réservation recommandée à l'avance.</p>
          </div>
        </div>

        <div className="app__findus-card">
          <div className="app__findus-card_icon">
            <MdEmail color="#dcca87" size={22} />
          </div>
          <div>
            <p className="p__cormorant" style={{ color: '#dcca87', fontSize: '1.1rem' }}>Email</p>
            <p className="p__opensans">contact@enormeventi.com — Réponse garantie sous 24h pour toute demande de devis ou information.</p>
          </div>
        </div>

        <div className="app__findus-card">
          <div className="app__findus-card_icon">
            <MdWhatsapp color="#dcca87" size={22} />
          </div>
          <div>
            <p className="p__cormorant" style={{ color: '#dcca87', fontSize: '1.1rem' }}>WhatsApp</p>
            <p className="p__opensans">Contactez-nous directement sur WhatsApp pour un échange rapide et personnalisé.</p>
          </div>
        </div>

      </div>

      <button type="button" className="custom__button" style={{ marginTop: '2rem' }}>
        Demander un Devis Gratuit
      </button>
    </div>

    {/* Images à droite */}
    <div className="app__wrapper_img">
      <img src={images.gallery05}  alt="événement 1" />
      <img src={images.gallery044} alt="événement 2" />
      <img src={images.gallery022} alt="événement 3" />
    </div>
  </div>
);

export default FindUs;