import React from 'react';
import {
  H1Reviews,
  ReviewsWrapper,
  TitleReviews,
  UnderlineH1,
} from './styles/index';
import Review from './Review';

const Reviews = () => {
  return (
    <ReviewsWrapper>
      <TitleReviews>
        <H1Reviews>Відгуки клієнтів:</H1Reviews>
      </TitleReviews>
      <UnderlineH1></UnderlineH1>
      <Review />
    </ReviewsWrapper>
  );
};

export default Reviews;
