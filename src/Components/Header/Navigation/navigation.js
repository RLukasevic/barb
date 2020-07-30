import React from 'react';
import LanguageBar from './NavigationItem/languageBar';
import NavigationItem from './NavigationItem/navigationItem';
import styles from './navigation.module.css';
import { Row, Col } from 'react-bootstrap';

const NavigationBar = props => {

    let notLoggedInItems = (
        <Row style={{"marginLeft":"70px"}}>
            <div xl={2} className={styles.loginMenu} >
                <NavigationItem lClick={() => props.lClick('register')} title="Registruotis"/>
            </div>

            <div xl={2} className={styles.loginMenu}>
                <NavigationItem lClick={props.lClick} title="Prisijungti" showKey={true} />
            </div> 
        </Row>  )
        
    let loggedInItems = (
        <Row style={{"marginLeft":"70px"}}>
            <div xl={2} className={styles.loginMenu}>
                <NavigationItem lClick={props.logoutClick} title="Atsijungti" showKey={true} displayName={props.displayName} />
            </div> 
        </Row> )

    return (
            <Row xl={7} className={"show-grid " + styles.menuWrap} >
                <Col xl={1} className={styles.languageBar}>
                    <LanguageBar/> 
                </Col>

                {props.isLoggedIn ? loggedInItems : notLoggedInItems}
          
            </Row>
    );
}

export default NavigationBar;