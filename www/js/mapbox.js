mapboxgl.accessToken = 'pk.eyJ1IjoidGhlc2lzbG9sIiwiYSI6ImNqczJud29iaDA4Z3E0NHQ5dnVtOHptMzgifQ.0EnmkqpuM4VwpJRo75yoyw';

var map = new mapboxgl.Map({
    container: 'map', // container id
    style: 'mapbox://styles/mapbox/streets-v9', // stylesheet location
    center: [7.043841, 125.337050], // starting position [lng, lat]
    zoom: 20 // starting zoom
});

  // create the marker
    new mapboxgl.Marker()
    .setLngLat([7.043841, 125.337050])
    .addTo(map);

// var map = new mapboxgl.Map({
//     container: 'map',
//     style: 'mapbox://styles/mapbox/cjaudgl840gn32rnrepcb9b9g', // the outdoors-v10 style but without Hillshade layers
//     center: [7.043841, 125.337050], // starting position [lng, lat]
//     zoom: 9
// });
// map.on('load', function () {
//     map.addSource('dem', {
//     "type": "raster-dem",
//     "url": "mapbox://mapbox.terrain-rgb"
//     });
//     map.addLayer({
//     "id": "hillshading",
//     "source": "dem",
//     "type": "hillshade"
//     // insert below waterway-river-canal-shadow;
//     // where hillshading sits in the Mapbox Outdoors style
//     }, 'waterway-river-canal-shadow');
// });

//   // create the marker
//   new mapboxgl.Marker()
//   .setLngLat([7.043841, 125.337050])
//   .addTo(map);