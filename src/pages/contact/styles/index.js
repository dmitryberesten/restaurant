import { styled } from '@mui/material';

export const ContactHero = styled('section')({
  height: '45vh',
  backgroundImage: 'url(./images/bgAbout.jpg)',
  backgroundPosition: 'center center',
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
  '@media (min-width: 320px)': {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  '@media (min-width: 1020px)': {
    display: 'block',
  },
});

export const InfoHero = styled('div')({
  textAlign: 'left',
  width: '80%',
  height: '100%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  '@media (min-width: 320px)': {
    marginTop: '2em',
  },
  '@media (min-width: 724px)': {
    marginTop: '0',
    width: '60%',
  },
});

export const WrapperHero = styled('div')({
  color: 'white',
  textAlign: 'left',
});

export const ContentHero = styled('div')({
  color: 'white',
  display: 'block',
});

export const StyledH1 = styled('h1')({
  color: '#e96a43',
  '@media (min-width: 320px)': {
    fontSize: '2em',
  },
  '@media (min-width: 724px)': {
    fontSize: '4em',
  },
});

export const Contactsection = styled('section')({
  color: '#e96a43',
  minHeight: '60vh',
});
