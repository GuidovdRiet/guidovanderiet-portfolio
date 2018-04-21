import React from "react";
import styled from "styled-components";

const OnlineStatusCircleIcon = styled.svg`
  max-width: 10px;
  min-width: 10px;
  height: 12px;
  margin-top: 35px;
`;

const Circle = styled.circle`
  fill: ${props => props.theme.colorGreen};
  
`;

const OnlineStatusCircle = () => (
  <OnlineStatusCircleIcon viewBox="0 0 6.2 6.2">
    <Circle class="cls-1" cx="3.1" cy="3.1" r="3.1" />
  </OnlineStatusCircleIcon>
);

export default OnlineStatusCircle
