import React, { Component } from "react";
import styled from "styled-components";

import ArrowDown from "../../images/icons/ArrowDown";

const ContactSection = styled.section`
  height: calc(120vh - 48px);
  background-image: linear-gradient(
    rgba(226, 169, 70, 0),
    rgba(226, 169, 70, 0.95)
  );
  background-size: cover;
  background-repeat: no-repeat;
  background-position: right;
`;

const ContactTextWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  flex-direction: column;
  height: 100%;
  align-items: center;
  padding-bottom: 70px;
  > h3 {
    margin-bottom: 10px;
  }
  > h1 {
    font-size: 3em;
  }
`;

class Contact extends Component {
  render() {
    return (
      <ContactSection>
        <ContactTextWrapper>
          <ArrowDown />
          <h1>guidovdriet@gmail.com</h1>
        </ContactTextWrapper>
      </ContactSection>
    );
  }
}

export default Contact;
