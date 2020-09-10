import React from 'react';


const Masina = props => {

    return (
        <svg style={{width: "1.2em", height: "1.2em", position: "relative"}} >
            <use xlinkHref="#car" >
                <svg viewBox="0 0 22 16" id="car" >
                    <path fill="currentColor" d="M17 14.5c-.8 0-1.5-.7-1.5-1.5s.7-1.5 1.5-1.5 1.5.7 
                    1.5 1.5-.7 1.5-1.5 1.5m1.5-9l2 2.5H16V5.5m-11 9c-.8 0-1.5-.7-1.5-1.5s.7-1.5 1.5-1.5 1.5.7 
                    1.5 1.5-.7 1.5-1.5 1.5M19 4h-3V0H2C.9 0 0 .9 0 2v11h2c0 1.7 1.3 3 3 3s3-1.3 3-3h6c0 1.7 1.3 3 3 3s3-1.3 3-3h2V8z" />
                </svg>
            </use>
        </svg>
    );
}

export default Masina;