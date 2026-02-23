import React, { useState } from 'react';
import { images } from '../../constants';
import './Gallery.css';
import { FaCarSide, FaUtensils, FaGlassCheers, FaCrown } from 'react-icons/fa';
const Gallery = () => {
  const [activeTab, setActiveTab] = useState(0);

const sections = [
  {
    icon: <FaCarSide />, // ou <Car />
    tag: 'LE CONCEPT',
    title: 'Quand le design devient émotion',
    text: "Icône du style italien...",
    points: [
      'Restaurée avec précision',
      'Aménagée avec des matériaux nobles',
      'Conçue pour attirer, séduire et marquer',
    ],
    note: 'Nos Fiat 500 ne servent pas seulement des mets et des boissons. Elles racontent une histoire — la vôtre.',
  },
  {
    icon: <FaUtensils />, // ou <Utensils />
    tag: 'RESTAURATION & DÎNERS',
    title: "Une cuisine qui accompagne l'instant",
    text: "Parce qu'un événement réussi...",
    points: [
      'Cocktails & apéritifs dinatoires',
      'Dîners privés',
      'Buffets raffinés',
      'Bars à boissons & champagne',
      'Animations culinaires sur mesure',
    ],
    note: "Chaque menu est conçu pour s'adapter...",
  },
  {
    icon: <FaGlassCheers />, // ou <PartyPopper />
    tag: 'ÉVÉNEMENTIEL',
    title: "L'art de sublimer chaque occasion",
    text: 'ENOMIS EVENTI accompagne...',
    points: [
      'Mariages · Fiançailles · Anniversaires',
      'Soirées exclusives',
      'Lancements de produits',
      'Événements corporate · Salons',
      'Activations de marque',
    ],
    note: "Nos Fiat 500 deviennent un élément central...",
  },
  {
    icon: <FaCrown />, // ou <Gem />
    tag: 'VENTE DE FIAT 500',
    title: 'Donnez vie à votre propre concept',
    text: "Vous rêvez de lancer...",
    points: [
      'Véhicules restaurés avec exigence',
      'Aménagement professionnel',
      'Design personnalisé intérieur & extérieur',
      'Accompagnement stratégique de votre projet',
    ],
    note: "Nous ne vendons pas une voiture...",
  },
];

  return (
    <section className="gal" id="gallery">

      {/* ── En-tête hero de section ── */}
      <div className="gal__hero">
        <p className="gal__kicker">HOME · ENOMIS EVENTI</p>
        <h1 className="gal__hero-title">
          L'icône italienne qui transforme vos événements en{' '}
          <span className="gal__accent">souvenirs inoubliables</span>
        </h1>
        <p className="gal__hero-desc">
          Chez ENOMIS EVENTI, nous avons réinventé la restauration événementielle
          à travers une légende : la Fiat 500 vintage. Plus qu'un restaurant mobile,
          c'est une expérience sensorielle, un symbole de raffinement et d'émotion.
          Mariages, dîners privés, événements professionnels ou lancements de marque :
          nous créons des moments qui se vivent, se partagent et se mémorisent.
        </p>
        <p className="gal__hero-signature">Une voiture. Une atmosphère. Une signature.</p>

        <div className="gal__hero-ctas">
          <a href="#contact-form" className="gal__btn gal__btn--primary">
            Réserver un événement
          </a>
          <a href="#contact-form" className="gal__btn gal__btn--outline">
            Demander un devis
          </a>
        </div>
      </div>

      {/* ── Tabs navigation ── */}
      <div className="gal__tabs">
        {sections.map((s, i) => (
          <button
            key={i}
            className={`gal__tab ${activeTab === i ? 'gal__tab--active' : ''}`}
            onClick={() => setActiveTab(i)}
          >
            <span className="gal__tab-icon">{s.icon}</span>
            <span className="gal__tab-label">{s.tag}</span>
          </button>
        ))}
      </div>

      {/* ── Contenu tab actif ── */}
      <div className="gal__content">
        {sections.map((s, i) => (
          <div
            key={i}
            className={`gal__panel ${activeTab === i ? 'gal__panel--active' : ''}`}
          >
            <div className="gal__panel-left">
              <p className="gal__panel-tag">
                <span>{s.icon}</span> {s.tag}
              </p>
              <h2 className="gal__panel-title">{s.title}</h2>
              <p className="gal__panel-text">{s.text}</p>

              <ul className="gal__points">
                {s.points.map((pt, j) => (
                  <li key={j} className="gal__point">
                    <span className="gal__point-dot" />
                    {pt}
                  </li>
                ))}
              </ul>

              <p className="gal__panel-note">{s.note}</p>
            </div>

            <div className="gal__panel-right">
              <img
                src={images.hala}
                alt={s.title}
                className="gal__panel-img"
              />
              <div className="gal__panel-img-deco" />
            </div>



          </div>
        ))}
      </div>

    </section>
  );
};

export default Gallery;
