import React from 'react';
import MyComponent from './MyComponent';
import styled from 'styled-components';

const Comp = styled(MyComponent)`
    width:100px;
    height:100px;
    background-color:yellow;
`;

class StylingReact extends React.Component{
    
    render(){
        return(
            <Comp></Comp>
        );
    }
}

export default StylingReact;