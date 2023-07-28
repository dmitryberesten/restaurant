import { styled } from '@mui/material';

export const Features = styled('section')({
  marginLeft: 'auto',
  marginRight: 'auto',
  minHeight: '35vh',
  marginBottom: '5em',
  alignItems: 'center',
  justifyContent: 'space-between',
  '@media (min-width: 320px)': {
    display: 'block',
    width: '90%',
  },
  '@media (min-width: 1024px)': {
    display: 'flex',
    width: '75%',
  },
});

export const SingleBox = styled('div')({
  display: 'block',
  marginLeft: 'auto',
  marginRight: 'auto',
  '@media (min-width: 320px)': {
    width: '90%',
  },
  '@media (min-width: 1024px)': {
    width: '20%',
  },
});

export const FeaturesImage = styled('img')({
  width: '150px',
  height: '150px',
});

export const StyledH4 = styled('h4')({
  textAlign: 'center',
});
