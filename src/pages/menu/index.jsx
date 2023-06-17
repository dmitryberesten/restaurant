import React, { useState } from 'react';
import {
  HeroMenu,
  MenuSection,
  StyledWrapper,
  StyledSpan,
  TitleMenu,
  MainContent,
  // BackToAll,
} from './styles/index';
import './styles/style.css';
import Categories from './categories';
import CardMenu from './cardMenu';
import items from './dataMenu';

const allCategories = ['Все', ...new Set(items.map(item => item.category))];

function Menu() {
  const [menuItems, setMenuItems] = useState(items);
  const [categories] = useState(allCategories);
  const [activeCategory, setActiveCategory] = useState('');
  const [showModal, setShowModal] = useState(false); // Додано стан для відображення модального вікна

  const filterItems = category => {
    if (category === 'Все') {
      setMenuItems(items);
      return;
    }

    const newItems = items.filter(item => item.category === category);
    setMenuItems(newItems);
  };

  const handleOrderClick = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };


const handleBackdropClick = e => {
  if (e.target === e.currentTarget) {
    closeModal();
  }
};

  return (
    <MenuSection>
      <HeroMenu>
        <div className="heroMenu"></div>
        <StyledWrapper>
          Apetito<StyledSpan>Ресторан</StyledSpan>
          <TitleMenu>Меню</TitleMenu>
        </StyledWrapper>
      </HeroMenu>

      <MainContent>
        <Categories
          filterItems={filterItems}
          categories={categories}
          activeCategory={activeCategory}
          setActiveCategory={setActiveCategory}
        />
        <CardMenu items={menuItems} handleOrderClick={handleOrderClick} />
      </MainContent>

      {/* Модальне вікно */}
      {showModal && (
        <div className="modal" onClick={handleBackdropClick}>
          <div className="modal-content">
            <span className="close" onClick={closeModal}>
              &times;
            </span>
            <h2>Модальне вікно</h2>
            <p>Тут можна додати вміст модального вікна.</p>
          </div>
        </div>
      )}

      <button className="fixed-button" onClick={handleOrderClick}>
        Замовлення
      </button>
    </MenuSection>
  );
}

export default Menu;
