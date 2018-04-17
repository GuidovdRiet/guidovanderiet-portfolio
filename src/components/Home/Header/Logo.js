import React, { Component } from "react";
import styled from "styled-components";

const BrandWrapper = styled.div`
  transition: all .3s cubic-bezier(.25,.75,.5,1.25);
  width: 10%;
  & > * {
    color: ${props => props.theme.colorMediumGray};
    font-size: 1.5em;
    border: 1px solid ${props => props.theme.colorMediumGray};
    margin-bottom: 9px;
  }
  &.active {
      transform: translate3d(80%, 0, 0);
      display: flex;
  }
`;

const Brand = styled.svg`
  width: 80px;
`;

const Polygon = styled.polygon`
  fill:#3e3e42;
  &.active {
    display: none;
  }
`;

const Path = styled.path`
  fill: none;
  stroke: #5f75da;
  stroke-miterlimit: 10;
`

class Logo extends Component {
  componentDidMount() {
      this.props.addNavBackgroundOnScroll(null, this.logo);
  }

  render() {
    const { navScrollLimit } = this.props;
    return (
      <BrandWrapper innerRef={brand => (this.logo = brand)} className={navScrollLimit && 'active'}>
        <Brand viewBox="0 0 90.41 72.06">
          <Polygon className={navScrollLimit && 'active'} points="80.85 59.81 0 72.06 0 0 90.41 0 80.85 59.81"/>
          <Path d="M55.62,33.09v11.2a20.57,20.57,0,0,1-11.79,3.94,16.38,16.38,0,0,1-8.08-2A15.08,15.08,0,0,1,27.9,32.84,14.56,14.56,0,0,1,30,25.06a15.27,15.27,0,0,1,5.87-5.5,17,17,0,0,1,8.24-2,17.91,17.91,0,0,1,6.31,1.15,17.53,17.53,0,0,1,5.35,3.1l-2.92,3.77A13,13,0,0,0,48.82,23a12.58,12.58,0,0,0-4.67-.91,11.16,11.16,0,0,0-5.57,1.43,10.74,10.74,0,0,0-4,3.9,10.73,10.73,0,0,0,0,10.88,10.73,10.73,0,0,0,4,3.9,11.26,11.26,0,0,0,5.6,1.43,12.35,12.35,0,0,0,3.51-.54,14.5,14.5,0,0,0,3.45-1.53V33.09h4.46Z"/>
        </Brand>
      </BrandWrapper>
    );
  }
}

export default Logo;
