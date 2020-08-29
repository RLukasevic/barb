import React, { useState, useRef, useEffect } from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import styles from './SideCart.module.css';
import SideCartFooter from './SideCartFooter/SideCartFooter';
import SideInfo from './SideInfo/SideInfo';
import SideCartItem from './SideCartItem/SideCartItem';
import SideCartKrepselis from './SideCartKrepselis/SideCartKrepselis';

const SideCart = props => {

    const [showTopArrow, changeTopArrow] = useState(false);
    const [showBottomArrow, changeBottomArrow] = useState(false);
    const [productsSectionHeight, changeProductsSectionHeight] = useState(0);
    const [cartEmpty, changeCartEmpty] = useState(true);

    const products = useRef(null)
    const productList = useRef(null)
    const krepselis = useRef(null)
    const footer = useRef(null)

    useEffect(() => {
        if (props.cart !== null) {
            changeCartEmpty(false);
        }

        let combinedHeight = 0;
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

    let cartGoodsHeight = {
        height: 80 + "px",
    }

    let itemsCartHeight = {
        height: productsSectionHeight + vertOffset - 113 + "px",
    }

    let bottomArrowPadding = {
        top: productsSectionHeight + vertOffset - 38 + "px",
        display: "flex",
    }

    let showArrow = {
        display: "flex",
    }

    let hideArrow = {
        display: "none",
    }


    const handleScroll = (event) => {
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

    return (
        <Container style={{height: "90%"}} >
            <SideInfo />
            <Row className={styles.cartWrap}>
                <Col xl={11} className={styles.cartColWrap} >
                    <Row>
                        <Col xl={11} style={cartMainStyle} >
                            <Row className={styles.krepselisWrap} ref={krepselis}>
                                <SideCartKrepselis cartEmpty={cartEmpty} />
                            </Row>
                            <Row className={styles.separationStripe} />
                            <Row className={styles.topScrollArrow} style={showTopArrow ? showArrow : hideArrow} />
                            <Row className={styles.ProductWholewrap} onScroll={handleScroll} style={itemsCartHeight} ref={productList}>
                                <Col xl={12} className={styles.productInCartWrap} style={itemsCartHeight}  ref={products} >
                                    <SideCartItem cartGoodsHeight={cartGoodsHeight} />
                                </Col>
                            </Row>                           
                            <Row className={styles.bottomScrollArrow} style={showBottomArrow ? bottomArrowPadding : hideArrow}/>                   
                        </Col>
                    </Row>
                </Col>
            </Row>
            <Row  >
                <Col xl={12} className={styles.footer} ref={footer}>
                    <SideCartFooter  />
                </Col>
            </Row>  
        </Container>
    );
}


export default SideCart ;