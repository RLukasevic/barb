import * as actionTypes from './actionTypes';
import axios from 'axios';

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
    return {
        type: actionTypes.AUTH_LOGOUT,
    };
};

export const authAutoLogout = (timeout) => {
    return dispatch => {
        setTimeout(() => {
            dispatch(authLogout());
        }, timeout * 1000);
    }
}

export const auth = (mydata, mode) => {
    return dispatch => {
        dispatch(authStart());
        const authData = {
            email: mydata.email,
            password: mydata.password,
            returnSecureToken: true,
        };
        let url = 'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyCkPNwi2DRyLPZiaBdVDW5gD_HijaFyk-U';

        if (mode === 'login') {
            url = 'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyCkPNwi2DRyLPZiaBdVDW5gD_HijaFyk-U';
        } 

        axios.post(url, authData)
        .then(res => {
            const expirationDate = new Date(new Date().getTime() + res.data.expiresIn * 1000);
            localStorage.setItem('token', res.data.idToken);
            localStorage.setItem('expirationDate', expirationDate);
            localStorage.setItem('userId', res.data.localId);
            dispatch(authSuccess(res.data));
            dispatch(authAutoLogout(res.data.expiresIn));
            dispatch(modalToggle());
         } )
        .catch(e => {
            dispatch(authFail(e.response.data.error.message));
            console.log(e);
        } )
        
    };
};

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
            }
            
        }
    }
}

export const modalToggle = () => {
    return {
        type: actionTypes.MODAL_TOGGLE,
    };
}