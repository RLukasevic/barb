import React from 'react';
import styles from './MobileCartItem.module.css';
import { Row, Col } from 'react-bootstrap';
import WbgMinus from '../../../assets/svg/WbgMinus';
import WbgPlus from '../../../assets/svg/WbgPlus';
import SideCartX from '../../../assets/svg/SideCartX';


const MobileCartItem = props => {

    let price = Number(props.actualPrice * props.quantity).toFixed(2).replace('.',',')

    console.log(props.id)

    return (
        <Row xs={12} sm={12} md={12} className={styles.wholeRow}>
            <Col xs={1} className={styles.xButton} >
                <SideCartX xClick={props.xClick} id={props.id} />
            </Col>
            <Row className={styles.itemWholeRow}>
                <Col xs={4} sm={2} md={2} className={styles.imgCol}>
                    <img src={props.img} alt={props.alt} className={styles.image}/>
                </Col>
                <Col xs={8} sm={9} md={10}>
                    <Row style={{paddingTop: "20px", fontSize: "0.9em"}}>
                        {props.name}
                    </Row>
                    <Row className={styles.productPrice}>
                        € {price}
                    </Row>
                    <Row className={styles.controls}>
                        <Col xs={{span: 3, offset:3}} sm={{span: 3, offset:3}} md={{span: 3, offset:3}} className={styles.vnt}>
                            {props.quantity} {props.vienetai}
                        </Col>
                        <Col xs={2} sm={2} md={2} style={{marginRight: "2px"}}>
                            <WbgMinus minusClick={props.minusClick} id={props.id}/>
                        </Col>
                        <Col xs={2} sm={2} md={2}>
                            <WbgPlus plusClick={props.plusClick} id={props.id}/>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Row>
    );
}

export default MobileCartItem;