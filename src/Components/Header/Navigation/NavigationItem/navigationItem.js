import React from 'react';
import KeyIcon from '../../../../assets/svg/KeyIcon';
import { Row } from 'react-bootstrap';
import styles from './navigationItem.module.css';

const NavigationItem = props => {

    return (
        <Row className={styles.navItem}>
            <div className={styles.navItemKeyCol} onClick={props.lClick} style={{"width": "50px"}}>
                {props.showKey ? <KeyIcon content={props.title} /> : props.title }
            </div>
        </Row>
    );
}

export default NavigationItem;