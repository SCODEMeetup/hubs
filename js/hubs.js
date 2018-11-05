// Initialize map and set view
var mymap = L.map('maphubs').setView([40.013613, -82.967413], 12);

// Create tile layer
L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoibWF0aGVtYXRpY3NjbHRkIiwiYSI6ImNqbXVla3FncjJoYjkzcnFjdzV1czh5NG4ifQ.W3VOBw1dRC2xN2ZVxrD19w', {
attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
maxZoom: 18,
minZoom: 11,
id: 'mapbox.light',
accessToken: 'your.mapbox.access.token'
}).addTo(mymap);

$(function() {
    // Load GeoJSON from Hubs file
    $.getJSON('data/hubs.geojson').done(function(hubs) {  
        L.geoJson(hubs, {
            onEachFeature: function (feature, layer) {
                layer.bindPopup(feature.properties.name);
            }
        }).addTo(mymap)
    });
});

$(function() {
    // Load GeoJSON from CMAX file
    $.getJSON('data/cmax.geojson').done(function(cmax) {  
        L.geoJson(cmax, {
            style: function (feature) {
                return {color: feature.properties.color}
                } 
            }).bindPopup(function (layer) {
                return layer.feature.properties.name;
            }).addTo(mymap)
    });
});
