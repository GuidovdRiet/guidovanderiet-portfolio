import React, { Component } from "react";
import styled from 'styled-components';

// Icons
import BuildingsOfRdamIcon from '../../images/icons/work-card-icons/breakout_icon.svg';

const Card = styled.div`
    box-shadow: 0px 0px 24px -6px rgba(0,0,0,0.1);
    background: ${props => props.theme.colorWhite};
    width: 22%;
    display: flex;
    flex-direction: column;
    align-items: center;
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

const CardTextWrapper = styled.div`
    width: 74%;
    margin: 20px 0;
`;


const CardImageWrapper = styled.div`
    background: #7085DE;
    width: 100%;
    height: 200px;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const CardImage = styled.div`
    width: 120px;
    height: 120px;
    margin: 0;
    background: url(${BuildingsOfRdamIcon});
    background-repeat: no-repeat;
    background-size: cover;
`;

const CardTitle = styled.h3`
    margin-top: 30px;
`;

const CardText = styled.p`
    color: ${props => props.theme.colorLightGray};
    line-height: 20px;
    font-size: 1.27em;
`;

class WorkCard extends Component {
  render() {
    return (
      <Card>
        <CardImageWrapper>
          <CardImage />
        </CardImageWrapper>
        <CardTextWrapper>
          <CardTitle>Buildings of Rotterdam</CardTitle>
          <CardText>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur nec
            orci dignissim, auctor arcu sit amet.
          </CardText>
        </CardTextWrapper>
      </Card>
    )
  }
}

export default WorkCard;
