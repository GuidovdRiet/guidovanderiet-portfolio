import React, { Component } from 'react';
import Logo from './Logo';

// Social icons
import Codepen from './social-icons/Codepen';
import Github from './social-icons/Github';
import LinkedIn from './social-icons/LinkedIn';
import Twitter from './social-icons/Twitter';

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