import { createReducer } from './createReducer';

const DEFAULT_STATE = {
    dateValue: 14520101
};

const HANDLERS = {

    ["SHOW_DEMO_MAP"]: (state, {dateValue, geo, attrs}) => {
        state.dateValue = dateValue;
        state.geo = geo;
        state.attrs = attrs;
        return state;
    }

};

export default createReducer(DEFAULT_STATE, HANDLERS);