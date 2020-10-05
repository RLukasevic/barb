import React, { Component } from 'react';
import styles from './Main.module.css';
import Header from '../../Components/Header/header';
import ItemsList from '../../Components/ItemsList/itemsList';
import Modal from '../../Components/Modal/modal';
import ModalLogReg from '../../Components/Modal/modalLogReg/modalLogReg';
import ModalChangeUserData from '../../Components/Modal/modalChangeUserData/modalChangeUserData';
import ModalChangeSuccessful from '../../Components/Modal/modalChangeUserData/modalChangeSuccessful/modalChangeSuccessful';
import Spinner from '../../Components/UI/Spinner/Spinner';
import ItemDetails from '../../Components/itemDetails/itemDetails';
import { connect } from 'react-redux';
import * as authActions from '../../Store/Actions/index';
import Favorites from '../../Components/Favorites/Favorites';
import Discounts from '../../Components/Discounts/Discounts';
import EkoIrUkis from '../../Components/EkoIrUkis/EkoIrUkis';
import New from '../../Components/New/New';
import Recipes from '../../Components/Recipes/Recipes';
import SideCart from '../../Components/UI/SideCart/SideCart';
import { Container, Row, Col } from 'react-bootstrap';
import ModalCartBuy from '../../Components/Modal/modalCartBuy/modalCartBuy';
import Orders from '../Orders/Orders';
import AccountSettings from '../../Components/AccountSettings/AccountSettings';
import SideDrawer from '../../Components/UI/SideDrawer/sideDrawer';
import { validate } from '../../shared/utility';

let calcOffset;

export class Main extends Component {
    state = { 
        signInData: {
            email: {
                value: '',
                valid: false,
                touched: false,
                validation: {
                    required: true,
                    isEmail: true,
                },
            },
            password: {
                value: '',
                valid: false,
                touched: false,
                validation: {
                    required: true,
                    minLength: 6,
                },
            },
            formIsValid: false,
            keepLoggedInChecked: false,
        },

        signUpData: {
            email: {
                value: '',
                valid: false,
                touched: false,
                validation: {
                    required: true,
                    isEmail: true,
                },
            },
            password: {
                value: '',
                valid: false,
                touched: false,
                validation: {
                    required: true,
                    minLength: 6,
                },
            },
            city: {
                value: '',
                valid: false,
                touched: false,
                validation: {
                    required: true,
                },
            },
            gatve: {
                value: '',
                valid: false,
                touched: false,
                validation: {
                    required: true,
                },
            },
            butoNumeris: {
                value: '',
                valid: false,
                touched: false,
                validation: {
                    required: true,
                },
            },
            name: {
                value: '',
                valid: false,
                touched: false,
                validation: {
                    required: true,
                },
            },
            lastName: {
                value: '',
                valid: false,
                touched: false,
                validation: {
                    required: true,
                },
            },
            phone: {
                value: '',
                valid: false,
                touched: false,
                validation: {
                    required: true,
                },
            },

            formIsValid: false,
            policyChecked: false,
            getPersonalOfferEmailChecked: false,
            getOfferEmailChecked: false,
            getMobileAppOfferChecked: false,
            getSmsOfferChecked: false
        },

        changeUserData: {
            email: null,
            newEmail: '',
            password: '',
            newPassword: '',
            city: null,
            gatve: null,
            butoNumeris: null,
            name: null,
            lastName: null,
            phone: null,

            policyChecked: false,
            getPersonalOfferEmailChecked: false,
            getOfferEmailChecked: false,
            getMobileAppOfferChecked: false,
            getSmsOfferChecked: false,
        },

        buyModalData: {
            miestas: '',
            gatve: '',
            butas:  '',
            vardas: '',
            pavarde: '',
            telefonas: '',
        },

        sideDrawer: {
            startX: 0,
            xOffset: 0,
            swiping: false,
            showing: false,
            status: false,
        },
        
        modalActiveNow: "login",
        mmActiveNow: "Prekes",
        modalPasswordMode: "password",
        modalUserDataMode: 'standard',
        extended: false,
        vertOffset: 0,
        cartUpdate: 0,
        copyOfCart: {},
    }

