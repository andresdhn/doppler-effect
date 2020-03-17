import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
//
const StyledControls = styled.section`
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 250px;
    background-color: #ffffff;
`;

const StyledForm = styled.form`
    position: absolute;
    top 40%;
    left: 50%;
    transform: translate3d(-50%, -50%, 0);

    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row;

    width: 100%;
    height: 60%;
    max-width: 600px;
    margin: 0 auto;

    border-radius: 25px;
    border: 1px solid #cdcdcd;

    @media (max-width: 600px) {
        flex-direction: column;
        justify-content: flex-start;
    }
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

    margin: 40px 20px;
`;

const StyledRange = styled.input`
    -webkit-appearance: none;
    width: 170px;
    margin-left: 20px;

    &:focus {
        outline: none;
    }

    &::-webkit-slider-runnable-track {
        width: 100%;
        height: 4px;
        cursor: pointer;
        background: #444444;
        border-radius: 0px;
        border: 0px solid rgba(0, 0, 0, 0);
    }

    &::-webkit-slider-thumb {
        border: 2px solid #ffffff;
        height: 30px;
        width: 15px;
        border-radius: 5px;
        background: #444444;
        cursor: pointer;
        -webkit-appearance: none;
        margin-top: -13px;
    }

    &:focus::-webkit-slider-runnable-track {
        background: #444444;
    }
`;

const StyledFooter = styled.footer`
    position: absolute;
    bottom: 20px;
    width: 100%;
    font-size: 14px;
    text-align: center;

    a {
        color: #606060;
        text-decoration: none;
    }
`;

const Controls = props => {
    const { velocity, onVelocityChange } = props;

    const onInputChange = e => {
        let val = e.target.value;
        let regx = /^-?[0-9]+$/;

        if (val === '' || regx.test(val)) {
            if (val >= -100 && val <= 100) {
                onVelocityChange(parseFloat(val));
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
                        data-test="velocityInput"
                    />
                </FormGroup>
                <StyledRange
                    type="range"
                    value={velocity}
                    min={-100}
                    max={100}
                    onChange={onInputChange}
                    data-test="velocityRange"
                />
            </StyledForm>

            <StyledFooter>
                The Doppler effect on light &ndash; Simulation by Andres
                Hernandez{' '}
                <a
                    href="https://github.com/andresdhn"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    @andresdhn
                </a>
            </StyledFooter>
        </StyledControls>
    );
};

Controls.propTypes = {
    velocity: PropTypes.number,
};

export default Controls;
