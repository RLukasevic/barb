import React, { useState, useEffect } from 'react';
import BackDrop from '../backDrop';
import BarbLogo from '../../../assets/svg/BarbLogo';
import styles from './sideDrawer.module.css';
import { Row, Col } from 'react-bootstrap';
import { useLocation } from 'react-router-dom';



const SideDrawer = (props) => {

    const [startX, changeStartX] = useState(0);
    const [xOffset, changeXOffset] = useState(0);
    const [swiping, changeSwiping] = useState(false);
    const [showing, changeShowing] = useState(false);
    const [status, changeStatus] = useState(false);

    const sideDrawerWidth = 220;

    let location = useLocation();
    if (location.pathname.includes('item')) {
        location.pathname = '/item'
    }

    let mergedStyles = [styles.SideDrawer, styles.Close];
    if (props.show) {
        mergedStyles = [styles.SideDrawer, styles.Open];
    }

    useEffect(() => {
        if (props.sideDrawerShow === true && swiping === false && showing === false && status === false) {
            console.log('wtf ', props.sideDrawerShow)
            changeXOffset(-sideDrawerWidth);
            changeStatus(true);
            changeShowing(true);
            changeStartX(0);
            changeSwiping(false);
        }
    })

    const handleTouchStart = (event) => {
        changeSwiping(true);
        if(status === true) {
            changeStartX(event.touches[0].clientX - sideDrawerWidth);
        } else {
            changeStartX(event.touches[0].clientX);
        }
    }

    const handleTouchMove = (event) => {
        let calcOffset = startX - event.touches[0].clientX;
        changeXOffset(calcOffset)

        if (calcOffset > sideDrawerWidth) {
            changeShowing(false)
        }

        if (calcOffset < sideDrawerWidth) {
            changeShowing(showing)
        }

        if (calcOffset < -sideDrawerWidth) {
            changeShowing(true)
        }
        if (calcOffset > sideDrawerWidth) {
            changeXOffset(sideDrawerWidth)
        }
        if (calcOffset < -sideDrawerWidth) {
            changeXOffset(-sideDrawerWidth)
        }
    }

    const handleTouchEnd = () => {
        changeSwiping(false);
        if (xOffset >= 101) {
            changeXOffset(sideDrawerWidth)
            changeStatus(false)
            changeShowing(false)
            props.sideDrawerShowHandle();
        }
        if (xOffset <= -101) {
            changeXOffset(-sideDrawerWidth)
            changeStatus(true)
            changeShowing(true)
            props.sideDrawerShowHandle();
        }
        
        if (-100 < xOffset && xOffset < 100) {
            changeXOffset(0);
            changeStatus(false)
            changeShowing(false)
            props.sideDrawerShowHandle();
        }
        changeStartX(0);
    }

    const backDropClick = () => {
        props.sideDrawerShowHandle();
        changeStartX(0);
        changeXOffset(0);
        changeSwiping(false);
        changeShowing(false);
        changeStatus(false);
    }

    const clickAuth = (mode) => {
        console.log(mode)
        if (mode === 'register') {
            console.log('registering');
            props.authModalHandler('register','side');
        } else {
            props.authModalHandler('login')
        }
        backDropClick();
    }

    const redirClick = (mode) => {

        switch (mode) {

            case 'prekes':
                props.history.push('/');
                backDropClick();
                break;

            case 'manoPrekes':
                if (props.token) {
                    props.history.push('/myfavorites');
                    backDropClick();
                    break;
                } else {
                    clickAuth();
                    backDropClick();
                    break;
                }

            case 'discounts':
                props.history.push('/discounts')
                backDropClick();
                break;

            case 'ekoirukis':
                props.history.push('/ekoirukis');
                backDropClick();
                break;

            case 'new':
                props.history.push('/new');
                backDropClick();
                break;

            case 'recipes':
                props.history.push('/recipes');
                backDropClick();
                break;

            case 'history':
                props.history.push('/history');
                backDropClick();
                break;

            case 'account':
                props.history.push('/account');
                backDropClick();
                break;

            default:
                props.history.push('/');
                backDropClick();
                break;

        }

    }


    return (
        <div 
            onTouchStart={touchStartEvent => handleTouchStart(touchStartEvent)}
            onTouchMove={touchMoveEvent => handleTouchMove(touchMoveEvent)}
            onTouchEnd={() => handleTouchEnd()}
        >
            <div className={mergedStyles.join(' ')} style={{left: -xOffset + "px"}} >
                <Col xl={12} md={12} sm={12}>
                    <Row>
                        <BarbLogo homeClick={() => redirClick('prekes')} /> 
                    </Row>
                    {props.token ?

                        <div className={styles.accountOptions}>
                            <Row className={styles.customRow} onClick={() => props.logoutClicked()} >
                                Atsijungti
                            </Row>
                            <Row className={location.pathname === '/history' ? styles.customRowActive : styles.customRow} onClick={() => redirClick('history')} >
                                Pirkinių istoriją
                            </Row>
                            <Row className={location.pathname === '/account' ? styles.customRowActive : styles.customRow} onClick={() => redirClick('account')} >
                                Paskyros nustatymai
                            </Row>
                            <Row className={styles.separationStripe} />
                        </div>

                        :

                        <div className={styles.accountOptions}>
                            <Row className={styles.customRow} onClick={() => clickAuth()} >
                                Login
                            </Row>
                            <Row className={styles.customRow} onClick={() => props.authModalHandler('register', backDropClick())} >
                                Register
                            </Row> 
                            <Row className={styles.separationStripe} />
                        </div>
                    }
                    <div className={styles.mainMenu} >
                        <Row className={location.pathname === '/' || location.pathname === '/item' || location.pathname === '/mobcart' ? styles.customRowActive : styles.customRow} onClick={() => redirClick('prekes')} >
                            Prekes
                        </Row>
                        <Row className={location.pathname === '/myfavorites' ? styles.customRowActive : styles.customRow} onClick={() => redirClick('manoPrekes')}>
                            Mano Prekes
                        </Row>
                        <Row className={location.pathname === '/discounts' ? styles.customRowActive : styles.customRow} onClick={() => redirClick('discounts')} >
                            Akcijos
                        </Row>
                        <Row className={location.pathname === '/ekoirukis' ? styles.customRowActive : styles.customRow} onClick={() => redirClick('ekoirukis')} >
                            Eko ir Ukis
                        </Row>
                        <Row className={location.pathname === '/new' ? styles.customRowActive : styles.customRow} onClick={() => redirClick('new')} >
                            Naujienos
                        </Row>
                        <Row className={location.pathname === '/recipes' ? styles.customRowActive : styles.customRow} onClick={() => redirClick('recipes')} >
                            Receptai
                        </Row>
                    </div>
                </Col>
            </div>
            {props.children}
            <BackDrop show={showing} cBackDrop={() => backDropClick()}/>
        </div>
    );
}

export default SideDrawer;