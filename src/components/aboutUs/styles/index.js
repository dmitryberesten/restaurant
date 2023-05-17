import { styled } from '@mui/material';

export const AboutSection = styled('section')({
  marginLeft: 'auto',
  marginRight: 'auto',
  display: 'flex',
});

export const RestaurantWrapper = styled('div')({
  marginLeft: 'auto',
  marginRight: 'auto',
  width: '90%',
  textAlign: 'left',
  display: 'flex',
  '@media (min-width: 320px)': {
    display: 'grid',
  },
  '@media (min-width: 724px)': {
    display: 'flex',
  },
});

export const H1About = styled('h1')({
  fontWeight: '900',
  fontSize: '32px',
  letterSpacing: '3px',
  color: '#e96a43',
  '@media (min-width: 320px)': {
    display: 'block',
    fontSize: '24px',
    width: '90%',
  },
  '@media (min-width: 724px)': {
    display: 'flex',
  },
});

export const Description = styled('p')({
  '@media (min-width: 320px)': {
    width: '90%',
    fontSize: '15px',
    marginTop: '25px',
  },
  '@media (min-width: 724px)': {
    display: 'flex',
    fontSize: '20px',
    marginTop: '50px',
  },
});

export const LineDescription = styled('div')({
  borderBottom: '6px solid #e96a43',
  marginTop: '30px',
  width: '40%',
});

export const AboutInfo = styled('div')({
  width: '100%',
});

export const ReviewWrapper = styled('div')({
  '@media (min-width: 320px)': {
    width: '100%',
    marginTop: '50vh',
  },
  '@media (min-width: 724px)': {
    width: '60%',
    marginTop: '30px',
  },
});

export const StyledImgAbout = styled('img')({
  width: '70%',
  position: 'relative',
  left: '16em',
  borderRadius: '85px',
  ':nth-of-type(1)': {
    width: '42%',
    left: '28em',
    zIndex: '2',
    border: '5px solid white',
    boxShadow: '2px -2px 10px black',
  },
  ':nth-of-type(2)': {
    width: '70%',
    left: '10em',
    top: '-10em',
    boxShadow: '2px 2px 12px black',
  },
});

export const ImgRestaurant = styled('img')({
  position: 'absolute',

  marginTop: '17px',
  height: '225px',
  objectFit: 'cover',
  filter: 'brightness(75%)',
  borderRadius: '25px',
  '@media (min-width: 320px)': {
    width: '90%',
  },
  '@media (min-width: 724px)': {
    width: '35%',
  },
});

export const ButtonAbout = styled('button')({
  padding: '12px',
  fontWeight: '800',
  border: 'none',
  borderRadius: '10px',
  background: '#ed4f24',
  position: 'relative',
  top: '10px',
  color: 'white',
  '&:hover': {
    background: '#e96a43',
    transition: '.4s',
    cursor: 'pointer',
  },
});
