import React from 'react';
import '../../styles/input.css';

function Input(props, type) {
    return (
        <input type={type}>{props.children}</input>
    );
}

export default Input;