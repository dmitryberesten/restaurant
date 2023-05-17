import React from 'react';
import { ContactButton, LinkSection } from './styles/index';
import { Link } from 'react-router-dom';

const LinkCantact = () => {
  return (
    <LinkSection>
      <h2>У вас є питання?</h2>
      <p>
        напишіть нам повідомлення в контакті, ми з радістю дамо вам відповідь
      </p>
      <Link to="/kontakt">
        <ContactButton>Зв'яжіться з нами</ContactButton>
      </Link>
    </LinkSection>
  );
};

export default LinkCantact;
