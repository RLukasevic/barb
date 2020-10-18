import React from 'react';

const BarbLogoSmall = props => {

    const logo = {
        fill: "white",
    }

    const leaf = {
        fill: "rgb(79, 172, 37)",
    }

    return (
        <svg style={{"width": "30px", "height": "30px"}} onClick={() => props.homeClick()} >
            <use xlinkHref="#logo-small" >
                <svg id="logo-small" viewBox="0 0 71.2 138.5" >
                    <g clipPath={"url(#gma)"} transform={"matrix(1.25 0 0 -1.25 -477.82 480.9)"}>

                        <path style={logo} d="M412.088 286.392h-15.02v20.74h14.922c6.662 0 11.844-4.128 11.844-10.366
                        0-6.25-4.766-10.374-11.746-10.374m-15.02 49.095h13.013c6.03 0 10.26-3.515 10.26-8.472
                        0-4.763-4.23-8.57-10.26-8.57h-13.01v17.042zm27.826-21.49v.12c4.97 1.474 10.256 7.608 10.256 14.7 0 10.772-8.99 19.142-22.11
                        19.142h-25.592a5.08 5.08 0 0 1-5.08-5.09v-68.96h31.1c17.44 0 25.8 9.72 25.8 22.21 0 8.56-7.282 16.29-14.374 17.87"/>

                        <path style={leaf} d="M382.37 354.382s-3.622 26.028 30.328 30.336c0 0-1.838-26.6-30.33-30.336" />

                    </g>
                </svg>
            </use>
        </svg>
    );
}

export default BarbLogoSmall;