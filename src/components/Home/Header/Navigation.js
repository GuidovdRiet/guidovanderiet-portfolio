import React, { Component } from 'react';
import styled from 'styled-components';

const Nav = styled.nav`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 40px 80px 0 80px;    
`

const SocialIconWrapper = styled.ul`
    list-style: none;
    display: flex;
    width: 115px;
    align-items: center;
    justify-content: space-between;
`

const Icon = styled.li`
    > * {
        fill: #C7C7C7;
    }
`

// Icons
import Logo from './Logo';
import Codepen from '../../images/icons/social-icons/Codepen';
import Github from '../../images/icons/social-icons/Github';
import LinkedIn from '../../images/icons/social-icons/LinkedIn';
import Twitter from '../../images/icons/social-icons/Twitter';

class Navigation extends Component {
    render() {
        return (
            <Nav>
                <Logo />
                <SocialIconWrapper>
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
            </Nav>
        )
    }
}

export default Navigation;