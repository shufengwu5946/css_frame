import React, { Component } from 'react';
import styled from 'styled-components';
import {ThemeProvider} from 'styled-components';

// Define our button, but with the use of props.theme this time
const Button = styled.button`
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border-radius: 3px;
  

  /* Color the border and text with theme.main */
  color: ${props => props.theme.fg};
  border: 2px solid ${props => props.theme.fg};
  background:${props=>props.theme.bg};
`;

// We are passing a default theme for Buttons that arent wrapped in the ThemeProvider
Button.defaultProps = {
  theme: {
    fg: "red",
    bg: "white"
  }
}

// Define what props.theme will look like
const theme = {
    fg: "red",
    bg: "white"
};

const invertTheme = (theme) => ({
    fg: theme.bg,
    bg: theme.fg
});


function FunctionThemeButton(props){
    return(
        <ThemeProvider theme={theme}>
            <div>
                <Button>Default Theme</Button>

                <ThemeProvider theme={invertTheme}>
                    <Button>Inverted Theme</Button>
                </ThemeProvider>
            </div>
        </ThemeProvider>
    );
}

export default FunctionThemeButton;