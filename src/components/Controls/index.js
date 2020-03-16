import React from 'react';
import styled from 'styled-components';
//
const StyledControls = styled.section`
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 150px;
    background-color: #ffffff;
`;

const StyledForm = styled.form`
    position: relative;
    display: flex;
    align-items: center;
    justify-content: space-around;

    width: 100%;
    height: 100%;
    max-width: 900px;
    margin: 0 auto;
`;

const FormGroup = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;
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

    const onInputChange = e => {
        let val = e.target.value;
        let regx = /^-?[0-9]+$/;

        if (val === '' || regx.test(val)) {
            if (val >= -100 && val <= 100) {
                onVelocityChange(val);
            }
        }
        return false;
    };

    return (
        <StyledControls data-test="controlsComponent">
            <StyledForm>
                <FormGroup>
                    <label htmlFor="velocity">Velocity(Km/s)</label>
                    <StyledInput
                        type="number"
                        name="velocity"
                        value={velocity}
                        min={-100}
                        max={100}
                        onChange={onInputChange}
                    />
                </FormGroup>
                <StyledRange
                    type="range"
                    value={velocity}
                    min={-100}
                    max={100}
                    onChange={onInputChange}
                />
            </StyledForm>
        </StyledControls>
    );
};

export default Controls;
