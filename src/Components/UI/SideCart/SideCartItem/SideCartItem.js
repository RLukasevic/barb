import React from 'react';
import { Row, Col } from 'react-bootstrap';
import styles from './SideCartItem.module.css';
import WbgMinus from '../../../../assets/svg/WbgMinus';
import WbgPlus from '../../../../assets/svg/WbgPlus';
import SideCartX from '../../../../assets/svg/SideCartX';

const SideCartItem = props => {

    return (
        <Row className={styles.productInCartRow}>
            <Col xl={11} style={props.cartGoodsHeight} >
                <Row style={{backgroundColor: "white"}}>
                    <Col xl={4} className={styles.productImgInCartWrap} >
                        <img className={styles.productImgInCart} src="https://barbora.lt/api/images/GetInventoryImage?id=e7f6e71b-ab0d-42d9-a8fe-fa64e2222f45" />
                    </Col>
                    <Col xl={8}>
                        <Row className={styles.productName}>
                            Dantų pasta R.O.C.S. COFFEE & TOBACCO, 74 g
                        </Row>
                        <Row className={styles.productPrice}>
                            €4,19
                        </Row>
                        <Row>
                            <Col xl={2} className={styles.itemInCartControlsValue} >
                                22
                            </Col>
                            <Col xl={3} className={styles.itemInCartControlsVnt}>
                                vnt.
                            </Col>
                            <Col xl={2} className={styles.itemInCartControlsButtonMinus}>
                                <span>
                                    <WbgMinus />
                                </span>
                            </Col>
                            <Col xl={2} className={styles.itemInCartControlsButtonPlus}>
                                <span>
                                    <WbgPlus />
                                </span>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Col>
            <Col xl={1} className={styles.xButtonCol} >
                <SideCartX />
            </Col>
        </Row> 
    );
}

export default SideCartItem;