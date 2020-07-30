import React from 'react';
import { Row, Col } from 'react-bootstrap';
import styles from './item.module.css';
import { faHeart as fasHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Item = props => {

    return (
        <Col className={styles.itemcont} >
            <Row className={styles.favIcon}>
                <FontAwesomeIcon 
                onClick={!props.fav ? () => props.favClick(props.id , 'ADD') : () => props.favClick(props.id , 'DEL') }
                className={props.fav ? styles.favButtonActive : styles.favButtonNotActive} icon={fasHeart} size='2x'
                /></Row>
            <Row className={styles.image}><img src={props.img} alt={props.alt} /></Row>
            <Row className={styles.name}>{props.name}</Row>
            <Row xl={2} className={styles.prices}>
                <Col className={styles.oldPrice} >{props.oldPrice}</Col>
                <Col className={styles.actualPrice}>{props.actualPrice}</Col>
            </Row>
             <Row className={styles.pricePer}>{props.pricePer}</Row>
             <Row className={styles.controlRow} >
                <div>
                    <input type="text" defaultValue="1" className={styles.inputVnt}></input>
                    <span className={styles.vnt}>vnt.</span>
                    <span className={styles.addToCartButton} onClick={props.cClick} >i krepseli</span>
                </div>
             </Row>
        </Col>
    );
}

export default Item;