import React from 'react';
import styles from './modalRegisterModule.module.css';
import { Row, Col } from 'react-bootstrap';


const modalRegisterModule = props => {

    return (
        <form onSubmit={props.cSubmit}  >

            <Row sm={12} className={styles.inputController}  >
                <Col sm={5} className={styles.inputLabel} >
                    <label htmlFor="email">El. Pastas:</label>
                </Col>

                <Col sm={7} className={styles.emailInputCol} >
                    <input onChange={(event) => props.changeHandler(event, 'signUpData' , 'email')} className={styles.emailInput} type="email" name="email" id="email" placeholder="vardenis@pastas.lt" />
                </Col>
            </Row>

            <Row sm={12} className={styles.inputController}  >
                <Col sm={5} className={styles.inputLabel} >
                    <label htmlFor="pwd">Slaptazodis</label>
                </Col>

                <Col sm={7} className={styles.passwordInputCol} >
                    <input onChange={(event) => props.changeHandler(event, 'signUpData' , 'password')} className={styles.passwordInput} type={props.modalPasswordMode} id="pwd" name="pwd" placeholder="*******" />
                    <button type='button' className={styles.eyeButton} onMouseDown={props.handleModalButtonPress} onMouseUp={props.handleModalButtonRelease} >

                        <svg display={props.modalPasswordMode === "password" ? 'inline-block' : 'none'} style={{"width": "1em", "height": "1em"}} >
                            <use xlinkHref="#eye">
                                <svg viewBox="0 0 22 19" id="eye">
                                    <path fill="none" d="M-1-.5h24v24H-1z" />
                                    <path fill="white" d="M11 1.5C6 1.5 1.73 4.61 0 9c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM11 14c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8C9.34 6 8 7.34 8 9s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z" />
                                </svg>
                            </use>
                        </svg>

                        <svg display={props.modalPasswordMode === "text" ? 'inline-block' : 'none'} style={{"width": "1em", "height": "1em"}}>
                            <use xlinkHref="#eye-crossed">
                                <svg viewBox="0 0 21.99 19" id="eye-crossed">
                                    <path fill="none" d="M-1-3h24v24H-1zm0 0h24v24H-1zm0 0h24v24H-1zm0 0h24v24H-1z"/>
                                    <path fill="white" d="M11 4c2.76 0 5 2.24 5 5 0 .65-.13 1.26-.36 1.83l2.92 2.92c1.51-1.26 2.7-2.89 3.43-4.75-1.73-4.39-6-7.5-11-7.5-1.4 0-2.74.25-3.98.7l2.16 2.16C9.74 4.13 10.35 4 11 4zM1 1.27l2.28 2.28.46.46A11.804 11.804 0 0 0 0 9c1.73 4.39 6 7.5 11 7.5 1.55 0 3.03-.3 4.38-.84l.42.42L18.73 19 20 17.73 2.27 0 1 1.27zM6.53 6.8l1.55 1.55C8.03 8.56 8 8.78 8 9c0 1.66 1.34 3 3 3 .22 0 .44-.03.65-.08l1.55 1.55c-.67.33-1.41.53-2.2.53-2.76 0-5-2.24-5-5 0-.79.2-1.53.53-2.2zm4.31-.78l3.15 3.15.02-.16c0-1.66-1.34-3-3-3l-.17.01z" />
                                </svg>
                            </use>
                        </svg>

                    </button>
                </Col>
            </Row>

            <Row sm={12} className={styles.inputController}  >
                <Col sm={5} className={styles.inputLabel} >
                    <label htmlFor="miestas">Miestas:</label>
                </Col>

                <Col sm={7} className={styles.emailInputCol} >
                    <input onChange={(event) => props.changeHandler(event, 'signUpData' , 'city')} className={styles.emailInput} type="text" name="miestas" id="miestas" placeholder="Vilniaus miestas / rajonas" />
                </Col>
            </Row>

            <Row sm={12} className={styles.inputController}  >
                <Col sm={5} className={styles.inputLabel} >
                    <label htmlFor="gatve">Gatve ir namo numeris</label>
                </Col>

                <Col sm={7} className={styles.emailInputCol} >
                    <input onChange={(event) => props.changeHandler(event, 'signUpData' , 'gatve')} className={styles.emailInput} type="text" name="gatve" id="gatve" placeholder="Pradekite vesti ir issirinkite is saraso" />
                </Col>
            </Row>

            <Row sm={12} className={styles.inputController}  >
                <Col sm={5} className={styles.inputLabel} >
                    <label htmlFor="butas">Buto numeris</label>
                </Col>

                <Col sm={7} className={styles.emailInputCol} >
                    <input onChange={(event) => props.changeHandler(event, 'signUpData' , 'butoNumeris')} className={styles.emailInput} type="text" name="butas" id="butas" placeholder="00" />
                </Col>
            </Row>

            <Row sm={12} className={styles.inputController}  >
                <Col sm={5} className={styles.inputLabel} >
                    <label htmlFor="vardas">Vardas</label>
                </Col>

                <Col sm={7} className={styles.emailInputCol} >
                    <input onChange={(event) => props.changeHandler(event, 'signUpData' , 'name')} className={styles.emailInput} type="text" name="vardas" id="vardas" placeholder="Vardenis" />
                </Col>
            </Row>

            <Row sm={12} className={styles.inputController}  >
                <Col sm={5} className={styles.inputLabel} >
                    <label htmlFor="pavarde">Pavarde</label>
                </Col>

                <Col sm={7} className={styles.emailInputCol} >
                    <input onChange={(event) => props.changeHandler(event, 'signUpData' , 'lastName')} className={styles.emailInput} type="text" name="pavarde" id="pavarde" placeholder="Pavardenis" />
                </Col>
            </Row>

            <Row sm={12} className={styles.inputController}  >
                <Col sm={5} className={styles.inputLabel} >
                    <label htmlFor="phone">Telefonas</label>
                </Col>

                <Col sm={7} className={styles.emailInputCol} >
                    <input onChange={(event) => props.changeHandler(event, 'signUpData' , 'phone')} className={styles.emailInput} type="text" name="phone" id="phone" placeholder="+37060000000" />
                </Col>
            </Row>

            <Row sm={12} >
                <Col className={styles.loginButtonCol} sm={{ span: 7, offset: 5 }} >
                    <input className={styles.checkBox} type="checkbox" id="policy" checked={props.policyChecked} onClick={() => props.cCheckBox('policy')} />
                    <label className={styles.keepLogged} htmlFor="policy" >
                        Susipazinau ir sutinku su pirkimo taisyklemis ir privatumo politika
                    </label>
                </Col>
            </Row>

            <Row sm={12} >
                <Col className={styles.loginButtonCol} sm={{ span: 7, offset: 5 }} >
                        <input className={styles.checkBox} type="checkbox" id="getPersonalOfferEmail" checked={props.getPersonalOfferEmailChecked} onClick={() => props.cCheckBox('personalOfferEmail')} />
                        <label className={styles.keepLogged}  htmlFor="getPersonalOfferEmail" >
                            Sutinku gauti asmeninius pasiulymus, atsizvelgiant i mano pirkimo istorija
                        </label>
                </Col>
            </Row>
            
            {props.extended ? 
                <Row sm={12} >
                    <Col className={styles.loginButtonCol} sm={{ span: 7, offset: 5 }} >
                        <input className={styles.checkBox} type="checkbox" id="getOfferEmail" checked={props.getOfferEmailChecked} onClick={() => props.cCheckBox('offerEmail')}  />
                        <label className={styles.keepLogged} htmlFor="getOfferEmail" >
                            Sutinku gauti pasiūlymus el. paštu
                        </label>
                    </Col>
                </Row> 
            : null}

            {props.extended ? 
                <Row sm={12} >
                    <Col className={styles.loginButtonCol} sm={{ span: 7, offset: 5 }} >
                        <input className={styles.checkBox} type="checkbox" id="getMobileAppOffer" checked={props.getMobileAppOfferChecked} onClick={() => props.cCheckBox('mobileAppOffer')} />
                        <label className={styles.keepLogged} htmlFor="getMobileAppOffer" >
                            Sutinku gauti pranešimus mobilioje aplikacijoje
                        </label>
                    </Col>
                </Row>
            : null}

            {props.extended ?
                <Row sm={12} >
                    <Col className={styles.loginButtonCol} sm={{ span: 7, offset: 5 }} >
                        <input className={styles.checkBox} type="checkbox" id="getSmsOffer" checked={props.getSmsOfferChecked} onClick={() => props.cCheckBox('smsOffer')} />
                        <label className={styles.keepLogged} htmlFor="getSmsOffer" >
                            Sutinku gauti pasiūlymus SMS žinutėmis
                        </label>
                    </Col>
                </Row>
            : null}

            <Row sm={12} >
                <Col className={styles.loginButtonCol} sm={{ span: 7, offset: 5 }} >
                    <button className={styles.loginButton}  >Registruotis</button>
                </Col>
            </Row>

        </form>
    );
}

export default modalRegisterModule;