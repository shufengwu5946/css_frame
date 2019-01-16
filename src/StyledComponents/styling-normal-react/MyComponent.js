import React, { Component } from 'react';
import './style.css';

class MyComponent extends React.Component {
    render() {
        // Attach the passed-in className to the DOM node
        return (
            <div className={`border ${this.props.className}`} >
                hehe
            </div>
        );
        
    }
}

export default MyComponent;