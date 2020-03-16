import React from 'react';
import styled from 'styled-components';
import Simulator from '../Simulator';
//
const StyledWrapper = styled.div`
    position: relative;
    display: block;
    height: 100%;
    max-width: 600px;
    min-width: 300px;
    min-height: 700px;
    margin: 10% auto;
`;

const Wrapper = () => {
    return (
        <StyledWrapper data-test="wrapperComponent">
            <Simulator />
        </StyledWrapper>
    );
};

export default Wrapper;
