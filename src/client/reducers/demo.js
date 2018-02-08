import {createReducer} from './createReducer';

const DEFAULT_STATE = {
  dateValue: 14520101,
  states: []
};

const HANDLERS = {

  ["SHOW_DEMO_MAP"]: (state, {dateValue, geo, states}) => {

    var to_add = []
    for (let result of geo.data) {
      var wrapper = {
        type: "Feature",
        properties: {},
        geometry: JSON.parse(result.geoJson)
      }
      to_add.push(wrapper);
      for(let state of states.data){
        if(state.id === result.state){
          to_add[to_add.length - 1].properties = {}
          to_add[to_add.length - 1].properties.name = state.name;
          to_add[to_add.length - 1].properties.color = state.color;

        }
      }
    }
    state.dateValue = dateValue;
    state.geo = to_add;
    state.states = states.data;
    return state;
  }

};

export default createReducer(DEFAULT_STATE, HANDLERS);
