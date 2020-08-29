import React from 'react';
import { Row, Col } from 'react-bootstrap';
import styles from './SideInfo.module.css';


const SideInfo = props => {

    return (
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
    );
}

export default SideInfo;