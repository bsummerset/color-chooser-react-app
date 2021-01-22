import React from 'react';

function ColorButton(props) {
    return (
        <nav>
            <button onClick={props.onClick}>
                Change to next Color!

            </button>
        </nav>
    )
}
export default ColorButton;