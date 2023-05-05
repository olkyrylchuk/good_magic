function initMap() {
    const myLatLng = { lat: 50.80623, lng: 30.13139 };
    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 15,
        center: myLatLng,
    });

    new google.maps.Marker({
        position: myLatLng,
        map,
        title: "Hello World!",
    });
}

window.initMap = initMap;
