import { styled } from '@mui/material';

export const AboutHero = styled('section')({
  height: '45vh',
  backgroundImage: 'url(./images/bgAbout.jpg)',
  backgroundPosition: 'center center',
  // backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
});

export const ContainerHero = styled('div')({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: '75%',
  height: '100%',
});

export const WrapperHero = styled('div')({
  color: 'white',
  '@media (min-width: 320px)': {
    textAlign: 'left',
    width: '80%',
  },
  '@media (min-width: 724px)': {
    width: '100%',
  },
});

export const StyledH1 = styled('h1')({
  color: '#e96a43',
  textAlign: 'left',
  fontWeight: '900',
  '@media (min-width: 320px)': {
    fontSize: '1.9em',
  },
  '@media (min-width: 720px)': {
    fontSize: '4.5em',
  },
});

export const StyledP = styled('p')({
  '@media (min-width: 320px)': {
    fontSize: '.8em',
  },
  '@media (min-width: 720px)': {
    width: '50%',
    fontSize: '1em',
  },
});

export const MainContent = styled('main')({
  width: '100%',
});

export const TeamWrapper = styled('div')({
  width: '100%',
});

export const Contactsection = styled('section')({
  width: '100%',
});
