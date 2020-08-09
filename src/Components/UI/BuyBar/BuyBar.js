import React from 'react';
import { Row } from 'react-bootstrap';
import styles from './BuyBar.module.css';

const BuyBar = props => {

    return (
        <div>
            {props.mode === 'list' ?
            <Row className={styles.controlRow} >
                <div>
                    <input type="text" defaultValue="1" className={styles.inputVnt}></input>
                    <span className={styles.vnt}>vnt.</span>
                    <span className={styles.addToCartButton} onClick={props.cClick} >i krepseli</span>
                </div>
            </Row> : 
            <Row className={styles.controlRowNorm} >
                <div>
                    <input type="text" defaultValue="1" className={styles.inputVntNorm}></input>
                    <span className={styles.vntNorm}>vnt.</span>
                    <span className={styles.addToCartButtonNorm} onClick={props.cClick} >i krepseli</span>
                </div>
            </Row> }
        </div>
    );
}


export default BuyBar ;