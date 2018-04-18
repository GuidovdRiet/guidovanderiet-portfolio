import React, { Component } from "react";
import styled from 'styled-components';

import ArrowDown from '../../images/icons/ArrowDown';

const ResumeSection = styled.section`
  margin-top: 120px;
`;

const SectionTitleWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    flex: 1;
    margin-bottom: 60px;
`;

const SectionTitle = styled.h1`
  color: ${props => props.theme.colorWhite};
  padding: 5px 18px 10px 18px;
`;

const ContentWrapper = styled.div`
  display: flex;
`;

const Job = styled.div`
  flex: 1;
  &:nth-child(1) {
    background: ${props => props.theme.colorMainDark};
  }
  &:nth-child(2) {
    background: ${props => props.theme.colorMainLight};
  }
`;

const TextWrapper = styled.div`
  * > h1 {

  }
`;

class Resume extends Component {
  render() {
    return (
      <ResumeSection>
        <SectionTitleWrapper>
          <SectionTitle>jobs</SectionTitle> 
          <ArrowDown />
        </SectionTitleWrapper>
        <ContentWrapper>
          <Job>
            <TextWrapper>
              <h1>Front-end web developer</h1>
              <h3>@Chainels</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer convallis est in dui finibus mollis.</p>
            </TextWrapper>
          </Job>
          <Job>
            <TextWrapper>
              <h1>Front-end web developer</h1>
              <h3>@Chainels</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer convallis est in dui finibus mollis.</p>
            </TextWrapper>
          </Job>
        </ContentWrapper>
      </ResumeSection>
    );
  }
}

export default Resume;
