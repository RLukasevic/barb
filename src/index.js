import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { createStore, applyMiddleware, compose, combineReducers  } from 'redux';
import checkoutReducer from './Store/Reducers/checkoutReducer';
import authReducer from './Store/Reducers/authReducer';
import homeReducer from './Store/Reducers/homeReducer';
import 'bootstrap/dist/css/bootstrap.min.css';

const rootReducer = combineReducers({
    checkout: checkoutReducer,
    auth: authReducer,
    home: homeReducer,
    //order: orderReducer,
    //auth: authReducer,
});

const composeEnhancers = process.env.NODE_ENV === 'development' ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : null || compose;
const store = createStore(rootReducer,composeEnhancers(applyMiddleware(thunk)));

const app = (
    <Provider store={store}>
        <BrowserRouter>
            <App/>
        </BrowserRouter>
    </Provider>
);

ReactDOM.render(app, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
