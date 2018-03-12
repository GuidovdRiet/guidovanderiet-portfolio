import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components';

import Header from '../components/Home/Header';
import Work from '../components/Home/Work';

const ContentContainer = styled.div`
  width: 100%;
  margin-top: 100px;
  display: flex;
  justify-content: center;
`;

const ContentWrapper = styled.div`
  width: 80%;
  max-width: 2050px;
`;


const IndexPage = () => (
  <div>
    <Header />
    <ContentContainer>
      <ContentWrapper>
        <Work />
      </ContentWrapper>
    </ContentContainer>
  </div>
)

export default IndexPage
