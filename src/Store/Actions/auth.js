import * as actionTypes from './actionTypes';
import axios from 'axios';
import axiosInstance from '../../axiosFetch';
import { fetchFavorites, setOrders, logoutDeletionOfData } from './home';

export const authClearError = () => {
    return {
        type: actionTypes.AUTH_CLEAR_ERROR
    }
}

export const authStart = () => {
    return {
        type: actionTypes.AUTH_START,
    };
};

export const authSuccess = (data) => {
    return {
        type: actionTypes.AUTH_SUCCESS,
        authData: data,
    };
};

export const authFail = (error) => {
    return {
        type: actionTypes.AUTH_FAIL,
        error: error,
    };
};

export const authLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('expirationDate');
    localStorage.removeItem('userId');

    return dispatch => {
        dispatch(logoutDeletionOfData());
        dispatch(authLogoutDataDeletion());
    }
};

export const authLogoutDataDeletion = () => {
    return {
        type: actionTypes.AUTH_LOGOUT,
    };
}

export const authAutoLogout = (timeout) => {
    return dispatch => {
        setTimeout(() => {
            dispatch(authLogout());
        }, timeout * 1000);
    };
};

export const additionalInfoPostStart = () => {
    return {
        type: actionTypes.ADDITIONAL_INFO_POST_START,
    };
};

export const additionalInfoPostSuccess = (data) => {
    return {
        type: actionTypes.ADDITIONAL_INFO_POST_SUCCESS,
        userData: data,
    };
};

export const auth = (mydata, mode) => {
    return dispatch => {
        dispatch(authStart());

        if (mode === 'login') { //LOGIN
            let url = 'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyCkPNwi2DRyLPZiaBdVDW5gD_HijaFyk-U';

            const authData = {
                email: mydata.email,
                password: mydata.password,
                returnSecureToken: true,
            };

            axios.post(url, authData)
            .then(res => {
                const expirationDate = new Date(new Date().getTime() + res.data.expiresIn * 1000);
                localStorage.setItem('token', res.data.idToken);
                localStorage.setItem('expirationDate', expirationDate);
                localStorage.setItem('userId', res.data.localId);
                dispatch(authSuccess(res.data));
                dispatch(authAutoLogout(res.data.expiresIn));
                dispatch(fetchFavorites());

                let queryParams = '.json/' + '?auth=' + res.data.idToken + '&orderBy="localId"&equalTo="' + res.data.localId + '"'
                axiosInstance.get('/accounts'+ queryParams)
                .then(res => {
                    let name = Object.keys(res.data)[0]
                    dispatch(settingsSet(res.data[name]));
                    dispatch(setOrders(res.data[name].orders));
                    dispatch(modalToggle());
                })
                .catch(e => {
                    console.log(e)
                });


                //dispatch(modalToggle());
            } )
            .catch(e => {
                dispatch(authFail(e.response.data.error.message));
                console.log(e);
            } )

        } else { //REGISTRATION (specific magic which is needed because of firebase mock usage instead of self-made backend)
            let url = 'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyCkPNwi2DRyLPZiaBdVDW5gD_HijaFyk-U';

            const authData = {
                email: mydata.email,
                password: mydata.password,
                returnSecureToken: true,
            };

            axios.post(url, authData)       // STANDARD Firebase register API request
            .then(res => {
                const expirationDate = new Date(new Date().getTime() + res.data.expiresIn * 1000);
                localStorage.setItem('token', res.data.idToken);
                localStorage.setItem('expirationDate', expirationDate);
                localStorage.setItem('userId', res.data.localId);
                dispatch(authSuccess(res.data));
                dispatch(authAutoLogout(res.data.expiresIn));
                dispatch(additionalInfoPost(mydata, res.data.idToken, res.data.localId))      // Additional request to db , saving additional parameters of the account (checkboxes) and adress etc.
                //dispatch(modalToggle());
            } )
            .catch(e => {
                dispatch(authFail(e.response.data.error.message));
                console.log(e);
            } )
            
        }
    };
};

export const additionalInfoPost = (mydata, token, localId) => {
    return dispatch => {
        dispatch(additionalInfoPostStart())
        console.log('token = ' , token);
        let url = '/accounts.json?auth=' + token;

        const userData = {
            userEmail: mydata.email,
            butoNumeris: mydata.butoNumeris,
            city: mydata.city,
            displayName: mydata.name + ' ' + mydata.lastName,
            favorited: ['null'],
            gatve: mydata.gatve,
            lastName: mydata.lastName,
            name: mydata.name,
            params: {
                getMobileAppOfferChecked: mydata.getMobileAppOfferChecked,
                getOfferEmailChecked: mydata.getOfferEmailChecked,
                getPersonalOfferEmailChecked: mydata.getPersonalOfferEmailChecked,
                getSmsOfferChecked: mydata.getSmsOfferChecked,
                policy: mydata.policyChecked,
            },
            phone: mydata.phone,
            localId: localId,
        };

        axiosInstance.post(url, userData)       // Additional request to db , saving additional parameters of the account (checkboxes) and adress etc.
        .then (res => {
            console.log('res = ', res);
            dispatch(additionalInfoPostSuccess(res.data));
            dispatch(modalToggle());
        } )
        .catch(e => {
            dispatch(authFail(e.response.data.error.message));
            console.log(e);
        } )
    }
}

