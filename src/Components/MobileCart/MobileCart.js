import React, { useState, useEffect } from 'react';
import styles from './MobileCart.module.css';
import { Row, Col, Container } from 'react-bootstrap';
import { connect } from 'react-redux';
import MobileCartItem from './MobileCartItem/MobileCartItem';

let cartItems = [];

function useForceUpdate(){
    const [value, setValue] = useState(0); 
    return () => setValue(value => ++value); 
}

const MobileCart = props => {

    const [copyOfCartState, changeCopyOfcart] = useState({});
    const [cartUpdate, changeCartUpdate] = useState(0);

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
                        img={props.items[itemKey].imgCart}
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
        <Container className={styles.container}>
            <Row className={styles.cartParamRow}>
                <Col xs={12} sm={12} md={12} className={styles.cartParamCol}>
                    <Row className={styles.cartParamGalutineKaina}>
                        <Col xs={6} sm={6} md={6}>
                            Galutine kaina
                        </Col>
                        <Col xs={6} sm={6} md={6} className={styles.cartParamValue}>
                            € {props.cartParams.cartFinalPrice.toString().replace('.',',')}
                        </Col>
                    </Row>
                    {diff > 0 ? 
                        <Row className={styles.cartParamMinKrepselis}>
                            <Col xs={6} sm={6} md={6}>
                                Iki minimalaus krepšelio Jums trūksta:
                            </Col>
                            <Col xs={6} sm={6} md={6} className={styles.cartParamValue}>
                                € {diff.replace('.',',')}
                            </Col>
                        </Row>
                        :
                        <Row className={styles.cartParamMinKrepselisGreen}>
                            <Col xs={12} sm={12} md={12}>
                                Prekes Jums pristatysime NEMOKAMAI!
                            </Col>
                        </Row>
                    }
                    <Row className={styles.cartParamVisoPrekiu}>
                        <Col xs={6} sm={6} md={6}>
                            Viso prekių :
                        </Col>
                        <Col xs={6} sm={6} md={6}>
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
            {Object.keys(props.cart).length > 0 ? 
                <Row className={styles.itemsRow}>
                    <Col xs={12} sm={12} md={12} className={styles.itemsCol}>
                        {cartItems}
                    </Col>
                </Row>
            :
                <Row className={styles.emptyCartNotice}>
                    Krepšelis tuščias, pridėkite produktų ir jie atsiras čia.
                </Row>
            }
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