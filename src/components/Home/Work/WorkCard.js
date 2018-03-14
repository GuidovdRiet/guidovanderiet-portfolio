import React, { Component } from "react";
import styled from 'styled-components';

const Card = styled.div`
    box-shadow: 0px 0px 24px -6px rgba(0,0,0,0.1);
    background: ${props => props.theme.colorWhite};
    width: 22%;
    @media (max-width: 1100px) {
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

const CardImage = styled.img`
    width: 100%;
    height: 200px;
    background: url('https://source.unsplash.com/category/buildings/200x150/');
    background-repeat: no-repeat;
    background-size: cover;
`;

const CardTitle = styled.h3`
    
`;

const CardText = styled.p`

`;

const CardLogo = styled.img`

`;

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
        <CardLogo></CardLogo>
      </Card>
    )
  }
}

export default WorkCard;
