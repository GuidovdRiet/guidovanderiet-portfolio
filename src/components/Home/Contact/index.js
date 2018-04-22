import React, { Component } from "react";
import styled from "styled-components";

import CoffeeImage from "../../images/contact-coffee-background.png";

const ContactSection = styled.section`
  height: calc(100vh - 48px);
  background: ${props => props.theme.colorYellow};
`;

const ContactTextWrapper = styled.div`
  display: flex; 
  justify-content: center;
  flex-direction: column;
  height: 100%;
  align-items: center;
  > h3 {
    margin-bottom: 10px;
  }
`;

const ContactImage = styled.div`
  background: url(${CoffeeImage});
`;

class Contact extends Component {
  render() {
    return (
      <ContactSection>
        <ContactTextWrapper>
          <h3>Hit me up.</h3>
          <h1>guidovdriet@gmail.com</h1>
        </ContactTextWrapper>
      </ContactSection>
    );
  }
}

export default Contact;
