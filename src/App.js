import React from 'react';
import Wrapper from './components/Wrapper';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
    }

    body{
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
