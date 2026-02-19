import React from 'react';
import { SubHeading } from '../../components';
import { images } from '../../constants';
import './FindUs.css';

const FindUs = () => (
  <div className="app__bg app__wrapper section__padding" id="contact">
    <div className="app__wrapper_info">
      <SubHeading title="Venez nous Rencontrer" />
      <h1 className="headtext__cormorant" style={{ marginBottom: '3rem' }}>Nous Trouver</h1>
      <div className="app__findus-cards">
        <div className="app__findus-card">
          <p className="p__cormorant" style={{ color: '#dcca87', fontSize: '1.5rem' }}>📍 Zone d'Intervention</p>
          <p className="p__opensans">Disponibles pour vos événements<br />partout en ITALIE et à l'international.<br />Devis personnalisé selon localisation.</p>
        </div>
        <div className="app__findus-card">
          <p className="p__cormorant" style={{ color: '#dcca87', fontSize: '1.5rem' }}>🕐 Disponibilités</p>
          <p className="p__opensans">Lun – Dim : 10h00 – 22h00<br />Événements en soirée & week-end<br />Réservation recommandée</p>
        </div>
        <div className="app__findus-card">
          <p className="p__cormorant" style={{ color: '#dcca87', fontSize: '1.5rem' }}>📞 Contact Direct</p>
          <p className="p__opensans">📧 contact@enormeventi.com<br />📱 Contactez-nous via WhatsApp<br />Réponse sous 24h</p>
        </div>
      </div>
      <button type="button" className="custom__button" style={{ marginTop: '2rem' }}>
        Demander un Devis Gratuit
      </button>
    </div>

    <div className="app__wrapper_img">
      <img src={images.findus} alt="finus_img" />
    </div>
  </div>
);

export default FindUs;