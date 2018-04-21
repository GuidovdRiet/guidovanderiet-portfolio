import React, { Component } from "react";
import styled from "styled-components";

import CoffeeImage from "../../images/contact-coffee-background.png";

const ContactSection = styled.section`
  height: calc(100vh - 48px);
  background: ${props => props.theme.colorYellow};
`;

const ContactImageWrapper = styled.div`
`;

const ContactImage = styled.div`
  background: url(${CoffeeImage});
`;

class Contact extends Component {
  render() {
    return (
      <ContactSection>
        <ContactImageWrapper>
          <ContactImage />
        </ContactImageWrapper>
      </ContactSection>
    );
  }
}

export default Contact;
