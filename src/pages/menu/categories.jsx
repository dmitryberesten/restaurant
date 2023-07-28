import React from 'react';

const Categories = ({
  categories,
  filterItems,
  activeCategory,
  setActiveCategory,
}) => {
  const handleCategoryClick = category => {
    setActiveCategory(category);
    filterItems(category);
  };
  return (
    <div className="btn-container">
      {categories.map((category, index) => {
        const isActive = activeCategory === category;
        return (
          <button
            type="button"
            className={`filter-btn ${isActive ? 'active' : ''}`}
            key={index}
            onClick={() => handleCategoryClick(category)}
          >
            {category}
          </button>
        );
      })}
    </div>
  );
};

export default Categories;
