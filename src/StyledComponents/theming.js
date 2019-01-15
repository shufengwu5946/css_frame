import React, { Component } from 'react';
import styled from 'styled-components';
import {ThemeProvider} from 'styled-components';

// Define our button, but with the use of props.theme this time
const Button = styled.button`
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border-radius: 3px;
  background:white;

  /* Color the border and text with theme.main */
  color: ${props => props.theme.main};
  border: 2px solid ${props => props.theme.main};
`;

// We are passing a default theme for Buttons that arent wrapped in the ThemeProvider
Button.defaultProps = {
  theme: {
    main: "red"
  }
}

// Define what props.theme will look like
const theme = {
  main: "green"
};


function ThemeButton(props){
    return(
        <div>
            <Button>Normal</Button>

            <ThemeProvider theme={theme}>
            <Button>Themed</Button>
            </ThemeProvider>
        </div>
    );
}

export default ThemeButton;