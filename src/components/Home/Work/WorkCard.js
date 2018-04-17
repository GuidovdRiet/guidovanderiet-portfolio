import React, { Component } from "react";
import styled from 'styled-components';

// Icons
import breakOutCardImage from '../../images/icons/work-card-icons/breakout_icon.svg';
import ArrowRight from '../../images/icons/ArrowRight';

const Card = styled.div`
    box-shadow: 0px 0px 50px 6px rgba(25,25,31,0.69);
    background: ${props => props.theme.colorMain};
    width: 22%;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 30px 0 30px 0;
    color: ${props => props.theme.colorWhite};
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
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 74%;
    margin-bottom: 10px;
`;


const CardImageWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;

const CardImage = styled.div`
    width: 200px;
    height: 120px;
    background: url(${breakOutCardImage});
    background-repeat: no-repeat;
    background-size: contain;
`;

const CardTitle = styled.h3`
    margin-top: 30px;
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
          <ArrowRight/>
        </CardTextWrapper>
      </Card>
    )
  }
}

export default WorkCard;
