import React from 'react';
import { SubHeading, MenuItem } from '../../components';
import { data, images } from '../../constants';
import './SpecialMenu.css';

const SpecialMenu = () => {
  const scrollToContact = (e) => {
    e.preventDefault();
    const el = document.querySelector('#contact');
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <div
      className="app__specialMenu flex__center section__padding"
      id="distinctions"   // ✅ IMPORTANT : id aligné avec la navbar
    >
      <div className="app__specialMenu-title reveal from-bottom">
        <SubHeading title="Bar à Vin & Champagne" />
        <h1 className="headtext__cormorant">Nos Sélections Premium</h1>
      </div>

      <div className="app__specialMenu-menu">
        <div className="app__specialMenu-menu_wine flex__center reveal from-left delay-1">
          <p className="app__specialMenu-menu_heading">Vins & Champagnes</p>
          <div className="app__specialMenu_menu_items">
            {data.wines.map((wine, i) => (
              <MenuItem
                key={wine.title + i}
                title={wine.title}
                price={wine.price}
                tags={wine.tags}
              />
            ))}
          </div>
        </div>

        <div className="app__specialMenu-menu_img reveal zoom-in delay-2">
          <img src={images.menu} alt="Menu ENOMIS EVENTI" />
        </div>

        <div className="app__specialMenu-menu_cocktails flex__center reveal from-right delay-1">
          <p className="app__specialMenu-menu_heading">Cocktails & Mocktails</p>
          <div className="app__specialMenu_menu_items">
            {data.cocktails.map((c, i) => (
              <MenuItem
                key={c.title + i}
                title={c.title}
                price={c.price}
                tags={c.tags}
              />
            ))}
          </div>
        </div>
      </div>

      <div className="reveal from-bottom delay-3" style={{ marginTop: 15 }}>
        <button type="button" className="custom__button" onClick={scrollToContact}>
          Demander un devis
        </button>
      </div>
    </div>
  );
};

export default SpecialMenu;