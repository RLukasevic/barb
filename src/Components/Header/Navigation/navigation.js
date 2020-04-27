import React from 'react';
import LanguageBar from './NavigationItem/languageBar';
import NavigationItem from './NavigationItem/navigationItem';
//import styles from './navigation.module.css';
import { Container, Row, Col } from 'react-bootstrap';

const NavigationBar = props => {

    return (
        <Container> 
            <Col md={8}>
            <Row className="show-grid" >
                    <LanguageBar/>  
                    <NavigationItem title="Registruotis"/>
                    <NavigationItem title="KEY Prisijungti"/>
                
            </Row>
            </Col>
        </Container>
    );
}

export default NavigationBar;