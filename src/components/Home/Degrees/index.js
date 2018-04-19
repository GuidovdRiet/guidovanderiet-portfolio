import React, { Component } from "react";
import styled from "styled-components";

import backgroundPattern from "../../images/degree-background-pattern.svg";

const DegreeSection = styled.section`
  background-image: linear-gradient(rgba(42, 42, 49, 0.92), rgba(42, 42, 49, 0.92)), url(${backgroundPattern});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  height: 350px;
  max-height: 350px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

class Degree extends Component {
  render() {
    return (
      <DegreeSection>
        <h1>" In 2016 I earned a degree in graphic design. "</h1>
      </DegreeSection>
    );
  }
}

export default Degree;
