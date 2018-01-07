import {createStore as _createStore, applyMiddleware}       from 'redux';
import thunk            from 'redux-thunk';
import {createLogger}   from 'redux-logger';
import {routerMiddleware} from 'react-router-redux';
import reducers         from './reducers';

import createHistory from 'history/createBrowserHistory';

export const history = createHistory();

export function createStore(initialState={}) {
    let middleware = [thunk, routerMiddleware(history)];
    if (process.env.NODE_ENV === 'development') {
        const logger = createLogger({
            collapsed: (getState, action) => action && action.type.indexOf("router") !== -1
        });
        middleware = [...middleware, logger];
    }

    return _createStore(
        reducers, initialState, applyMiddleware(...middleware));
}
