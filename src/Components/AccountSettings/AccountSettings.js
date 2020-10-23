import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import styles from './AccountSettings.module.css';
import { Row, Col } from 'react-bootstrap';


const AccountSettings = props => {

    useEffect(() => {
        Object.keys(props.data).map(key => {
            if (props.data[key].value === null) {
                props.presetData();
            }
            if (props.data['email'].value !== props.storeEmail) {
                props.presetData();
            }

            props.mmChanger('manoPrekes');
        })
    })

    return (
        <div className={styles.formWrap}  >
            <Row className={styles.epwRow}>
                <Col className={styles.emailButtonCol} xl={{ span: 3, offset: 3 }} onClick={() => props.userDataModalHandler('emailChange')}>
                    Pakeisti e-paštą
                </Col>
                <Col className={styles.passwordButtonCol} xl={3} onClick={() => props.userDataModalHandler('passwordChange')}>
                    Pakeisti slaptažodį
                </Col>
            </Row>

            <Row sm={12} className={styles.inputController}  >
                <Col sm={3} className={styles.inputLabel} >
                    <label htmlFor="city">Miestas:</label>
                </Col>

                <Col sm={7} className={styles.emailInputCol} >
                    <input 
                        onChange={(event) => props.changeHandler(event, 'changeUserData' , 'city')} 
                        defaultValue={props.data.city.value} 
                        className={!props.data.city.valid && props.data.city.touched ? styles.emailInputNotValid : styles.emailInput} 
                        type="text"
                        name="city" 
                        id="city" 
                        placeholder="Vilniaus miestas / rajonas" 
                    />
                </Col>
            </Row>

            <Row sm={12} className={styles.inputController}  >
                <Col sm={3} className={styles.inputLabel} >
                    <label htmlFor="gatve">Gatve ir namo numeris</label>
                </Col>

                <Col sm={7} className={styles.emailInputCol} >
                    <input 
                        onChange={(event) => props.changeHandler(event, 'changeUserData' , 'gatve')} 
                        defaultValue={props.data.gatve.value}
                        className={!props.data.gatve.valid && props.data.gatve.touched ? styles.emailInputNotValid : styles.emailInput} 
                        type="text" 
                        name="gatve" 
                        id="gatve" 
                        placeholder="Pradekite vesti ir issirinkite is saraso" 
                    />
                </Col>
            </Row>

            <Row sm={12} className={styles.inputController}  >
                <Col sm={3} className={styles.inputLabel} >
                    <label htmlFor="butas">Buto numeris</label>
                </Col>

                <Col sm={7} className={styles.emailInputCol} >
                    <input 
                        onChange={(event) => props.changeHandler(event, 'changeUserData' , 'butoNumeris')} 
                        defaultValue={props.data.butoNumeris.value} 
                        className={!props.data.butoNumeris.valid && props.data.butoNumeris.touched ? styles.emailInputNotValid : styles.emailInput}  
                        type="text" 
                        name="butas" 
                        id="butas" 
                        placeholder="00" 
                    />
                </Col>
            </Row>

            <Row sm={12} className={styles.inputController}  >
                <Col sm={3} className={styles.inputLabel} >
                    <label htmlFor="vardas">Vardas</label>
                </Col>

                <Col sm={7} className={styles.emailInputCol} >
                    <input 
                        onChange={(event) => props.changeHandler(event, 'changeUserData' , 'name')} 
                        defaultValue={props.data.name.value} 
                        className={!props.data.name.valid && props.data.name.touched ? styles.emailInputNotValid : styles.emailInput} 
                        type="text" 
                        name="vardas" 
                        id="vardas" 
                        placeholder="Vardenis" 
                    />
                </Col>
            </Row>

            <Row sm={12} className={styles.inputController}  >
                <Col sm={3} className={styles.inputLabel} >
                    <label htmlFor="pavarde">Pavarde</label>
                </Col>

                <Col sm={7} className={styles.emailInputCol} >
                    <input 
                        onChange={(event) => props.changeHandler(event, 'changeUserData' , 'lastName')} 
                        defaultValue={props.data.lastName.value} 
                        className={!props.data.lastName.valid && props.data.lastName.touched ? styles.emailInputNotValid : styles.emailInput} 
                        type="text" 
                        name="pavarde" 
                        id="pavarde" 
                        placeholder="Pavardenis" 
                    />
                </Col>
            </Row>

            <Row sm={12} className={styles.inputController}  >
                <Col sm={3} className={styles.inputLabel} >
                    <label htmlFor="phone">Telefonas</label>
                </Col>

                <Col sm={7} className={styles.emailInputCol} >
                    <input 
                        onChange={(event) => props.changeHandler(event, 'changeUserData' , 'phone')} 
                        defaultValue={props.data.phone.value} 
                        className={!props.data.phone.valid && props.data.phone.touched ? styles.emailInputNotValid : styles.emailInput} 
                        type="text" 
                        name="phone" 
                        id="phone" 
                        placeholder="+37060000000" 
                    />
                </Col>
            </Row>

            <Row sm={12} className={styles.loginButtonRow} >
                <Col className={styles.loginButtonCol} sm={{ span: 7, offset: 3 }} >
                    <input className={styles.checkBox} type="checkbox" id="policy" checked={props.data.policyChecked} onClick={() => props.cCheckBox('policy')} />
                    <label className={styles.keepLogged} htmlFor="policy" >
                        Susipazinau ir sutinku su pirkimo taisyklemis ir privatumo politika
                    </label>
                </Col>
            </Row>

            <Row sm={12} className={styles.loginButtonRow} >
                <Col className={styles.loginButtonCol} sm={{ span: 7, offset: 3 }} >
                        <input className={styles.checkBox} type="checkbox" id="getPersonalOfferEmail" checked={props.data.getPersonalOfferEmailChecked} onClick={() => props.cCheckBox('personalOfferEmail')} />
                        <label className={styles.keepLogged}  htmlFor="getPersonalOfferEmail" >
                            Sutinku gauti asmeninius pasiulymus, atsizvelgiant i mano pirkimo istorija
                        </label>
                </Col>
            </Row>
            
                <Row sm={12} className={styles.loginButtonRow} >
                    <Col className={styles.loginButtonCol} sm={{ span: 7, offset: 3 }} >
                        <input className={styles.checkBox} type="checkbox" id="getOfferEmail" checked={props.data.getOfferEmailChecked} onClick={() => props.cCheckBox('offerEmail')}  />
                        <label className={styles.keepLogged} htmlFor="getOfferEmail" >
                            Sutinku gauti pasiūlymus el. paštu
                        </label>
                    </Col>
                </Row> 

                <Row sm={12} className={styles.loginButtonRow} >
                    <Col className={styles.loginButtonCol} sm={{ span: 7, offset: 3 }} >
                        <input className={styles.checkBox} type="checkbox" id="getMobileAppOffer" checked={props.data.getMobileAppOfferChecked} onClick={() => props.cCheckBox('mobileAppOffer')} />
                        <label className={styles.keepLogged} htmlFor="getMobileAppOffer" >
                            Sutinku gauti pranešimus mobilioje aplikacijoje
                        </label>
                    </Col>
                </Row>

                <Row sm={12} className={styles.loginButtonRow} >
                    <Col className={styles.loginButtonCol} sm={{ span: 7, offset: 3 }} >
                        <input className={styles.checkBox} type="checkbox" id="getSmsOffer" checked={props.data.getSmsOfferChecked} onClick={() => props.cCheckBox('smsOffer')} />
                        <label className={styles.keepLogged} htmlFor="getSmsOffer" >
                            Sutinku gauti pasiūlymus SMS žinutėmis
                        </label>
                    </Col>
                </Row>

            <Row sm={12} className={styles.loginButtonRow} >
                <Col className={styles.loginButtonCol} sm={{ span: 7, offset: 5 }} >
                    <button 
                        className={
                            props.data.email.valid && 
                            props.data.city.valid && 
                            props.data.gatve.valid && 
                            props.data.butoNumeris.valid &&
                            props.data.name.valid && 
                            props.data.lastName.valid &&
                            props.data.phone.valid ? styles.loginButton : styles.loginButtonDisabled} 
                        disabled={
                            props.data.email.valid && 
                            props.data.city.valid && 
                            props.data.gatve.valid && 
                            props.data.butoNumeris.valid &&
                            props.data.name.valid && 
                            props.data.lastName.valid &&
                            props.data.phone.valid ? false : true}  
                        onClick={() => props.userDataModalHandler('standard')} 
                    >
                        Atnaujinti
                    </button>
                </Col>
            </Row>
        </div>
    );
}

const mapStateToProps = state => {
    return {
        loading: state.auth.loading,
        error: state.auth.error,
        credentialError: state.auth.userCredentialsError,
        storeEmail: state.auth.accountSettings.email,
    }
}

export default connect(mapStateToProps,null)(AccountSettings);