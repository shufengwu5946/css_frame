import React from 'react';
import styled from 'styled-components';
import {createGlobalStyle} from 'styled-components';

const Button = styled.button `
    display: inline-block;
    color: palevioletred;
    background:white;
    font-size: 1em;
    margin: 1em;
    padding: 0.25em 1em;
    border: 2px solid palevioletred;
    border-radius: 3px;
    display: block;
`;

function ReversedButton(props){
    return (
        <button {...props} children={props.children.split('').reverse()} />
    );
}


const Link = ({ className, children }) => (
    <a className={className}>
        {children}
    </a>
);

const StyledLink = styled(Link)`
    color: palevioletred;
    font-weight: bold;
`;

// Create an Input component that'll render an <input> tag with some styles
const Input = styled.input`
    padding: 0.5em;
    margin: 0.5em;
    color: ${props => props.inputColor || "palevioletred"};
    background: papayawhip;
    border: none;
    border-radius: 3px;
`;


const Thing = styled.div.attrs({ tabIndex: 0 })`
  color: blue;

  &:hover {
    color: red; // <Thing> when hovered
  }

  & ~ & {
    background: tomato; // <Thing> as a sibling of <Thing>, but maybe not directly next to it
  }

  & + & {
    background: lime; // <Thing> next to <Thing>
  }

  &.something {
    background: orange; // <Thing> tagged with an additional CSS class ".something"
  }

  .something-else & {
    border: 1px solid; // <Thing> inside another element labeled ".something-else"
  }
`

const Thing2 = styled.div`
  & {
    color: blue;
  }
`

const GlobalStyle = createGlobalStyle`
  div${Thing2} {
    color: red;
  }
`



function Reversed(props) {

    return (
        <div>
            <Button>Normal Button</Button>
            <Button as= {ReversedButton}>Custom Button with Normal Button styles</Button>
            <Link>Unstyled, boring Link</Link>
            <br />
            <StyledLink>Styled, exciting Link</StyledLink>
            <br />
            <Input defaultValue="@probablyup" type="text" />
            <br />
            <Input defaultValue="@geelen" type="text" inputColor="rebeccapurple" />
            <br />
            <React.Fragment>
                <Thing>Hello world!</Thing>
                <Thing>How ya doing?</Thing>
                <Thing className="something">The sun is shining...</Thing>
                <div>Pretty nice day today.</div>
                <Thing>Don't you think?</Thing>
                <div className="something-else">
                    <Thing>Splendid.</Thing>
                </div>
            </React.Fragment>
            <GlobalStyle />
            <Thing2>
            I'm blue, da ba dee da ba daa
            </Thing2>
        </div>
    );

}

export default Reversed;