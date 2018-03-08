import React, { Component } from 'react';
import Logo from './Logo';

// Social icons
import Codepen from '../Icons/social-icons/Codepen';
import Github from '../Icons/social-icons/Github';
import LinkedIn from '../Icons/social-icons/LinkedIn';
import Twitter from '../Icons/social-icons/Twitter';

class Navigation extends Component {
    render() {
        return (
            <div>
                <Logo />
                <Codepen />
                <Github />
                <Twitter />
                <LinkedIn />
            </div>
        )
    }
}

export default Navigation;