    componentDidMount() {
        if(!this.props.items) {
            this.props.initItems();
        } 

        window.addEventListener('scroll', this.handleScroll, true);
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
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

    handleChangeInfoChecks = (whatChecked) => {
        switch (whatChecked) {

            case 'policy':
                this.setState({...this.state, changeUserData: {...this.state.changeUserData, policyChecked: !this.state.changeUserData.policyChecked}});
                break;

            case 'personalOfferEmail':
                this.setState({...this.state, changeUserData: {...this.state.changeUserData, getPersonalOfferEmailChecked: !this.state.changeUserData.getPersonalOfferEmailChecked, getOfferEmailChecked: false, getMobileAppOfferChecked: false, getSmsOfferChecked: false, keepLoggedInChecked: false}});
                break;

            case 'offerEmail':
                this.setState({...this.state, changeUserData: {...this.state.changeUserData, getOfferEmailChecked: !this.state.changeUserData.getOfferEmailChecked, getPersonalOfferEmailChecked: true}});
                break;

            case 'mobileAppOffer':
                this.setState({...this.state, changeUserData: {...this.state.changeUserData, getMobileAppOfferChecked: !this.state.changeUserData.getMobileAppOfferChecked, getPersonalOfferEmailChecked: true}});
                break;

            case 'smsOffer':
                this.setState({...this.state, changeUserData: {...this.state.changeUserData, getSmsOfferChecked: !this.state.changeUserData.getSmsOfferChecked, getPersonalOfferEmailChecked: true}});
                break;

            case 'rememberMe':
                this.setState({...this.state, changeUserData: {...this.state.changeUserData, keepLoggedInChecked: !this.state.changeUserData.keepLoggedInChecked, getPersonalOfferEmailChecked: true}});
                break;
             
            default:
                break;
        }   
    }

    mmClickHandle = (whatClicked) => {
        switch (whatClicked) {

            case 'Prekes':
                this.setState({...this.state, mmActiveNow: 'Prekes'});
                this.props.history.push('/')
                break;

            case 'manoPrekes':
                if (this.props.token) {
                    this.setState({...this.state, mmActiveNow: 'manoPrekes'});
                    this.props.history.push('/myfavorites')
                    break;
                } else {
                    this.modalHandler();
                    break;
                }

            case 'Akcijos':
                this.setState({...this.state, mmActiveNow: 'Akcijos'});
                this.props.history.push('/discounts')
                break;

            case 'ekoIrUkis':
                this.setState({...this.state, mmActiveNow: 'ekoIrUkis'});
                this.props.history.push('/ekoirukis')
                break;

            case 'Naujienos':
                this.setState({...this.state, mmActiveNow: 'Naujienos'});
                this.props.history.push('/new')
                break;

            case 'Receptai':
                this.setState({...this.state, mmActiveNow: 'Receptai'});
                this.props.history.push('/recipes')
                break;
             
            default:
                break;
        }
    }

    mmChanger = (whatChanged) => {
        switch (whatChanged) {

            case 'Prekes':
                if (this.state.mmActiveNow !== whatChanged) {
                    this.setState({...this.state, mmActiveNow: 'Prekes'});
                }
                break;

            case 'manoPrekes':
                if (this.state.mmActiveNow !== whatChanged) {
                    this.setState({...this.state, mmActiveNow: 'manoPrekes'});
                }
                break;

            case 'Akcijos':
                if (this.state.mmActiveNow !== whatChanged) {
                    this.setState({...this.state, mmActiveNow: 'Akcijos'});
                }
                break;

            case 'ekoIrUkis':
                if (this.state.mmActiveNow !== whatChanged) {
                    this.setState({...this.state, mmActiveNow: 'ekoIrUkis'});
                }
                break;

            case 'Naujienos':
                if (this.state.mmActiveNow !== whatChanged) {
                    this.setState({...this.state, mmActiveNow: 'Naujienos'});
                }
                break;

            case 'Receptai':
                if (this.state.mmActiveNow !== whatChanged) {
                    this.setState({...this.state, mmActiveNow: 'Receptai'});
                }
                break;
             
            default:
                break;
        }
    }

    homeClick = () => {
        this.props.history.push('/')
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

    buyModalSubmitHandler = (event) => {
        event.preventDefault();

        let itemsInCart = [];

        Object.keys(this.props.cart).map(itemKey => {
            console.log(this.props.items[itemKey])
            itemsInCart.push(
                {
                    itemId: itemKey,
                    itemName: this.props.items[itemKey].name,
                    quantity: this.props.cart[itemKey],
                }
            )
        })

        this.props.initBuy(this.state.buyModalData, this.props.cartParams.cartFinalPrice, itemsInCart);
    }

    onChangeHandler = (event, mode, inputName) => {

        let newValid = validate(event.target.value, this.state[mode][inputName].validation)
        const tempForm = {...this.state[mode]}
        let formIsValid = true;
        for(let inputID in tempForm) {
            if (inputID === inputName) {
                formIsValid = newValid && formIsValid;
            } else {
                if (tempForm[inputID].valid === undefined) {
                    formIsValid = formIsValid;
                } else {
                    formIsValid = tempForm[inputID].valid && formIsValid ;
                }
            }
        }

        const newControls = {
            ...this.state[mode], 
            [inputName]: {
                ...this.state[mode][inputName],
                value: event.target.value,
                valid: newValid,
                touched: true,
            },
            formIsValid: formIsValid,
        };

        this.setState({...this.state, [mode]: newControls});
    }

    buyModalChangeHandler = (event, inputName) => {
        const newBuyModalData = {
                ...this.state.buyModalData,
                [inputName]: event.target.value,
            };
        this.setState({buyModalData: newBuyModalData});
    }

    setBuyModalData = () => {
        let temp = {
            miestas: this.props.accountSettings.city,
            gatve: this.props.accountSettings.adress,
            butas: this.props.accountSettings.appartmentHouseNumber,
            vardas: this.props.accountSettings.name,
            pavarde: this.props.accountSettings.lastName,
            telefonas: this.props.accountSettings.phone,
        };

        this.setState({...this.state, buyModalData: temp});
    }

    setChangeData = () => {
        let temp = {
            email: this.props.accountSettings.email,
            newEmail: '',
            password: '',
            newPassword: '',
            city: this.props.accountSettings.city,
            gatve: this.props.accountSettings.adress,
            butoNumeris: this.props.accountSettings.appartmentHouseNumber,
            name: this.props.accountSettings.name,
            lastName: this.props.accountSettings.lastName,
            phone: this.props.accountSettings.phone,
            policyChecked: this.props.accountSettings.policyChecked,
            getPersonalOfferEmailChecked: this.props.accountSettings.getPersonalOfferEmailChecked,
            getOfferEmailChecked: this.props.accountSettings.getOfferEmailChecked,
            getMobileAppOfferChecked: this.props.accountSettings.getMobileAppOfferChecked,
            getSmsOfferChecked: this.props.accountSettings.getSmsOfferChecked
        };

        this.setState({...this.state, changeUserData: temp});
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
                    this.props.addFav(itemId, newFav)
                } else {
                    this.modalHandler('login');
                }
                break;

            case 'DEL':
                if (this.props.token) {
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

    buyModalHandler = () => {
        this.props.buyModalToggle();
    }

    userDataModalHandler = (mode) => {
        switch (mode) {
            case 'standard':
                this.setState({...this.state, modalUserDataMode: 'standard'});
                this.props.userDataModalToggle();
                break;
            case 'emailChange':
                this.setState({...this.state, modalUserDataMode: 'emailChange'});
                this.props.userDataModalToggle();
                break;
            case 'passwordChange':
                this.setState({...this.state, modalUserDataMode: 'passwordChange'});
                this.props.userDataModalToggle();
                break;
            default:
                this.setState({...this.state, changeUserData: {...this.state.changeUserData, email: '', password: '', newPassword: ''}});
                this.props.userDataModalToggle();           // Used when clicking BackDrop
                break;
        }
    }

    userDataChangeSubmit = (mode,event) => {
        let temp;
        switch (mode) {
            case 'standard':
                temp = {
                    email: this.state.changeUserData.email,
                    password: this.state.changeUserData.password,
                    city: this.state.changeUserData.city,
                    gatve: this.state.changeUserData.gatve,
                    butoNumeris: this.state.changeUserData.butoNumeris,
                    name: this.state.changeUserData.name,
                    lastName: this.state.changeUserData.lastName,
                    phone: this.state.changeUserData.phone,
        
                    policyChecked: this.state.changeUserData.policyChecked,
                    getPersonalOfferEmailChecked: this.state.changeUserData.getPersonalOfferEmailChecked,
                    getOfferEmailChecked: this.state.changeUserData.getOfferEmailChecked,
                    getMobileAppOfferChecked: this.state.changeUserData.getMobileAppOfferChecked,
                    getSmsOfferChecked: this.state.changeUserData.getSmsOfferChecked,
                }

                this.props.userDataChangeStandard(temp);
                break;
            case 'emailChange':
                temp = {
                    email: this.state.changeUserData.email,
                    newEmail: this.state.changeUserData.newEmail,
                    password: this.state.changeUserData.password,
                }

                this.props.userDataChangeEmail(temp);
                break;
            case 'passwordChange':
                temp = {
                    email: this.state.changeUserData.email,
                    password: this.state.changeUserData.password,
                    newPassword: this.state.changeUserData.newPassword,
                }

                this.props.userDataChangePassword(temp);
                break;
            default:
                break;
        }
    }

    closeSuccModal = () => {
        this.setState({
            ...this.state, 
            changeUserData: {
                ...this.state.changeUserData, 
                newEmail: '',
                password: '',
                newPassword: '',
            },
        });
        this.props.successfulChangeClose();
    }

    logoutHandler = () => {
        let temp = {
            email: '',
            password: '',
            newPassword: '',
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
            getSmsOfferChecked: false,
        }
        this.setState({...this.state, favorited: ['null']})
        this.setState({...this.state, changeUserData: temp});
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

    handleScroll = () => {
        let vertOffset = window.pageYOffset;

        this.setState({
            ...this.state,
            vertOffset: vertOffset,
        });
    }

    addToCart = (id,quantity) => {
        let cartFinalPrice =  Number(this.props.cartParams.cartFinalPrice);
        let cartDiscountTotal = Number(this.props.cartParams.cartDiscountTotal);
        let cartFinalPriceNoDiscount = Number(this.props.cartParams.cartFinalPriceNoDiscount);
        let newCart = new Object(this.props.cart);

        newCart = {...newCart, [id]: quantity};
        cartFinalPrice += Number(this.props.items[id].actualPrice * quantity);
        cartDiscountTotal += Number((this.props.items[id].oldPrice - this.props.items[id].actualPrice) * quantity);
        cartFinalPriceNoDiscount += Number(this.props.items[id].oldPrice * quantity);

        this.props.updateCart(newCart, cartFinalPrice.toFixed(2), cartDiscountTotal.toFixed(2), cartFinalPriceNoDiscount.toFixed(2))
        this.setState({...this.state, cartUpdate: this.state.cartUpdate++});
    }

    deleteFromCart = (id) => {
        let cartFinalPrice =  Number(this.props.cartParams.cartFinalPrice);
        let cartDiscountTotal = Number(this.props.cartParams.cartDiscountTotal);
        let cartFinalPriceNoDiscount = Number(this.props.cartParams.cartFinalPriceNoDiscount);
        let newCart = new Object(this.props.cart);

        cartFinalPrice -= Number(this.props.items[id].actualPrice * this.props.cart[id]);
        cartDiscountTotal -= Number((this.props.items[id].oldPrice - this.props.items[id].actualPrice) * this.props.cart[id]);
        cartFinalPriceNoDiscount -= Number(this.props.items[id].oldPrice * this.props.cart[id]);
        delete newCart[id];

        this.props.updateCart(newCart, cartFinalPrice.toFixed(2), cartDiscountTotal.toFixed(2), cartFinalPriceNoDiscount.toFixed(2));
        this.setState({...this.state, cartUpdate: this.state.cartUpdate++});
    }

    listInCartPlusButton = (id) => {
        let cartFinalPrice =  Number(this.props.cartParams.cartFinalPrice);
        let cartDiscountTotal = Number(this.props.cartParams.cartDiscountTotal);
        let cartFinalPriceNoDiscount = Number(this.props.cartParams.cartFinalPriceNoDiscount);
        let newCart = new Object(this.props.cart);

        newCart[id] = newCart[id]+1
        cartFinalPrice += Number(this.props.items[id].actualPrice);
        cartDiscountTotal += Number((this.props.items[id].oldPrice - this.props.items[id].actualPrice));
        cartFinalPriceNoDiscount += Number(this.props.items[id].oldPrice);

        this.props.updateCart(newCart, cartFinalPrice.toFixed(2), cartDiscountTotal.toFixed(2), cartFinalPriceNoDiscount.toFixed(2));
        this.setState({...this.state, cartUpdate: this.state.cartUpdate++});
        this.setState({...this.state, cartUpdate: this.state.cartUpdate++});
    }

    listInCartMinusButton = (id) => {
        let newCart = new Object(this.props.cart);
        if (newCart[id] == 1) {
            this.deleteFromCart(id);
            this.setState({...this.state, cartUpdate: this.state.cartUpdate++});
        } else {
            let cartFinalPrice =  Number(this.props.cartParams.cartFinalPrice);
            let cartDiscountTotal = Number(this.props.cartParams.cartDiscountTotal);
            let cartFinalPriceNoDiscount = Number(this.props.cartParams.cartFinalPriceNoDiscount);

            newCart[id] = newCart[id]-1
            cartFinalPrice -= Number(this.props.items[id].actualPrice);
            cartDiscountTotal -= Number((this.props.items[id].oldPrice - this.props.items[id].actualPrice));
            cartFinalPriceNoDiscount -= Number(this.props.items[id].oldPrice);

            this.props.updateCart(newCart, cartFinalPrice.toFixed(2), cartDiscountTotal.toFixed(2), cartFinalPriceNoDiscount.toFixed(2));
            this.setState({...this.state, cartUpdate: this.state.cartUpdate++});
        }
        this.setState({...this.state, cartUpdate: this.state.cartUpdate++});
    }

    getContent = () => {

        switch (this.props.pageMode) {

            case 'details':
                return (
                    <ItemDetails 
                        token={this.props.token} 
                        addToCartClick={this.addToCart} 
                        cart={this.props.cart} 
                        cClick={this.modalHandler} 
                        favorited={this.props.favorited} 
                        favClick={(itemId, mode) => this.favClickHandler(itemId, mode)} 
                        items={this.props.items}  
                        listInCartPlusButton={(id) => this.listInCartPlusButton(id)}
                        listInCartMinusButton={(id) => this.listInCartMinusButton(id)}
                    />)

            case 'myfavorites':
                return (<Favorites 
                            token={this.props.token} 
                            addToCartClick={this.addToCart} 
                            cart={this.props.cart} 
                            history={this.props.history} 
                            cClick={this.modalHandler} 
                            favorited={this.props.favorited} 
                            favClick={(itemId, mode) => this.favClickHandler(itemId, mode)} 
                            items={this.props.items} 
                            orders={this.props.orders}
                            mmChanger={this.mmChanger}
                            listInCartPlusButton={(id) => this.listInCartPlusButton(id)}
                            listInCartMinusButton={(id) => this.listInCartMinusButton(id)}
                            authModalHandler={() => this.modalHandler()}
                        />)

            case 'discounts':
                return <Discounts 
                            mmChanger={this.mmChanger}
                        />

            case 'ekoirukis':
                return <EkoIrUkis 
                            mmChanger={this.mmChanger}
                        />

            case 'new':
                return <New 
                            mmChanger={this.mmChanger}
                        />

            case 'recipes':
                return <Recipes 
                            mmChanger={this.mmChanger}
                        />

            case 'history':
                return <Orders
                            mmChanger={this.mmChanger}
                        />

            case 'account': 
                return <AccountSettings
                            cCheckBox={this.handleChangeInfoChecks}
                            data={this.state.changeUserData}
                            presetData={this.setChangeData}
                            userDataModalHandler={this.userDataModalHandler}
                            mmChanger={this.mmChanger}
                            changeHandler={this.onChangeHandler}
                            loading={this.props.loading}
                            handleModalButtonPress={this.handleModalButtonPress} 
                            handleModalButtonRelease={this.handleModalButtonRelease} 
                            modalPasswordMode={this.state.modalPasswordMode} 
                        />

            default:
                return (
                    <ItemsList 
                        token={this.props.token} 
                        addToCartClick={this.addToCart} 
                        cart={this.props.cart} 
                        history={this.props.history} 
                        modalShow={this.props.modalShow} 
                        cClick={this.modalHandler} 
                        favorited={this.props.favorited} 
                        favClick={(itemId, mode) => this.favClickHandler(itemId, mode)} 
                        items={this.props.items} 
                        listInCartPlusButton={(id) => this.listInCartPlusButton(id)}
                        listInCartMinusButton={(id) => this.listInCartMinusButton(id)}
                    />)
        }
    }

    render() {
        let content = this.getContent();

        return (
            <div className={styles.wholeWrap} >
                <SideDrawer 
                    token={this.props.token} 
                    authModalHandler={this.modalHandler}
                    logoutClicked={this.logoutHandler}
                    history={this.props.history}
                >
                <Modal show={this.props.modalShow} cBackDrop={this.modalHandler} modalActiveNow={this.state.modalActiveNow} extended={this.state.extended} >
                    <ModalLogReg 
                    loginData={this.state.signInData}
                    registerData={this.state.signUpData}
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
                    error={this.props.error}
                    />
                </Modal>

                <Modal show={this.props.buyModalShow} cBackDrop={this.buyModalHandler}>
                    <ModalCartBuy 
                        loading={this.props.loading}
                        changeHandler={this.buyModalChangeHandler} 
                        presetData={this.setBuyModalData}
                        cSubmit={this.buyModalSubmitHandler}
                    />
                </Modal>

                <ModalChangeSuccessful 
                    show={this.props.successfulChangeShow}
                    cBackDrop={this.closeSuccModal}
                />

                <ModalChangeUserData
                    show={this.props.userDataModalShow}
                    cBackDrop={this.userDataModalHandler}
                    handleModalButtonPress={this.handleModalButtonPress} 
                    handleModalButtonRelease={this.handleModalButtonRelease}
                    data={this.state.changeUserData}
                    mode={this.state.modalUserDataMode} 
                    modalPasswordMode={this.state.modalPasswordMode} 
                    loading={this.props.loading}
                    changeHandler={this.onChangeHandler} 
                    cSubmit={this.userDataChangeSubmit}
                />

                <Container  >
                    <Row >
                        <Col xl={10}>
                            <Header homeClick={this.homeClick} mmClick={(whatClicked) => this.mmClickHandle(whatClicked)} mmActiveNow={this.state.mmActiveNow} logoutClick={this.logoutHandler} lClick={this.modalHandler} isLoggedIn={this.props.token} displayName={this.props.accountSettings.name + " " + this.props.accountSettings.lastName} />

                            {this.props.items ? <div>{content}</div> : <Spinner/>}  

                        </Col>
                        <Col xl={2}>
                            {this.props.items && this.props.cart && this.props.token ?
                                <SideCart 
                                    vertOffset={this.state.vertOffset} 
                                    update={this.state.cartUpdate}
                                    cart={this.props.cart} 
                                    items={this.props.items}
                                    history={this.props.history}
                                    listInCartPlusButton={(id) => this.listInCartPlusButton(id)}
                                    listInCartMinusButton={(id) => this.listInCartMinusButton(id)}
                                    xClick={(id) => this.deleteFromCart(id)}
                                    buyClick={() => this.buyModalHandler()}
                                /> :
                                null}
                        </Col>
                    </Row>
                </Container>
            </SideDrawer>                        
            </div>
        );

    }
}

const mapStateToProps = state => {
    return {
        loading: state.auth.loading,
        error: state.auth.error,
        modalShow: state.auth.modalShow,
        buyModalShow: state.home.buyModalShow,
        userDataModalShow: state.auth.userDataModalShow,
        successfulChangeShow: state.auth.successfulChangeShow,
        token: state.auth.authData.idToken,
        items: state.home.items,
        favorited: state.home.favorited,
        accountSettings: state.auth.accountSettings,
        cart: state.home.cart,
        orders: state.home.orders,
        cartParams: state.home.cartParams,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        auth: (data,mode) => dispatch(authActions.auth(data,mode)),
        authClearError: () => dispatch(authActions.authClearError()),
        authLogout: () => dispatch(authActions.authLogout()),
        modalToggle: () => dispatch(authActions.modalToggle()),
        buyModalToggle: () => dispatch(authActions.buyModalToggle()),
        initItems: () => dispatch(authActions.initItems()),
        initBuy: (data,price,cart) => dispatch(authActions.initBuy(data,price,cart)),
        addFav: (itemId, favorited) => dispatch(authActions.addFav(itemId, favorited)),
        delFav: (itemId, favorited) => dispatch(authActions.delFav(itemId, favorited)),
        resetFav: () => dispatch(authActions.resetFav()),
        updateCart: (newCart, cartFinalPrice, cartDiscountTotal, cartFinalPriceNoDiscount) => dispatch(authActions.updateCart(newCart, cartFinalPrice, cartDiscountTotal, cartFinalPriceNoDiscount)),
        userDataModalToggle: () => dispatch(authActions.userDataModalToggle()),
        userDataChangeStandard: (data) => dispatch(authActions.userDataChangeStandard(data)),
        userDataChangeEmail: (data) => dispatch(authActions.userDataChangeEmail(data)),
        userDataChangePassword: (data) => dispatch(authActions.userDataChangePassword(data)),
        successfulChangeClose: () => dispatch(authActions.successfulChangeClose()),
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Main);