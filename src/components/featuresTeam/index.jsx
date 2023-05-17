import React from 'react';
import { Features, SingleBox, FeaturesImage, StyledH4 } from './styles/index';
import dataFeatures from './dataFeatures';

const FeaturesTeam = () => {
  return (
    <Features>
      {dataFeatures.map((singleFeature) => {
        const { id, image, title, paragraph } = singleFeature;
        return (
          <SingleBox key={id}>
            <FeaturesImage src={image} />
            <StyledH4>{title}</StyledH4>
            <p>{paragraph}</p>
          </SingleBox>
        );
      })}
    </Features>
  );
};

export default FeaturesTeam;
