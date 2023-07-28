import { React, useState } from 'react';
import people from './data';
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';
import './styles/style.css';

const Review = () => {
  const [index, setIndex] = useState(0);
  const { name, rating, image, text } = people[index];

  const checkNumber = number => {
    if (number > people.length - 1) {
      return 0;
    }
    if (number < 0) {
      return people.length - 1;
    }
    return number;
  };

  const prevPerson = () => {
    setIndex(index => {
      let newIndex = index - 1;
      return checkNumber(newIndex);
    });
  };

  const nextPerson = () => {
    setIndex(index => {
      let newIndex = index + 1;
      return checkNumber(newIndex);
    });
  };

  const randomPerson = () => {
    let randomNumber = Math.floor(Math.random() * people.length);
    if (randomNumber === index) {
      randomNumber = index + 1;
    }
    setIndex(checkNumber(randomNumber));
  };

  return (
    <section className="review">
      <div className="img-container">
        <img src={image} alt={name} className="person-img" />
        <span className="quote-icon">
          <FaQuoteRight />
        </span>
      </div>
      <h4 className="author">{name}</h4>
      <p className="rating">{rating}</p>
      <p className="info">{text}</p>
      <div className="button-container">
        <button className="prev-btn">
          <FaChevronLeft onClick={prevPerson} />
        </button>
        <button className="next-btn">
          <FaChevronRight onClick={nextPerson} />
        </button>
      </div>
      <button className="random-btn" onClick={randomPerson}>
        Випадковий відгук
      </button>
    </section>
  );
};

export default Review;
