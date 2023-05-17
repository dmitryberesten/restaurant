import { styled } from '@mui/material';

export const WrapperQuickContact = styled('section')({
  marginLeft: 'auto',
  marginRight: 'auto',
  width: '80%',
  minHeight: '40vh',
  alignItems: 'center',
  justifyContent: 'space-around',
  '@media (min-width: 320px)': {
    display: 'block',
  },
  '@media (min-width: 640px)': {
    width: '50%',
    display: 'block',
  },
  '@media (min-width: 1280px)': {
    width: '80%',
    display: 'flex',
  },
});

export const SingleCardQContact = styled('div')({
  color: 'black',
  padding: '1.5em',
  width: '25%',
  boxShadow: '2px 2px 10px #757371',
  '@media (min-width: 320px)': {
    width: '100%',
    margin: '2em 0',
  },
  '@media (min-width: 640px)': {
    width: '100%',
    margin: '2em 0',
  },

  '@media (min-width: 1750px)': {
    width: '25%',
    margin: '0',
  },
});

export const StyledH3 = styled('h3')({
  fontSize: '1.7em',
});

export const StyledP = styled('p')({
  marginTop: '-10px',
  '@media (min-width: 1280px)': {
    fontSize: '18px',
  },
});

export const DataDesc = styled('div')({
  fontSize: '1.2em',
  marginTop: '35px',
});
