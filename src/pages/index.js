import React, { Component } from "react";
import Link from "gatsby-link";
import styled from "styled-components";

import Header from "../components/Home/Header";
import Work from "../components/Home/Work";
import Jobs from "../components/Home/Jobs";
import Degrees from "../components/Home/Degrees";
import Skills from "../components/Home/Skills";
import Contact from "../components/Home/Contact";

const ContentContainerSpacing = styled.div`
  width: 100%;
  margin-top: 100px;
  display: flex;
  justify-content: center;
`;

const ContentWrapper = styled.div`
  width: 82%;
  max-width: 2052px;
`;

class IndexPage extends Component {
  render() {
    return (
      <div>
        <Header />
        <ContentContainerSpacing>
          <ContentWrapper>
            <Work />
          </ContentWrapper>
        </ContentContainerSpacing>
        <Jobs />
        <Degrees />
        <Skills />
        <Contact />
      </div>
    );
  }
}

export default IndexPage;
