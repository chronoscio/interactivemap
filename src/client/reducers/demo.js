import {createReducer} from './createReducer';

const DEFAULT_STATE = {
  dateValue: 14520101
};

const HANDLERS = {

  ["SHOW_DEMO_MAP"]: (state, {dateValue, geo, attrs}) => {

    var to_add = {
      "type": "GeometryCollection",
      "geometries": []
    }
    for (let result of geo.data) {
      to_add.geometries.push(JSON.parse(result.geoJson))
    }

    state.dateValue = dateValue;
    state.geo = to_add;
    state.attrs = attrs;
    return state;
  }

};

export default createReducer(DEFAULT_STATE, HANDLERS);
