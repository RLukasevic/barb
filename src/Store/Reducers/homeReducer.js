import * as actionTypes from '../Actions/actionTypes';
import { updateObject } from '../../shared/utility';

const initialState = {
    items: null,
    favorited: ['null'],
    error: false,
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.SET_ITEMS: return setItems(state, action)
        case actionTypes.FETCH_ITEMS_FAIL: return updateObject(state, {error: true} )
        case actionTypes.UPDATE_FAV: return updateFav(state, action)
        case actionTypes.FETCH_FAVORITES_SUCC: return fetchFavoritesSuccess(state,action)
        case actionTypes.FETCH_FAVORITES_FAIL: return fetchFavoritesFail(state,action)
        case actionTypes.RESET_FAV: return resetFav(state)

        default: return state;
    }
}

const setItems = (state, action) => {
    return {
        ...state,
        items: action.items,
        error: false,
    };
}

const updateFav = (state,action) => {
    return {
        ...state,
        favorited: new Array(...action.favorites),
        error: false,
    };
}

const fetchFavoritesSuccess = (state,action) => {
    return {
        ...state,
        favorited: new Array(...action.data.favorited),
        error: false,
    }
}

const fetchFavoritesFail = (state,action) => {
    return {
        ...state,
        error: action.error,
    }
}

const resetFav = (state) => {
    return {
        ...state,
        favorited: ['null'],
    }
}

export default reducer;