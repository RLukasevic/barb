import React from 'react';
import styles from './HomeIcon.module.css';


const HomeIcon = props => {

    return (
        <use xlinkHref="#home" >
            <svg style={{"width": props.width, "height": props.height}} viewBox="0 0 16 16" id="home" className={styles.homeButton} onClick={() => props.homeClick()} >

                <path d="M15.66 6.4l-2.176-1.903a.92.92 0 0 0 .114-.426v-2.5a.938.938 0 0 0-1.876.01v1.38L8.582.21A.888.888 
                0 0 0 7.43.22L.32 6.73a.752.752 0 0 0-.034 1.08l.18.185c.294.308.77.344 1.064.082l.53-.478v6.96c0 
                .42.347.77.774.77H5.6c.43 0 .774-.35.774-.77V9.69H9.91v4.87c-.006.428.3.77.728.77h2.934a.77.77 0 0 0 
                .773-.77V7.703l.328.287c.18.155.56.03.847-.287l.2-.222c.288-.31.26-.8-.06-1.08z" />
                
            </svg>
        </use>
    );
}

export default HomeIcon;