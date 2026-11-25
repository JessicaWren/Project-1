function initMap() {
  const center = { lat: 41.8781, lng: -87.6298 };

  const cities = [
    { name: "Chicago", position: { lat: 41.8781, lng: -87.6298 } },
    { name: "New York", position: { lat: 40.7128, lng: -74.0060 } },
    { name: "Washington, DC", position: { lat: 38.9072, lng: -77.0369 } },
    { name: "Los Angeles", position: { lat: 34.0522, lng: -118.2437 } },
  ];

  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 12,
    center: center,
  });

  const infoWindow = new google.maps.InfoWindow();

  cities.forEach((city) => {
    const marker = new google.maps.Marker({
      position: city.position,
      map: map,
      title: city.name,
    });

    marker.addListener("click", () => {
      infoWindow.setContent("<h3>" + city.name + "</h3>");
      infoWindow.open(map, marker);
      map.setCenter(city.position);
    });
  });
}