export const additionalInfoPatch = (mydata, token, localId) => {        // Used in AccountSettings calls
    return dispatch => {
        let url = '/accounts.json?auth=' + token;

        const userData = {
            userEmail: mydata.email,
            butoNumeris: mydata.butoNumeris,
            city: mydata.city,
            displayName: mydata.name + ' ' + mydata.lastName,
            gatve: mydata.gatve,
            lastName: mydata.lastName,
            name: mydata.name,
            params: {
                getMobileAppOfferChecked: mydata.getMobileAppOfferChecked,
                getOfferEmailChecked: mydata.getOfferEmailChecked,
                getPersonalOfferEmailChecked: mydata.getPersonalOfferEmailChecked,
                getSmsOfferChecked: mydata.getSmsOfferChecked,
                policy: mydata.policyChecked,
            },
            phone: mydata.phone,
        };

        let queryParams = '.json/' + '?auth=' + token + '&orderBy="localId"&equalTo="' + localId + '"'
        axiosInstance.get('/accounts'+ queryParams)
        .then(res => {
            let name = Object.keys(res.data)[0]

            queryParams = '/' + name + '.json?auth=' + token;
            url = '/accounts' + queryParams;

            axiosInstance.patch(url, userData)
            .then (res => {
                dispatch(additionalInfoPostSuccess(res.data));
                dispatch(userDataChangeStandardSuccess());
                dispatch(userDataModalToggle());
            } )
            .catch(e => {
                dispatch(userDataChangeStandardFail(e.response.data.error.message));
            } )

        }).catch(e => {
            console.log(e)
        })
    }
}

export const authCheckState = () => {
    return dispatch => {
        const token = localStorage.getItem('token');
        if (!token) {
            dispatch(authLogout());
        } else {
            const expirationDate = localStorage.getItem('expirationDate');
            if (expirationDate < new Date()) {
                dispatch(authLogout());
            } else {
                const userId = localStorage.getItem('userId');
                const data = {
                    idToken: token,
                    localId: userId,
                    registered: true,
                }
                dispatch(authSuccess(data));
                dispatch(authAutoLogout(new Date(new Date(expirationDate).getTime() - new Date().getTime()) / 1000));

                let queryParams = '.json/' + '?auth=' + token + '&orderBy="localId"&equalTo="' + userId + '"'
                axiosInstance.get('/accounts'+ queryParams)
                .then(res => {
                    let name = Object.keys(res.data)[0]
                    dispatch(settingsSet(res.data[name]));
                    dispatch(setOrders(res.data[name].orders));
                })
                .catch(e => {
                    console.log(e)
                });
            }
            
        }
    }
}

export const modalToggle = () => {
    return {
        type: actionTypes.MODAL_TOGGLE,
    };
}

export const settingsSet = (data) => {
    return {
        type: actionTypes.ACCOUNT_SETTINGS_SET,
        settings: data,
    }
}

export const userDataModalToggle = () => {
    return {
        type: actionTypes.USER_DATA_MODAL_TOGGLE,
    }
}

export const userDataChangeStandard = (data) => {
    return dispatch => {
        dispatch(authStart());
        let url = 'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyCkPNwi2DRyLPZiaBdVDW5gD_HijaFyk-U';

        const authData = {
            email: data.email,
            password: data.password,
            returnSecureToken: true,
        };

        axios.post(url, authData)
        .then(res => {
            dispatch(checkCredentialsSuccess());
            const expirationDate = new Date(new Date().getTime() + res.data.expiresIn * 1000);
            localStorage.setItem('token', res.data.idToken);
            localStorage.setItem('expirationDate', expirationDate);
            localStorage.setItem('userId', res.data.localId);
            dispatch(authSuccess(res.data));
            dispatch(authAutoLogout(res.data.expiresIn));
            dispatch(additionalInfoPatch(data, res.data.idToken, res.data.localId)) 
        } )
        .catch(e => {
            dispatch(checkCredentialsFail(e.response.data.error.message));
            console.log('CREDENTIALS');
        } )
    }
}

export const userDataChangeStandardSuccess = () => {
    return {
        type: actionTypes.USER_DATA_CHANGE_STANDARD_SUCCESS,
    };
}

export const userDataChangeStandardFail = (error) => {
    return {
        type: actionTypes.USER_DATA_CHANGE_STANDARD_FAIL,
        error: error,
    };
}

