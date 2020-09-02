import * as actionTypes from './actionTypes';
import axios from '../../axiosFetch';

// export const addIngredient = (name) => {
//     return {
//         type: actionTypes.ADD_ING,
//         ingredientName: name,
//     };
// };

// export const removeIngredient = (name) => {
//     return {
//         type: actionTypes.REMOVE_ING,
//         ingredientName: name,
//     };
//};

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
            dispatch(fetchItemsFail());
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
        axios.get('/accounts'+ queryParams)
        .then(res => {
            let name = Object.keys(res.data)[0]
            queryParams = '/' + name + '.json?auth=' + token
            axios.patch('/accounts' + queryParams, payload)
            .then(res => {
                dispatch(updateFav(res.data))
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
        axios.get('/accounts'+ queryParams)
        .then(res => {
            let name = Object.keys(res.data)[0]
            queryParams = '/' + name + '.json?auth=' + token
            axios.patch('/accounts' + queryParams, payload)
            .then(res => {
                dispatch(updateFav(res.data))
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

export const updateCart = (newCart) => {

    return {
        type: actionTypes.UPDATE_CART,
        newCart: newCart,
    }
}