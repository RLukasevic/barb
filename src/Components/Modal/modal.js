import React from 'react';
import styles from './modal.module.css';
import BackDrop from '../UI/backDrop';


const modal = (props) => {
    return (
        <div>
            <BackDrop show={props.show} cBackDrop={props.cBackDrop}/>
            <div className={styles.modal} 
            style={{
                transform: props.show ? 'translateY(0)' : 'translateY(-100vh)', 
                opacity: props.show ? '1': '0' ,  
                height: props.modalActiveNow === "login" && props.extended === false ? "354px" : props.extended ? "724px" : "654px" 
                }}>
                    {props.children}
            </div>
        </div>
    )
}

export default React.memo(modal);