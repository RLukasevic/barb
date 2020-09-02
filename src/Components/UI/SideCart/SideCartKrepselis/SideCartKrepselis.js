import React from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import styles from './SideCartKrepselis.module.css';
import Basket from '../../../../assets/svg/Basket';


const SideInfo = props => {
  
    let show = {
        display: "flex",
    }

    let hide = {
        display: "none",
    }

    return (
        <Container className={styles.cont} >
            <Row  className={styles.krepselis}>
                <Basket />
                <span>Krepselis</span>
            </Row>
            <Row className={styles.prekiuKrepselyje} style={props.cartEmpty ? hide : show}>
                <Col xl={{ span: 3, offset: 6 }} className={styles.visoPrekiuCol} >
                    viso prekių:
                </Col>
                <Col xl={2} className={styles.visoPrekiuColAmount} > 
                    {props.visoPrekiu}
                </Col>
            </Row>
            <Row className={styles.emptyCart} style={props.cartEmpty ? show : hide}>
                <span>Krepšelis tuščias. Išsirinkite prekę ir spauskite mygtuką Į krepšelį. 
                    Taip pat galite peržiūrėti savo <span className={styles.pirkimoIstorija}>Pirkimo istoriją</span>
                </span>
            </Row>
        </Container>
    );
}

export default SideInfo;