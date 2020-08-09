import React, { Component } from 'react';
import styles from './Main.module.css';
import Header from '../../Components/Header/header';
import ItemsList from '../../Components/ItemsList/itemsList';
import Modal from '../../Components/Modal/modal';
import ModalLogReg from '../../Components/Modal/modalLogReg/modalLogReg';
import Spinner from '../../Components/UI/Spinner/Spinner';
import ItemDetails from '../../Components/itemDetails/itemDetails';
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

        favorited: ['null'],
        modalActiveNow: "login",
        mmActiveNow: "Prekes",
        modalPasswordMode: "password",
        extended: false,
    }

    componentDidMount() {
        if(!this.props.items) {
            this.props.initItems();
        }

        if(this.props.favorited) {
            setTimeout(() => {
                this.setState({...this.state, favorited: new Array(...this.props.favorited)}) // increasing ui responsibility by using local state as well as store state
              }, 800)
        }
    }

    resetView() {
        setTimeout(() => {
            this.setState({...this.state, favorited: new Array(...this.props.favorited)}) // increasing ui responsibility by using local state as well as store state
            this.forceUpdate();
          }, 800)
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

    mmClickHandle = (whatClicked) => {
        switch (whatClicked) {

            case 'Prekes':
                this.setState({...this.state, mmActiveNow: 'Prekes'});
                break;

            case 'manoPrekes':
                this.setState({...this.state, mmActiveNow: 'manoPrekes'});
                break;

            case 'Akcijos':
                this.setState({...this.state, mmActiveNow: 'Akcijos'});
                break;

            case 'ekoIrUkis':
                this.setState({...this.state, mmActiveNow: 'ekoIrUkis'});
                break;

            case 'Naujienos':
                this.setState({...this.state, mmActiveNow: 'Naujienos'});
                break;

            case 'Receptai':
                this.setState({...this.state, mmActiveNow: 'Receptai'});
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
            this.resetView();
        }
    }

    onChangeHandler = (event, mode, inputName) => {
        const newControls = {
            ...this.state[mode], 
            [inputName]: event.target.value
        };
        this.setState({[mode]: newControls});
    }

    favClickHandler = (itemId, mode) => {

        let newFav;

        if (this.props.favorited == null){
            newFav = [];
        } else {
            newFav = new Array(...this.props.favorited)
        }

        switch(mode) {
            case 'ADD':
                if (this.props.token) {
                    let newStateFav = new Array(...this.state.favorited);
                    newStateFav.push(itemId);
                    this.setState({...this.state, favorited: new Array(...newStateFav)})
                    this.props.addFav(itemId, newFav)
                } else {
                    this.modalHandler('login');
                }
                break;

            case 'DEL':
                if (this.props.token) {
                    let newStateArr = new Array(...this.state.favorited);

                    if (newStateArr.length === 1) {       
                        newStateArr[0] = 'null';
                    } else {
                        let index = newStateArr.indexOf(itemId);
                        newStateArr.splice(index,1);
                    }
                    this.setState({...this.state, favorited: new Array(...newStateArr)})
                    this.props.delFav(itemId, newFav)
                } else {
                    this.modalHandler('login');
                }
                break;

            default:
                break;
        }
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
        this.setState({...this.state, favorited: 'null'})
        this.props.resetFav();
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

                <Header mmClick={(whatClicked) => this.mmClickHandle(whatClicked)} mmActiveNow={this.state.mmActiveNow} logoutClick={this.logoutHandler} lClick={this.modalHandler} isLoggedIn={this.props.loggedIn} displayName={this.props.accountSettings.name + " " + this.props.accountSettings.lastName} />

                {this.props.details && this.props.items ?
                <ItemDetails modalShow={this.props.modalShow} cClick={this.modalHandler} favorited={this.state.favorited} favClick={(itemId, mode) => this.favClickHandler(itemId, mode)} items={this.props.items}  /> : 
                this.props.items ? (<div>
                <ItemsList history={this.props.history} modalShow={this.props.modalShow} cClick={this.modalHandler} favorited={this.state.favorited} favClick={(itemId, mode) => this.favClickHandler(itemId, mode)} items={this.props.items} /></div>) : <Spinner/>}
            </div>
        );

    }
}

const mapStateToProps = state => {
    return {
        loggedIn: state.auth.authData.idToken,
        loading: state.auth.loading,
        modalShow: state.auth.modalShow,
        token: state.auth.authData.idToken,
        items: state.home.items,
        favorited: state.home.favorited,
        accountSettings: state.auth.accountSettings,
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
        resetFav: () => dispatch (authActions.resetFav()),
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Main);