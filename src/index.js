import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
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
    return (
      <div>
        <button className="sidebar-button" onClick={ () => MapJS.changeTime(14530101)}>Test1</button>
      </div>
    );
  }
}

// ========================================

ReactDOM.render(
  <SideBar/>, document.getElementById('react'));
