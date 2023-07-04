let map = L.map('map', { zoomControl:true }).setView([49.2066, 16.6079], 17);

L.tileLayer('https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}', {
  maxZoom: 19
}).addTo(map);

let myIcon = L.icon({
    iconUrl: './map-marker.png',
    iconSize: [48, 48],
    iconAnchor: [24, 48],
    popupAnchor: [0, -40],
    shadowSize: [68, 95],
    shadowAnchor: [22, 94]
});

let strom = L.marker([49.2069972, 16.6086150], {icon: myIcon}).addTo(map);
let html = `<b>Tady bydlí ptáčci</b>
<br>
<br>
<audio controls>
  <source src="./sound/bird2.mp3" type="audio/mpeg">
Your browser does not support the audio element.
</audio>`
strom.bindPopup(html, {maxWidth: 440})


let kasna = L.marker([49.2064153, 16.6073919], {icon: myIcon}).addTo(map);
let html2 = `<b>Tady bydlí ptáčci u vody</b>
<br>
<br>
<audio controls>
  <source src="./sound/bird1.mp3" type="audio/mpeg">
Your browser does not support the audio element.
</audio>`
kasna.bindPopup(html2, {maxWidth: 440})