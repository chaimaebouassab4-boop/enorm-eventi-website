import React, { useState } from 'react';
import { SubHeading, MenuItem } from '../../components';
import { data, images } from '../../constants';
import './SpecialMenu.css';

const SpecialMenu = () => {
  const [activeTab, setActiveTab] = useState('wines');

  return (
    <div className="app__specialMenu flex__center section__padding" id="menu">
      <div className="app__specialMenu-title">
        <SubHeading title="Bar à Vin & Champagne" />
        <h1 className="headtext__cormorant">Nos Sélections Premium</h1>
      </div>

      <div className="app__specialMenu-menu">
        <div className="app__specialMenu-menu_wine  flex__center">
          <p className="app__specialMenu-menu_heading">Vins & Champagnes</p>
          <div className="app__specialMenu_menu_items">
            {data.wines.map((wine, index) => (
              <MenuItem key={wine.title + index} title={wine.title} price={wine.price} tags={wine.tags} />
            ))}
          </div>
        </div>

        <div className="app__specialMenu-menu_img">
          <img src={images.menu} alt="menu__img" />
        </div>

        <div className="app__specialMenu-menu_cocktails flex__center">
          <p className="app__specialMenu-menu_heading">Cocktails & Mocktails</p>
          <div className="app__specialMenu_menu_items">
            {data.cocktails.map((cocktail, index) => (
              <MenuItem key={cocktail.title + index} title={cocktail.title} price={cocktail.price} tags={cocktail.tags} />
            ))}
          </div>
        </div>
      </div>

      <div style={{ marginTop: 15 }}>
        <button type="button" className="custom__button">Voir la Carte Complète</button>
      </div>
    </div>
  );
};

export default SpecialMenu;