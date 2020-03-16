import React from 'react';
import Wrapper from './components/Wrapper';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    @font-face {
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 400;
        font-display: swap;
        src: local('Roboto-Regular'), url('/fonts/Roboto-Regular.ttf') format('truetype');
    }

    * {
        margin: 0;
        padding: 0;
    }

    body{
        font-family: 'Roboto', Arial, sans-serif;
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 1.2;

        background-color: #cdcdcd;
    }
`;

function App() {
    return (
        <div className="App" data-test="appComponent">
            <GlobalStyle />
            <Wrapper></Wrapper>
        </div>
    );
}

export default App;
