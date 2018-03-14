import React, { Component } from "react";
import styled from "styled-components";

const BrandWrapper = styled.div`
  & > * {
    color: ${props => props.theme.colorMediumGray};
    font-size: 1.5em;
    border: 1px solid ${props => props.theme.colorMediumGray};
    margin-bottom: 9px;
  }
  transition: all .3s cubic-bezier(.25,.75,.5,1.25);
  &.active {
      display: flex;
      margin-top: -20px;
      transform: translate3d(100px, 0, 0);
  }
`;

const BrandTop = styled.h1`
  padding: 5px 0px 5px 10px;
  width: 70px;
  margin-right: 10px;
`;

const BrandMiddle = styled.h1`
  padding: 5px 0px 5px 10px;
  width: 74px;
  margin-right: 10px;
`;

const BrandBottom = styled.h1`
  padding: 5px 0px 5px 10px;
  width: 55px;
`;

class Logo extends Component {
  componentDidMount() {
      this.props.addNavBackgroundOnScroll(null, this.logo);
  }

  render() {
    const { navScrollLimit } = this.props;
    return (
      <BrandWrapper innerRef={brand => (this.logo = brand)} className={navScrollLimit && 'active'}>
        <BrandTop className={navScrollLimit && 'active'} >Guido</BrandTop>
        <BrandMiddle className={navScrollLimit && 'active'}>van de</BrandMiddle>
        <BrandBottom>Riet</BrandBottom>
      </BrandWrapper>
    );
  }
}

export default Logo;
