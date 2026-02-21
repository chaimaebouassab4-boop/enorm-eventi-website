import React from 'react';
import { images } from '../../constants';
import './AboutUs.css';

const AboutUs = () => (
  <div className="app__aboutus app__bg flex__center section__padding" id="about">
    <div className="app__aboutus-overlay flex__center">
      <img src={images.G} alt="G_overlay" />
    </div>

    <div className="app__aboutus-content flex__center">

      <div className="app__aboutus-content_about reveal from-left">
        <h1 className="headtext__cormorant">À Propos</h1>
        <img src={images.spoon} alt="spoon" className="spoon__img" />
        <p className="p__opensans">
          ENORM EVENTI est né de la passion pour l'élégance, le détail et l'art de recevoir.
          Notre bar mobile vintage est conçu pour sublimer vos événements avec un service
          boissons haut de gamme. Chaque prestation est pensée pour créer une ambiance
          chic, chaleureuse et mémorable.
        </p>
        <button type="button" className="custom__button">Notre Histoire</button>
      </div>

      <div className="app__aboutus-content_knife flex__center reveal zoom-in delay-2">
        <img src={images.knife} alt="knife" />
      </div>

      <div className="app__aboutus-content_history reveal from-right delay-1">
        <h1 className="headtext__cormorant">Nos Événements</h1>
        <img src={images.spoon} alt="spoon" className="spoon__img" />
        <p className="p__opensans">
          Nous intervenons pour tous vos moments précieux : Mariages, Fêtes privées,
          Anniversaires, Événements d'entreprise, Inaugurations et Soirées VIP.
          Chaque prestation est unique, personnalisée et pensée pour dépasser vos attentes.
        </p>
        <button type="button" className="custom__button">Voir Nos Événements</button>
      </div>

    </div>
  </div>
);

export default AboutUs;