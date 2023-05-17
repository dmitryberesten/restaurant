import React from 'react';
import { SectionMenu } from './styles/index';
import PopularDishes from './popularDishes/index';
import './styles/style.css';

const Menu = () => {
  return (
    <SectionMenu>
      <div className='bgImage'></div>
      <PopularDishes />
    </SectionMenu>
  );
};

export default Menu;
