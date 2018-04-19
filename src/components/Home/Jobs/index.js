import React, { Component } from "react";
import styled from "styled-components";

import ArrowDown from "../../images/icons/ArrowDown";
import OnlineStatusCircle from "../../images/icons/OnlineStatusCircle";

const JobSection = styled.section`
  margin-top: 120px;
`;

const SectionTitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 60px;
`;

const SectionTitle = styled.h1`
  padding: 5px 18px 10px 18px;
`;

const ContentWrapper = styled.div`
  display: flex;
`;

const Job = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 500px;
  max-height: 500px;
  &:nth-child(1) {
    background: ${props => props.theme.colorMainDark};
  }
  &:nth-child(2) {
    background: ${props => props.theme.colorMainLight};
  }
`;

const TextWrapper = styled.div`
  width: 80%;
  max-width: 420px;
  padding: 80px 0;
  max-width: 340px;
  > h4 {
    color: ${props => props.theme.colorGreen};
  }
  > p {
    color: ${props => props.theme.colorLightGray};
    text-align: justify;
  }
`;

const JobTitleWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  margin-left: -47px;
`;

const JobTitle = styled.h1`
  margin: 20px 0 22px 40px;
`;

class Jobs extends Component {
  render() {
    return (
      <JobSection>
        <SectionTitleWrapper>
          <SectionTitle>jobs</SectionTitle>
          <ArrowDown />
        </SectionTitleWrapper>
        <ContentWrapper>
          <Job>
            <TextWrapper>
              <JobTitleWrapper>
                <OnlineStatusCircle/>
                <JobTitle>Front-end web developer</JobTitle>
              </JobTitleWrapper>
              <h4>@Chainels</h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
                convallis est in dui finibus mollis. Lorem ipsum dolor sit amet,
                consectetur adipiscing elit. Integer convallis est in dui
                finibus mollis. Lorem ipsum dolor sit amet, consectetur
                adipiscing elit. Integer convallis est in dui finibus mollis.
              </p>
            </TextWrapper>
          </Job>
          <Job>
            <TextWrapper>
              <JobTitleWrapper>
                <OnlineStatusCircle /> 
                <JobTitle>Peercoach</JobTitle>
              </JobTitleWrapper>
              <h4>@Hogeschool Rotterdam</h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
                convallis est in dui finibus mollis.Lorem ipsum dolor sit amet,
                consectetur adipiscing elit. Integer convallis est in dui
                finibus mollis. Lorem ipsum dolor sit amet, consectetur
                adipiscing elit. Integer convallis est in dui finibus mollis.
              </p>
            </TextWrapper>
          </Job>
        </ContentWrapper>
      </JobSection>
    );
  }
}

export default Jobs;
