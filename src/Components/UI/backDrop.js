import React from 'react';
import styles from './backDrop.module.css';

const backDrop = (props) => ( props.show ? <div className={styles.backDrop} onClick={props.cBackDrop}></div> : null )

export default backDrop;