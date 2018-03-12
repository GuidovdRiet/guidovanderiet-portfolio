import React, { Component } from 'react';
import styled from 'styled-components';

import WorkCard from './WorkCard';

const WorkSection = styled.section`
    width: 100%;
    display: flex;
`;

class Work extends Component {
    render() {
        return(
            <WorkSection>
                <WorkCard />
                <WorkCard />
                <WorkCard />
                <WorkCard />
            </WorkSection>
        );
    }
}

export default Work;