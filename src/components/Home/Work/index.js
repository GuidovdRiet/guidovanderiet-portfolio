import React, { Component } from 'react';
import styled from 'styled-components';

import WorkCard from './WorkCard';
import ArrowAngle from '../../images/icons/ArrowAngle';

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
  color: ${props => props.theme.colorWhite};
`;

const CardWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    @media (max-width: 1100px) {
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
          <WorkCard />
          <WorkCard />
          <WorkCard />
          <WorkCard />
        </CardWrapper>
      </WorkSection>
    );
  }
}

export default Work;
