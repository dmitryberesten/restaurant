import { styled } from '@mui/material';
import { CiFacebook } from 'react-icons/ci';
import { AiOutlineInstagram } from 'react-icons/ai';
import { FiTwitter } from 'react-icons/fi';
import { FaLinkedinIn } from 'react-icons/fa';
import { Swiper, SwiperSlide } from 'swiper/react';

export const TeamSection = styled('section')({
  minHeight: '90vh',
});

export const TeamContainer = styled('section')({
  minHeight: '45vh',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
});

export const TeamWrapper = styled('div')({
  display: 'block',
  width: '100%',
});

export const HeadingTeam = styled('div')({
  minHeight: '18vh',
});

export const StyledH1 = styled('h1')({
  fontSize: '4em',
  marginTop: '1.5em',
  color: '#e96a43',
  '@media (min-width: 320px)': {
    fontSize: '2em',
  },
  '@media (min-width: 724px)': {
    fontSize: '4em',
  },
});

export const OurTeamWrapper = styled('div')({
  width: '100%',
  gap: '2.5em',
  marginLeft: 'auto',
  marginRight: 'auto',
  '@media (min-width: 320px)': {
    display: 'grid',
  },
  '@media (min-width: 425px)': { display: 'flex', width: '100%' },
  '@media (min-width: 1500px)': { width: '80%' },
});

export const TeamImg = styled('div')({
  ':bofore': {
    content: '""',
    width: '100%',
    height: '100%',
    border: '1px solid orange',
    position: 'absolute',
    top: 0,
    left: 0,
    borderRadius: 'inherit',
  },
});

export const TeamContent = styled('div')({
  borderRadius: '20px',
  backgroundColor: '#dfe6e9',
  textAlign: 'center',
  padding: '142px 30px 19px 30px',
  boxShadow: '0px 6px 15px rgba(1, 15, 28, 0.06)',
  position: 'relative',
  zIndex: '2',
  // position: 'relative',

  '&:before, &:after': {
    content: '""',
    width: '100%',
    height: '5px',
    backgroundColor: 'transparent',
    position: 'absolute',
    bottom: 0,
    left: 0,
    transition: '0.4s ease-in-out',
    zIndex: '-1',
    borderRadius: 'inherit',
  },
  // '&:before': {
  //   backgroundColor: '#f55f31',
  // },
  '&:hover:before, &:hover:after': {
    height: '100%',
    backgroundColor: '#f55f31',
  },

  '&:after': {
    zIndex: '-2',
  },
  '&:before': {
    bottom: 'unset',
    height: '44px',
    top: '-1px',
    maxWidth: 'calc(100% - 48px)',
    left: '24px',
    backgroundColor: 'white',
    clipPath: 'polygon(50% 100%, 0 0, 100% 0)',
    borderRadius: '0',
  },
  ':hover': {
    color: 'white !important',
    transition: '.5s',
  },
});

export const SingleCardsTeam = styled('div')({
  width: '300px',
  height: '150px',
  position: 'relative',
  textAlign: 'center',

  ':before': {
    content: "''",
    width: '85%',
    height: '250px',
    border: '2px solid #e96a43',
    position: 'absolute',
    top: '0',
    left: '22px',
    borderRadius: '50%',
    zIndex: '3',
  },
});

export const ImagePerson = styled('img')({
  objectFit: 'cover',
  width: '250px',
  height: '250px',
  overflow: 'hidden',
  borderRadius: '50%',
  margin: '0 auto -114px auto',
  padding: '10px',
  position: 'relative',
  zIndex: '3',
});

export const StyledName = styled('h4')({
  textAlign: 'center',
});

export const UnderLineTeam = styled('div')({
  border: '1px dashed #b2bec3',
});

export const StyledSocials = styled('div')({
  marginLeft: 'auto',
  marginRight: 'auto',
  width: '70%',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  minHeight: '70px',
  transition: '.4s',
  ':hover': {
    color: 'white !important',
  },
});

const sharedStylesSocials = {
  fontSize: '2.5em',
  padding: '5px',
  transition: '.4s',
  ':hover': {
    cursor: 'pointer',
    border: '2px solid white',
    borderRadius: '50%',
  },
};

export const StyledCiFacebook = styled(CiFacebook)(sharedStylesSocials);

export const StyledAiOutlineInstagram =
  styled(AiOutlineInstagram)(sharedStylesSocials);

export const StyledFiTwitter = styled(FiTwitter)(sharedStylesSocials);

export const StyledFaLinkedinIn = styled(FaLinkedinIn)(sharedStylesSocials);

export const StyledSwiper = styled(Swiper)({
  minHeight: '65vh',
  '@media (min-width: 320px)': {
    width: '100%',
  },
  '@media (min-width: 640px)': {
    width: '50%',
  },
  '@media (min-width: 860px)': {
    width: '30%',
  },
  '@media (min-width: 1280px)': {
    width: '20%',
  },
  '@media (min-width: 1500px)': {
    width: '83%',
  },
});

export const StyledSwiperSlide = styled(SwiperSlide)({
  '@media (min-width: 320px)': {
    width: '100%',
    padding: '0',
    margin: '0',
  },
  '@media (min-width: 1280px)': {
    width: '80%',
  },
});
