import React from 'react';
import {
  Styledfooter,
  LogoImg,
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
import Logo from '../../images/logo.svg';

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
          <StyledSpan>Ресторан Apetito</StyledSpan>
          <StyledSpan>Київ, Богдана Хмельницького 54</StyledSpan>
          <StyledSpan>+380 63 073 2517</StyledSpan>
        </Styledinfo>
        <StyledP>
          Всі права захищені 2023 © - Apetito
          <ColorLogo>Ресторан</ColorLogo>
        </StyledP>
      </StyledRight>
    </Styledfooter>
  );
};

export default Footer;
