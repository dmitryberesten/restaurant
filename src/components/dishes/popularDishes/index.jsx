import { React } from 'react';
import {
  DishesWrapper,
  HeaderDishes,
  TitleDishes,
  SpanSLideTitle,
  UnderLine,
  MainColor,
} from './styles/index';
import '../../../images/menubg.jpg';
import './styles/style.css';
import 'swiper/css';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.min.css';
// import { Autoplay, Pagination, Navigation } from 'swiper';
import { Autoplay, Pagination } from 'swiper';
import { useMediaQuery } from '@mui/material';

const PopularDishes = () => {
  const isSmallScreen = useMediaQuery('(max-width: 1500px)');

  return (
    <DishesWrapper className="menuBg">
      <HeaderDishes>
        <TitleDishes>
          Популярні <MainColor> страви</MainColor>
        </TitleDishes>
        <UnderLine></UnderLine>
      </HeaderDishes>
      <div className="swiperWrapper">
        <Swiper
          spaceBetween={10}
          slidesPerView={isSmallScreen ? 1 : 3}
          className="swiperBox"
          initialSlide={3}
          loop={true}
          centeredSlides={true}
          centeredSlidesBounds={true}
          pagination={{
            clickable: true,
          }}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          modules={[Autoplay, Pagination]}
        >
          <SwiperSlide className="SlideWrapper">
            <div className="firstSlide slides">
              <SpanSLideTitle>Італійська піца</SpanSLideTitle>
            </div>
          </SwiperSlide>
          <SwiperSlide className="SlideWrapper">
            <div className="SecoundSlide slides">
              <SpanSLideTitle>Бургер з картоплею фрі</SpanSLideTitle>
            </div>
          </SwiperSlide>
          <SwiperSlide className="SlideWrapper">
            <div className="thirdSlide slides">
              <SpanSLideTitle>Суші</SpanSLideTitle>
            </div>
          </SwiperSlide>
          <SwiperSlide className="SlideWrapper">
            <div className="fourthSlide slides">
              <SpanSLideTitle>Стейк</SpanSLideTitle>
            </div>
          </SwiperSlide>
          <SwiperSlide className="SlideWrapper">
            <div className="fifthSlide slides">
              <SpanSLideTitle>Пряні креветки</SpanSLideTitle>
            </div>
          </SwiperSlide>
          <SwiperSlide className="SlideWrapper">
            <div className="sixthSlide slides">
              <SpanSLideTitle>Салат "Цезар"</SpanSLideTitle>
            </div>
          </SwiperSlide>
          <SwiperSlide className="SlideWrapper">
            <div className="seventhSlide slides">
              <SpanSLideTitle>Паста</SpanSLideTitle>
            </div>
          </SwiperSlide>
          {/* <SwiperSlide className='SlideWrapper' /> */}
        </Swiper>
      </div>
    </DishesWrapper>
  );
};

export default PopularDishes;
