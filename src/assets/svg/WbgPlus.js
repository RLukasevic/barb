import React from 'react';


const WbgPlus = props => {

    return (
        <svg style={{width: "2.3em", height: "2.3em"}}>
            <use xlinkHref="#wbg-plus" >
                <svg viewBox="0 0 32 32" id="wbg-plus" >
                    <path fill="#f0f0f0" d="M0 0h32v32H0z" />
                    <path fill="494949" d="M23 14.6h-5.6V9h-2.8v5.6H9v2.8h5.6V23h2.8v-5.6H23v-2.8z" />
                </svg>
            </use>
        </svg>
    );
}

export default WbgPlus;