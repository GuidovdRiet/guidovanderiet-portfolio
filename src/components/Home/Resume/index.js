import React, { Component } from "react";
import styled from 'styled-components';

const ResumeSection = styled.section`
  margin-top: 120px;
`;

const SectionTitleWrapper = styled.div`
    display: flex;
    margin-bottom: 80px;
`;

const SectionTitle = styled.h1`
  color: ${props => props.theme.colorWhite};
  background: #000;
  clip-path: polygon(0 0, 100% 0%, 100% 100%, 0 94%);
  padding: 5px 18px 10px 18px;
`;

class Resume extends Component {
  render() {
    return (
      <ResumeSection>
        <SectionTitleWrapper>
          <SectionTitle>resume</SectionTitle>
        </SectionTitleWrapper>
      </ResumeSection>
    );
  }
}

export default Resume;
