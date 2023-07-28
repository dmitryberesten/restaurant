import { styled } from '@mui/material';
import { Link } from 'react-router-dom';

export const StyledHeader = styled('header')(({ fixed }) => ({
  position: fixed ? 'fixed' : 'fixed',
  left: '0',
  top: '0',
  display: 'flex',
  alignItems: 'center',
  width: '100%',
  height: '80px',
  justifyContent: 'space-around',
  zIndex: '99999',
  transition: '.6s',
  '&.fixed': {
    background: '#202020',
    height: '80px',
  },
  '@media (max-width: 768px)': {
    justifyContent: 'space-between',
    paddingLeft: '80px',
    paddingRight: '20px',
  },
}));

export const StyledNav = styled('nav')(({ isOpen }) => ({
  display: isOpen ? 'block' : 'none ',
  listStyle: 'none',
  height: '100%',
  justifyContent: 'center',
  alignItems: 'center',
  transition: '.6s',
  transform: isOpen ? 'translateX(100)' : 'translateX(0)',
  zIndex: '10',
  '@media (min-width: 320px)': {
    position: 'fixed',
    top: '0',
    right: '0',
    backgroundColor: '#202020',
    width: '20em',
  },
  '@media (min-width: 768px)': {
    position: 'relative',
    display: 'flex !important',
    right: '100px',
    backgroundColor: 'transparent',
    width: '28em',
  },
}));

export const StyledNavUl = styled('ul')({
  display: 'flex',
  alignItems: 'center',
  width: '100%',
  height: '100%',
  '@media (min-width: 320px)': {
    marginTop: '5em',
    display: 'flex',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'start',
    flexDirection: 'column',
  },
  '@media (min-width: 768px)': {
    marginTop: '0',
    flexDirection: 'unset',
  },
});

export const StyledNavLi = styled('li')({
  display: 'flex',
  width: '100%',
  height: '25px',
  textDecoration: 'none',
  alignItems: 'center',
  justifyContent: 'center',
  '@media (min-width: 320px)': {
    padding: '30px  0',
    fontSize: '15px',
  },
  '@media (min-width: 768px)': {
    padding: '0',
    marginTop: '0',
    fontSize: '15px',
  },
  '@media (min-width: 1024px)': {
    padding: '0',
    marginTop: '0',
    fontSize: '18px',
  },
});

export const StyledLink = styled(Link)({
  display: 'flex',
  fontWeight: '700',
  textDecoration: 'none',
  color: 'white',
  justifyContent: 'center',
  width: '100%',
  height: '100%',
  ':hover': {
    color: '#e96a43',
    transition: '0.4s',
    fontWeight: '700',
  },
});

export const StyledLogo = styled('div')({
  display: 'flex',
  width: '30%',
  '@media (min-width: 320px)': {
    width: '0%',
  },
});

export const StyledLogoImg = styled('img')({
  '@media (min-width: 320px)': {
    width: '135px',
  },
  '@media (min-width: 640px)': {
    width: '175px',
  },
});

export const StyledBurger = styled('div')({
  color: 'white',
  zIndex: '10',
  height: '13%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  '@media (min-width: 768px)': {
    display: 'none',
  },
});

export const StyledSubNavUl = styled('ul')({
  display: 'flex',
  width: '100%',
  height: '100%',
  listStyle: 'none',
  justifyContent: 'space-around',
  alignItems: 'center',
});

export const StyledSubNavLi = styled('li')({
  display: 'flex',
  width: '100%',
  height: '100%',
});

export const StyledSubNavA = styled(Link)({
  display: 'flex',
  width: '100%',
  height: '100%',
  color: 'white',
  fontWeight: '700',
  textDecoration: 'none',
  alignItems: 'center',
  justifyContent: 'center',
  ':hover': {
    color: '#e96a43',
    transition: '0.4s',
    fontWeight: '700',
  },
});
