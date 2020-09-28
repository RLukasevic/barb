import React from 'react';
import styles from './modalChangeSuccessful.module.css';
import BackDrop from '../../../UI/backDrop';
import greenTick from '../../../../assets/icons/greenTick.png';


const modalChangeSuccessful = props => {

    return (
        <div>
            <BackDrop show={props.show} cBackDrop={props.cBackDrop}/>
            <div className={styles.modal} 
            style={{
                transform: props.show ? 'translateY(0)' : 'translateY(-100vh)', 
                opacity: props.show ? '1': '0' ,  
                height: "200px",
                }}>
                    <img src={greenTick} alt="tick" className={styles.tickImage} />
                    <p className={styles.congratulations}>Pakeitimai sekmingi!</p>
            </div>
        </div>
    );
}

export default React.memo(modalChangeSuccessful);