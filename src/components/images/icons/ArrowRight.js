import React from "react";
import styled from "styled-components";

const ArrowRightIcon = styled.svg`
    width: 48px;
    fill: rgba(148, 148, 152, 0.3);
`;

const ArrowRight = () =>
    <ArrowRightIcon viewBox="0 0 29.09 29.09"><path d="M14.54,29.09A14.54,14.54,0,1,1,29.09,14.54,14.56,14.56,0,0,1,14.54,29.09ZM14.54,1A13.54,13.54,0,1,0,28.09,14.54,13.56,13.56,0,0,0,14.54,1Z"/><g><rect x="9.79" y="14.04" width="8.42" height="1"/><polygon points="14.9 18.63 14.21 17.9 17.82 14.54 14.21 11.19 14.9 10.45 19.29 14.54 14.9 18.63"/></g></ArrowRightIcon>

export default ArrowRight;