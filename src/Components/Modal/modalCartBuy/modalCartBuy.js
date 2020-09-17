import React from 'react';
import Spinner from '../../UI/Spinner/Spinner';
import styles from './modalCartBuy.module.css';
import { connect } from 'react-redux';
import { Row, Col } from 'react-bootstrap';
import * as authActions from '../../../Store/Actions/index';


const modalCartBuy = props => {
    return(
        <div className={styles.wholeModalWrap} style={props.extended ? {"height": "724px"} : null}>
            <div className={styles.headWrap}>
                <button className={styles.exitButton} onClick={props.cBackDrop} >X</button>
                <div className={styles.head}>
                    <label className={styles.headOptionActive} onClick={() => props.cHeaderOption('login')} >Duomenu patikrinimas</label>
                </div>
            </div>
            <div className={styles.content}>
                <form onSubmit={props.cSubmit}  >

                    <Row sm={12} className={styles.inputController}  >
                        <Col sm={5} className={styles.inputLabel} >
                            <label htmlFor="miestas">Miestas:</label>
                        </Col>

                        <Col sm={7} className={styles.emailInputCol} >
                            <input onChange={(event) => props.changeHandler(event, 'signUpData' , 'city')} className={styles.emailInput} defaultValue={props.accountSettings.city} type="text" name="miestas" id="miestas" placeholder="Vilniaus miestas / rajonas" />
                        </Col>
                    </Row>

                    <Row sm={12} className={styles.inputController}  >
                        <Col sm={5} className={styles.inputLabel} >
                            <label htmlFor="gatve">Gatve ir namo numeris</label>
                        </Col>

                        <Col sm={7} className={styles.emailInputCol} >
                            <input onChange={(event) => props.changeHandler(event, 'signUpData' , 'gatve')} className={styles.emailInput} defaultValue={props.accountSettings.adress} type="text" name="gatve" id="gatve" placeholder="Pradekite vesti ir issirinkite is saraso" />
                        </Col>
                    </Row>

                    <Row sm={12} className={styles.inputController}  >
                        <Col sm={5} className={styles.inputLabel} >
                            <label htmlFor="butas">Buto numeris</label>
                        </Col>

                        <Col sm={7} className={styles.emailInputCol} >
                            <input onChange={(event) => props.changeHandler(event, 'signUpData' , 'butoNumeris')} className={styles.emailInput} defaultValue={props.accountSettings.appartmentHouseNumber} type="text" name="butas" id="butas" placeholder="00" />
                        </Col>
                    </Row>

                    <Row sm={12} className={styles.inputController}  >
                        <Col sm={5} className={styles.inputLabel} >
                            <label htmlFor="vardas">Vardas</label>
                        </Col>

                        <Col sm={7} className={styles.emailInputCol} >
                            <input onChange={(event) => props.changeHandler(event, 'signUpData' , 'name')} className={styles.emailInput} defaultValue={props.accountSettings.name} type="text" name="vardas" id="vardas" placeholder="Vardenis" />
                        </Col>
                    </Row>

                    <Row sm={12} className={styles.inputController}  >
                        <Col sm={5} className={styles.inputLabel} >
                            <label htmlFor="pavarde">Pavarde</label>
                        </Col>

                        <Col sm={7} className={styles.emailInputCol} >
                            <input onChange={(event) => props.changeHandler(event, 'signUpData' , 'lastName')} className={styles.emailInput} defaultValue={props.accountSettings.lastName} type="text" name="pavarde" id="pavarde" placeholder="Pavardenis" />
                        </Col>
                    </Row>

                    <Row sm={12} className={styles.inputController}  >
                        <Col sm={5} className={styles.inputLabel} >
                            <label htmlFor="phone">Telefonas</label>
                        </Col>

                        <Col sm={7} className={styles.emailInputCol} >
                            <input onChange={(event) => props.changeHandler(event, 'signUpData' , 'phone')} className={styles.emailInput} defaultValue={props.accountSettings.phone} type="text" name="phone" id="phone" placeholder="+37060000000" />
                        </Col>
                    </Row>

                    <Row sm={12} className={styles.inputController}  >
                        <Col sm={5} className={styles.inputLabel} >
                            <label htmlFor="phone" className={styles.totalPriceSumaLabel}>Suma:</label>
                        </Col>

                        <Col sm={7} className={styles.emailInputCol} >
                            <label className={styles.totalPriceLabel}>€ {props.cartParams.cartFinalPrice.toString().replace('.',',')}</label>
                        </Col>
                    </Row>

                    <Row sm={12} >
                        <Col className={styles.loginButtonCol} sm={{ span: 7, offset: 5 }} >
                            <button className={styles.loginButton}>Pirkti</button>
                        </Col>
                    </Row>

                </form>
            </div>
        </div>
    );
}

const mapStateToProps = state => {
    return {
        loading: state.auth.loading,
        modalShow: state.auth.modalShow,
        token: state.auth.authData.idToken,
        items: state.home.items,
        accountSettings: state.auth.accountSettings,
        cart: state.home.cart,
        cartParams: state.home.cartParams,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        auth: (data,mode) => dispatch(authActions.auth(data,mode)),
        authClearError: () => dispatch(authActions.authClearError()),
        authLogout: () => dispatch(authActions.authLogout()),
        modalToggle: () => dispatch(authActions.modalToggle()),
        initItems: () => dispatch(authActions.initItems()),
        addFav: (itemId, favorited) => dispatch(authActions.addFav(itemId, favorited)),
        delFav: (itemId, favorited) => dispatch(authActions.delFav(itemId, favorited)),
        resetFav: () => dispatch(authActions.resetFav()),
        updateCart: (newCart) => dispatch(authActions.updateCart(newCart)),
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(modalCartBuy);