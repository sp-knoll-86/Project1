window.onload = function () {
    // // display map in #mapID div
    // var map = L.map('mapID').setView([51.505, -0.09], 13);

    // L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    //     attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    // }).addTo(map);

    // // add geolocator to map
    // // var cloudmadeAttribution = 'Map data &copy; 2011 OpenStreetMap contributors, Imagery &copy; 2011 CloudMade',
    // //     cloudmade = new L.TileLayer('http://{s}.tile.cloudmade.com/BC9A493B41014CAABB98F0471D759707/997/256/{z}/{x}/{y}.png', {attribution: cloudmadeAttribution});

    // // var map = new L.Map('mapID').addLayer(cloudmade).setView(new L.LatLng(48.5, 2.5), 15);

    // // var bingGeocoder = new L.Control.BingGeocoder('Ant8nT6Q0XGdXr6lCGohrR8SHSRxqU89-m3nWlQmHA6gHBwttpfxGddRcCUPT4Iq');

    // // map.addControl(bingGeocoder);

    // // var options = {
    // //     collapsed: true, /* Whether its collapsed or not */
    // //     position: 'topright', /* The position of the control */
    // //     text: 'Locate', /* The text of the submit button */
    // //     callback: function (results) {
    // //         var bbox = results.resourceSets[0].resources[0].bbox,
    // //             first = new L.LatLng(bbox[0], bbox[1]),
    // //             second = new L.LatLng(bbox[2], bbox[3]),
    // //             bounds = new L.LatLngBounds([first, second]);
    // //         this._map.fitBounds(bounds);
    // //     }
    // // };

    // // // geolocator to setup start location based on IP
    // // var pos = L.GeoIP.getPosition();
    // // L.GeoIP.centerMapOnPosition(map, 13);

    // // polyline from preset latitude/longitude coordinates
    // var latlngs = [
    //     [[45.51, -122.68],
    //      [37.77, -122.43],
    //      [34.04, -118.2]],
    //     [[40.78, -73.91],
    //      [41.83, -87.62],
    //      [32.76, -96.72]]
    // ];
    // var polyline = L.polyline(latlngs, {color: 'red'}).addTo(map);
    // // zoom the map to the polyline
    // map.fitBounds(polyline.getBounds());

    // creating variable for current location via geolocation
    var options = {
        enableHighAccuracy: false,
        timeout: 5000,
        maximumAge: 0
      };
      
      function success(pos) {
        var crd = pos.coords;
      
        console.log('Your current position is:');
        console.log(`Latitude : ${crd.latitude}`);
        console.log(`Longitude: ${crd.longitude}`);
        console.log(`More or less ${crd.accuracy} meters.`);
      }
      
      function error(err) {
        console.warn(`ERROR(${err.code}): ${err.message}`);
      }
      
      navigator.geolocation.getCurrentPosition(success, error, options);

    // mapquest map effort
    L.mapquest.key = '7icjBQkwAKxEOJlAmMIzzG0HGstUCVoe';

    // 'map' refers to a <div> element with the ID map
    var map = L.mapquest.map('mapID', {
        center: [37.7749, -122.4194],
        layers: L.mapquest.tileLayer('map'),
        zoom: 12
    });
    map.addControl(L.mapquest.control());
    console.log(map);
};