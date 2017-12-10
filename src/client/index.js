import React from 'react';
import ReactDOM from 'react-dom';
import Select from 'react-select';
import '../css/index.css';
import 'react-select/dist/react-select.css';
import * as MapJS from './map.js';

class SideBar extends React.Component {
  render() {
    return (
      <div className="sidebar side">
        <div className="buttons">
          <Buttons/>
        </div>
        <div className="country-info">
          <div>{/* status */}</div>
          <ol>{/* TODO */}</ol>
        </div>
      </div>
    );
  }
}

class Buttons extends React.Component {

  render() {
    var dateOptions = [
    { value: 14530101, label: '14530101' },
    { value: 14520101, label: '14520101' }
  ];
  function onDatePick(val){MapJS.changeTime(val.value);}
    return (
      <div>
        <Select
          name="form-field-name"
          value="one"
          options={dateOptions}
          onChange={onDatePick}
          placeholder="Select Date"
          searchable={false}
          clearable={false}
        />
      </div>
    );
  }
}

// ========================================

export function startClient() {
  return ReactDOM.render(
  <SideBar/>, document.getElementById('react'));
}


