import React from 'react';
import {connect} from 'react-redux';
import {Map, TileLayer, GeoJSON} from 'react-leaflet';
import Control from 'react-leaflet-control';

class LeafletMap extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      highlighted: "Hover for details.",
      viewport: {
        center: [
          50, 10
        ],
        zoom: 4
      }
    };
  }

  onViewportChanged = (viewport) => {
    // The viewport got changed by the user, keep track in state
    this.setState({viewport: viewport})
  }

  render() {
    var geoLayer;
    var highlighted = "Hover over for more info.";

    if (this.props.demo.geo !== undefined && this.props.demo.geo !== null) {
      var styleFunc = function(feature) {
        return {color: feature.properties.color};
      }

      var onEachFeature = (feature, layer) => {
        layer.on({
          mouseover: (e) => this.setState({highlighted: e.target.feature.properties.name}),
          mouseout: (e) => {
            this.setState({highlighted: "Hover over for more info."})

          },
          // click: (e) => {TODO Set clicked on state. Add info on sidebar }
        })
      };
      geoLayer = <GeoJSON data={this.props.demo.geo} style={styleFunc} onEachFeature={onEachFeature}/>

    }

    //TODO cleanup the below control
    return (<Map viewport={this.state.viewport} onViewportChanged={this.onViewportChanged}>
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" attribution="&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"/> {geoLayer}

      <Control position="topright">
        <div className="info-pane">
          <b>
            {this.state.highlighted}
          </b>

        </div>
      </Control>
    </Map>);
  }
}

export default connect(state => ({demo: state.demo}))(LeafletMap);
