import React, { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { SubHeading, MenuItem } from '../../components';
import { data, images } from '../../constants';
import './SpecialMenu.css';

const SpecialMenu = () => {
  const containerRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Ajoute la classe 'active' pour déclencher les animations CSS
            const reveals = entry.target.querySelectorAll('.reveal');
            reveals.forEach((element) => {
              element.classList.add('active');
            });
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 } // Déclenche un peu plus tard pour un meilleur effet
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const handleDevisClick = () => {
    navigate('/contact?scroll=form');
  };

  return (
    <section
      className="app__specialMenu flex__center section__padding"
      id="distinctions"
      ref={containerRef}
    >
      <div className="app__specialMenu-title reveal from-bottom">
        <SubHeading title="Bar à Vin & Champagne" />
        <h1 className="headtext__cormorant">Nos Sélections Premium</h1>
      </div>

      <div className="app__specialMenu-menu">
        {/* Colonne Gauche : Vins */}
        <div className="app__specialMenu-menu_wine reveal from-left delay-1">
          <p className="app__specialMenu-menu_heading">Vins & Champagnes</p>
          <div className="app__specialMenu_menu_items">
            {data.wines.map((wine, i) => (
              <div className="menu-item-wrapper" key={wine.title + i}>
                <MenuItem
                  title={wine.title}
                  price={wine.price}
                  tags={wine.tags}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Centre : Image */}
        <div className="app__specialMenu-menu_img reveal zoom-in delay-2">
          <div className="img-glow-effect"></div>
          <img src={images.menu} alt="Menu ENOMIS EVENTI" loading="lazy" />
        </div>

        {/* Colonne Droite : Cocktails */}
        <div className="app__specialMenu-menu_cocktails reveal from-right delay-1">
          <p className="app__specialMenu-menu_heading">Cocktails & Mocktails</p>
          <div className="app__specialMenu_menu_items">
            {data.cocktails.map((c, i) => (
              <div className="menu-item-wrapper" key={c.title + i}>
                <MenuItem
                  title={c.title}
                  price={c.price}
                  tags={c.tags}
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="reveal from-bottom delay-3" style={{ marginTop: '3rem' }}>
        <button type="button" className="custom__button" onClick={handleDevisClick}>
          Demander un devis
        </button>
      </div>
    </section>
  );
};

export default SpecialMenu;