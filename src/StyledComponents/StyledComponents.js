import React from 'react';
import styled from 'styled-components';

function StyledComponents(props) {
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
            <TomatoButton as="a" href="/">Primary</TomatoButton>
        </div>
        
    );
}
export default StyledComponents;