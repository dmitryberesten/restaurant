import React from 'react';
import QuickContact from '../../components/quickContact';
import {
  ContactHero,
  InfoHero,
  // WrapperHero,
  ContentHero,
  StyledH1,
  Contactsection,
} from './styles/index';
import ContactForm from '../../components/ContactForm/index';

function Contact() {
  return (
    <main>
      <ContactHero>
        <InfoHero>
          <ContentHero>
            <StyledH1>Зв'яжіться з нами</StyledH1>
            <p>
              напишіть нам повідомлення і ми з радістю дамо вам
              відповіді
            </p>
          </ContentHero>
        </InfoHero>
      </ContactHero>
      <QuickContact />
      <Contactsection>
        <ContactForm />
      </Contactsection>
    </main>
  );
}

export default Contact;
