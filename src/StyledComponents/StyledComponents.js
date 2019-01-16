import React from 'react';
import styled from 'styled-components';
import Reversed from './ReversedButton';
import {keyframes} from 'styled-components';
import ThemeButton from './theming';
import FunctionThemeButton from './function-themes';
import ThemePropButton from './theme-prop';
import StylingReact from './styling-normal-react/styling-normal-react';

const Title = styled.h1 `
    font-size: 1.5em;
    text-align: center;
    color: palevioletred;
`;

const Wrapper = styled.section `
    padding: 4em;
    background: papayawhip;
`;

const Button = styled.button`
    background: ${props => props.primary ? "palevioletred" : "white"};
    color: ${props => props.primary ? "white" : "palevioletred"};
    font-size: 1em;
    margin: 1em;
    padding: 0.25em 1em;
    border: 2px solid palevioletred;
    border-radius: 3px;
`;

const TomatoButton = styled(Button)`
    color: tomato;
    border-color: tomato;
`;

const Input = styled.input.attrs({
    // we can define static props
    type: "password",

    // or we can define dynamic ones
    margin: props => props.size || "1em",
    padding: props => props.size || "1em"
})`
    color: palevioletred;
    font-size: 1em;
    border: 2px solid palevioletred;
    border-radius: 3px;

    /* here we use the dynamically computed props */
    margin: ${props => props.margin};
    padding: ${props => props.padding};
`;

// Create the keyframes
const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

// Here we create a component that will rotate everything we pass in over two seconds
const Rotate = styled.div`
  display: inline-block;
  animation: ${rotate} 2s linear infinite;
  padding: 2rem 1rem;
  font-size: 1.2rem;
`;


function StyledComponents(props) {
    
    return (
        <div>
            <Wrapper>
                <Title>
                    Hello World!
                </Title>
            </Wrapper>
            <Button>Normal</Button>
            <Button primary>Primary</Button>
            <TomatoButton>Normal</TomatoButton>
            <TomatoButton primary>Primary</TomatoButton>
            <TomatoButton as="a" href="#">Primary</TomatoButton>
            <Reversed/>
            <br/>
            <Input placeholder="A small text input" size="1em" />
            <br />
            <Input placeholder="A bigger text input" size="2em" />
            <br/>
            <Rotate>&lt; hehe &gt;</Rotate>
            <ThemeButton></ThemeButton>
            <FunctionThemeButton></FunctionThemeButton>
            <ThemePropButton></ThemePropButton>
            <StylingReact></StylingReact>
        </div>
        
    );
}
export default StyledComponents;