import React from 'react';
import { useTranslation } from 'react-i18next';
import { SubHeading } from '../../components';
import { images } from '../../constants';
import './Chef.css';

const Chef = () => {
  const { t } = useTranslation();

  return (
    <div className="app__bg app__wrapper section__padding">
      <div className="app__wrapper_img app__wrapper_img-reverse">
        <img src={images.chef} alt="chef_image" />
      </div>

      <div className="app__wrapper_info">
        <SubHeading title={t('chef.subtitle')} />
        <h1 className="headtext__cormorant">{t('chef.title')}</h1>

        <div className="app__chef-content">
          <div className="app__chef-content_quote">
            <img src={images.quote} alt="quote_image" />
            <p className="p__opensans">{t('chef.quote')}</p>
          </div>

          <p className="p__opensans">{t('chef.description')}</p>
        </div>

        <div className="app__chef-sign">
          <p>ENORM EVENTI</p>
          <p className="p__opensans">{t('chef.signatureRole')}</p>
        </div>
      </div>
    </div>
  );
};

export default Chef;
