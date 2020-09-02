import React from 'react';


const SideCartX = props => {

    return (
        <svg onClick={() => props.xClick(props.id)} style={{width: "2em", height: "2em", position: "absolute", marginTop: "-3px", left: "-4px", cursor: "pointer", color: "#df313e"}} >
            <use xlinkHref="#wbg-cross" >
                <svg viewBox="0 0 32 32" id="wbg-cross" >
                    <path fill="currentColor"
                    d="M21.94 12.04l-1.98-1.98L16 14.02l-3.96-3.96-1.98 1.98L14.02 16l-3.96 3.96 
                    1.98 1.98L16 17.98l3.96 3.96 1.98-1.98L17.98 16l3.96-3.96z" />
                </svg>
            </use>
        </svg>
    );
}

export default SideCartX;