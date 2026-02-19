import React from 'react';
import { FiFacebook, FiTwitter, FiInstagram } from 'react-icons/fi';
import { FooterOverlay, Newsletter } from '../../components';
import { images } from '../../constants';
import './Footer.css';

const Footer = () => (
  <div className="app__footer section__padding" id="login">
    <FooterOverlay />
    <Newsletter />

    <div className="app__footer-links">
      <div className="app__footer-links_contact">
        <h1 className="app__footer-headtext">Contactez-Nous</h1>
        <p className="p__opensans">📍 ITALIE & International</p>
        <p className="p__opensans">📧 contact@enormeventi.com</p>
        <p className="p__opensans">📱 Disponible sur WhatsApp</p>
      </div>

      <div className="app__footer-links_logo">
        <p className="app__footer-logo-text">ENORM EVENTI</p>
        <p className="p__opensans" style={{ color: '#aaa', marginTop: '0.5rem' }}>
          &quot;L'élégance au cœur de vos événements&quot;
        </p>
        <img src={images.spoon} className="spoon__img" style={{ marginTop: 15 }} alt="spoon" />
        <div className="app__footer-links_icons">
          <FiFacebook />
          <FiTwitter />
          <FiInstagram />
        </div>
      </div>

      <div className="app__footer-links_work">
        <h1 className="app__footer-headtext">Nos Services</h1>
        <p className="p__opensans">Bar à Vin & Champagne</p>
        <p className="p__opensans">Bar Mobile Événementiel</p>
        <p className="p__opensans">Service Premium</p>
        <p className="p__opensans">Devis Personnalisé</p>
      </div>
    </div>

    <div className="footer__copyright">
      <p className="p__opensans">© 2024 ENORM EVENTI. Tous droits réservés.</p>
    </div>
  </div>
);

export default Footer;