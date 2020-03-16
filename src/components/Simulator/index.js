import React, { useState } from 'react';
import styled from 'styled-components';
import space from '../../images/space-bg.png';
//
const StyledSimulator = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: #ffffff;
    border: 2px solid #ffffff;
    border-radius: 10px;
    overflow: hidden;
`;

const StyledInput = styled.input`
    display: block;
    padding: 0.5rem;
    outline: none;

    background-color: #ffffff;
    border: 1px solid #cdcdcd;
    border-radius: 5px;

    font-family: 'Roboto', Arial, sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 1;
`;

const Controls = styled.section`
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 150px;
    display: flex;
    align-items: center;
    justify-content: space-around;
    background-color: #ffffff;
`;

const Simulation = styled.section`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;

    background: url(${space}) repeat center center;
    background-size: 100% auto;
    background-color: #000000;
`;

const Simulator = () => {
    const [velocity, setVelocity] = useState(0);

    return (
        <StyledSimulator>
            <Simulation />
            <Controls>
                <label htmlFor="velocity">Velocity(Km/s)</label>
                <StyledInput
                    type="number"
                    name="velocity"
                    value={velocity}
                    min={-100}
                    max={100}
                    onChange={e => setVelocity(e.target.value)}
                />
                <StyledInput
                    type="range"
                    value={velocity}
                    min={-100}
                    max={100}
                    onChange={e => setVelocity(e.target.value)}
                />
            </Controls>
        </StyledSimulator>
    );
};

export default Simulator;
