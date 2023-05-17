import { styled } from '@mui/material';

export const AccordionSection = styled('section')({
  width: '100%',
  display: 'flex',
  justifyContent: 'center',
  marginBottom: '15vh',
});

export const InfoSection = styled('section')({});

export const StyledP = styled('p')(({ showInfo }) => ({
  transition: '.3s',
  maxHeight: showInfo ? '300px' : '0',
  // border: '2px solid red',
  overflow: 'hidden',
  display: 'flex',
  textAlign: 'left',
  width: '90%',
}));
