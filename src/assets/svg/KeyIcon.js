import React from 'react';
import styles from './KeyIcon.module.css';

const KeyIcon = props => {

    return (
        <div className={styles.keyContentWrap}>
            <svg style={{"width": "15px", "height": "15px"}}>
                <use xlinkHref="#key">
                    <svg viewBox="0 0 14 13" id="key">
                        <path d="M11.735 1.102a3.877 3.877 0 0 0-5.48 0C4.99 2.365 4.8 4.288 5.652 5.77L1.13 10.294l1.413 1.414 1.326 1.325 1.41-1.413-1.33-1.327.7-.708 1.33 1.325L7.4 9.497 6.077 8.17l.988-.987a3.86 3.86 0 0 0 1.93.53c.99 0 1.983-.377 2.74-1.133.73-.73 1.135-1.704 1.135-2.74s-.402-2.007-1.135-2.738zM10.32 5.167c-.73.73-1.92.73-2.65 0a1.877 1.877 0 0 1 1.325-3.2c.48 0 .96.184 1.326.55.36.353.55.823.55 1.324s-.19.98-.55 1.33z" />
                    </svg>
                </use>
            </svg>

            {props.content}
        </div>
    );
}

export default KeyIcon;