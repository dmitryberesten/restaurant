import React from 'react';
import {
  AboutHero,
  WrapperHero,
  ContainerHero,
  StyledH1,
  MainContent,
  StyledP,
} from './styles/index';
import Team from '../../components/Team/index';
import TeamDesc from './../../components/TeamDesc/index';
import FeaturesTeam from './../../components/featuresTeam/index';

function About() {
  return (
    <section>
      <AboutHero className="hero">
        <ContainerHero>
          <WrapperHero>
            <StyledH1>Про нас</StyledH1>
            <StyledP>
              Наша талановита команда з пристрастю до приготування їжі та
              обслуговування гостей
            </StyledP>
          </WrapperHero>
        </ContainerHero>
      </AboutHero>
      <MainContent>
        <Team />
        <TeamDesc />
        <FeaturesTeam />
      </MainContent>
    </section>
  );
}

export default About;
