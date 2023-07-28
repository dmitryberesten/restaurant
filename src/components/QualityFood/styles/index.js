import { styled } from '@mui/material';

export const QualitySection = styled('section')({
  width: '100%',
  minHeight: '60vh',
  backgroundImage:
    'url(https://angfuzsoft.com/wordpress/pizzer/wp-content/uploads/2022/12/feature_bg_2.png%22)',
  backgroundColor: '#010F1C',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  paddingBottom: '4em',
});

export const QualityWrapper = styled('div')({
  width: '100%',
  display: 'block',
  justifyContent: 'center',
  gap: '5em',
});

export const StyledHeading = styled('div')({
  width: '100%',
  display: 'block',
  justifyContent: 'center',
  color: 'white',
  padding: '25px',
});

export const Cards = styled('div')({
  justifyContent: 'center',
  alignItems: 'center',
  '@media (min-width: 320px)': {
    width: '100%',
    display: 'block',
  },

  '@media (min-width: 1024px)': {
    display: 'flex',
  },
});

export const SingleCard = styled('div')({
  width: '25%',
  color: 'white',
  padding: '0 2em',
  transition: '.5s',

  '@media (min-width: 320px)': {
    marginLeft: 'auto',
    marginRight: 'auto',
    width: '90%',
  },
  '@media (min-width: 1024px)': {
    marginLeft: '0',
    marginRight: '0',
    width: '25%',
    ':hover img': {
      transform: 'rotateY(180deg)',
    },
    ':nth-of-type(1)': {
      borderRight: '1px dashed white',
    },
    ':nth-of-type(2)': {
      borderRight: '1px dashed white',
    },
  },
});

export const StyledP = styled('p')({
  color: 'white',
});

export const StyledH4 = styled('h4')({
  textAlign: 'center',
  fontSize: '1.8em',
  padding: '.5em',
  '@media (min-width: 320px)': {
    fontSize: '1.5em',
  },
  '@media (min-width: 640px)': {
    fontSize: '1.4em',
  },
  '@media (min-width: 1280px)': {
    fontSize: '1.8em',
  },
});

export const StyledImg = styled('img')({
  padding: '.5em',
  transition: '.5s',
  '@media (min-width: 640px)': {
    width: 'none',
  },
});
