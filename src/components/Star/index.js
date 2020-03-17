import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import star from '../../images/star-small.png';
//
const StarContainer = styled.div`
    position: absolute;
    top: 20%;
    left: 50%;

    width: 100%;
    height: 100%;
    max-width: 420px;
    max-height: 420px;

    transform: translateX(-50%);

    background: url(${star}) no-repeat top center;
    background-size: 100%;

    @media (max-width: 600px) {
        top: 10%;
    }
`;

const StarGlow = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    width: 20%;
    height: 20%;
    transform: translate3d(-50%, -50%, 0);
    border-radius: 50%;
    z-index: 99;
    opacity: ${props => props.intensity};
    background-color: ${props => props.color};
`;

const Star = props => {
    const { velocity } = props;
    const effect = velocity < 0 ? 'blue' : 'red';
    const opacity = Math.abs(parseFloat(velocity / 100));

    return (
        <StarContainer data-test="starComponent">
            <StarGlow intensity={opacity} color={effect} />
        </StarContainer>
    );
};

Star.propTypes = {
    velocity: PropTypes.number,
};

export default Star;
