import { styled } from '@mui/material';

export const LinkSection = styled('section')({
  '@media (min-width: 320px)': {
    minHeight: '50vh',
    marginBottom: '7vh',
  },
  '@media (max-width: 500px)': {
    paddingTop: '7vh',
    marginBottom: '1vh',
  },
  '@media (min-width: 640px)': {
    minHeight: '30vh',
  },
});

export const ContactButton = styled('button')({
  padding: '20px 100px',
  border: 'none',
  fontSize: '19px',
  boxShadow: '2px 2px 10px #95a5a6',
  borderRadius: '10px',
  transition: '.6s',
  '&:hover': {
    cursor: 'pointer',
    background: '#bdc3c7',
  },
  '@media (min-width: 320px)': {
    width: '85%',
  },
  '@media (min-width: 640px)': {
    width: '60%',
  },
  '@media (min-width: 1020px)': {
    width: '30%',
  },
  '@media (min-width: 1400px)': {
    width: '20%',
  },
});
