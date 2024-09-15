const socket = io();
let lastEmitTime = 0;
const emitInterval = 5000; // Every 5 seconds

navigator.geolocation.watchPosition(
  (position) => {
    const currentTime = new Date().getTime();
    if (currentTime - lastEmitTime > emitInterval) {
      const { latitude, longitude } = position.coords;
      socket.emit("send-location", { latitude, longitude });
      lastEmitTime = currentTime;
    }
  },
  (error) => {
    console.error("Error getting location:", error);
  },
  {
    enableHighAccuracy: true,
    maximumAge: 0,
    timeout: 5000,
  }
);

const map = L.map("map").setView([0, 0], 5); // setView([coords] , zoom)

L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
  attribution:
    '&copy; <a target=_blank href="https://www.github.com/fawad-10" style="font-weight : bold;">Ahmed Fawad Awan  </a>',
}).addTo(map);

const markers = {};

let mapCentered = false;

socket.on("recieve-location", (data) => {
  const { id, latitude, longitude } = data;

  // Center only if it's the first time the user's location is received
  if (!mapCentered) {
    map.setView([latitude, longitude], 16);
    mapCentered = true;
  }

  if (markers[id]) {
    markers[id].setLatLng([latitude, longitude]);
  } else {
    markers[id] = L.marker([latitude, longitude])
      .bindPopup("You are here")
      .addTo(map);
  }
});

socket.on("user-disconnected", (id) => {
  if (markers[id]) {
    map.removeLayer(markers[id]);
    delete markers[id];
  }
});
