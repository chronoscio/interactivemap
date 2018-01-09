import React from 'react';
import PropTypes from 'prop-types';
import Select from 'react-select';

class Buttons extends React.Component {

  static propTypes = {
    onDatePick: PropTypes.func.isRequired
  }

  render() {
    var dateOptions = [
    { value: 14530101, label: '14530101' },
    { value: 14520101, label: '14520101' }
  ];
    return (
      <div>
        <Select
          name="form-field-name"
          value="one"
          options={dateOptions}
          onChange={(e) => this.props.onDatePick(e.value)}
          placeholder="Select Date"
          searchable={false}
          clearable={false}
        />
      </div>
    );
  }
}

export default Buttons;