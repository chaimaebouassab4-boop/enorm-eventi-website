import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
  FaWineGlassAlt,
  FaCocktail,
  FaConciergeBell,
  FaBriefcase,
  FaCheckCircle,
  FaArrowRight,
} from 'react-icons/fa';
import './Services.css';
import { images } from '../../constants';

const CARDS = [
  {
    image:   images.gallery01,
    icon:    <FaWineGlassAlt />,
    title:   'Bar à Vins & Champagnes',
    desc:    'Une sélection premium de vins italiens et champagnes millésimés, servis depuis notre Fiat 500 vintage pour sublimer chaque instant.',
    points:  [
      'Vins italiens sélectionnés',
      'Champagnes & Prosecco',
      'Accords mets & vins',
      'Service à la bouteille ou en dégustation',
    ],
  },
  {
    image:   images.gallery02,
    icon:    <FaCocktail />,
    title:   'Bar Mobile & Cocktails',
    desc:    'Cocktails signatures, apéritifs dinatoires et créations sur mesure — notre bartender élabore des recettes qui marquent les esprits.',
    points:  [
      'Cocktails classiques & signatures',
      'Mocktails & options sans alcool',
      'Bar ouvert ou formule à la carte',
      'Animation bartender live',
    ],
  },
  {
    image:   images.corporate,
    icon:    <FaConciergeBell />,
    title:   'Dîners Privés & Buffets',
    desc:    "Une cuisine événementielle élégante et personnalisée pour vos mariages, anniversaires et soirées exclusives. Chaque menu raconte votre histoire.",
    points:  [
      'Dîners privés & galas',
      'Buffets raffinés sur mesure',
      'Animations culinaires live',
      'Menus adaptés à vos invités',
    ],
  },
  {
    image:   images.gallery04,
    icon:    <FaBriefcase />,
    title:   'Événements Corporate',
    desc:    "Lancements de produits, séminaires, activations de marque — ENOMIS EVENTI apporte l'effet WOW à vos événements professionnels.",
    points:  [
      'Lancements & activations de marque',
      'Séminaires & événements corporate',
      'Salons & expositions',
      'Concept personnalisé à votre image',
    ],
  },
];

const Services = () => {
  const navigate = useNavigate();

  /* ✅ Navigue vers /contact au lieu de chercher #contact par scroll */
  const goToContact = () => navigate('/contact');

  return (
    <section className="en-sv" id="services">
      <div className="en-sv__container">

        <div className="en-sv__head reveal from-bottom">
          <p className="en-sv__kicker">Nos Prestations</p>
          <h2 className="en-sv__title">Des expériences sur mesure,<br />à la hauteur de vos événements</h2>
          <p className="en-sv__subtitle">
            De la conception au service, chaque prestation ENOMIS EVENTI est pensée
            pour créer une ambiance unique, élégante et mémorable.
          </p>
        </div>

        <div className="en-sv__grid">
          {CARDS.map((c, idx) => (
            <article
              className={`en-sv__card reveal from-bottom delay-${idx + 1}`}
              key={idx}
            >
              <div className="en-sv__card-img-wrap">
                <img src={c.image} alt={c.title} className="en-sv__card-img" />
                <div className="en-sv__card-img-overlay" />
                <div className="en-sv__card-icon-wrap">
                  {c.icon}
                </div>
              </div>

              <div className="en-sv__card-body">
                <h3 className="en-sv__cardTitle">{c.title}</h3>
                <p className="en-sv__cardDesc">{c.desc}</p>

                <ul className="en-sv__points">
                  {c.points.map((p, i) => (
                    <li key={i}>
                      <FaCheckCircle className="en-sv__check" />
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>

                <button className="en-sv__miniCta" type="button" onClick={goToContact}>
                  Demander un devis
                  <FaArrowRight />
                </button>
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Services;