import React from 'react';
import { images } from '../../constants';
import './AboutUs.css';

const AboutUs = () => (
  <div className="app__aboutus app__bg flex__center section__padding" id="about">

  

    <div className="app__aboutus-content flex__center">

      {/* ── GAUCHE : texte fusionné, sans boutons ── */}
      <div className="app__aboutus-content_about reveal from-left">
        <h1 className="headtext__cormorant">À Propos</h1>
        <img src={images.spoon} alt="spoon" className="spoon__img" />

        <p className="p__opensans">
          ENOMIS EVENTI est né de la passion pour l'élégance, le détail et l'art de recevoir.
          Notre bar mobile vintage est conçu pour sublimer vos événements avec un service
          boissons haut de gamme. Chaque prestation est pensée pour créer une ambiance
          chic, chaleureuse et mémorable.
        </p>

        <p className="p__opensans app__aboutus-p2">
          Nous intervenons pour tous vos moments précieux : Mariages, Fêtes privées,
          Anniversaires, Événements d'entreprise, Inaugurations et Soirées VIP.
          Chaque prestation est unique, personnalisée et pensée pour dépasser vos attentes.
        </p>
      </div>

      {/* ── SÉPARATEUR ligne rosée (sans image couteau) ── */}
      <div className="app__aboutus-content_knife flex__center reveal zoom-in delay-2" />

      {/* ── DROITE : image ── */}
      <div className="app__aboutus-content_image reveal from-right delay-1">
        <img
          src={require('../../assets/ChatGPT Image Feb 19, 2026, 02_56_31 PM.png')}
          alt="ENOMIS EVENTI événement"
          className="app__aboutus-photo"
        />
      </div>

    </div>
  </div>
);

export default AboutUs;