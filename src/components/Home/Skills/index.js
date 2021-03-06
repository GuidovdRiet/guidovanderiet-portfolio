import React, { Component } from "react";
import styled from "styled-components";

import ArrowRight from "../../images/icons/ArrowRight";

const SkillSection = styled.section`
  height: 100vh;
  display: flex;
`;

const TitleWrapper = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const TitleContent = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-end;
`;

const SkillsWrapper = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

const SkillsSectionWrapper = styled.div`
  &:first-child {
    margin-bottom: 80px;
  }
  > h4 {
    color: ${props => props.theme.colorYellow};
  }
  > h1 {
    font-weight: 700;
    letter-spacing: 0;
    font-size: 2.6em;
    color: ${props => props.theme.colorLightGray};
  }
`;

class Skills extends Component {
  render() {
    return (
      <SkillSection>
        <TitleWrapper>
          <TitleContent>
            <h1>Technical Skills</h1>
            <ArrowRight />
          </TitleContent>
        </TitleWrapper>
        <SkillsWrapper>
          <SkillsSectionWrapper>
            <h4>Code</h4>
            <h1>Javascript, React, Node, Express, Sass</h1>
          </SkillsSectionWrapper>
          <SkillsSectionWrapper>
            <h4>Design</h4>
            <h1>Indesign, Illustrator, Photoshop</h1>
          </SkillsSectionWrapper>
        </SkillsWrapper>
      </SkillSection>
    );
  }
}

export default Skills;
