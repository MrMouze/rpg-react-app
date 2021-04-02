import React from 'react';
import '../../styles/button.css';

function Button(props) {
    return (
        <button>{props.children}</button>
    );
}

export default Button;