import React from "react";
import styled from "styled-components";

const ArrowDownIcon = styled.svg`
    width: 48px;
    margin-top: 7px;
    z-index: 10;
    transition: all .2s ease-in-out;
    &:hover {
        transform: scale(1.1);
        cursor: pointer;
    }
`;

const Polygon = styled.polygon`
  fill: #5f75da;
`;

const PathTop = styled.path`
  fill: #5f75da;
`

const PathMiddle = styled.path`
  fill: #5f75da;
  opacity: 0.25;
  transform-origin: center;
  animation: rotate 3s linear infinite;
  @keyframes rotate {
    100% {
      transform: rotate(360deg);
    }
  }
`

const PathBottom = styled(PathMiddle)`
  opacity: 0.2;
`

const Rect = styled.rect`
  fill: #5f75da;
`

const ArrowDown = () =>
    <ArrowDownIcon viewBox="0 0 38.12 38.65">
        <Rect x="18.56" y="13.9" width="1" height="8.42"/>
        <Polygon points="14.97 19 15.7 18.32 19.06 21.93 22.42 18.32 23.15 19 19.06 23.4 14.97 19"/>
        <PathTop d="M19.06,35.27A16.62,16.62,0,1,1,35.68,18.65,16.64,16.64,0,0,1,19.06,35.27ZM19.06,3A15.62,15.62,0,1,0,34.68,18.65,15.63,15.63,0,0,0,19.06,3Z"/>
        <PathMiddle d="M19.06,38.65C9.9,38.65,2.44,30,2.44,19.32S9.9,0,19.06,0,35.68,8.67,35.68,19.32,28.22,38.65,19.06,38.65ZM19.06,1C10.45,1,3.44,9.22,3.44,19.32s7,18.32,15.62,18.32,15.62-8.22,15.62-18.32S27.67,1,19.06,1Z"/>
        <PathBottom d="M17.27,36.27a19.78,19.78,0,0,1-7.2-1.33A15.43,15.43,0,0,1,.81,25.69a15.43,15.43,0,0,1,1.49-13A20.9,20.9,0,0,1,13.59,3.64a20.9,20.9,0,0,1,14.47.08A15.43,15.43,0,0,1,37.31,13a15.44,15.44,0,0,1-1.49,13A20.9,20.9,0,0,1,24.53,35,22.09,22.09,0,0,1,17.27,36.27ZM20.85,3.38a21.08,21.08,0,0,0-6.94,1.2A19.9,19.9,0,0,0,3.17,13.2,14.45,14.45,0,0,0,1.76,25.36,14.45,14.45,0,0,0,10.43,34a19.9,19.9,0,0,0,13.78.07h0a19.9,19.9,0,0,0,10.75-8.62,14.45,14.45,0,0,0,1.41-12.16,14.45,14.45,0,0,0-8.67-8.64A18.78,18.78,0,0,0,20.85,3.38Z"/>
    </ArrowDownIcon>

export default ArrowDown;