import * as actionTypes from '../Actions/actionTypes';

const initialState = {
    kek: null,
    a: 'a',
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.AUTH_START: return authStart(state)

        default: return state;
    }
}

const authStart = (state) => {
    return {
        ...state,
        kek: 'DONE!',
    };
}

export default reducer;