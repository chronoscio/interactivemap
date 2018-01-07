import * as redux       from 'redux';
import thunk            from 'redux-thunk';
import {createLogger}   from 'redux-logger';
import {routerMiddleware} from 'react-router-redux';
import reducers         from './reducers';

export function createStore() {
    const initialState = {};
    let middleware = [thunk, routerMiddleware];
    if (__DEV__) {
        const logger = createLogger({
            collapsed: (getState, action) => action && action.type.indexOf("persist") !== -1
        });
        middleware = [...middleware, logger];
    }

    return redux.createStore(
        reducers, initialState, redux.applyMiddleware(...middleware));
}
