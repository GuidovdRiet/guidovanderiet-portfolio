import React, { Component } from 'react';
import styled from 'styled-components';

import WorkCard from './WorkCard';
import ArrowAngle from '../../images/icons/ArrowAngle';

import breakOutCardImage from "../../images/icons/work-card-icons/breakout_icon.svg";

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
          <WorkCard backgroundImage={breakOutCardImage} title={'Buildings of Rotterdam'} text={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean eros mauris, sagittis eget augue eu, laoreet facilisis lacus. Sed a nisi placerat, ullamcorper tortor id, porta felis. Etiam sit amet tellus molestie, varius felis tristique, pharetra purus. Sed vehicula nisi nisl, at accumsan risus sodales a. Nullam bibendum porta aliquet. In hac habitasse platea dictumst. Praesent placerat, nunc non lobortis pellentesque, tortor magna vehicula ex, sit amet egestas ligula odio id nulla. Mauris sollicitudin accumsan dapibus.'}/>
        </CardWrapper>
      </WorkSection>
    );
  }
}

export default Work;
