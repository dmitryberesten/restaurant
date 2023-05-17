import React from 'react';
import {
  TeamImg,
  TeamContent,
  SingleCardsTeam,
  ImagePerson,
  UnderLineTeam,
  StyledSocials,
  StyledName,
  StyledSwiper,
  StyledSwiperSlide,
} from './styles/index';
import TeamData from './TeamData';
import 'swiper/css';
import { useMediaQuery } from '@mui/material';

const TeamMemberCard = () => {
  const isPhoneScreen = useMediaQuery('(max-width: 1500px)');
  return (
    <StyledSwiper
      spaceBetween={80}
      slidesPerView={isPhoneScreen ? 1 : 3}
      className='swiperBox'
      initialSlide={2}
      loop={true}
      centeredSlides={true}
      centeredSlidesBounds={true}
      pagination={{
        clickable: true,
      }}
      autoplay={{
        delay: 1000,
        disableOnInteraction: false,
      }}
    >
      {TeamData.map((singlePerson) => {
        const { id, image, name, profession, socials } = singlePerson;
        return (
          <StyledSwiperSlide key={id}>
            <SingleCardsTeam>
              <TeamImg>
                <ImagePerson src={image} alt={name} />
              </TeamImg>
              <TeamContent>
                <StyledName>{name}</StyledName>
                <p>{profession}</p>
                <UnderLineTeam></UnderLineTeam>
                <StyledSocials>{socials}</StyledSocials>
              </TeamContent>
            </SingleCardsTeam>
          </StyledSwiperSlide>
        );
      })}
      <div className='swiper-pagination'></div>
    </StyledSwiper>
  );
};

export default TeamMemberCard;
