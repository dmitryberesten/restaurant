import React from 'react';
import {
  TeamContainer,
  HeadingTeam,
  StyledH1,
  OurTeamWrapper,
  TeamWrapper,
  TeamSection,
  StyledP,
} from './styles/index';
import TeamMemberCard from './TeamMemberCard ';

const Team = () => {
  return (
    <TeamSection>
      <TeamContainer>
        <TeamWrapper>
          <HeadingTeam>
            <StyledH1>Наша команда</StyledH1>
            <StyledP>
              Це наша команда, люди, які готові надати нашим гостям винятковий
              кулінарний досвід.
            </StyledP>
          </HeadingTeam>
          <OurTeamWrapper>
            <TeamMemberCard />
          </OurTeamWrapper>
        </TeamWrapper>
      </TeamContainer>
    </TeamSection>
  );
};

export default Team;
