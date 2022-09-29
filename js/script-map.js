
//OSM map, для подключения нужно активировать index.html css и js leaflet
//https://cdn.lima-labs.com/{z}/{x}/{y}.png?api=demo - англо-русские названия
//https://tile.openstreetmap.org/{z}/{x}/{y}.png - по умолчанию


var map = L.map('map').setView([64.943434, 43.719561], 7);
L.tileLayer('https://cdn.lima-labs.com/{z}/{x}/{y}.png?api=demo', {
    maxZoom: 19,
    attribution: '© OpenStreetMap'
}).addTo(map);

//Mapbox карта с ключом со старого сайта
//токен с сайта pk.eyJ1IjoiZm9tY2EiLCJhIjoiY2ltN2NieG1zMDAwOHdva25yZTJ1aDJ5aiJ9.HZ9xx2AwvP6RC38V1XG3Zw 
//мой токен pk.eyJ1Ijoidm9zdG9rb2YiLCJhIjoiY2w3eXhpaXVzMGE1OTQxbHdjM3k1eGhtaSJ9.l911LHhy8D-Lsf72Y2OIPg

/* L.mapbox.accessToken = 'pk.eyJ1Ijoidm9zdG9rb2YiLCJhIjoiY2w3eXhpaXVzMGE1OTQxbHdjM3k1eGhtaSJ9.l911LHhy8D-Lsf72Y2OIPg';
var map = L.map('map').setView([64.943434, 43.719561], 7);
L.tileLayer(
    'https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/{z}/{x}/{y}?access_token=' + L.mapbox.accessToken, {
        maxZoom: 19,
        tileSize: 512,
        zoomOffset: -1,
        setZoom: 1 */
/*         attribution: '© <a href="https://www.mapbox.com/contribute/">Mapbox</a> © <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>' */
/*     }).addTo(map); */




/* map.attributionControl.setPrefix(''); */ // Don't show the 'Powered by Leaflet' text.


//Назначаем KML геозону
var kmlLayer = new L.KML("kml/geo.kml", {
    async: true,
});
                                                                  
kmlLayer.on("loaded", function(e) { 
    map.fitBounds(e.target.getBounds());
});


map.addLayer(kmlLayer);

/* var kmlLayer02 = new L.KML("kml/mez.kml", {async: true});
                                                                  
kmlLayer02.on("loaded", function(e) { 
    map.fitBounds(e.target.getBounds());
});

map.addLayer(kmlLayer02); */

/* var latlngs = [
    [17.385044, 78.486671],
    [16.506174, 80.648015],
    [17.000538, 81.804034],
    [17.686816, 83.218482]
 ];

var polyline = L.polyline(latlngs, {color: 'red'});
polyline.addTo(map); */



/* var paleng = L.marker([64.161122, 42.297571]).addTo(map);
var blueIcon = L.icon({
    iconUrl: 'marker-icon.png',

}); */


//Свойства для маркера
var LeafIcon = L.Icon.extend({
    options: {
        /* shadowUrl: 'images/marker-icon.png', */
        iconSize:     [40, 40],
        /* shadowSize:   [50, 50], */
        iconAnchor:   [20, 40],
        /* shadowAnchor: [4, 62], */
        popupAnchor:  [0, -40]
    }
});


//иконки для маркеров, можно любые svg png
var redIcon = new LeafIcon({iconUrl: 'images/red.svg'});
var greenIcon = new LeafIcon({iconUrl: 'images/green.svg'});




//реки, маркеры

//БПУ
var paleng = L.marker([64.161122, 42.297571], {icon: redIcon}).bindPopup('р. Пинега').addTo(map);

//ППУ
var pineg = L.marker([64.713112, 43.520262], {icon: redIcon}).bindPopup('р. Пинега').addTo(map);
var pocha = L.marker([64.544512, 43.939191], {icon: redIcon}).bindPopup('р. Пинега').addTo(map);

//МПУ
var mezengl = L.marker([65.591189, 44.619157], {icon: redIcon}).bindPopup('р. Мезень').addTo(map);
var pezagl = L.marker([65.624215, 44.607320], {icon: redIcon}).bindPopup('р. Пёза').addTo(map);
var mezkam = L.marker([65.828404, 44.197913], {icon: redIcon}).bindPopup('р. Пёза').addTo(map);
var mezrazv = L.marker([65.661164, 44.774100], {icon: redIcon}).bindPopup('р. Няфта').addTo(map);
var mezrazv2 = L.marker([65.782181, 45.034288], {icon: redIcon}).bindPopup('п. Пёза').addTo(map);

//КПУ
var pinegayas = L.marker([64.029511, 44.111923], {icon: redIcon}).bindPopup('р. Пинега').addTo(map);
var pinegashot = L.marker([63.991281, 44.350056], {icon: redIcon}).bindPopup('р. Пинега').addTo(map);
var pinegapirin = L.marker([65.591189, 44.619157], {icon: redIcon}).bindPopup('р. Мезень').addTo(map);

//ЛПУ
var mezlesh = L.marker([64.921430, 45.686322], {icon: redIcon}).bindPopup('р. Мезень').addTo(map);
var vashlesh = L.marker([64.902496, 45.787128], {icon: redIcon}).bindPopup('р. Вашка').addTo(map);
var vash = L.marker([64.610565, 46.075832], {icon: redIcon}).bindPopup('р. Вашка').addTo(map);
var pilema = L.marker([64.993264, 46.003790], {icon: redIcon}).bindPopup('р. Пылема').addTo(map);
var irasa = L.marker([65.007676, 46.126537], {icon: redIcon}).bindPopup('р. Ираса').addTo(map);
var cebuga = L.marker([64.954722, 46.415513], {icon: redIcon}).bindPopup('р. Цебьюга').addTo(map);
var mezkima = L.marker([64.833919, 47.498884], {icon: redIcon}).bindPopup('р. Мезень').addTo(map);
var vibor = L.marker([64.542024, 48.003236], {icon: redIcon}).bindPopup('руч. Выбор').addTo(map);
var ezhuga = L.marker([64.934973, 45.607621], {icon: redIcon}).bindPopup('р. Ёжуга').addTo(map);
var mezkiss = L.marker([64.644088, 47.854013], {icon: redIcon}).bindPopup('р. Мезень').addTo(map);
var mezzas = L.marker([64.667425, 47.803456], {icon: redIcon}).bindPopup('р. Мезень').addTo(map);
var pizhma = L.marker([64.510809, 48.536664], {icon: redIcon}).bindPopup('р. М. Пижма').addTo(map);
var mezzub = L.marker([64.507169, 48.486107], {icon: redIcon}).bindPopup('р. Мезень').addTo(map);





function markerMitGreen(pos,txt) {
    var markerMitGreen = L.marker(pos, {icon:greenIcon})
              .addTo(map);
    markerMitGreen.bindPopup(txt);
    markerMitGreen.openPopup();
    map.panTo(new L.LatLng(pos[0],pos[1]));
}

function markerMitRed(pos,txt) {
    var markerMitRed = L.marker(pos, {icon:redIcon})
              .addTo(map);
    markerMitRed.bindPopup(txt);
    markerMitRed.openPopup();
    map.panTo(new L.LatLng(pos[0],pos[1]));
}

            
