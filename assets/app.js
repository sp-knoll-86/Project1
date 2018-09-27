window.onload = function() {
    L.mapquest.key = 'lYrP4vF3Uk5zgTiGGuEzQGwGIVDGuy24';

    var map = L.mapquest.map('map', {
      center: [39.110298, -94.581078],
      layers: L.mapquest.tileLayer('map'),
      zoom: 12
    });

    L.mapquest.control().addTo(map);
    L.mapquest.geocodingControl().addTo(map);
  }