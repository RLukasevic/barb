import React from 'react';
import Navigation from './Navigation/navigation';
import SearchBar from './SearchBar/searchBar';
import styles from './header.module.css';
import appleIcon from '../../assets/icons/apple-icon.png';
import androidIcon from '../../assets/icons/android-icon.png';
import HomeIcon from '../../assets/svg/HomeIcon';
import BarbLogo from '../../assets/svg/BarbLogo';
import { Container, Row, Col } from 'react-bootstrap';

const Header = props => {

    return (
        <Container >
            <Row className="show-grid" >

                <Col md={4} className={styles.logo} >
                    <BarbLogo homeClick={props.homeClick} />
                </Col>

                <Col xl={8} className={styles.rightSideWrap}>
                    <Row xl={8}>
                        <Col xl={2}>

                            <Row className={styles.downloadMenu} >

                                <Col className={styles.downloadMenuFirstCol} >
                                    Parsisiuskite
                                </Col>

                                <Col className={styles.downloadMenuCol} >
                                    <img src={appleIcon} alt="Apple icon" style={{"width": "20px"}} />
                                </Col>

                                <Col className={styles.downloadMenuCol} >
                                    <img src={androidIcon} alt="Android icon" style={{"width": "20px"}} />
                                </Col>

                            </Row>

                        </Col>

                        <Col xl={1} className={styles.homeButton} >
                            <HomeIcon width="20px" height="20px" homeClick={props.homeClick} />
                        </Col>
            
                        <Col >
                            <Navigation logoutClick={props.logoutClick} lClick={props.lClick} isLoggedIn={props.isLoggedIn} displayName={props.displayName} />   
                        </Col>

                       

                    </Row>
                    <Row className={styles.searchBar}>
                        <SearchBar/>
                    </Row>
                </Col>
                

            </Row>
        
            <Row className={"show-grid " + styles.mainMenu} >
                <Col >
                    <Row onClick={() => props.mmClick('Prekes')} className={props.mmActiveNow === 'Prekes' ? styles.mainMenuFirstColActive : styles.mainMenuFirstCol}>
                        Prekes
                    </Row>
                </Col>

                <Col>
                    <Row onClick={() => props.mmClick('manoPrekes')} className={props.mmActiveNow === 'manoPrekes' ? styles.mainMenuColActive : styles.mainMenuCol}>
                        Mano Prekes
                    </Row>
                </Col>

                <Col>
                    <Row onClick={() => props.mmClick('Akcijos')} className={props.mmActiveNow === 'Akcijos' ? styles.mainMenuColActive : styles.mainMenuCol}>
                        Akcijos
                    </Row>
                </Col>

                <Col>
                    <Row onClick={() => props.mmClick('ekoIrUkis')} className={props.mmActiveNow === 'ekoIrUkis' ? styles.mainMenuColActive : styles.mainMenuCol}>
                        Eko ir Ukis
                    </Row>
                </Col>

                <Col>
                    <Row onClick={() => props.mmClick('Naujienos')} className={props.mmActiveNow === 'Naujienos' ? styles.mainMenuColActive : styles.mainMenuCol}>
                        Naujienos
                    </Row>
                </Col>

                <Col>
                    <Row onClick={() => props.mmClick('Receptai')} className={props.mmActiveNow === 'Receptai' ? styles.mainMenuColActive : styles.mainMenuCol}>
                        Receptai
                    </Row>
                </Col>
                
                <Col>
                    <Row>
                        
                    </Row>
                </Col>
            </Row>

            <Row className={"show-grid " + styles.categoriesWrap} >
                <Col className={styles.categoriesItem} >
                    <Row className={styles.categoriesItemText}>
                        Darzoves ir vaisiai
                    </Row>
                </Col>

                <Col className={styles.categoriesItem} >
                    <Row className={styles.categoriesItemText}>
                        Pieno gaminiai ir kiausiniai
                    </Row>
                </Col>

                <Col className={styles.categoriesItem} >
                    <Row className={styles.categoriesItemText}>
                        Duonos gaminiai ir konditerija
                    </Row>
                </Col>

                <Col className={styles.categoriesItem} >
                    <Row className={styles.categoriesItemText}>
                        Mesa, zuvis ir kulinarija
                    </Row>
                </Col>

                <Col className={styles.categoriesItem + " " + styles.categoriesItemFix}>
                    <Row className={styles.categoriesItemText}>
                        Bakaleja
                    </Row>
                </Col>

                <Col className={styles.categoriesItem + " " + styles.categoriesItemFix}>
                    <Row className={styles.categoriesItemText}>
                        Saldytas maistas
                    </Row>
                </Col>

                <Col className={styles.categoriesItem + " " + styles.categoriesItemFix} >
                    <Row className={styles.categoriesItemText}>
                        Gerimai
                    </Row>
                </Col>

                <Col className={styles.categoriesItem} >
                    <Row className={styles.categoriesItemText}>
                        Kudikiu ir vaiku prekes
                    </Row>
                </Col>

                <Col className={styles.categoriesItem} >
                    <Row className={styles.categoriesItemText}>
                        Kosmetika ir higiena
                    </Row>
                </Col>

                <Col className={styles.categoriesItem} >
                    <Row className={styles.categoriesItemText}>
                        Svaros ir gyvunu prekes
                    </Row>
                </Col>

                <Col className={styles.categoriesItem} >
                    <Row className={styles.categoriesItemText}>
                        NAMAI IR LAISVALAIKIS
                    </Row>
                </Col>
            </Row>
            

        </Container>
    );
}

export default Header;