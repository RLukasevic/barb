import React from 'react';
import Navigation from './Navigation/navigation';
import SearchBar from './SearchBar/searchBar';
import styles from './header.module.css';
import appleIcon from '../../assets/icons/apple-icon.png';
import androidIcon from '../../assets/icons/android-icon.png';
import { Container, Row, Col } from 'react-bootstrap';

const Header = props => {

    return (
        <Container>
            <Row className="show-grid" >

                <Col md={4} className={styles.logo}>
                    LOGO
                </Col>

                <Col xl={8} >
                    <Row>
                        <Col>
                        <Row>
                        Parsisiuskit
                        <img src={appleIcon} alt="Apple icon" />
                        <img src={androidIcon} alt="Android icon" />
                        </Row>
                        </Col>
            
                        <Col xs={9}>
                            <Navigation/>   
                        </Col>

                       

                    </Row>
                    <SearchBar/>
                </Col>
                

            </Row>
            

        </Container>
    );
}

export default Header;