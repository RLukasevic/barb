import React from 'react';
import { Row, Col } from 'react-bootstrap';
import styles from './SideCartItem.module.css';
import WbgMinus from '../../../../assets/svg/WbgMinus';
import WbgPlus from '../../../../assets/svg/WbgPlus';
import SideCartX from '../../../../assets/svg/SideCartX';

const SideCartItem = props => {

    let price = Number(props.actualPrice * props.quantity).toFixed(2).replace('.',',')

    const itemClicked = (id) => {
        props.history.push('/item/' + id)
    }

    return (
        <Row className={styles.productInCartRow}>
            <Col xl={11} style={props.cartGoodsHeight} >
                <Row style={{backgroundColor: "white"}}>
                    <Col xl={4} className={styles.productImgInCartWrap} onClick={() => itemClicked(props.id)} >
                        <img className={styles.productImgInCart} src={props.img} alt={props.alt} />
                    </Col>
                    <Col xl={8}>
                        <Row className={styles.productName} onClick={() => itemClicked(props.id)} >
                            {props.name}
                        </Row>
                        <Row className={styles.productPrice}>
                            €{price}
                        </Row>
                        <Row>
                            <Col xl={2} className={styles.itemInCartControlsValue} >
                                {props.quantity}
                            </Col>
                            <Col xl={3} className={styles.itemInCartControlsVnt}>
                                {props.vienetai}
                            </Col>
                            <Col xl={2} className={styles.itemInCartControlsButtonMinus}>
                                <span>
                                    <WbgMinus minusClick={props.minusClick} id={props.id} />
                                </span>
                            </Col>
                            <Col xl={2} className={styles.itemInCartControlsButtonPlus}>
                                <span>
                                    <WbgPlus plusClick={props.plusClick} id={props.id} />
                                </span>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Col>
            <Col xl={1} className={styles.xButtonCol} >
                <SideCartX xClick={props.xClick} id={props.id} />
            </Col>
        </Row> 
    );
}

export default SideCartItem;