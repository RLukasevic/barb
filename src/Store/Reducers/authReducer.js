import * as actionTypes from '../Actions/actionTypes';

const initialState = {
    authData: {
        email: null,
        displayName: null,
        idToken: null,
        registered: false,
        refreshToken: null,
        id: null,
        keepLoggedInChecked: false,
    },

    accountSettings: {
        email: null,
        city: null,
        adress: null,
        appartmentHouseNumber: null,
        name: null,
        lastName: null,
        phone: null,
        policyChecked: false,
        getPersonalOfferEmailChecked: false,
        getOfferEmailChecked: false,
        getMobileAppOfferChecked: false,
        getSmsOfferChecked: false,
    },

    error: null,
    userCredentialsError: null,
    loading: false,
    modalShow: false,
    userDataModalShow: false,
    successfulChangeShow: false,
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.AUTH_START: return authStart(state)
        case actionTypes.AUTH_SUCCESS: return authSuccess(state, action)
        case actionTypes.AUTH_FAIL: return authFail(state, action)
        case actionTypes.AUTH_LOGOUT: return authLogout(state)
        case actionTypes.AUTH_CLEAR_ERROR: return authClearError(state)
        case actionTypes.MODAL_TOGGLE: return modalToggle(state)
        case actionTypes.ADDITIONAL_INFO_POST_START: return addiotonalInfoPostStart(state)
        case actionTypes.ADDITIONAL_INFO_POST_SUCCESS: return additionalInfoPostSuccess(state, action)
        case actionTypes.ACCOUNT_SETTINGS_SET: return settingsSet(state,action)
        case actionTypes.USER_DATA_MODAL_TOGGLE: return userDataModalToggle(state)

        case actionTypes.USER_DATA_CHANGE_STANDARD_SUCCESS: return userDataChangeStandardSuccess(state)
        case actionTypes.USER_DATA_CHANGE_STANDARD_FAIL: return userDataChangeStandardFail(state,action)
        case actionTypes.USER_DATA_CHANGE_EMAIL_SUCCESS: return userDataChangeEmailSuccess(state)
        case actionTypes.USER_DATA_CHANGE_EMAIL_FAIL: return userDataChangeEmailFail(state,action)
        case actionTypes.USER_DATA_CHANGE_PASSWORD_SUCCESS: return userDataChangePasswordSuccess(state)
        case actionTypes.USER_DATA_CHANGE_PASSWORD_FAIL: return userDataChangePasswordFail(state,action)

        case actionTypes.CHANGE_EMAIL: return changeEmail(state,action)
        case actionTypes.UPDATE_TOKEN: return updateToken(state,action)
        case actionTypes.CHECK_CREDENTIALS_SUCCESS: return checkCredentialsSuccess(state)
        case actionTypes.CHECK_CREDENTIALS_FAIL: return checkCredentialsFail(state,action)
        case actionTypes.CHANGE_EMAIL_IN_DB_STORAGE_SUCCESS: return changeEmailInDbStorageSuccess(state,action)
        case actionTypes.CHANGE_EMAIL_IN_DB_STORAGE_FAIL: return changeEmailInDbStorageFail(state,action)
        case actionTypes.SUCCESSFUL_CHANGE_CLOSE: return successfulChangeClose(state)

        default: return state;
    }
}

const authStart = (state) => {
    return {
        ...state,
        loading: true,
        error: null,
    };
}

const authSuccess = (state, action) => {
    return {
        ...state,
        authData: {
            ...state.authData,
            email: action.authData.email,
            displayName: action.authData.displayName,
            idToken: action.authData.idToken,
            registered: action.authData.registered,
            refreshToken: action.authData.refreshToken,
            id: action.authData.localId,
        },
        loading: false,
    };
}

const authFail = (state, action) => {
    return {
        ...state,
        error: action.error,
        loading: false,
    };
}

const authLogout = (state) => {
    return {
        ...state,
        authData: {
            ...state.authData,
            email: null,
            displayName: null,
            idToken: null,
            registered: false,
            refreshToken: null,
            id: null,
        },
        accountSettings: {
            email: null,
            city: null,
            adress: null,
            appartmentHouseNumber: null,
            name: null,
            lastName: null,
            phone: null,
            policyChecked: false,
            getPersonalOfferEmailChecked: false,
            getOfferEmailChecked: false,
            getMobileAppOfferChecked: false,
            getSmsOfferChecked: false,
        },
    }
}

