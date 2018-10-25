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

L.marker([39.9935, -82.9816], {opacity: 0.75}).addTo(mymap)
    .bindPopup("<b>Linden Transit Center</b>").openPopup();

L.marker([40.041019, -82.961403], {opacity: 0.75}).addTo(mymap)
    .bindPopup("<b>Northern Lights Park & Ride</b>").openPopup();

L.marker([40.060928, -82.909644], {opacity: 0.75}).addTo(mymap)
    .bindPopup("<b>Easton Transit Center</b>").openPopup();

L.marker([40.000096, -82.969183], {opacity: 0.75}).addTo(mymap)
    .bindPopup("<b>St. Stephen's Community House</b>").openPopup();

L.marker([39.969922, -82.990277], {opacity: 0.75}).addTo(mymap)
    .bindPopup("<b>Columbus State Community College</b>").openPopup();

L.marker([40.012602, -82.968394], {opacity: 0.75}).addTo(mymap)
    .bindPopup("<b>Columbus Metropolitan Library - Linden Branch</b>").openPopup();