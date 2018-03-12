import React, { Component } from "react";
import Navigation from "./Navigation";
import Link from "gatsby-link";
import styled from "styled-components";

// Icons
import Arrow from "../images/icons/Arrow.js";
import background from "../images/header-background.svg";

const Head = styled.header`
  background-image: url(${background});
  background-position: bottom;
  width: 100%;
  height: 85vh;
`;

const ContentWrapper = styled.div`
  flex: 1;
  display: flex;
  margin: 70px 150px 0 150px;
`;

const Content = styled.div`
  max-width: 500px;
  display: flex;
  flex-direction: column;
`;

const ContentTop = styled.div`
  & > h1 {
    color: ${props => props.theme.colorWhite};
    margin: 0 0 30px 0;
  }
`;

const ContentBottom = styled.div`
  display: flex;
  text-align: justify;
  & > p {
    margin-right: 90px;
    width: 290px;
    color: ${props => props.theme.colorLightGray};
  }
`;

const ArrowContainer = styled.div`
  display: flex;
  align-items: flex-end;
  margin-right: 95px;
`;

const HeaderTriangle = styled.div`
  width: 100%;
  height: 0;
  border-top: 100px solid #071616;
  border-right: 1000px solid transparent;
`;

class Header extends Component {
  render() {
    return (
      <Head>
        <Navigation />
        <ContentWrapper>
          <Content>
            <ContentTop>
              <h1>Who, What, Where?</h1>
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
              <ArrowContainer>
                <Arrow />
              </ArrowContainer>
            </ContentBottom>
          </Content>
        </ContentWrapper>
      </Head>
    );
  }
}

export default Header;
