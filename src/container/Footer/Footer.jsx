import React from 'react';
import { FiFacebook, FiTwitter, FiInstagram } from 'react-icons/fi';
import { MdLocationOn, MdEmail, MdWhatsapp } from 'react-icons/md';
import { images } from '../../constants';
import './Footer.css';

const Footer = () => (
  <div className="app__footer" id="login">
    <div className="app__footer-links">
      <div className="app__footer-links_contact">
        <h1 className="app__footer-headtext">Contactez-Nous</h1>

        <div className="app__footer-contact-item">
          <MdLocationOn color="#b86b77"  size={32} />
          <p className="p__opensans">Italie &amp; International</p>
        </div>

        <div className="app__footer-contact-item">
          <MdEmail color="#b86b77"  size={32} />
          <p className="p__opensans">contact@ENOMISeventi.com</p>
        </div>

        <div className="app__footer-contact-item">
          <MdWhatsapp color="#b86b77"  size={32} />
          <p className="p__opensans">Disponible sur WhatsApp</p>
        </div>
      </div>

      <div className="app__footer-links_logo">
        <h1 className="app__footer-headtext">ENOMIS EVENTI</h1>
        <p className="p__opensans">
          "L'élégance au cœur de vos événements"
        </p>
        <img src={images.spoon} className="spoon__img" alt="spoon" />
        <div className="app__footer-links_icons">
          <FiFacebook />
          <FiTwitter />
          <FiInstagram />
        </div>
      </div>

      <div className="app__footer-links_work">
        <h1 className="app__footer-headtext">Nos Services</h1>
        <p className="p__opensans">Bar à Vin &amp; Champagne</p>
        <p className="p__opensans">Bar Mobile Événementiel</p>
        <p className="p__opensans">Service Premium</p>
        <p className="p__opensans">Devis Personnalisé</p>
      </div>
    </div>

    <div className="footer__copyright">
      <p className="p__opensans">© 2024 ENOMIS EVENTI. Tous droits réservés.</p>
    </div>
  </div>
);

export default Footer;
