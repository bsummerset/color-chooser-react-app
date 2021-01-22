import React from 'react';

function RedColor(props) {
    return (
        <div className="item-color">
            <h3>This displays the color:</h3>
            <p>{props.name}</p>
        </div>
    );
}

export default RedColor