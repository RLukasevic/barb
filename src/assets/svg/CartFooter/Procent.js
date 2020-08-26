import React from 'react';


const Procent = props => {

    return (
        <svg style={{width: "1.2em", height: "1.2em", position: "relative", color: "#fff"}} >
            <use xlinkHref="#percent" >
                <svg viewBox="0 0 17 17" id="percent" >
                    <path fill="currentColor" d="M15 0L0 15l2 2L17 2M3.5.5c-1.7 0-3 1.3-3 
                    3s1.3 3 3 3 3-1.3 3-3-1.3-3-3-3m10 10c-1.7 0-3 1.3-3 3s1.3 3 3 3 3-1.3 3-3-1.3-3-3-3z" />
                </svg>
            </use>
        </svg>
    );
}

export default Procent;