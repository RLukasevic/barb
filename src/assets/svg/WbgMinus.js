import React from 'react';


const WbgMinus = props => {

    return (
        <svg style={{width: "2.3em", height: "2.3em"}}>
            <use xlinkHref="#wbg-minus" >
                <svg viewBox="0 0 32 32" id="wbg-minus" >
                    <path fill="#f0f0f0" d="M0 0h32v32H0z" />
                    <path fill="#494949" d="M9 14.6h14v2.8H9z" />
                </svg>
            </use>
        </svg>
    );
}

export default WbgMinus;