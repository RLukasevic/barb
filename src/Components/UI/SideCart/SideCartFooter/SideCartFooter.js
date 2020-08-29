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
    return (
        <Container className={styles.footer}>
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
        </Container>
    );
}
                    
                    
export default SideCartFooter ;