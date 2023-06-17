import React from 'react';

const CardMenu = ({ items }) => {
  const handleOrderClick = title => {
    console.log('Замовлено:', title);
    // Додати код для обробки замовлення
  };

  return (
    <div className="section-center">
      {items.map(menuItem => {
        const { id, title, price, img, desc } = menuItem;

        return (
          <article id={id} className="menu-item">
            <img src={img} alt={title} className="photo" />

            <div className="item-info">
              <header>
                <h4>{title}</h4>
                <h4 className="price">{price}грн</h4>
              </header>
              <p className="item-text">{desc}</p>
              <button
                type="button"
                className="order-btn"
                onClick={() => handleOrderClick(title)}
              >
                Замовити
              </button>
            </div>
          </article>
        );
      })}
    </div>
  );
};

export default CardMenu;
