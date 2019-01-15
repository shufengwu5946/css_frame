import React, { Component } from 'react';
import styled from 'styled-components';
import {ThemeProvider} from 'styled-components';

// Define our button
const Button = styled.button`
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border-radius: 3px;

  /* Color the border and text with theme.main */
  color: ${props => props.theme.main};
  border: 2px solid ${props => props.theme.main};
  background:white;
`;

// Define what main theme will look like
const theme = {
  main: "green"
};

function ThemePropButton(){
    return (
        <div>
            <Button theme={{ main: "blue" }}>Ad hoc theme</Button>
            <ThemeProvider theme={theme}>
            <div>
                <Button>Themed</Button>
                <Button theme={{ main: "orange" }}>Overidden</Button>
            </div>
            </ThemeProvider>
        </div>
    );
}

export default ThemePropButton;
