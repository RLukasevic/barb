import React from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import styles from './SideCartFooter.module.css';
import Truck from '../../../../assets/svg/CartFooter/Truck';
import Euras from '../../../../assets/svg/CartFooter/Euras';
import Maiselis from '../../../../assets/svg/CartFooter/Maiselis';
import Tara from '../../../../assets/svg/CartFooter/Tara';
import Masina from '../../../../assets/svg/CartFooter/Masina';
import Procent from '../../../../assets/svg/CartFooter/Procent';
import MinCart from '../../../../assets/svg/CartFooter/MinCart';

const SideCartFooter = props => {

    const minKrepselis = 10;
    let diff = Number(minKrepselis - props.cartFinalPrice).toFixed(2);

    let show = {
        display: "flex",
    }

    let hide = {
        display: "none",
    }

    return (
        <Container className={styles.footer}>
            <Row className={diff > 0 ? styles.loadingBar : styles.loadingBarCompleted} />
            <Row className={styles.ikiTruksta} style={diff > 0 ? show : hide} >
                <Col xl={2} className={styles.ikiIconCol} >
                    <MinCart />
                </Col>
                <Col xl={10} >
                    <span className={styles.ikiText} >Iki minimalaus krepšelio Jums trūksta: <span style={{fontWeight: "700"}}>€{diff.replace('.',',')}.</span></span>
                </Col>
            </Row>
            <Row className={styles.ikiTrukstaCompleted} style={diff <= 0 ? show : hide} >
                <Col xl={2} className={styles.ikiIconCol} >
                    <Truck />
                </Col>
                <Col xl={10} >
                    <span className={styles.ikiText} >Prekes Jums pristatysime NEMOKAMAI!</span>
                </Col>
            </Row>
            <Row>
                <Col xl={2} className={styles.footerIconCol}>
                    <Row className={props.cartFinalPriceNoDiscount == 0 ? styles.footerIconGrey : styles.footerIconGreen}>
                        <Euras/>
                    </Row>
                    <Row className={props.cartFinalPriceNoDiscount == 0 ? styles.footerIconPriceZero : styles.footerIconPrice}>
                        €{props.cartFinalPriceNoDiscount.replace('.',',')}
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
                    <Row className={props.cartDiscountTotal == 0 ? styles.footerIconGrey : styles.footerIconGreen}>
                        <Procent/> 
                    </Row>
                    <Row className={props.cartDiscountTotal == 0 ? styles.footerIconPriceZero : styles.footerIconPrice}>
                        €{props.cartDiscountTotal.replace('.',',')}
                    </Row>
                </Col>
            </Row>
            <Row className={styles.galutineKainaRow}>
                <Col xl={8} className={styles.galutineKaina} >
                    Galutine kaina
                </Col>
                <Col xl={2} className={styles.galutineKainaPrice} >
                    €{props.cartFinalPrice.replace('.',',')}
                </Col>
            </Row>
            <Row >
                <button onClick={props.buyClick} disabled={diff <= 0 ? false : true} className={diff <= 0 ? styles.footerButton : styles.footerButtonDisabled}>Pirkti</button>
            </Row>
        </Container>
    );
}
                    
                    
export default SideCartFooter ;