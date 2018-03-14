import React, { Component } from "react";
import styled from "styled-components";

const BrandWrapper = styled.div`
  & > * {
      color: ${props => props.theme.colorMediumGray};
      font-size: 1.5em;
      border: 1px solid ${props => props.theme.colorMediumGray};
      margin-bottom: 9px;
  }
`;

const BrandTop = styled.h1`
    padding: 5px 0px 5px 10px;
    width: 70px;
`;

const BrandMiddle = styled.h1`
    padding: 5px 0px 5px 10px;
    width: 74px;
`;

const BrandBottom = styled.h1`
    padding: 5px 0px 5px 10px;
    width: 55px;
`;

const Logo = () => (
  <BrandWrapper>
    <BrandTop>Guido</BrandTop>
    <BrandMiddle>van de</BrandMiddle>
    <BrandBottom>Riet</BrandBottom>
  </BrandWrapper>
);

export default Logo;
