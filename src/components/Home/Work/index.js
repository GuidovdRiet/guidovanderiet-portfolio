import React, { Component } from "react";
import styled from "styled-components";

import WorkCard from "./WorkCard";

const WorkSection = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const SectionTitleWrapper = styled.div`
    display: flex;
    justify-content: flex-end;
    margin-bottom: 80px;
`;

const SectionTitle = styled.h1`
  color: ${props => props.theme.colorWhite};
  background: #000;
  clip-path: polygon(0 0, 100% 0%, 100% 95%, 0% 100%);
  padding: 10px 18px 10px 18px;
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
            <SectionTitle>Work</SectionTitle>
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
