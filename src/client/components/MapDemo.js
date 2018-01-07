import React from 'react';
import {connect} from 'react-redux';

import Map from './Map';
import Sidebar from './Sidebar';

class MapDemo extends React.Component {

    render() {
        return (
            <div>
                <div className="map-container">
                    <Map />
                </div>
                <Sidebar />
            </div>
        );
    }
}

export default connect(state => ({

}))(MapDemo);