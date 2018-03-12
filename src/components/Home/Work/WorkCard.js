import React, { Component } from "react";
import styled from 'styled-components';

const Card = styled.div`
    box-shadow: 0px 0px 24px -6px rgba(0,0,0,0.1);
    margin-left: 40px;
    background: ${props => props.theme.colorWhite};
    &:first-child {
        margin-left: 0px;
    }
`;

const CardImage = styled.img``;
const CardTitle = styled.h3``;
const CardText = styled.p``;

class WorkCard extends Component {
  render() {
    return (
      <Card>
        <CardImage />
        <CardTitle>Buildings of Rotterdam</CardTitle>
        <CardText>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur nec
          orci dignissim, auctor arcu sit amet, condimentum ipsum. Donec finibus
          vulputate felis, et sollicitudin purus pharetra vitae. Vivamus
          lobortis felis a sapien vestibulum euismod.
        </CardText>
      </Card>
    )
  }
}

export default WorkCard;
