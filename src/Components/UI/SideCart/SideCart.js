import React, { useState, useRef, useEffect } from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import WbgMinus from '../../../assets/svg/WbgMinus';
import WbgPlus from '../../../assets/svg/WbgPlus';
import Basket from '../../../assets/svg/Basket';
import SideCartX from '../../../assets/svg/SideCartX';
import MinCart from '../../../assets/svg/CartFooter/MinCart';
import Truck from '../../../assets/svg/CartFooter/Truck';
import Euras from '../../../assets/svg/CartFooter/Euras';
import Maiselis from '../../../assets/svg/CartFooter/Maiselis';
import Tara from '../../../assets/svg/CartFooter/Tara';
import Masina from '../../../assets/svg/CartFooter/Masina';
import Procent from '../../../assets/svg/CartFooter/Procent';
import styles from './SideCart.module.css';

const SideCart = props => {

    const [showTopArrow, changeTopArrow] = useState(false);
    const [showBottomArrow, changeBottomArrow] = useState(false);
    const [productsSectionHeight, changeProductsSectionHeight] = useState(0);

    const products = useRef(null)
    const productList = useRef(null)
    const krepselis = useRef(null)
    const footer = useRef(null)

    useEffect(() => {
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

    let white = {
        backgroundColor: "white",
    }

    let itemsCartHeight = {
        height: productsSectionHeight + vertOffset - 113 + "px",
    }

    let bottomArrowPadding = {
        top: productsSectionHeight + vertOffset - 33 + "px",
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

        console.log('scroll   ', element.scrollTop)
    }

    return (
        <Container style={{height: "100%"}} >
            <Row className={styles.InfoWrap} >
                <Col xl={{ span: 11, offset: 1 }} >
                    <Row className={styles.NumberRow}>
                        <Col xl={11} className={styles.number} >
                            <Row>
                                (8 5) 230 9309
                            </Row>
                        </Col>
                    </Row>
                    <Row className={styles.textRow} >
                        <Col xl={11} className={styles.text} >
                            <Row>
                                Kasdien nuo 8 iki 21 val.
                            </Row>
                        </Col>
                    </Row>
                    <Row className={styles.textRow} >
                        <Col xl={11} className={styles.elp} >
                            <Row>
                                El. p.: <span className={styles.elPastas}>pagalba@barbora.lt</span>
                            </Row>
                        </Col>
                    </Row>
                </Col>
            </Row>
            <Row className={styles.cartWrap}>
                <Col xl={11} className={styles.cartColWrap} >
                    <Row>
                        <Col xl={11} style={cartMainStyle} >
                            <Row className={styles.krepselisWrap} ref={krepselis}>
                                <Row  className={styles.krepselis}>
                                    <Basket />
                                    <span>Krepselis</span>
                                </Row>
                                <Row className={styles.prekiuKrepselyje} style={white}>
                                    <Col xl={{ span: 3, offset: 6 }} className={styles.visoPrekiuCol} >
                                        viso prekių:
                                    </Col>
                                    <Col xl={2} className={styles.visoPrekiuColAmount} > 
                                        99
                                    </Col>
                                </Row>
                                <Row className={styles.emptyCart} style={white} style={{display: "none"}}>
                                    <span>Krepšelis tuščias. Išsirinkite prekę ir spauskite mygtuką Į krepšelį. 
                                        Taip pat galite peržiūrėti savo <span className={styles.pirkimoIstorija}>Pirkimo istoriją</span>
                                    </span>
                                </Row>
                            </Row>
                            <Row className={styles.separationStripe} />
                            <Row className={styles.topScrollArrow} style={showTopArrow ? showArrow : hideArrow} />
                            <Row className={styles.ProductWholewrap} onScroll={handleScroll} style={itemsCartHeight} ref={productList}>
                                <Col xl={12} className={styles.productInCartWrap} style={itemsCartHeight}  ref={products} >
                                    <Row className={styles.productInCartRow}>
                                        <Col xl={11} style={cartGoodsHeight} >
                                            <Row style={white}>
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
                                </Col>
                            </Row>                           
                            <Row className={styles.bottomScrollArrow} style={showBottomArrow ? bottomArrowPadding : hideArrow}/>                   
                        </Col>
                    </Row>
                </Col>
            </Row>
            <Row>
                <Col xl={12} className={styles.footer} ref={footer}>
                    <Row className={styles.loadingBarCompleted} />
                    <Row className={styles.ikiTruksta} style={{display: "none"}} >
                        <Col xl={2} className={styles.ikiIconCol} >
                            <MinCart />
                        </Col>
                        <Col xl={10} >
                            <span className={styles.ikiText} >Iki minimalaus krepšelio Jums trūksta: <span style={{fontWeight: "700"}}>€14,70.</span></span>
                        </Col>
                    </Row>
                    <Row className={styles.ikiTrukstaCompleted} >
                        <Col xl={2} className={styles.ikiIconCol} >
                            <Truck />
                        </Col>
                        <Col xl={10} >
                            <span className={styles.ikiText} >Prekes Jums pristatysime NEMOKAMAI!</span>
                        </Col>
                    </Row>
                    <Row>
                        <Col xl={2} className={styles.footerIconCol}>
                            <Row className={styles.footerIconGreen}>
                                <Euras/>
                            </Row>
                            <Row className={styles.footerIconPrice}>
                                €15,67
                            </Row>
                        </Col>
                        <Col xl={2} className={styles.footerIconCol}>
                            <Row className={styles.footerIconGreen}>
                                <Maiselis/> 
                            </Row>
                            <Row className={styles.footerIconPrice}>
                                €0,29
                            </Row>
                        </Col>
                        <Col xl={2} className={styles.footerIconCol}>
                            <Row className={styles.footerIconGrey}>
                                <Tara/>
                            </Row>
                            <Row className={styles.footerIconPriceZero}>
                                €0,00
                            </Row>
                        </Col>
                        <Col xl={2} className={styles.footerIconCol}>
                            <Row className={styles.footerIconGrey}>
                                <Masina/>  
                            </Row>
                            <Row className={styles.footerIconPriceZero}>
                                €0,00
                            </Row>
                        </Col>
                        <Col xl={2} className={styles.footerIconCol}>
                            <Row className={styles.footerIconGreen}>
                                <Procent/> 
                            </Row>
                            <Row className={styles.footerIconPrice}>
                                €4,92
                            </Row>
                        </Col>
                    </Row>
                    <Row className={styles.galutineKainaRow}>
                        <Col xl={8} className={styles.galutineKaina} >
                            Galutine kaina
                        </Col>
                        <Col xl={2} className={styles.galutineKainaPrice} >
                            €19,63
                        </Col>
                    </Row>
                    <Row className={styles.footerButtonDisabled}>
                        Pirkti
                    </Row>
                </Col>
            </Row>  
        </Container>
    );
}


export default SideCart ;