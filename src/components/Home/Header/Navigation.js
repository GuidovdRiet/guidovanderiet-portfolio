import React, { Component } from "react";
import styled from "styled-components";

const Nav = styled.nav`
  display: flex;
  justify-content: center;
  padding: 30px 30px 0 30px;
  transition: position 0.3s ease-in-out;
  width: 100%;
  &.active {
    background: rgba(0, 0, 0, 0.9);
    top: 0;
    width: 100%;
    height: 50px;
    position: fixed;
  }
`;

const ContentWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  &.active {
    width: (82% + 200px);
    max-width: 2052px;
  }
`;

const SocialIconWrapper = styled.ul`
  list-style: none;
  display: flex;
  width: 115px;
  margin-bottom: 6px;
  align-items: center;
  justify-content: space-between;
  transition: all 0.3s cubic-bezier(0.25, 0.75, 0.5, 1.25);
  &.active {
    transform: translate3d(-100px, 0, 0);
    width: 135px;
  }
`;

const Icon = styled.li`
  > * {
    fill: ${props => props.theme.colorMediumGray};
  }
`;

// Icons
import Logo from "./Logo";
import Codepen from "../../images/icons/social-icons/Codepen";
import Github from "../../images/icons/social-icons/Github";
import LinkedIn from "../../images/icons/social-icons/LinkedIn";
import Twitter from "../../images/icons/social-icons/Twitter";

class Navigation extends Component {
  state = {
    logoPositionBottom: 0,
    navScrollLimit: false
  };

  addNavBackgroundOnScroll = (e, logo) => {
    const scrollTop = window.pageYOffset;
    logo &&
      this.setState({
        logoPositionBottom: logo.getBoundingClientRect().bottom
      });
    this.state.logoPositionBottom < scrollTop &&
      this.setState({ navScrollLimit: true });
    this.state.logoPositionBottom > scrollTop &&
      this.setState({ navScrollLimit: false });
  };

  componentDidMount() {
    window.addEventListener("scroll", this.addNavBackgroundOnScroll);
  }

  componentWillUnmount() {
    document.removeEventListener("scroll", this.addNavBackgroundOnScroll);
  }

  render() {
    const { navScrollLimit } = this.state;
    return (
      <Nav className={navScrollLimit && "active"}>
        <ContentWrapper className={navScrollLimit && "active"}>
          <Logo
            addNavBackgroundOnScroll={this.addNavBackgroundOnScroll}
            navScrollLimit={navScrollLimit}
          />
          <SocialIconWrapper className={navScrollLimit && "active"}>
            <Icon>
              <Github />
            </Icon>
            <Icon>
              <Codepen />
            </Icon>
            <Icon>
              <Twitter />
            </Icon>
            <Icon>
              <LinkedIn />
            </Icon>
          </SocialIconWrapper>
        </ContentWrapper>
      </Nav>
    );
  }
}

export default Navigation;
