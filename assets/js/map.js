function initMap(){
    var map = new google.maps.Map(document.getElementById("map-div"), {
        zoom: 3,
        center: {
            lat: 50,
            lng:50
        }
    });
}