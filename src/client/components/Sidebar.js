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
      </div>
    );
  }
}

export default connect(state => ({
  demo: state.demo
}))(SideBar);