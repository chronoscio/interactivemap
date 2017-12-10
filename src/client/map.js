import Leaflet from 'leaflet'
import Axios from 'axios'

var map = Leaflet.map('map_canvas').setView([
  0, 0
], 4);

Leaflet.tileLayer('http://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png', {attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'}).addTo(map);

var geoLayer = Leaflet.geoJSON(null, {
  style: function(feature) {
    return {color: feature.properties.color};
  }
}).addTo(map);

function getGeoJSONLayer(url) {
  return Axios.get(url);
}

function getAttributes(url) {
  return Axios.get(url);
}

export function changeTime(time) {
  geoLayer.clearLayers();
  var geoAPI = 'http://146.185.177.41/get/coordinates?timestamp='
  var attrbAPI = 'http://146.185.177.41/get/attributes?code='
  Axios.all([
    getGeoJSONLayer(geoAPI.concat(time)),
    getGeoJSONLayer(geoAPI.concat(time))
  ]).then(Axios.spread(function(geo, perms) {
    // Both requests are now complete
    geoLayer.addData(geo.data);

  }));

  var countries = geoLayer.getLayers();
  for (let country of countries) {
    country.on('click', function(ev) {
      for (let countryToHide of countries) {
        console.log(ev.target.feature.properties.country);
        console.log(countryToHide.feature.properties.country);
        if (ev.target.feature.properties.country === countryToHide.feature.properties.country) {
          countryToHide.remove();
        }
        ev.target.remove();
      }
      console.log(geoLayer.getLayers())
    })
  }
}
