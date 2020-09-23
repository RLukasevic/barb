import * as actionTypes from '../Actions/actionTypes';
import { updateObject } from '../../shared/utility';

const initialState = {
    items: null,
    favorited: ['null'],
    cart: {},
    cartParams: {
        cartFinalPrice: 0.29.toFixed(2),
        cartDiscountTotal: 0.00.toFixed(2),
        cartFinalPriceNoDiscount: 0.00.toFixed(2),
    },
    orders: [],
    buyModalShow: false,
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
        case actionTypes.UPDATE_CART: return updateCart(state,action)
        case actionTypes.BUY_MODAL_TOGGLE: return buyModalToggle(state)
        case actionTypes.BUY_FAIL: return buyFail(state,action)
        case actionTypes.BUY_SUCCESS: return buySuccess(state,action)
        case actionTypes.SET_ORDERS: return setOrders(state,action)
        case actionTypes.LOGOUT_DELETE_DATA: return logoutDeletionOfData(state)

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

const updateCart = (state,action) => {
    return {
        ...state,
        cart: action.newCart,
        cartParams: {
            ...state.cartParams,
            cartFinalPrice: action.cartFinalPrice,
            cartDiscountTotal: action.cartDiscountTotal,
            cartFinalPriceNoDiscount: action.cartFinalPriceNoDiscount,
        },
    }
}

const buyModalToggle = state => {
    return {
        ...state,
        buyModalShow: !state.buyModalShow
    }
}

const buyFail = (state,action) => {
    return {
        ...state,
        error: action.error,
    }
}

const buySuccess = (state,action) => {

    console.log(action.data)
    let newOrders = state.orders;
    newOrders.push(action.data)
    console.log(newOrders);

    return {
        ...state,
        cart: {},
        cartParams: {
            cartFinalPrice: 0.29.toFixed(2),
            cartDiscountTotal: 0.00.toFixed(2),
            cartFinalPriceNoDiscount: 0.00.toFixed(2),
        },
        orders: newOrders,
        buyModalShow: false,
    }
}

const setOrders = (state,action) => {
    return {
        ...state,
        orders: action.orders,
    }
}

const logoutDeletionOfData = state => {
    return {
        ...state,
        cartParams: {
            cartFinalPrice: 0.29.toFixed(2),
            cartDiscountTotal: 0.00.toFixed(2),
            cartFinalPriceNoDiscount: 0.00.toFixed(2),
        },
        orders: [],
        cart: {},
    }
}

export default reducer;