import React from "react";
import styled from 'styled-components'

const ArrowIcon = styled.svg`
  fill: ${props => props.theme.colorLightGray};
`

const Arrow = () => (
  <ArrowIcon width="2.89mm" height="22.72mm" viewBox="0 0 8.18 64.4">
    <polygon points="7.45 59.32 4.53 62.46 4.53 0 3.53 0 3.53 62.33 0.73 59.32 0 60 4.09 64.4 8.18 60 7.45 59.32" />
  </ArrowIcon>
);

export default Arrow;
