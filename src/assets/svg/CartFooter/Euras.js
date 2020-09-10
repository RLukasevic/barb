import React from 'react';


const Euras = props => {

    return (
        <svg style={{width: "1.2em", height: "1.2em", position: "relative"}} >
            <use xlinkHref="#euras" >
                <svg viewBox="0 0 18.4 18" id="euras" >
                    <path fill="currentColor" d="M5.1 8L5 9l.1 1h10.3l-.9 2H5.7c1.1 2.4 3.5 4 6.3 4 2.2 
                    0 4.2-1 5.5-2.7v2.8C16 17.3 14.1 18 12 18c-3.9 0-7.2-2.5-8.5-6H0l1-2h2.1L3 
                    9l.1-1H0l1-2h2.5C4.7 2.5 8.1 0 12 0c2.5 0 4.8 1 6.4 2.7l-.9 2C16.3 3.1 14.3 2 12 2 9.2 2 6.8 3.6 5.7 6H17l-.9 2z" />
                </svg>
            </use>
        </svg>
    );
}

export default Euras;