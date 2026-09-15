(function () {
  // Each city has one set of coords and any number of links ({ name, url }).
  var cities = [
    { name: "Yerevan (home)", coords: [40.1792, 44.4991], links: [] },
    { name: "Tbilisi", coords: [41.7151, 44.8271], links: [] },
    {
      name: "Dubrovnik",
      coords: [42.6507, 18.0944],
      links: [
        { name: "Photos - 2025", url: "https://analog.am/c/888560952011085752" },
      ],
    },
    {
      name: "Vienna",
      coords: [48.2082, 16.3738],
      links: [
        { name: "Photos - 2025", url: "https://analog.am/c/898292144343581236" },
      ],
    },
    {
      name: "Rome",
      coords: [41.9028, 12.4964],
      links: [
        { name: "Photos - 2025", url: "https://analog.am/c/852519584180510357" },
      ],
    },
    { name: "Odessa", coords: [46.4825, 30.7233], links: [] },
    {
      name: "Hamburg", coords: [53.5511, 9.9937], links: [
        { name: "Photos - 2026", url: 'https://analog.am/c/971396633983012083' }
      ]
    },
    {
      name: "Berlin", coords: [52.5200, 13.4050], links: [
        { name: "Photos - 2026", url: 'https://analog.am/c/971396633983012083' }
      ]
    },
  ];
  var map = L.map("visited-map", {
    zoomControl: false,
    attributionControl: false,
  });
  map.fitBounds(
    L.latLngBounds(
      cities.map(function (c) {
        return c.coords;
      }),
    ),
    { padding: [30, 30] },
  );
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
  function escapeHtml(s) {
    return String(s)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }
  cities.forEach(function (c) {
    var links = (c.links || []).filter(function (l) {
      return l && l.url;
    });
    var popup = "<strong>" + escapeHtml(c.name) + "</strong>";
    links.forEach(function (l) {
      popup +=
        '<br><a href="' +
        escapeHtml(l.url) +
        '" target="_blank" rel="noopener">' +
        escapeHtml(l.name || "link") +
        "</a>";
    });
    L.marker(c.coords, { icon: pin }).addTo(map).bindPopup(popup);
  });
})();
