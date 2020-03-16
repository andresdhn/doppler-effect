import React from 'react';
import styled from 'styled-components';

const StyledWrapper = styled.div`
    display: block;
    width: 100%;
    height: auto;
    max-width: 900px;
    margin: 10% auto;
    padding: 0 5%;
`;

const Wrapper = props => {
    const { children } = props;
    return (
        <StyledWrapper data-test="wrapperComponent">{children}</StyledWrapper>
    );
};

export default Wrapper;
