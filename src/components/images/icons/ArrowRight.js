import React from "react";
import styled from "styled-components";

const ArrowRightIcon = styled.svg`
  width: 30px;
  margin-top: 15px;
  fill: ${props => props.theme.colorBorderMain};
`;

const ArrowRight = () => 
    <ArrowRightIcon viewBox="0 0 18.75 8.18">
        <rect y="3.32" width="18" height="1"/>
        <polygon points="14.35 8.18 13.67 7.45 17.28 4.09 13.67 0.73 14.35 0 18.75 4.09 14.35 8.18"/>
    </ArrowRightIcon>

export default ArrowRight;