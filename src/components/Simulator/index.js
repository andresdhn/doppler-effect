import React, { useState } from 'react';
import styled from 'styled-components';
import Simulation from '../Simulation';
import Controls from '../Controls';
//
const StyledSimulator = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;

    background-color: #ffffff;
    border: 2px solid #ffffff;
    border-radius: 10px;
    box-shadow: 5px 5px 25px rgba(0, 0, 0, 0.2);
`;

const Simulator = () => {
    const [velocity, setVelocity] = useState(0);

    const handleVelocityChange = value => {
        setVelocity(value);
    };

    return (
        <StyledSimulator>
            <Simulation />
            <Controls
                velocity={velocity}
                onVelocityChange={handleVelocityChange}
            />
        </StyledSimulator>
    );
};

export default Simulator;
