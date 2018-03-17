import React, { Component } from "react";
import styled from 'styled-components';

// Icons
import BuildingsOfRdamIcon from '../../images/icons/work-card-icons/plus_icon.svg';
import BuildingsOfRdamLogo from '../../images/icons/project-logos/buildings-of-rotterdam-logo.svg';

const Card = styled.div`
    box-shadow: 0px 0px 24px -6px rgba(0,0,0,0.1);
    background: ${props => props.theme.colorWhite};
    width: 22%;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 300px;
    /* padding-bottom: 50px; */
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
`;

const CardImage = styled.img`
    width: 100%;
    height: 200px;
    background: linear-gradient(rgba(95, 117, 221, 0.9), rgba(95, 117, 221, 0.9)), url(${BuildingsOfRdamIcon});
    background-repeat: no-repeat;
    background-position: center;
    color: ${props => props.theme.colorMain};
`;

const CardTitle = styled.h3`
    margin-top: 10px;
`;

const CardText = styled.p`
    color: ${props => props.theme.colorLightGray};
    line-height: 19px;
`;

class WorkCard extends Component {
  render() {
    return (
      <Card>
        <CardImage />
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
