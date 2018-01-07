import React from 'react';

import Buttons from './Buttons';

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

export default SideBar;