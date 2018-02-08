import React from 'react';
import {connect} from 'react-redux';
import 'react-virtualized/styles.css';
import {Table, Column} from 'react-virtualized';
import {downloadAndShowDemoMap} from '../actionCreators/demoActions';

import Buttons from './Buttons';

class SideBar extends React.Component {

  constructor(props) {
    super(props);

  }

  onDatePick(value) {
    this.props.dispatch(downloadAndShowDemoMap(value));
  }

  colorRenderer(cellObject) {

    if (cellObject.cellData == null) {
      return '';
    } else {
      return (<div className='key-color' style={{backgroundColor: cellObject.cellData}}></div>);
    }
  }
  render() {
    return (<div className="sidebar side">
      <div className="buttons">
        <Buttons onDatePick={this.onDatePick.bind(this)}/>
      </div>
      <div className="country-info">
        <div>{/* status */}</div>
        <ol>{/* TODO */}</ol>
      </div>
      <div className="demo-info">
        <div>{/* status */}</div>
        <ol>Welcome to the demo of our project. This sidebar will contain information about the selected year and country in the future. Currently the demo contains only a part of the year 1789. Select it from the picker above. Contact ataalikilicli@gmail.com if you have questions or if you would like to help.</ol>
      </div>
      <Table width={300} height={300} rowCount={this.props.demo.states.length} rowHeight={20} headerHeight={20} rowGetter={({index}) => this.props.demo.states[index]}>
        <Column width={100} label='Color' dataKey='color' cellRenderer={this.colorRenderer}/>
        <Column width={300} label='Name' dataKey='name'/>

      </Table>
    </div>);
  }
}

export default connect(state => ({demo: state.demo}))(SideBar);
