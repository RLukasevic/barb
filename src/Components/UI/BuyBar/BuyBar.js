import React, { useState } from 'react';
import { Row } from 'react-bootstrap';
import styles from './BuyBar.module.css';

const BuyBar = props => {
    
    const [quantity, changeQuantity] = useState(1)

    const inputHandler = (event) => {
        if (isNaN(Number(event.target.value))) {
            changeQuantity(1);
        } else {
            changeQuantity(Number(event.target.value));
        }
    }

    return (
        <div>
            {props.mode === 'list' ?
            props.token ?
            <Row className={styles.controlRow} >
                <div className={styles.wrapDiv}>
                    <input type="text" defaultValue="1" value={quantity} className={styles.inputVnt} onChange={inputHandler}></input>
                    <span className={styles.vnt}>{props.vienetai}</span>
                    <span className={styles.addToCartButton} onClick={() => props.addToCartClick(props.id, quantity)} >i krepseli</span>
                </div>
            </Row> :
            <Row className={styles.controlRow} >
                <div className={styles.wrapDiv}>
                    <input type="text" defaultValue="1" value={quantity} className={styles.inputVnt} onChange={inputHandler}></input>
                    <span className={styles.vnt}>{props.vienetai}</span>
                    <span className={styles.addToCartButton} onClick={() => props.cClick()} >i krepseli</span>
                </div>
            </Row> : 
            props.token ?
            <Row className={styles.controlRowNorm} >
                <div >
                    <input type="text" defaultValue="1" value={quantity} className={styles.inputVntNorm} onChange={inputHandler}></input>
                    <span className={styles.vntNorm}>{props.vienetai}</span>
                    <span className={styles.addToCartButtonNorm} onClick={() => props.addToCartClick(props.id, quantity)} >i krepseli</span>
                </div>
            </Row> :
            <Row className={styles.controlRowNorm} >
                <div >
                    <input type="text" defaultValue="1" value={quantity} className={styles.inputVntNorm} onChange={inputHandler}></input>
                    <span className={styles.vntNorm}>{props.vienetai}</span>
                    <span className={styles.addToCartButtonNorm} onClick={() => props.cClick()} >i krepseli</span>
                </div>
            </Row>}
        </div>
    );
}


export default BuyBar ;