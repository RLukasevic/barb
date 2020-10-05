import React from 'react';
import styles from './modal.module.css';
import BackDrop from '../UI/backDrop';


const modal = (props) => {

    let modalStyle;

    switch (props.modalActiveNow) {

        case 'login':
            modalStyle = {
                transform: props.show ? 'translateY(0)' : 'translateY(-100vh)',
                opacity: props.show ? '1': '0',
                minHeight: "330px",
            }
            break;

        case 'register':
            modalStyle = {
                transform: props.show ? 'translateY(0)' : 'translateY(-100vh)',
                opacity: props.show ? '1': '0',
                minHeight: "640px",
            }
            break;

        default:
            modalStyle = {
                transform: props.show ? 'translateY(0)' : 'translateY(-100vh)',
                opacity: props.show ? '1': '0',
                minHeight: "470px",
            }
            break;
    }

    return (
        <div>
            <BackDrop show={props.show} cBackDrop={props.cBackDrop}/>
            <div className={styles.modal} 
            style={modalStyle}>
                    {props.children}
            </div>
        </div>
    )
}

export default React.memo(modal);