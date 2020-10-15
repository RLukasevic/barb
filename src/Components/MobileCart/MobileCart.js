import React, { useState, useEffect } from 'react';
import styles from './MobileCart.module.css';
import { Row, Col, Container } from 'react-bootstrap';
import { connect } from 'react-redux';
import MobileCartItem from './MobileCartItem/MobileCartItem';

let cartItems = [];
let copyOfCart = {};

function useForceUpdate(){
    const [value, setValue] = useState(0); 
    return () => setValue(value => ++value); 
}

const MobileCart = props => {

    const [cartEmpty, changeCartEmpty] = useState(true);
    const [copyOfCartState, changeCopyOfcart] = useState({});
    const [cartUpdate, changeCartUpdate] = useState(0);

    let mobileCartItems;

    const minKrepselis = 10;
    let diff = Number(minKrepselis - props.cartParams.cartFinalPrice).toFixed(2);

    useEffect(() => {

        if(props.update !== cartUpdate) {
            changeCartUpdate(props.update);
            formCartContent();
            update();
        }

        if(props.cartredux !== copyOfCartState) {
            formCartContent();
            update();
        }

    });

    const click = () => {
        console.log('click')
    }

    const update = useForceUpdate();

    const formCartContent = () => {
        cartItems = [];
        changeCopyOfcart(props.cart)
        copyOfCart = Object(props.cart)
        if (props.items && props.cart && Object.keys(props.cart).length > 0) {
            Object.keys(props.cart).map(itemKey => {       
                let itemInstance = 
                    <MobileCartItem
                        key={itemKey}
                        id={itemKey}
                        img={props.items[itemKey].img}
                        alt={props.items[itemKey].alt}
                        name={props.items[itemKey].name}
                        actualPrice={props.items[itemKey].actualPrice}
                        pricePer={props.items[itemKey].pricePer}
                        vienetai={props.items[itemKey].params.vienetai}
                        quantity={props.cart[itemKey]}
                        history={props.history}
                        xClick={props.xClick}
                        minusClick={props.minusClick}
                        plusClick={props.plusClick}
                    />
        
                    cartItems.push(itemInstance);
        
                return null;
            })
        }
    }

    return (
        <Container>
            <Row className={styles.cartParamRow}>
                <Col xs={12} sm={12} md={12} className={styles.cartParamCol}>
                    <Row className={styles.cartParamGalutineKaina}>
                        <Col xs={8} sm={8} md={8}>
                            Galutine kaina
                        </Col>
                        <Col xs={4} sm={4} md={4} className={styles.cartParamValue}>
                            € {props.cartParams.cartFinalPrice.toString().replace('.',',')}
                        </Col>
                    </Row>
                    {diff > 0 ? 
                        <Row className={styles.cartParamMinKrepselis}>
                            <Col xs={8} sm={8} md={8}>
                                Iki minimalaus krepšelio Jums trūksta:
                            </Col>
                            <Col xs={4} sm={4} md={4} className={styles.cartParamValue}>
                                € {diff.replace('.',',')}
                            </Col>
                        </Row>
                        :
                        <Row className={styles.cartParamMinKrepselisGreen}>
                            <Col xs={8} sm={8} md={8}>
                                Prekes Jums pristatysime NEMOKAMAI!
                            </Col>
                        </Row>
                    }
                    <Row className={styles.cartParamVisoPrekiu}>
                        <Col xs={8} sm={8} md={8}>
                            Viso prekių :
                        </Col>
                        <Col xs={4} sm={4} md={4}>
                            {Object.keys(props.cartredux).length}
                        </Col>
                    </Row>
                </Col>
                <Col xs={4} sm={4} md={4} >
                    <button className={diff <= 0 ? styles.cartBuyButtonCol : styles.cartBuyButtonColDisabled} disabled={diff <= 0 ? false : true} onClick={() => props.buyClick()}>
                        Pirkti
                    </button>
                </Col>
            </Row>
            <Row>
                <Col xs={12} sm={12} md={12}>
                    {cartItems}
                </Col>
            </Row>
        </Container>
    );
}

const mapStateToProps = state => {
    return {
        cartredux: state.home.cart,
        cartParams: state.home.cartParams,
    }
}

export default connect(mapStateToProps,null)(MobileCart);