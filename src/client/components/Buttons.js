import React from 'react';
import Select from 'react-select';

class Buttons extends React.Component {

  render() {
    var dateOptions = [
    { value: 14530101, label: '14530101' },
    { value: 14520101, label: '14520101' }
  ];
  function onDatePick(val){/*MapJS.changeTime(val.value);*/}
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

export default Buttons;