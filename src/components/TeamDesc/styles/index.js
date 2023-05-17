import { styled } from '@mui/material';

export const DescTeamSection = styled('section')({
  width: '90%',
  marginLeft: 'auto',
  marginRight: 'auto',
  minHeight: '40vh',
  '@media (min-width: 320px)': {
    display: 'block',
    marginTop: '4em',
  },
  '@media (min-width: 1024px)': {
    display: 'flex',
    marginTop: '0',
  },
});

export const DescTeamwrapper = styled('div')({
  width: '90%',
  textAlign: 'left',
});

export const StyledH2 = styled('h2')({
  color: 'var(--mainColor)',
  display: 'flex',
  alignItems: 'start',
  justifyContent: 'flex-start',
  marginBottom: '.6em',
  '@media (min-width: 320px)': {
    fontSize: '2em',
  },
  '@media (min-width: 724px)': {
    fontSize: '4em',
  },
});

export const ImageDesc = styled('div')({
  backgroundImage: 'url(./images/OurTeam.jpg)',
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'contain',
  position: 'relative',
  top: '-4em',
  width: '80%',
});
