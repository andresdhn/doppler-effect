import React from 'react';
import Simulator from './components/Simulator';
import { createGlobalStyle } from 'styled-components';
//
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
        box-sizing: border-box;
    }

    body{
        font-family: 'Roboto', Arial, sans-serif;
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 1.2;

        background-color: #000000;
    }

    .App{
        padding: 0 5%;
    }
`;

function App() {
    return (
        <div className="App">
            <GlobalStyle />
            <Simulator />
        </div>
    );
}

export default App;
