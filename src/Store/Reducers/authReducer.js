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
    loading: false,
    modalShow: false,
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
    }
}

const additionalInfoPostSuccess = (state, action) => {
    return {
        ...state,
        accountSettings : {
            city: action.userData.city,
            adress: action.userData.gatve,
            appartmentHouseNumber: action.userData.butoNumeris,
            name: action.userData.name,
            lastName: action.userData.lastName,
            phone: action.userData.phone,
            policyChecked: action.userData.policy,
            getPersonalOfferEmailChecked: action.userData.getPersonalOfferEmailChecked,
            getOfferEmailChecked: action.userData.getOfferEmailChecked,
            getMobileAppOfferChecked: action.userData.getMobileAppOfferChecked,
            getSmsOfferChecked: action.userData.getSmsOfferChecked,
        },
        loading: false,
    }
}

const settingsSet = (state,action) => {
    return {
        ...state,
        accountSettings: {
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

export default reducer;