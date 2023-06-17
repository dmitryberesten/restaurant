import React from 'react';
import {
  Styledfooter,
  // LogoImg,
  FooterSocials,
  StyledFacebook,
  StyledTwitter,
  StyledInstagram,
  StyledYoutube,
  StyledTelegram,
  StyledP,
  StyledRight,
  Styledinfo,
  StyledSpan,
  ColorLogo,
} from './styles/index';
// import { Link } from 'react-router-dom';
// import Logo from '../../images/logo.svg';

const Footer = () => {
  return (
    <Styledfooter>
      <FooterSocials>
        <StyledFacebook />
        <StyledTwitter />
        <StyledInstagram />
        <StyledYoutube />
        <StyledTelegram />
      </FooterSocials>
      {/* <LogoImg src={Logo} alt="" /> */}
      <StyledRight>
        <Styledinfo>
          <StyledSpan>Ресторан Apetitto</StyledSpan>
          <StyledSpan>Київ, Богдана Хмельницького 54</StyledSpan>
          <StyledSpan>+380 63 073 2517</StyledSpan>
        </Styledinfo>
        <StyledP>
          Розробив
          <ColorLogo>
            <a
              href="https://www.linkedin.com/in/dmytrii-beresten/"
              target="_blank"
              rel="noopener noreferrer"
            >
              {' '}
              Dmytrii Beresten
            </a>
          </ColorLogo>
        </StyledP>
      </StyledRight>
    </Styledfooter>
  );
};

export default Footer;
