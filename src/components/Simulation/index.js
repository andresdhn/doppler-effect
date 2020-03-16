import React from 'react';
import styled from 'styled-components';
import space from '../../images/space-bg.png';
import star from '../../images/star-small.png';
//
const StyledSimulation = styled.section`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;

    background: url(${space}) repeat bottom center;
    background-size: 100% auto;
    background-color: #000000;
`;

const Star = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: url(${star}) no-repeat top center;
    background-size: 100% auto;
`;

const Simulation = props => {
    return (
        <StyledSimulation>
            <Star />
        </StyledSimulation>
    );
};

export default Simulation;
