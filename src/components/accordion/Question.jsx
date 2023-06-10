import { React, useState } from 'react';
import { RxCaretDown, RxCaretUp } from 'react-icons/rx';
import { StyledP } from './styles/index';
import './styles/style.css';

const Question = ({ title, info }) => {
  const [showInfo, setShowInfo] = useState(false);
  
  return (
    <article className='question'>
      <header>
        <h4>{title}</h4>
        <button className='btn' onClick={() => setShowInfo(!showInfo)}>
          {showInfo ? (
            <RxCaretUp className='icons' />
          ) : (
            <RxCaretDown className='icons' />
          )}
        </button>
      </header>
      <StyledP showInfo={showInfo}>{info}</StyledP>
    </article>
  );
};

export default Question;
