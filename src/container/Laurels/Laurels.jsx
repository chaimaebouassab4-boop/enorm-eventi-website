import React from 'react';
import { SubHeading } from '../../components';
import { data, images } from '../../constants';
import './Laurels.css';

const AwardCard = ({ award: { imgUrl, title, subtitle }, delayClass }) => (
  <div className={`app__laurels_awards-card reveal from-left ${delayClass}`}>
    <img src={imgUrl} alt="award" />
    <div className="app__laurels_awards-card_content">
      <p className="p__cormorant" style={{ color: '#dcca87' }}>{title}</p>
      <p className="p__opensans">{subtitle}</p>
    </div>
  </div>
);

const delays = ['', 'delay-1', 'delay-2', 'delay-3'];

const Laurels = () => (
  <div className="app__bg app__wrapper section__padding" id="awards">

    <div className="app__wrapper_info reveal from-left">
      <SubHeading title="Fierté & Reconnaissance" />
      <h1 className="headtext__cormorant">Nos Distinctions</h1>
      <div className="app__laurels_awards">
        {data.awards.map((award, i) => (
          <AwardCard key={award.title} award={award} delayClass={delays[i] || ''} />
        ))}
      </div>
    </div>

    <div className="app__wrapper_img reveal from-right delay-2">
      <img src={images.laurels} alt="laurels" />
    </div>

  </div>
);

export default Laurels;