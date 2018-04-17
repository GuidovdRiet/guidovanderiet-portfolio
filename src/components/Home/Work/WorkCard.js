import React, { Component } from "react";
import styled from "styled-components";

// Icons
import ArrowRight from "../../images/icons/ArrowRight";

const Card = styled.div`
  box-shadow: 0px 0px 50px 6px rgba(25, 25, 31, 0.69);
  background: ${props => props.theme.colorMain};
  width: 22%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 30px 0 30px 0;
  color: ${props => props.theme.colorWhite};
  @media (max-width: 1400px) {
    width: 45%;
    margin-bottom: 60px;
  }
  @media (max-width: 800px) {
    width: 100%;
  }
  &:first-child {
    margin-left: 0px;
  }
`;

const CardTextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 80%;
  max-width: 250px;
  margin-top: 15px;
`;

const CardImageWrapper = styled.div`
  /* display: flex;
    justify-content: center;
    align-items: center; */
`;

const CardImage = styled.div`
  width: 182px;
  height: 120px;
  background: url(${props => props.background});
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
`;

const CardTitle = styled.h3`
  margin-top: 25px;
  text-align: center;
`;

const CardText = styled.p`
  color: ${props => props.theme.colorLightGray};
  line-height: 20px;
  font-size: 1.27em;
  text-align: justify;
  text-align-last: center;
`;

class WorkCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      backgroundImage: this.props.backgroundImage,
      title: this.props.title,
      text: this.props.text
    };
  }

  render() {
    return (
      <Card>
        <CardImageWrapper><CardImage background={this.state.backgroundImage} /></CardImageWrapper>
        <CardTextWrapper>
          <CardTitle>{this.state.title}</CardTitle>
          <CardText>{this.state.text}</CardText>
          <ArrowRight />
        </CardTextWrapper>
      </Card>
    );
  }
}

export default WorkCard;
