import React from 'react';
import { connect } from 'react-redux';

import { downloadAndShowDemoMap } from '../actionCreators/demoActions';

import Buttons from './Buttons';

class SideBar extends React.Component {

  onDatePick(value) {
    this.props.dispatch(downloadAndShowDemoMap(value));
  }

  render() {
    return (
      <div className="sidebar side">
        <div className="buttons">
          <Buttons onDatePick={this.onDatePick.bind(this)} />
        </div>
        <div className="country-info">
          <div>{/* status */}</div>
          <ol>{/* TODO */}</ol>
        </div>
        <div className="demo-info">
          <div>{/* status */}</div>
          <ol>Welcome to the demo of our project. This sidebar will contain information about the selected year and country in the future. Currently the demo contains only a part of the year 1789. Select it from the picker above. Contact ataalikilicli@gmail.com if you have questions or if you would like to help.</ol>
        </div>
      </div>
    );
  }
}

export default connect(state => ({
  demo: state.demo
}))(SideBar);
