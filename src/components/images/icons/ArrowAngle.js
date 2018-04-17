import React from 'react';
import styled from 'styled-components';

const ArrowAngleIcon = styled.svg`
    width: 33px;
    height: 22px;
    margin: 14px 0 0 20px;
    > * {
        fill: ${props => props.theme.colorLightGray};
    }
`;

const ArrowAngle = () =>
    <ArrowAngleIcon viewBox="0 0 31.59 18.59">
        <polygon class="cls-1" points="28 18 27 18 27 1 0 1 0 0 28 0 28 18"/>
        <polygon class="cls-1" points="23.41 14.19 24.14 13.51 27.5 17.12 30.86 13.51 31.59 14.19 27.5 18.59 23.41 14.19"/>
    </ArrowAngleIcon>

export default ArrowAngle;