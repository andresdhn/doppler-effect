import React from 'react';
import styled from 'styled-components';
import star from '../../images/star-small.png';
//
const StarContainer = styled.div`
    position: absolute;
    top: 10%;
    left: 50%;

    width: 100%;
    height: 100%;
    max-width: 420px;
    max-height: 420px;

    transform: translateX(-50%);

    background: url(${star}) no-repeat top center;
    background-size: 100%;
`;

const Star = props => {
    return <StarContainer data-test="starComponent" />;
};

export default Star;
