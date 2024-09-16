const socket = io();

// Show loading spinner
window.addEventListener("DOMContentLoaded", () => {
  document.getElementById("loading-spinner").style.display = "block";
});

// Hide loading spinner when page and scripts are fully loaded
window.addEventListener("load", () => {
  document.getElementById("loading-spinner").style.display = "none";
});

if (navigator.geolocation) {
  navigator.geolocation.watchPosition(
    (position) => {
      const { latitude, longitude } = position.coords;
      socket.emit("send-location", { latitude, longitude });
    },
    (error) => {
      console.error("Error getting location:", error);
      if (error.code === 1) {
        console.error("User denied geolocation permission.");
      } else if (error.code === 2) {
        console.error("Position is unavailable.");
      } else if (error.code === 3) {
        console.error("Timeout while retrieving position.");
      }
    },
    {
      enableHighAccuracy: true,
      timeout: 5000,
      maximumAge: 0,
    }
  );
}

const map = L.map("map").setView([0, 0], 16); // Default view (initial)

L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
  maxZoom: 19,
  attribution:
    '&copy; <a target="_blank" href="https://www.github.com/fawad-10" style="font-weight : bold;">Ahmed Fawad Awan</a>',
}).addTo(map);

const markers = {};

// Corrected event name: "receive-location"
socket.on("receive-location", (data) => {
  const { id, latitude, longitude } = data;

  // Center the map on the first location received
  if (!markers[id]) {
    map.setView([latitude, longitude], 16);
  }

  // Update or create markers for each user
  if (markers[id]) {
    markers[id].setLatLng([latitude, longitude]);
  } else {
    markers[id] = L.marker([latitude, longitude]).addTo(map);
  }
});

// Remove marker when a user disconnects
socket.on("user-disconnected", (id) => {
  if (markers[id]) {
    map.removeLayer(markers[id]);
    delete markers[id];
  }
});
