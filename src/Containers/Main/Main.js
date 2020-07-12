import React, { Component } from 'react';
import styles from './Main.module.css';
import Header from '../../Components/Header/header';
import ItemsList from '../../Components/ItemsList/itemsList';
import Modal from '../../Components/Modal/modal';
import ModalLogReg from '../../Components/Modal/modalLogReg/modalLogReg';
import { connect } from 'react-redux';
import * as authActions from '../../Store/Actions/index';


export class Main extends Component {
    state = { 
        signInData: {
            email: '',
            password: '',
            keepLoggedInChecked: false,
        },

        signUpData: {
            email: '',
            password: '',
            city: '',
            gatve: '',
            butoNumeris: '',
            name: '',
            lastName: '',
            phone: '',

            policyChecked: false,
            getPersonalOfferEmailChecked: false,
            getOfferEmailChecked: false,
            getMobileAppOfferChecked: false,
            getSmsOfferChecked: false
        },

        modalActiveNow: "login",
        modalPasswordMode: "password",
        extended: false,
    }

    handleChecks = (whatChecked) => {
        switch (whatChecked) {

            case 'policy':
                this.setState({...this.state, signUpData: {...this.state.signUpData, policyChecked: !this.state.signUpData.policyChecked}});
                break;

            case 'personalOfferEmail':
                this.setState({...this.state, extended: !this.state.extended, signUpData: {...this.state.signUpData, getPersonalOfferEmailChecked: !this.state.signUpData.getPersonalOfferEmailChecked, getOfferEmailChecked: false, getMobileAppOfferChecked: false, getSmsOfferChecked: false, keepLoggedInChecked: false}});
                break;

            case 'offerEmail':
                this.setState({...this.state, signUpData: {...this.state.signUpData, getOfferEmailChecked: !this.state.signUpData.getOfferEmailChecked}});
                break;

            case 'mobileAppOffer':
                this.setState({...this.state, signUpData: {...this.state.signUpData, getMobileAppOfferChecked: !this.state.signUpData.getMobileAppOfferChecked}});
                break;

            case 'smsOffer':
                this.setState({...this.state, signUpData: {...this.state.signUpData, getSmsOfferChecked: !this.state.signUpData.getSmsOfferChecked}});
                break;

            case 'rememberMe':
                this.setState({...this.state, signInData: {...this.state.signInData, keepLoggedInChecked: !this.state.signInData.keepLoggedInChecked}});
                break;
             
            default:
                break;
        }   
    }

    SubmitHandler = (event) => {
        event.preventDefault();
        if (this.state.modalActiveNow === 'register') {
            this.props.auth(this.state.signUpData, this.state.modalActiveNow);
        } else {
            this.props.auth(this.state.signInData, this.state.modalActiveNow);
        }
    }

    onChangeHandler = (event, mode, inputName) => {
        const newControls = {
            ...this.state[mode], 
            [inputName]: event.target.value
        };
        this.setState({[mode]: newControls});
    }

    handleModalButtonPress = () => {
        this.setState({...this.state, modalPasswordMode: "text"});
    }

    handleModalButtonRelease = () => {
        this.setState({...this.state, modalPasswordMode: "password"});
    }

    modalHandler = (mode) => {
        if (mode === 'register') {
            this.setState({...this.state, modalActiveNow: 'register'});
            this.props.modalToggle();
        } else {
            this.setState({...this.state, modalActiveNow: 'login'});
            this.props.modalToggle();
        }
    }

    logoutHandler = () => {
        this.props.authLogout();
    }

    modalActiveToggle = (whatClicked) => {
        switch (whatClicked) {
            case 'login':
                if (this.state.modalActiveNow === 'login') {
                    break;
                } else {
                    this.setState({...this.state, modalActiveNow: "login"});
                    break;
                }
            
            case 'register':
                if (this.state.modalActiveNow === 'register') {
                    break;
                } else {
                    this.setState({...this.state, modalActiveNow: "register"});
                    break;
                }

            default:
                break;
        }
    }

    render() {

        return (
            <div className={styles.wholeWrap} >
                <Modal show={this.props.modalShow} cBackDrop={this.modalHandler} modalActiveNow={this.state.modalActiveNow} extended={this.state.extended} >
                    <ModalLogReg 
                    cBackDrop={this.modalHandler} 
                    cHeaderOption={this.modalActiveToggle} 
                    activeNow={this.state.modalActiveNow} 
                    handleModalButtonPress={this.handleModalButtonPress} 
                    handleModalButtonRelease={this.handleModalButtonRelease} 
                    modalPasswordMode={this.state.modalPasswordMode} 
                    cCheckBox={this.handleChecks}
                    extended={this.state.extended}
                    keepLoggedInChecked={this.state.signInData.keepLoggedInChecked}
                    policyChecked={this.state.signUpData.policyChecked}
                    getPersonalOfferEmailChecked={this.state.signUpData.getPersonalOfferEmailChecked}
                    getOfferEmailChecked={this.state.signUpData.getOfferEmailChecked}
                    getMobileAppOfferChecked={this.state.signUpData.getMobileAppOfferChecked}
                    getSmsOfferChecked={this.state.signUpData.getSmsOfferChecked}
                    cSubmit={this.SubmitHandler}
                    changeHandler={this.onChangeHandler}
                    loading={this.props.loading}
                    />
                </Modal>

                <Header logoutClick={this.logoutHandler} lClick={this.modalHandler} isLoggedIn={this.props.loggedIn} />
                <ItemsList modalShow={this.props.modalShow} cClick={this.modalHandler}  />
            </div>
        );

    }
}

const mapStateToProps = state => {
    return {
        loggedIn: state.auth.authData.idToken,
        loading: state.auth.loading,
        modalShow: state.auth.modalShow
    }
}

const mapDispatchToProps = dispatch => {
    return {
        auth: (data,mode) => dispatch(authActions.auth(data,mode)),
        authClearError: () => dispatch(authActions.authClearError()),
        authLogout: () => dispatch(authActions.authLogout()),
        modalToggle: () => dispatch(authActions.modalToggle()),
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Main);