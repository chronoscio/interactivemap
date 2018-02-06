import React from 'react';
import { connect } from 'react-redux';
import { Map, Marker, Popup, TileLayer, GeoJSON } from 'react-leaflet';

const position = [30, 20]

class LeafletMap extends React.Component {

    render() {
        var geoLayer;
        if(this.props.demo.geo !== undefined && this.props.demo.geo !== null)
        {
          //console.log(this.props.demo.geo.data.geojson);
          var styleFunc = function(feature) {
            return {color: feature.properties.colour};
          }

          geoLayer = <GeoJSON data={this.props.demo.geo} style={styleFunc} />
        }
        return (
            <Map center={position} zoom={4}>
              <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution="&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
              />
              {geoLayer}
            </Map>
        );
    }
}

export default connect(state => ({
  demo: state.demo
}))(LeafletMap);
