import React from 'react';
import './styles/index';
import {
  WrapperQuickContact,
  SingleCardQContact,
  StyledP,
  DataDesc,
  StyledH3,
} from './styles/index';
import quickContactData from './quickContactData';

const QuickContact = () => {
  return (
    <WrapperQuickContact>
      {quickContactData.map((contactInfo) => {
        const { id, heading, fisrtData, secoundData } = contactInfo;
        return (
          <SingleCardQContact key={id}>
            <StyledH3>{heading}</StyledH3>
            <DataDesc>
              <StyledP>{fisrtData}</StyledP>
              <StyledP>{secoundData}</StyledP>
            </DataDesc>
          </SingleCardQContact>
        );
      })}
    </WrapperQuickContact>
  );
};

export default QuickContact;