export const userDataChangeEmail = (data) => {
    return dispatch => {
        dispatch(authStart());
        let url = 'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyCkPNwi2DRyLPZiaBdVDW5gD_HijaFyk-U';

        const authData = {
            email: data.email,
            password: data.password,
            returnSecureToken: true,
        };

        axios.post(url, authData)
        .then(res => {
            dispatch(checkCredentialsSuccess());

            url = 'https://identitytoolkit.googleapis.com/v1/accounts:update?key=AIzaSyCkPNwi2DRyLPZiaBdVDW5gD_HijaFyk-U';
            let payload = {
                idToken: res.data.idToken,
                email: data.newEmail,
                returnSecureToken: true,
            }
            axios.post(url,payload)
            .then(res => {
                dispatch(changeEmail(data.newEmail));
                dispatch(userDataChangeEmailSuccess());
                dispatch(changeEmailInDbStorage(data.newEmail, res.data.idToken, res.data.localId));
                dispatch(updateToken(res.data));
                dispatch(authAutoLogout(res.data.expiresIn));
            })
            .catch(e => {
                dispatch(userDataChangeEmailFail(e.response.data.error.message));
                console.log(e)
            })
        } )
        .catch(e => {
            dispatch(checkCredentialsFail(e.response.data.error.message));
            console.log(e);
        } )
    }
}

export const changeEmail = (newEmail) => {
    return {
        type: actionTypes.CHANGE_EMAIL,
        data: newEmail,
    }
}

export const updateToken = (data) => {
    const expirationDate = new Date(new Date().getTime() + data.expiresIn * 1000);
    localStorage.setItem('token', data.idToken);
    localStorage.setItem('expirationDate', expirationDate);

    return {
        type:actionTypes.UPDATE_TOKEN,
        token: data.idToken,
    }
}

export const userDataChangeEmailSuccess = () => {
    return {
        type: actionTypes.USER_DATA_CHANGE_EMAIL_SUCCESS,
    };
}

export const userDataChangeEmailFail = (error) => {
    return {
        type: actionTypes.USER_DATA_CHANGE_EMAIL_FAIL,
        error: error,
    };
}

export const userDataChangePassword = (data) => {
    return dispatch => {
        dispatch(authStart());
        let url = 'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyCkPNwi2DRyLPZiaBdVDW5gD_HijaFyk-U';

        const authData = {
            email: data.email,
            password: data.password,
            returnSecureToken: true,
        };

        axios.post(url, authData)
        .then(res => {
            dispatch(checkCredentialsSuccess());

            url = 'https://identitytoolkit.googleapis.com/v1/accounts:update?key=AIzaSyCkPNwi2DRyLPZiaBdVDW5gD_HijaFyk-U';
            let payload = {
                idToken: res.data.idToken,
                password: data.newPassword,
                returnSecureToken: true,
            }
            axios.post(url,payload)
            .then(res => {
                dispatch(userDataChangePasswordSuccess());
                dispatch(updateToken(res.data));
                dispatch(authAutoLogout(res.data.expiresIn));
                dispatch(userDataModalToggle());
            })
            .catch(e => {
                dispatch(userDataChangePasswordFail(e.response.data.error.message));
                console.log(e)
            })
        } )
        .catch(e => {
            dispatch(checkCredentialsFail(e.response.data.error.message));
            console.log(e);
        } )
    }
}

export const userDataChangePasswordSuccess = () => {
    return {
        type: actionTypes.USER_DATA_CHANGE_PASSWORD_SUCCESS,
    }
}

export const userDataChangePasswordFail = (error) => {
    return {
        type: actionTypes.USER_DATA_CHANGE_PASSWORD_FAIL,
        error: error,
    }
}

export const checkCredentialsSuccess = () => {
    return {
        type: actionTypes.CHECK_CREDENTIALS_SUCCESS,
    }
}

export const checkCredentialsFail = (error) => {
    return {
        type: actionTypes.CHECK_CREDENTIALS_FAIL,
        error: error,
    }
}

export const changeEmailInDbStorage = (newEmail, token, localId) => {
    return dispatch => {
        let url = '/accounts.json?auth=' + token;

        let tempData = {
            userEmail: newEmail,
        };

        let queryParams = '.json/' + '?auth=' + token + '&orderBy="localId"&equalTo="' + localId + '"'
        axiosInstance.get('/accounts'+ queryParams)
        .then(res => {
            let name = Object.keys(res.data)[0]

            queryParams = '/' + name + '.json?auth=' + token;
            url = '/accounts' + queryParams;

            axiosInstance.patch(url, tempData)
            .then (res => {
                dispatch(changeEmailInDbStorageSuccess(res.data));
                dispatch(userDataModalToggle());
            } )
            .catch(e => {
                dispatch(changeEmailInDbStorageFail(e.response.data.error.message));
            } )

        }).catch(e => {
            console.log(e)
        })
    }
}

export const changeEmailInDbStorageSuccess = (data) => {
    return {
        type: actionTypes.CHANGE_EMAIL_IN_DB_STORAGE_SUCCESS,
        data: data,
    }
}

export const changeEmailInDbStorageFail = (error) => {
    return {
        type: actionTypes.CHANGE_EMAIL_IN_DB_STORAGE_FAIL,
        error: error,
    }
}

export const successfulChangeClose = () => {
    return {
        type: actionTypes.SUCCESSFUL_CHANGE_CLOSE,
    }
}