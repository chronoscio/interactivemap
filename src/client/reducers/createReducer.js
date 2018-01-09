import {cloneDeep} from 'lodash';

export function createReducer(initialState, handlers, options={}) {
    return function reducer(state = initialState, action) {
        if(handlers[action.type]) {
            return handlers[action.type](cloneDeep(state), action);
        }
        return state;
    };
}
