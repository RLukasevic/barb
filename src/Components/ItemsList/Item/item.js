import React, { useState } from 'react';
import { Row, Col } from 'react-bootstrap';
import styles from './item.module.css';
import BuyBar from '../../UI/BuyBar/BuyBar';
import AddedToCartBuyBar from '../../UI/AddedToCartBuyBar/AddedToCartBuyBar';
import { faHeart as fasHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Item = props => {

    const [fav, changeFav] = useState(false);

    if (props.fav && fav === false) {
        changeFav(true);
    }

    return (
        <Col className={styles.itemcont} >
            <Row className={styles.favIcon}>
                <FontAwesomeIcon 
                onClick={!props.fav ? () => props.favClick(props.id , 'ADD') : () => props.favClick(props.id , 'DEL') }
                className={props.fav ? styles.favButtonActive : styles.favButtonNotActive} icon={fasHeart} size='2x'
                />
            </Row>
            <Row className={styles.image}><img src={props.img} alt={props.alt} onClick={() => props.redirClick(props.id)} /></Row>
            <Row className={styles.name} onClick={() => props.redirClick(props.id)} >{props.name}</Row>
            <Row xl={2} className={styles.prices}>
                <Col className={styles.oldPrice} >€{props.oldPrice.replace('.',',')}</Col>
                <Col className={styles.actualPrice}>€{props.actualPrice.replace('.',',')}</Col>
            </Row>
             <Row className={styles.pricePer}><div style={{textAlign: "center"}}>{props.pricePer}</div></Row>

            {props.quantity > 0 && props.token ? 
            <AddedToCartBuyBar 
                token={props.token} 
                vienetai={props.vienetai} 
                quantity={props.quantity} 
                id={props.id} 
                mode={'list'} 
                listInCartPlusButton={props.listInCartPlusButton}
                listInCartMinusButton={props.listInCartMinusButton}
            /> : 
            <BuyBar 
                token={props.token} 
                addToCartClick={props.addToCartClick} 
                id={props.id} 
                vienetai={props.vienetai} 
                cClick={props.cClick} 
                mode={'list'} 
            />
            }
            

        </Col>
    );
}

export default Item;