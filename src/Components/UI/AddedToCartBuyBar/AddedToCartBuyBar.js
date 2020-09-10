import React from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import styles from './AddedToCartBuyBar.module.css';

const BuyBar = props => {

    return (
        <div>
            {props.mode === 'list' ?
                <Container xl={12} className={styles.wholeWrap}>
                    <Row className={styles.controlRow} xl={12}>
                        <Col xl={2} className={styles.buttonMinusCol} onClick={() => props.listInCartMinusButton(props.id)}>
                            <span className={styles.buttonMinus} >-</span>
                        </Col>
                        <Col xl={3} className={styles.quantityCol}>
                            <span className={styles.quantity}>{props.quantity}</span>
                        </Col>
                        <Col xl={4} className={styles.vntCol}>
                            <span className={styles.vnt}>{props.vienetai}</span>
                        </Col>
                        <Col xl={2} className={styles.buttonPlusCol}  onClick={() => props.listInCartPlusButton(props.id)}>
                            <span className={styles.buttonPlus} >+</span>
                        </Col>
                    </Row>
                </Container> :
                <Container xl={12} className={styles.wholeWrapNorm}>
                    <Row className={styles.controlRow} xl={12}>
                        <Col xl={2} className={styles.buttonMinusCol}  onClick={() => props.listInCartMinusButton(props.id)}>
                            <span className={styles.buttonMinus} >-</span>
                        </Col>
                        <Col xl={3} className={styles.quantityCol}>
                            <span className={styles.quantity}>{props.quantity}</span>
                        </Col>
                        <Col xl={4} className={styles.vntCol}>
                            <span className={styles.vnt}>{props.vienetai}</span>
                        </Col>
                        <Col xl={2} className={styles.buttonPlusCol}  onClick={() => props.listInCartPlusButton(props.id)}>
                            <span className={styles.buttonPlus} >+</span>
                        </Col>
                    </Row>
                </Container> 
            }
        </div>
    );
}


export default BuyBar ;