import React from 'react';


const Tara = props => {

    return (
        <svg style={{width: "1.2em", height: "1.2em", position: "relative", color: "#555"}} >
            <use xlinkHref="#bottle" >
                <svg viewBox="0 0 6 20" id="bottle" >
                    <path fill="currentColor" d="M1 20c-.6 0-1-.4-1-1V9c0-2 1-3.8 2-4V.5c0-.3.2-.5.5-.5h1c.3 0 .5.2.5.5V5c1 .2 2 2 2 4v10c0 .6-.4 1-1 1z" />
                </svg>
            </use>
        </svg>
    );
}

export default Tara;