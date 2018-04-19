import React, { Component } from 'react';
import styled from 'styled-components';

import WorkCard from './WorkCard';
import ArrowAngle from '../../images/icons/ArrowAngle';

import figmentCardLogo from "../../images/icons/work-card-icons/figment_icon.svg";
import buildingCardLogo from "../../images/icons/work-card-icons/buildings_icon.svg";
import breakOutCardLogo from "../../images/icons/work-card-icons/breakout_icon.svg";
import portfolioCardLogo from "../../images/icons/work-card-icons/portfolio_icon.svg";

const WorkSection = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const SectionTitleWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-end;
    margin-bottom: 80px;
`;

const SectionTitle = styled.h1`
`;

const CardWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    @media (max-width: 1400px) {
      flex-wrap: wrap;
    }
    @media (max-width: 800px) {
      flex-direction: column;
    }
`;

class Work extends Component {
  render() {
    return (
      <WorkSection>
        <SectionTitleWrapper>
            <SectionTitle>work</SectionTitle>
            <ArrowAngle />
        </SectionTitleWrapper>
        <CardWrapper>
          <WorkCard backgroundImage={buildingCardLogo} title={'Buildings of rotterdam'} text={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean eros mauris, sagittis eget augue eu, laoreet facilisis lacus. Sed a nisi placerat, ullamcorper tortor id.'}/>
          <WorkCard backgroundImage={figmentCardLogo} title={'Figment'} text={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean eros mauris, sagittis eget augue eu, laoreet facilisis lacus. Sed a nisi placerat, ullamcorper tortor id.'}/>
          <WorkCard backgroundImage={breakOutCardLogo} title={'Break out'} text={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean eros mauris, sagittis eget augue eu, laoreet facilisis lacus. Sed a nisi placerat, ullamcorper tortor id.'}/>
          <WorkCard backgroundImage={portfolioCardLogo} title={'Portfolio'} text={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean eros mauris, sagittis eget augue eu, laoreet facilisis lacus. Sed a nisi placerat, ullamcorper tortor id.'}/>
        </CardWrapper>
      </WorkSection>
    );
  }
}

export default Work;
