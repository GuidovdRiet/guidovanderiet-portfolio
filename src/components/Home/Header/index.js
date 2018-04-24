import React, { Component } from "react";
import { findDOMNode } from "react-dom";
import Navigation from "./Navigation";
import Link from "gatsby-link";
import styled from "styled-components";

// Icons
import ArrowDownCircle from "../../images/icons/ArrowDownCircle.js";
import background from "../../images/header-background.svg";

// particles
import { particleInstance, particleSettings } from "../../../utils/particles/";

const Head = styled.header`
  background-image: url(${background});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: bottom;
  width: 100%;
  height: 85vh;
  max-height: 800px;
`;

const Canvas = styled.canvas`
  width: 100%;
  max-height: 700px;
  position: absolute;
  top: 0;
  z-index: 0;
  left: 0;
`;

const ContentWrapper = styled.div`
  display: flex;
  justify-content: center;
  height: 100%;
`;

const Content = styled.div`
  max-width: 500px;
  display: flex;
  flex-direction: column;
  margin-top: 100px;
`;

const ContentTop = styled.div`
  & > h1 {
    margin: 0 0 30px -6px;
    text-align: center;
  }
`;

const ContentBottom = styled.div`
  display: flex;
  text-align: justify;
  flex-direction: column;
  align-items: center;
  last-word: center;
  & > p {
    text-align-last: center;
    padding: 0 80px;
    color: ${props => props.theme.colorLightGray};
  }
`;

class Header extends Component {
  componentDidMount() {
    const node = findDOMNode(this.canvas);
    new particleInstance(node, particleSettings);
  }

  render() {
    return (
      <Head>
        <Navigation />
        <ContentWrapper>
          <Content>
            <ContentTop>
              <h1>who, what, where?</h1>
            </ContentTop>
            <ContentBottom>
              <p>
                Creativiteit, onverwachte invalshoeken en humor typeren het werk
                van Guido van de Riet. Nadat hij zijn studie Grafisch Vormgever
                succesvol had afgerond, besloot hij zijn blikveld te verruimen
                en zich te verdiepen in de technische kanten van het vak. Met
                zijn studie Media technologie aan de Hogeschool van Rotterdam
                wil hij de samenwerking aangaan tussen designer en developer.
              </p>
              <ArrowDownCircle />
            </ContentBottom>
          </Content>
        </ContentWrapper>
        <Canvas ref={canvas => (this.canvas = canvas)} />
      </Head>
    );
  }
}

export default Header;
