import React from 'react';

const cardMenu = ({ items }) => {
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
            </div>
          </article>
        );
      })}
    </div>
  );
};

export default cardMenu;
