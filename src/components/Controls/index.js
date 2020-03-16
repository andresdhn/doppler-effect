import React from 'react';
import styled from 'styled-components';
//
const StyledControls = styled.section`
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

const StyledRange = styled.input`
    -webkit-appearance: none;
    width: auto;

    &:focus {
        outline: none;
    }

    &::-webkit-slider-runnable-track {
        width: 100%;
        height: 4px;
        cursor: pointer;
        background: #0269b3;
        border-radius: 0px;
        border: 0px solid rgba(0, 0, 0, 0);
    }

    &::-webkit-slider-thumb {
        border: 2px solid #ffffff;
        height: 30px;
        width: 15px;
        border-radius: 5px;
        background: #0269b3;
        cursor: pointer;
        -webkit-appearance: none;
        margin-top: -13px;
    }

    &:focus::-webkit-slider-runnable-track {
        background: #0269b3;
    }
`;

const Controls = props => {
    const { velocity, onVelocityChange } = props;

    return (
        <StyledControls>
            <label htmlFor="velocity">Velocity(Km/s)</label>
            <StyledInput
                type="number"
                name="velocity"
                value={velocity}
                min={-100}
                max={100}
                onChange={e => onVelocityChange(e.target.value)}
            />
            <StyledRange
                type="range"
                value={velocity}
                min={-100}
                max={100}
                onChange={e => onVelocityChange(e.target.value)}
            />
        </StyledControls>
    );
};

export default Controls;
