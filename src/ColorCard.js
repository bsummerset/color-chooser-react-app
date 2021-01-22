import React from 'react';

function ColorCard(props) {
    console.log(props);
    return(
        <div className="card-frame">
            <p>{props.name}</p>
        </div>
    );
}

export default ColorCard;