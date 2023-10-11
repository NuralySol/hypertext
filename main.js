newdiv = document.createElement('div');
document.querySelector('body').appendChild(newdiv);
console.log('HI this is my Work');

const obj = { name: 'Nuraly' };


let myMap = L.map("map").setView([49.07, 32.66], 4);

L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
    // Attribution is obligatory as per copyright!
    maxZoom: 20
}).addTo(myMap);

let kiev_marker = L.marker([50.434341, 30.527756]).addTo(myMap);
let kherson_marker = L.marker([46.6354, 32.6169]).addTo(myMap);
let crimea_marker = L.marker([44.9521, 34.1024]).addTo(myMap);
let donetsk_marker = L.marker([48.023, 37.80224]).addTo(myMap);

kiev_marker.bindPopup("<b>Capital of Ukraine Kyiv</b>");
kherson_marker.bindPopup("<b>Recently liberated City</b>");
crimea_marker.bindPopup("<b>Crimea</b>");
donetsk_marker.bindPopup("<b>Most of the fighting is in the East</b>")

var myIcon = L.icon({
    iconUrl: 'myicon.png',
    iconSize: [38, 95],
    iconAnchor: [22, 94],
    popupAnchor: [-3, -76],
});

L.marker([55.7558, 37.6173], {icon: myIcon}).addTo(myMap);