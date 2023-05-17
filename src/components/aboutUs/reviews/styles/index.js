import { styled } from '@mui/material';

export const ReviewsWrapper = styled('div')({
  height: '300px',
  marginBottom: '30em',
  '@media (min-width: 320px)': {
    width: '100%',
  },
  '@media (min-width: 724px)': {
    width: '90%',
  },
});

export const TitleReviews = styled('div')({
  marginLeft: 'auto',
  marginRight: 'auto',
});

export const UnderlineH1 = styled('div')({
  marginLeft: 'auto',
  marginRight: 'auto',
  width: '13%',
  borderBottom: '4px solid #e96a43',
});

export const H1Reviews = styled('h1')({
  fontWeight: '900',
  fontSize: '32px',
  letterSpacing: '3px',
  color: '#e96a43',
  textAlign: 'center',
  '@media (min-width: 320px)': {
    fontSize: '21px',
  },
  '@media (min-width: 724px)': {
    fontSize: '32px',
  },
});

export const MainContent = styled('main')({});
