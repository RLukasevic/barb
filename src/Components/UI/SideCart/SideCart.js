import React, { useState, useRef, useEffect } from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import { connect } from 'react-redux';
import * as authActions from '../../../Store/Actions/index';
import styles from './SideCart.module.css';
import SideCartFooter from './SideCartFooter/SideCartFooter';
import SideInfo from './SideInfo/SideInfo';
import SideCartKrepselis from './SideCartKrepselis/SideCartKrepselis';
import SideCartItem from './SideCartItem/SideCartItem';

let cartItems = [];
let cartFinalPrice = 0.29; //maiselis = 0.29
let cartDiscountTotal = 0;
let cartFinalPriceNoDiscount = 0;
let copyOfCart = {};

function useForceUpdate(){
    const [value, setValue] = useState(0); 
    return () => setValue(value => ++value); 
}

const SideCart = props => {

    const [showTopArrow, changeTopArrow] = useState(false);
    const [showBottomArrow, changeBottomArrow] = useState(false);
    const [productsSectionHeight, changeProductsSectionHeight] = useState(0);
    const [cartEmpty, changeCartEmpty] = useState(true);
    const [copyOfCartState, changeCopyOfcart] = useState({});
    const [cartUpdate, changeCartUpdate] = useState(0);

    const products = useRef(null)
    const productList = useRef(null)
    const krepselis = useRef(null)
    const footer = useRef(null)

    let combinedHeight = 0;

    useEffect(() => {

        if(props.update !== cartUpdate) {
            changeCartUpdate(props.update);
            formCartContent();
            update();
        }

        if(props.cartredux !== copyOfCartState) {

            formCartContent();
    
            if (!showBottomArrow && 
                productList.current.scrollHeight > combinedHeight && 
                productList.current.scrollHeight - productList.current.clientHeight - productList.current.scrollTop > 0) {
                changeBottomArrow(true);
            }
        }

        if (Object.keys(props.cart).length === 0) {
            changeCartEmpty(true);
        } else {
            changeCartEmpty(false);
        }

        let productsSection = window.window.innerHeight - krepselis.current.scrollHeight - footer.current.scrollHeight;

        changeProductsSectionHeight(productsSection);

        for (let i; i >= products.current.children.length; i++) {
            combinedHeight += products.children[i].scrollHeight
            console.log(combinedHeight)
        }

        if (!showBottomArrow && 
            productList.current.scrollHeight > combinedHeight && 
            productList.current.scrollHeight - productList.current.clientHeight - productList.current.scrollTop > 0) {
            changeBottomArrow(true);
        }

        handleScroll(productList,'productlist');
    });

    let vertOffset;
    if (props.vertOffset >= 109) {
        vertOffset = 109;
    } else {
        vertOffset = props.vertOffset;
    }

    let cartMainStyle = {
        top: 0 - vertOffset + "px",
    }

    let itemsCartHeight = {
        height: productsSectionHeight + vertOffset - 113 + "px",
    }

    let bottomArrowPadding = {
        top: productsSectionHeight + vertOffset - 37 + "px",
        display: "flex",
    }

    let showArrow = {
        display: "flex",
    }

    let hideArrow = {
        display: "none",
    }


    const handleScroll = (event,mode) => {

        if (mode === 'productlist') {
            let element = event.current

            if (element.scrollTop > 0) {
                changeTopArrow(true);
            } else {
                changeTopArrow(false);
            }
    
            if(element.scrollHeight - element.clientHeight - element.scrollTop <= 0) {
                changeBottomArrow(false);
            } else {
                changeBottomArrow(true);
            }

        } else {
            let element = event.target

            if(element.scrollTop > 0) {
                changeTopArrow(true);
            } else {
                changeTopArrow(false);
            }
    
            if(element.scrollHeight - element.clientHeight - element.scrollTop <= 0) {
                changeBottomArrow(false);
            } else {
                changeBottomArrow(true);
            }
        }
    }

    const update = useForceUpdate();

    
    const xCartClicked = (itemId) => {
        props.xClick(itemId)
        formCartContent();
        update();
    }

    const minusClick = (itemId) => {
        if (props.cart[itemId] === 1) {
            props.xClick(itemId);
            formCartContent();
            update();
        } else {
            props.listInCartMinusButton(itemId);

            formCartContent();
            update();
        }
    }

    const plusClick = (itemId) => {
        props.listInCartPlusButton(itemId);

        formCartContent();
        update();
    }

    const formCartContent = () => {
        cartItems = [];
        cartFinalPrice = 0.29; //maiselis = 0.29
        cartDiscountTotal = 0;
        cartFinalPriceNoDiscount = 0;
        changeCopyOfcart(props.cart)
        copyOfCart = Object(props.cart)
        if (props.items && props.cart && Object.keys(props.cart).length > 0) {
            Object.keys(props.cart).map(itemKey => {       
                let itemInstance = 
                    <SideCartItem
                        cartGoodsHeight={{height: "80px"}}
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
                        xClick={() => xCartClicked(itemKey)}
                        minusClick={() => minusClick(itemKey)}
                        plusClick={() => plusClick(itemKey)}
                    />
        
                    cartItems.push(itemInstance);
                    cartFinalPrice += Number(props.items[itemKey].actualPrice * props.cart[itemKey]);
                    cartDiscountTotal += Number((props.items[itemKey].oldPrice - props.items[itemKey].actualPrice) * props.cart[itemKey]);
                    cartFinalPriceNoDiscount += Number(props.items[itemKey].oldPrice * props.cart[itemKey]);
        
                return null;
            })
        }
    }

    return (
        <Container style={{height: "90%"}} >
            <SideInfo />
            <Row className={styles.cartWrap}>
                <Col xl={11} className={styles.cartColWrap} >
                    <Row>
                        <Col xl={11} style={cartMainStyle} >
                            <Row className={styles.krepselisWrap} ref={krepselis}>
                                <SideCartKrepselis visoPrekiu={Object.keys(props.cart).length} cartEmpty={cartEmpty} />
                            </Row>
                            <Row className={styles.separationStripe} />
                            <Row className={styles.topScrollArrow} style={showTopArrow ? showArrow : hideArrow} />
                            <Row className={styles.ProductWholewrap} onScroll={handleScroll} style={itemsCartHeight} ref={productList}>
                                <Col xl={12} className={styles.productInCartWrap} style={itemsCartHeight}  ref={products} >
                                    {cartItems}
                                </Col>
                            </Row>                           
                            <Row className={styles.bottomScrollArrow} style={showBottomArrow ? bottomArrowPadding : hideArrow}/>                   
                        </Col>
                    </Row>
                </Col>
            </Row>
            <Row  >
                <Col xl={12} className={styles.footer} ref={footer}>
                    <SideCartFooter cartFinalPrice={cartFinalPrice.toFixed(2)} cartDiscountTotal={cartDiscountTotal.toFixed(2)} cartFinalPriceNoDiscount={cartFinalPriceNoDiscount.toFixed(2)} />
                </Col>
            </Row>  
        </Container>
    );
}

const mapStateToProps = state => {
    return {
        cartredux: state.home.cart,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        updateCart: (newCart) => dispatch(authActions.updateCart(newCart)),
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(SideCart);