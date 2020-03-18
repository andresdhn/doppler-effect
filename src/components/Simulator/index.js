import React, { useState } from 'react';
import styled from 'styled-components';
import Star from '../Star';
import Controls from '../Controls';
import space from '../../images/space-bg.png';
//
const StyledSimulator = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    min-height: 600px;
    min-width: 420px;

    background: url(${space}) repeat bottom center;
    background-size: 120% auto;
`;

const Simulator = () => {
    const [velocity, setVelocity] = useState(0);

    const handleVelocityChange = value => {
        setVelocity(value);
    };

    return (
        <StyledSimulator data-test="simulatorComponent">
            <Star velocity={velocity} />
            <Controls
                velocity={velocity}
                onVelocityChange={handleVelocityChange}
            />
        </StyledSimulator>
    );
};

export default Simulator;
