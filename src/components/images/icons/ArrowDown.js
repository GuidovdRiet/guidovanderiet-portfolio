import React from "react";
import styled from "styled-components";

const ArrowDownIcon = styled.svg`
  width: 12px;
  margin-top: 15px;
  fill: ${props => props.theme.colorBorderMain};
`;

const ArrowDown = () => (
  <ArrowDownIcon viewBox="0 0 8.18 18.59">
    <rect x="3.59" width="1" height="18" />
    <polygon points="0 14.19 0.73 13.51 4.09 17.12 7.45 13.51 8.18 14.19 4.09 18.59 0 14.19" />
  </ArrowDownIcon>
);

export default ArrowDown;
