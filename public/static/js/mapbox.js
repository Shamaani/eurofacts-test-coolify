<script>
mapboxgl.accessToken = 'pk.eyJ1Ijoic2hhbWFhbmlib29taW4iLCJhIjoiY2tuNzVtN3l1MDFsaTJxcGllNWFiMHFzeCJ9.pejvosYHUOVMKISWubphtw';
var geojson = {
'type': 'FeatureCollection',
'features': [
{
'type': 'Feature',
'geometry': {
'type': 'Point',
'coordinates': [24.94327,60.16902]
},
'properties': {
'title': 'Mapbox',
'description': 'Washington, D.C.'
}
},
{
'type': 'Feature',
'geometry': {
'type': 'Point',
'coordinates': [-122.414, 37.776]
},
'properties': {
'title': 'Mapbox',
'description': 'San Francisco, California'
}
}
]
};
var map = new mapboxgl.Map({
container: 'map',
style: 'mapbox://styles/shamaaniboomin/ckn784su408i417pfu41tor91',
center: [24.94327,60.16902],
zoom: 16
});
// add markers to map
geojson.features.forEach(function (marker) {
// create a HTML element for each feature
var el = document.createElement('div');
el.className = 'marker';
// make a marker for each feature and add it to the map
new mapboxgl.Marker(el)
.setLngLat(marker.geometry.coordinates)
.setPopup(
new mapboxgl.Popup({ offset: 25 }) // add popups
.setHTML(
'<h3>' +
marker.properties.title +
'</h3><p>' +
marker.properties.description +
'</p>'
)
)
.addTo(map);
});
</script>
  // Pietari
  <script>
mapboxgl.accessToken = 'pk.eyJ1Ijoic2hhbWFhbmlib29taW4iLCJhIjoiY2tuNzVtN3l1MDFsaTJxcGllNWFiMHFzeCJ9.pejvosYHUOVMKISWubphtw';
var geojson = {
'type': 'FeatureCollection',
'features': [
{
'type': 'Feature',
'geometry': {
'type': 'Point',
'coordinates': [30.269361452374135, 59.94272209965926]
},
'properties': {
'title': 'Mapbox',
'description': 'Washington, D.C.'
}
},
{
'type': 'Feature',
'geometry': {
'type': 'Point',
'coordinates': [-122.414, 37.776]
},
'properties': {
'title': 'Mapbox',
'description': 'San Francisco, California'
}
}
]
};
var map2 = new mapboxgl.Map({
container: 'map2',
style: 'mapbox://styles/shamaaniboomin/ckn784su408i417pfu41tor91',
center: [30.269361452374135, 59.94272209965926],
zoom: 16
});
// add markers to map
geojson.features.forEach(function (marker) {
// create a HTML element for each feature
var el = document.createElement('div');
el.className = 'marker';
// make a marker for each feature and add it to the map
new mapboxgl.Marker(el)
.setLngLat(marker.geometry.coordinates)
.setPopup(
new mapboxgl.Popup({ offset: 25 }) // add popups
.setHTML(
'<h3>' +
marker.properties.title +
'</h3><p>' +
marker.properties.description +
'</p>'
)
)
.addTo(map2);
});
</script>
  // Bryssel
  <script>
mapboxgl.accessToken = 'pk.eyJ1Ijoic2hhbWFhbmlib29taW4iLCJhIjoiY2tuNzVtN3l1MDFsaTJxcGllNWFiMHFzeCJ9.pejvosYHUOVMKISWubphtw';
var geojson = {
'type': 'FeatureCollection',
'features': [
{
'type': 'Feature',
'geometry': {
'type': 'Point',
'coordinates': [4.369357969767122, 50.840770254548325]
},
'properties': {
'title': 'Mapbox',
'description': 'Washington, D.C.'
}
},
{
'type': 'Feature',
'geometry': {
'type': 'Point',
'coordinates': []
},
'properties': {
'title': 'Mapbox',
'description': 'San Francisco, California'
}
}
]
};
var map3 = new mapboxgl.Map({
container: 'map3',
style: 'mapbox://styles/shamaaniboomin/ckn784su408i417pfu41tor91',
center: [4.369357969767122, 50.840770254548325],
zoom: 16
});
// add markers to map
geojson.features.forEach(function (marker) {
// create a HTML element for each feature
var el = document.createElement('div');
el.className = 'marker';
// make a marker for each feature and add it to the map
new mapboxgl.Marker(el)
.setLngLat(marker.geometry.coordinates)
.setPopup(
new mapboxgl.Popup({ offset: 25 }) // add popups
.setHTML(
'<h3>' +
marker.properties.title +
'</h3><p>' +
marker.properties.description +
'</p>'
)
)
.addTo(map3);
});
</script>   