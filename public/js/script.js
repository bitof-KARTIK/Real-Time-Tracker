const socket = io();

if (navigator.geolocation) {
    navigator.geolocation.watchPosition((position) => {
        const { latitude, longitude } = position.coords;
        socket.emit("send-location", { latitude, longitude });
    }, (err) => {
        console.log(err);
    }, {
        enableHighAccuracy: true,
        maximumAge: 0,
        timeout: 5000
    });
}

const map = L.map("map").setView([0, 0], 16);
L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution: "bitof-KARTIK"
}).addTo(map);

const markers = {};
let lastKnownId; 

socket.on("received-location", (data) => {
    const {id, latitude, longitude} = data;
    map.setView([latitude, longitude]);
    if (markers[id]) {
        markers[id].setLatLng([latitude, longitude]); 
    } else {
        markers[id] = L.marker([latitude, longitude]).addTo(map);
    }
    lastKnownId = id; 
});

socket.on("user-disconnected", () => {
    if (lastKnownId) {
        map.removeLayer(markers[lastKnownId]);
        delete markers[lastKnownId];
    }
});
