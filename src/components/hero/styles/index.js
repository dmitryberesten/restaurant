import { styled } from '@mui/material';

export const StyledImgHero = styled('img')({
  width: '100%',
  filter: 'brightness(50%)',
  zIndex: '-1',
  backgroundAttachment: 'fixed',
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
});

export const SectionHero = styled('section')({
  width: '100%',
  minHeight: '60vh',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  marginBottom: '30vh',
  '@media (min-width: 640px)': {
    minHeight: '70vh',
  },
  '@media (min-width: 1024px)': {
    minHeight: '60vh',
  },
  '@media (max-width: 500px)': {
    minHeight: '20vh',
  },
});

export const HeroWrapper = styled('div')({});

export const H1Hero = styled('h1')({
  color: 'white',
  fontSize: '3.4em',
  textShadow: '#fff 1px 0 3px',
  fontWeight: '800',
  letterSpacing: '3px',
  '@media (min-width: 320px)': {
    marginTop: '200px',
    fontSize: '31px',
  },
  '@media (min-width: 640px)': {
    fontSize: '35px',
  },
  '@media (min-width: 1280px)': {
    fontSize: '4em',
  },
});

export const SpanHero = styled('span')({
  color: '#e96a43',
  fontWeight: '800',
  letterSpacing: '3px',
  textShadow: '#e96a43 1px 0 3px',
});

export const H3SubTitle = styled('h3')({
  color: 'white',
  fontSize: '1.5em',
  marginLeft: 'auto',
  marginRight: 'auto',
  fontWeight: '700',
  '@media (min-width: 320px)': {
    width: '90%',
    fontSize: '24px',
  },
  '@media (min-width: 620px)': {
    width: '90%',
    fontSize: '18px',
  },

  '@media (min-width: 1280px)': {
    fontSize: '1.5em',
  },
});
