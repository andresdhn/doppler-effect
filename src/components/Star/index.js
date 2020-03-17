import React from 'react';
import PropTypes from 'prop-types';
import styled, { keyframes } from 'styled-components';
import star from '../../images/star-small.png';
import crown from '../../images/star-crown.png';
//
const StarContainer = styled.div`
    position: absolute;
    top: 20%;
    left: 50%;

    width: 420px;
    height: 420px;

    transform: translate3d(-50%, -20%, 0);

    @media (max-width: 600px) {
        top: 10%;
    }
`;

const glowAnimation = effect => keyframes`
    0 {
        box-shadow: 0 0 20px 0px rgba(${effect}, 0.5), inset 0 0 20px 20px rgba(${effect}, 0.2);
    }
    40% {
        box-shadow: 0 0 40px 20px rgba(${effect}, 0.5), inset 0 0 40px 20px rgba(${effect}, 0.2);
    }
    60% {
        box-shadow: 0 0 40px 20px rgba(${effect}, 0.5), inset 0 0 40px 20px rgba(${effect}, 0.2);
    }
    100% {
        box-shadow: 0 0 20px 0px rgba(${effect}, 0.5), inset 0 0 20px 20px rgba(${effect}, 0.2);
    }
`;

const crownAnimation = keyframes`
    0 {
        transform: rotate(0deg) scale(0.7);
    }
    20% {
        transform: rotate(-20deg) scale(0.9);
    }
    40% {
        transform: rotate(0deg) scale(0.5);
    }
    60% {
        transform: rotate(-50deg) scale(0.9);
    }
    100% {
        transform: rotate(0deg) scale(0.7);
    }
`;

const StarCrown = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 0.5;

    background: url(${crown}) no-repeat top center;
    background-size: 100%;
    animation: ${crownAnimation} 40s infinite alternate;
`;

const StarCore = styled.div`
    position: absolute;
    top: 49%;
    left: 49%;
    width: 30%;
    height: 30%;

    border-radius: 50%;
    transition: all 0.5s ease;
    transform: translate3d(-50%, -50%, 0);
`;

const StarImg = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 1;

    background: url(${star}) no-repeat top center;
    background-size: 100%;
`;

const StarGlow = styled.div`
    position: absolute;
    top: 49%;
    left: 49%;
    width: 30%;
    height: 30%;
    border-radius: 50%;
    transform: translate3d(-50%, -50%, 0);
    animation: ${props => glowAnimation(props.color)} 6s infinite alternate;
`;

const Star = props => {
    const { velocity } = props;

    const effect =
        velocity === 0
            ? '250, 250, 250' // White
            : velocity < 0
            ? '0, 0, 250' // Blue
            : '250, 0, 0'; // Red

    const intensity = Math.abs(parseFloat(velocity / 100));

    return (
        <StarContainer data-test="starComponent">
            <StarCrown />
            <StarCore
                style={{
                    backgroundColor: `rgb(${effect})`,
                }}
            />
            <StarImg />
            <StarGlow color={effect} />
        </StarContainer>
    );
};

Star.propTypes = {
    velocity: PropTypes.number,
};

export default Star;
