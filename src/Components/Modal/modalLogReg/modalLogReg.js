import React from 'react';
import ModalLoginModule from './modalLoginModule/modalLoginModule';
import ModalRegisterModule from './modalRegisterModule/modalRegisterModule';
import Spinner from '../../UI/Spinner/Spinner';
import styles from './modalLogReg.module.css';


const modalLogReg = props => {
    return(
        <div className={styles.wholeModalWrap} >
            <div className={styles.headWrap}>
                <button className={styles.exitButton} onClick={props.cBackDrop} >X</button>
                <div className={styles.head}>
                    <label className={props.activeNow === "login" ? styles.headOptionActive : styles.headOption} onClick={() => props.cHeaderOption('login')} >Prisijungti</label>
                    <label className={props.activeNow === "register" ? styles.headOptionActive : styles.headOption} onClick={() => props.cHeaderOption('register')} >Registruotis</label>
                </div>
            </div>
            <div className={styles.content}>
                {props.loading ? <Spinner /> :
                (props.activeNow === 'login' ? 
                    <ModalLoginModule 
                    loginData={props.loginData}
                    error={props.error}
                    handleModalButtonPress={props.handleModalButtonPress} 
                    handleModalButtonRelease={props.handleModalButtonRelease} 
                    modalPasswordMode={props.modalPasswordMode}
                    cCheckBox={props.cCheckBox}
                    keepLoggedInChecked={props.keepLoggedInChecked}
                    cSubmit={props.cSubmit}
                    changeHandler={props.changeHandler} /> : 

                    <ModalRegisterModule 
                    registerData={props.registerData}
                    error={props.error}
                    handleModalButtonPress={props.handleModalButtonPress} 
                    handleModalButtonRelease={props.handleModalButtonRelease} 
                    modalPasswordMode={props.modalPasswordMode} 
                    extended={props.extended}
                    cCheckBox={props.cCheckBox}
                    policyChecked={props.policyChecked}
                    getPersonalOfferEmailChecked={props.getPersonalOfferEmailChecked}
                    getOfferEmailChecked={props.getOfferEmailChecked}
                    getMobileAppOfferChecked={props.getMobileAppOfferChecked}
                    getSmsOfferChecked={props.getSmsOfferChecked}
                    cSubmit={props.cSubmit}
                    changeHandler={props.changeHandler} />)}
            </div>
        </div>
    );
}

export default modalLogReg;
