import React from 'react';

import { SubHeading } from '../../components';
import { images } from '../../constants';
import './Chef.css';

const Chef = () => (
  <div className="app__bg app__wrapper section__padding">
    
    <div className="app__wrapper_img app__wrapper_img-reverse">
<img src={images.chef} alt="chef_image" />    </div>

    <div className="app__wrapper_info">
      <SubHeading title="Notre Vision" />
      <h1 className="headtext__cormorant">L’élégance au cœur de vos événements</h1>

      <div className="app__chef-content">
        <div className="app__chef-content_quote">
          <img src={images.quote} alt="quote_image" />
          <p className="p__opensans">
            Nous croyons que chaque événement mérite une touche unique de raffinement et de prestige.
          </p>
        </div>

        <p className="p__opensans">
          Chez ENORM EVENTI, nous transformons vos réceptions en expériences mémorables 
          grâce à notre bar mobile vintage, nos prestations premium et notre attention 
          aux moindres détails. Chaque service est pensé pour créer une ambiance chic, 
          chaleureuse et inoubliable.
        </p>
      </div>

      <div className="app__chef-sign">
        <p>ENORM EVENTI</p>
        <p className="p__opensans">Bar Mobile & Service Premium</p>
      </div>
    </div>

  </div>
);

export default Chef;
