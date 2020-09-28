import React from 'react';
import styles from './modalChangeUserData.module.css';
import BackDrop from '../../UI/backDrop';
import { Row, Col } from 'react-bootstrap';


const modalChangeUserData = props => {

    let content;

    if (props.mode === 'standard') {
    content =   <div>
                    <Row sm={12} className={styles.inputController}  >
                        <Col sm={5} className={styles.inputLabel} style={{"margin-top": "40px"}} >
                            <label htmlFor="pwd">Slaptazodis</label>
                        </Col>

                        <Col sm={7} className={styles.passwordInputCol} style={{"margin-top": "40px"}} >
                            <input onChange={(event) => props.changeHandler(event, 'changeUserData' , 'password')} value={props.data.password} className={styles.passwordInput} type={props.modalPasswordMode} id="pwd" name="pwd" placeholder="*******" />
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

                    <Row sm={12} >
                        <Col className={styles.loginButtonCol} sm={{ span: 7, offset: 5 }} >
                            <button className={styles.loginButton} onClick={() => props.cSubmit('standard')} >Testi</button>
                        </Col>
                    </Row>

                </div>
    }

    if (props.mode === 'emailChange') {
    content =   <div >
                    <Row sm={12} className={styles.inputController}  >
                        <Col sm={5} className={styles.inputLabel} >
                            <label htmlFor="email">Naujas El. Pastas:</label>
                        </Col>

                        <Col sm={7} className={styles.emailInputCol} >
                            <input onChange={(event) => props.changeHandler(event, 'changeUserData' , 'newEmail')} value={props.data.newEmail} className={styles.emailInput} type="email" name="email" id="email" placeholder="vardenis@pastas.lt" />
                        </Col>
                    </Row>

                    <Row sm={12} className={styles.inputController}  >
                        <Col sm={5} className={styles.inputLabel} >
                            <label htmlFor="pwd">Slaptazodis</label>
                        </Col>

                        <Col sm={7} className={styles.passwordInputCol} >
                            <input onChange={(event) => props.changeHandler(event, 'changeUserData' , 'password')} value={props.data.password} className={styles.passwordInput} type={props.modalPasswordMode} id="pwd" name="pwd" placeholder="*******" />
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

                    <Row sm={12} >
                        <Col className={styles.loginButtonCol} sm={{ span: 7, offset: 5 }} >
                            <button className={styles.loginButton} onClick={() => props.cSubmit('emailChange')} >Testi</button>
                        </Col>
                    </Row>

                </div>
    }

    if (props.mode === 'passwordChange') {
    content =   <div >
                    <Row sm={12} className={styles.inputController}  >
                        <Col sm={5} className={styles.inputLabel} >
                            <label htmlFor="newpwd">Naujas Slaptazodis</label>
                        </Col>

                        <Col sm={7} className={styles.passwordInputCol} >
                            <input onChange={(event) => props.changeHandler(event, 'changeUserData' , 'newPassword')} value={props.data.newPassword} className={styles.passwordInput} type={props.modalPasswordMode} id="newpwd" name="newpwd" placeholder="*******" />
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
                            <label htmlFor="pwd">Senas Slaptazodis</label>
                        </Col>

                        <Col sm={7} className={styles.passwordInputCol} >
                            <input onChange={(event) => props.changeHandler(event, 'changeUserData' , 'password')} value={props.data.password} className={styles.passwordInput} type={props.modalPasswordMode} id="pwd" name="pwd" placeholder="*******" />
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

                    <Row sm={12} >
                        <Col className={styles.loginButtonCol} sm={{ span: 7, offset: 5 }} >
                            <button className={styles.loginButton} onClick={() => props.cSubmit('passwordChange')} >Testi</button>
                        </Col>
                    </Row>

                </div>
    }

    return (
        <div>
            <BackDrop show={props.show} cBackDrop={props.cBackDrop}/>
            <div className={styles.modal} 
            style={{
                transform: props.show ? 'translateY(0)' : 'translateY(-100vh)', 
                opacity: props.show ? '1': '0' ,  
                height: "200px",
                }}>
                    {content}
            </div>
        </div>
    );
}

export default React.memo(modalChangeUserData);