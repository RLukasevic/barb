import * as actionTypes from './actionTypes';
import axios from '../../axiosFetch';

export const setItems = (items) => {

    return {
        type: actionTypes.SET_ITEMS,
        items: items,

    };
};

export const fetchItemsFail = () => {
    return {
        type: actionTypes.FETCH_ITEMS_FAIL,

    };
};

export const initItems = () => {
    return dispatch => {
        axios.get('/prekes.json')
        .then(res => {
            dispatch(setItems(res.data));
        } )
        .catch(e => {
            console.log(e)
            dispatch(fetchItemsFail(e));
        } )
    };
};

export const addFav = (itemId, favs) => {
    return dispatch => {

        let newArr = new Array(...favs);
        if (newArr[0] === 'null') {
            newArr[0] = itemId;
        } else {
            newArr.push(itemId)
        }


        let payload = {
            favorited : newArr,
        }


        let token = localStorage.getItem('token');
        let localId = localStorage.getItem('userId')
        let queryParams = '.json/' + '?auth=' + token + '&orderBy="localId"&equalTo="' + localId + '"'
        dispatch(updateFav(payload))            // Performance call
        axios.get('/accounts'+ queryParams)
        .then(res => {
            let name = Object.keys(res.data)[0]
            queryParams = '/' + name + '.json?auth=' + token
            axios.patch('/accounts' + queryParams, payload)
            .then(res => {
                dispatch(updateFav(res.data))  // Calling update with actual data in db
            })
            .catch(e => {
                console.log('error = ', e);
                //dispatch(favFail())
            })
        })
        .catch(e => {
            console.log(e)
        });
    };
};

export const delFav = (itemId, favs) => {
    return dispatch => {

        let newArr = new Array(...favs);

        if (newArr.length === 1) {       // Cant patch empty arrays to firebase
            newArr[0] = 'null';
        } else {
            let index = newArr.indexOf(itemId);
            newArr.splice(index,1);
        }


        let payload = {
            favorited : newArr,
        }


        let token = localStorage.getItem('token');
        let localId = localStorage.getItem('userId')
        let queryParams = '.json/' + '?auth=' + token + '&orderBy="localId"&equalTo="' + localId + '"'
        dispatch(updateFav(payload))            // Performance call
        axios.get('/accounts'+ queryParams)
        .then(res => {
            let name = Object.keys(res.data)[0]
            queryParams = '/' + name + '.json?auth=' + token
            axios.patch('/accounts' + queryParams, payload)
            .then(res => {
                dispatch(updateFav(res.data))  // Calling update with actual data in db
            })
            .catch(e => {
                console.log(e);
                //dispatch(favFail())
            })
        })
        .catch(e => {
            console.log(e)
        });
    };
};

export const updateFav = (res) => {
    return {
        type: actionTypes.UPDATE_FAV,
        favorites: res.favorited,

    };
}

export const fetchFavorites = () => {
    return dispatch => {
        const token = localStorage.getItem('token');
        if (token) {
            let localId = localStorage.getItem('userId');
            let queryParams = '.json/' + '?auth=' + token + '&orderBy="localId"&equalTo="' + localId + '"'
            axios.get('/accounts' + queryParams)
            .then(res => {
                let name = Object.keys(res.data).toString()
                dispatch(fetchFavoritesSuccess(res.data[name]));
            })
            .catch(e => {
                dispatch(fetchFavoritesFail(e))
                console.log(e);
            })        
        }
    }
}

export const fetchFavoritesSuccess = (data) => {
    return {
        type: actionTypes.FETCH_FAVORITES_SUCC,
        data: data,
    }
}

export const fetchFavoritesFail = (e) => {
    return {
        type: actionTypes.FETCH_FAVORITES_FAIL,
        error: e,
    }
}

export const resetFav = () => {
    return {
        type: actionTypes.RESET_FAV,
    }
}

export const updateCart = (newCart, cartFinalPrice, cartDiscountTotal, cartFinalPriceNoDiscount) => {

    return {
        type: actionTypes.UPDATE_CART,
        newCart: newCart,
        cartFinalPrice: cartFinalPrice,
        cartDiscountTotal: cartDiscountTotal,
        cartFinalPriceNoDiscount: cartFinalPriceNoDiscount,
    }
}

export const initBuy = (data,price,cart) => {
    return dispatch => {

        let token = localStorage.getItem('token');
        let localId = localStorage.getItem('userId')
        let queryParams = '.json/' + '?auth=' + token + '&orderBy="localId"&equalTo="' + localId + '"'
        axios.get('/accounts'+ queryParams)
        .then(res => {
            let name = Object.keys(res.data)[0]

            if (res.data[name].orders === undefined) {
                console.log('wtf')
                queryParams = '/' + name + '/orders' + '.json?auth=' + token;
                let orderId = String(localId).substr(0,9) + '1';
                let timeStamp = new Date()
                let orderData = {
                    [orderId]: {
                        id: orderId,
                        customerData: data,
                        orderSumPrice: price,
                        orderData: cart,
                        timeStamp: timeStamp,
                    },
                }

                axios.put('/accounts' + queryParams, orderData)
                .then(res => {
                    console.log(res.data);
                    dispatch(buySuccess(res.data));
                })
                .catch(e => {
                    console.log(e);
                    dispatch(buyFail(e));
                })

            } else {
                console.log('kekw')
                queryParams = '/' + name + '/orders' + '.json?auth=' + token;
                let ordersLength = Object.keys(res.data[name].orders).length
                let latestOrderId = Object.keys(res.data[name].orders)[ordersLength-1];
                let actualIdOfLatestOrderId = Number(latestOrderId.substr(String(localId).substr(0,9).length));
                let newOrderId = String(localId).substr(0,9) + (actualIdOfLatestOrderId+1);
                let timeStamp = new Date();
                let orderData = {
                    [newOrderId]: {
                        id: newOrderId,
                        customerData: data,
                        orderSumPrice: price,
                        orderData: cart,
                        timeStamp: timeStamp,
                    },
                }

                axios.patch('/accounts' + queryParams, orderData)
                .then(res => {
                    console.log(res.data);
                    dispatch(buySuccess(res.data));
                })
                .catch(e => {
                    console.log(e);
                    dispatch(buyFail(e));
                })
            }
        })
        .catch(e => {
            console.log(e);
            dispatch(buyFail(e));
        });
    };
}

export const buyFail = (e) => {
    return {
        type: actionTypes.BUY_FAIL,
        error: e,
    }
}

export const buySuccess = (data) => {
    return {
        type: actionTypes.BUY_SUCCESS,
        data: data,
    }
}

export const buyModalToggle = () => {
    return {
        type: actionTypes.BUY_MODAL_TOGGLE,
    }
}

export const setOrders = (orders) => {
    let newOrdersArr = [];

    Object.keys(orders).map(key => {
        newOrdersArr.push({[key]: orders[key]})
    })

    return {
        type: actionTypes.SET_ORDERS,
        orders: newOrdersArr,
    }
}

export const logoutDeletionOfData = () => {
    return {
        type: actionTypes.LOGOUT_DELETE_DATA,
    }
}