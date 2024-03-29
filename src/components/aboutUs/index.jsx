import React from 'react';
import {
  AboutSection,
  RestaurantWrapper,
  AboutInfo,
  H1About,
  Description,
  LineDescription,
  ReviewWrapper,
  ImgRestaurant,
  ButtonAbout,
} from './styles/index';

import restaurant from '../../images/restaurant.jpg';
import Reviews from './reviews';
import { Link } from 'react-router-dom';

const AboutUs = () => {
  return (
    <AboutSection>
      <RestaurantWrapper>
        <AboutInfo>
          <H1About>Про ресторан</H1About>
          <Description>
            Ми ресторан, який працює вже п'ять років, тобто з самого початку
            фокусується на якості та задоволенні клієнтів. Наша кухня заснована
            на свіжих інгредієнтах і запатентованих рецептах, щo гарантує
            неповторний смак кожної страви. Набутий досвід за роки роботи
            дозволяє нам постійно вдосконалювати якість нашої продукції послуги
            та впровадження нових, цікавих смаків. Ми запрошуємо вас відвідати
            наш ресторан і насолодитись нашими стравами, які точно залишаться у
            вашій пам'яті надовго.
          </Description>
          <Link to="/onas">
            <ButtonAbout>Побачити більше!</ButtonAbout>
          </Link>
          <LineDescription>
            <ImgRestaurant src={restaurant} />
          </LineDescription>
        </AboutInfo>
        <ReviewWrapper>
          <Reviews />
        </ReviewWrapper>
      </RestaurantWrapper>
    </AboutSection>
  );
};

export default AboutUs;