const authClearError = state => {
    return{
        ...state,
        error: null,
    }
}

const modalToggle = state => {
    return {
        ...state,
        modalShow: !state.modalShow
    }
}

const addiotonalInfoPostStart = state => {
    return {
        ...state,
        loading: true,
        error: null,
    }
}

const additionalInfoPostSuccess = (state, action) => {
    return {
        ...state,
        accountSettings : {
            email: action.userData.userEmail,
            city: action.userData.city,
            adress: action.userData.gatve,
            appartmentHouseNumber: action.userData.butoNumeris,
            name: action.userData.name,
            lastName: action.userData.lastName,
            phone: action.userData.phone,
            policyChecked: action.userData.params.policy,
            getPersonalOfferEmailChecked: action.userData.params.getPersonalOfferEmailChecked,
            getOfferEmailChecked: action.userData.params.getOfferEmailChecked,
            getMobileAppOfferChecked: action.userData.params.getMobileAppOfferChecked,
            getSmsOfferChecked: action.userData.params.getSmsOfferChecked,
        },
        loading: false,
    }
}

const settingsSet = (state,action) => {
    return {
        ...state,
        accountSettings: {
            email: action.settings.userEmail,
            city: action.settings.city,
            adress: action.settings.gatve,
            appartmentHouseNumber: action.settings.butoNumeris,
            name: action.settings.name,
            lastName: action.settings.lastName,
            phone: action.settings.phone,
            policyChecked: action.settings.params.policy,
            getPersonalOfferEmailChecked: action.settings.params.getPersonalOfferEmailChecked,
            getOfferEmailChecked: action.settings.params.getOfferEmailChecked,
            getMobileAppOfferChecked: action.settings.params.getMobileAppOfferChecked,
            getSmsOfferChecked: action.settings.params.getSmsOfferChecked,
        },
        loading: false,
    }
}

const userDataModalToggle = (state) => {
    return {
        ...state,
        userDataModalShow: !state.userDataModalShow,
    }
}

const userDataChangeStandardSuccess = (state) => {
    return {
        ...state,
        error: null,
        loading: false,
        successfulChangeShow: true,
    }
}

const userDataChangeStandardFail = (state,action) => {
    return {
        ...state,
        error: action.error,
        loading: false,
    }
}

const userDataChangeEmailSuccess = (state) => {
    return {
        ...state,
        error: null,
        loading: false,
        successfulChangeShow: true,
    }
}

const userDataChangeEmailFail = (state,action) => {
    return {
        ...state,
        error: action.error,
        loading: false,
    }
}

const userDataChangePasswordSuccess = (state) => {
    return {
        ...state,
        error: null,
        loading: false,
        successfulChangeShow: true,
    }
}

const userDataChangePasswordFail = (state,action) => {
    return {
        ...state,
        error: action.error,
        loading: false,
    }
}

const changeEmail = (state,action) => {
    return {
        ...state,
        accountSettings: {
            ...state.accountSettings,
            email: action.data,
        }
    }
}

const updateToken = (state,action) => {
    return {
        ...state,
        authData: {
            ...state.authData,
            idToken: action.token,
        }
    }
}

const checkCredentialsSuccess = (state) => {
    return {
        ...state,
        userCredentialsError: null,
    }
}

const checkCredentialsFail = (state,action) => {
    return {
        ...state,
        userCredentialsError: action.error,
        loading: false,
    }
}

const changeEmailInDbStorageSuccess = (state,action) => {
    return {
        ...state,
        accountSettings: {
            ...state.accountSettings,
            email: action.data.userEmail,
        },
        loading: false,
        error: null,
    }
}

const changeEmailInDbStorageFail = (state,action) => {
    return {
        ...state,
        error: action.error,
        loading: false,
    }
}

const successfulChangeClose = (state) => {
    return {
        ...state,
        successfulChangeShow: false,
    }
}

export default reducer;