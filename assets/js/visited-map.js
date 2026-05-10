(function () {
  var cities = [
    { name: "Yerevan (home)", coords: [40.1792, 44.4991], url: "" },
    { name: "Tbilisi", coords: [41.7151, 44.8271], url: "" },
    {
      name: "Dubrovnik",
      coords: [42.6507, 18.0944],
      url: "https://analog.am/c/888560952011085752",
    },
    {
      name: "Vienna",
      coords: [48.2082, 16.3738],
      url: "https://analog.am/c/898292144343581236",
    },
    {
      name: "Rome",
      coords: [41.9028, 12.4964],
      url: "https://analog.am/c/852519584180510357",
    },
    { name: "Odessa", coords: [46.4825, 30.7233], url: "" },
  ];
  var map = L.map("visited-map", {
    zoomControl: false,
    attributionControl: false,
  }).setView([43.5, 24.0], 4);
  L.control.zoom({ position: "bottomright" }).addTo(map);
  L.control
    .attribution({ position: "bottomleft", prefix: false })
    .addAttribution(
      '&copy; <a href="https://www.openstreetmap.org/copyright">OSM</a> &middot; tiles by <a href="https://carto.com/attributions">CARTO</a>',
    )
    .addTo(map);
  L.tileLayer(
    "https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png",
    {
      subdomains: "abcd",
      maxZoom: 20,
    },
  ).addTo(map);
  var pin = L.divIcon({
    className: "visited-pin",
    iconSize: [10, 10],
    iconAnchor: [5, 5],
  });
  cities.forEach(function (c) {
    var popup = c.url
      ? '<a href="' + c.url + '" target="_blank">' + c.name + " &mdash; photos</a>"
      : c.name;
    L.marker(c.coords, { icon: pin }).addTo(map).bindPopup(popup);
  });
})();
