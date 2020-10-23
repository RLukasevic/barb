import React from 'react';
import styles from './modalLoginModule.module.css';
import { Row, Col } from 'react-bootstrap';


const modalLoginModule = props => {

    return (
        <form style={{width: "100%"}} >
            {props.loginData.email.touched || props.loginData.password.touched ? null :
                <Row xs={12} >
                    <Col xs={8} >
                        <label className={styles.greetingLine} >Sveiki, aciu, kad vel pas mus uzsukote!</label>
                    </Col>
                </Row>
            }

            {props.error ? 
                <Row xs={12}>
                    <Col xs={8}>
                        {props.error === "EMAIL_NOT_FOUND" ?
                            <label className={styles.error}>Paskyra su jūsų e-mail`u neegzistuoja</label>
                            :
                            <label className={styles.error}>Neteisingas slaptažodis</label>
                        }
                    </Col>
                </Row>

                : null
            }

            {!props.loginData.email.valid && props.loginData.email.touched ? 
                <Row className={styles.notValid}>El. Paštas turi atitikti pavyzdį *****@***.**</Row> : null
            }

            <Row xs={12} className={styles.inputController}  >
                <Col xs={4} className={styles.inputLabel} >
                    <label htmlFor="email">El. Pastas:</label>
                </Col>

                <Col xs={8} className={styles.emailInputCol} >
                    <input 
                        onChange={(event) => props.changeHandler(event, 'signInData' , 'email')} 
                        onClick={(event) => props.changeHandler(event, 'signInData', 'email')}
                        className={!props.loginData.email.valid && props.loginData.email.touched ? styles.emailInputNotValid : styles.emailInput} 
                        type="email" 
                        name="email" 
                        id="email" 
                        placeholder="vardenis@pastas.lt" 
                    />
                </Col>
            </Row>

            {!props.loginData.password.valid && props.loginData.password.touched ? 
                <Row className={styles.notValid}>Slaptažodis turi būti ne trumpesnis nei 6 simboliai</Row> : null
            }

            <Row xs={12} className={styles.inputController}  >
                <Col xs={4} className={styles.inputLabel} >
                    <label htmlFor="pwd">Slaptazodis</label>
                </Col>

                <Col xs={8} className={styles.passwordInputCol} >
                    <input 
                        onChange={(event) => props.changeHandler(event, 'signInData' , 'password')} 
                        onClick={(event) => props.changeHandler(event, 'signInData', 'password')}
                        className={!props.loginData.password.valid && props.loginData.password.touched ? styles.passwordInputNotValid : styles.passwordInput} 
                        type={props.modalPasswordMode} 
                        id="pwd" 
                        name="pwd" 
                        placeholder="*******" 
                    />
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

            <Row xs={12} >
                <Col className={styles.loginButtonCol} xs={{ span: 8, offset: 4 }} >
                    <input className={styles.checkBox} type="checkbox" id="rememberMe" checked={props.keepLoggedInChecked} onClick={() => props.cCheckBox('rememberMe')} />
                    <label className={styles.keepLogged} htmlFor="rememberMe"  >
                        Likite prisiregistrave
                    </label>
                </Col>
            </Row>

            <Row xs={12} >
                <Col className={styles.loginButtonCol} xs={{ span: 8, offset: 4 }} >
                    <button 
                        className={props.loginData.formIsValid ? styles.loginButton : styles.loginButtonDisabled} 
                        onClick={props.cSubmit} 
                        disabled={props.loginData.formIsValid ? false : true}  
                    >
                        Prisijungti
                    </button>
                </Col>
            </Row>

            <Row xs={12} >
                <Col onClick={props.cSubmit} className={styles.loginButtonCol} xs={{ span: 8, offset: 4 }} >
                    <a href="/" className={styles.passwordRecovery} >Priminti slaptazodi</a>
                </Col>
            </Row>

        </form>
    );
}

export default modalLoginModule;