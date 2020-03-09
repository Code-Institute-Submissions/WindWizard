document.addEventListener("DOMContentLoaded", function () {
    var map;

    function initMap() {
        map = new google.maps.Map(document.getElementById("map-div"), {
            zoom: 3,
            center: {
                lat: 50,
                lng: 0
            },
            streetViewControl: false,
            mapTypeControlOptions: {
                mapTypeIds: ['mywindlayer']
            }
        });
        var imgMapLayer = new google.maps.ImageMapType({
            getTileUrl: getTile(),
            tileSize: new google.maps.Size(256, 256),
            maxZoom: 9,
            minZoom: 0,
            radius: 1738000,
            name: 'mywindlayer',
        });
        map.mapTypes.set('mywindlayer', imgMapLayer);
        map.setMapTypeId('mywindlayer');
    };

    /*     var infowindow = new google.maps.InfoWindow();
        google.maps.event.addListener(map, 'idle', checkIfDataRequested);
        map.data.addListener("click", function (event) {
            infowindow.setContent("hej hopp")
            infowindow.setOptions({
                position: {
                    lat: event.latLng.lat(),
                    lng: event.latLng.lng()
                },
                pixelOffset: {
                    width: 0,
                    height: -15
                }
            });

        }); */
    // the following functions were adapted from
    // https://developers.google.com/maps/documentation/javascript/examples/map-coordinates
    var TILE_SIZE = 256;

    

    function project() {
        var siny = Math.sin(map.getCenter().lat() * Math.PI / 180);

        // Truncating to 0.9999 effectively limits latitude to 89.189. This is
        // about a third of a tile past the edge of the world tile.
        siny = Math.min(Math.max(siny, -0.9999), 0.9999);

        return new google.maps.Point(
            TILE_SIZE * (0.5 + map.getCenter().lng() / 360),
            TILE_SIZE * (0.5 - Math.log((1 + siny) / (1 - siny)) / (4 * Math.PI)));
    }

    function getWindLayer(tilecords) {
        var windmapurl = "https://tile.openweathermap.org/map/wind_new/" + map.getZoom() + "/" + tilecords.x + "/" + tilecords.y + ".png?appid=" + owkey;
        console.log(windmapurl);
        return windmapurl;
    }
    function getTile() {
        var scale = 1 << map.getZoom();
        var worldCoords = project();
        var tileCoordinate = new google.maps.Point(
            Math.floor(worldCoords.x * scale / TILE_SIZE),
            Math.floor(worldCoords.y * scale / TILE_SIZE));
        windLayerURL = getWindLayer(tileCoordinate);
        return windLayerURL;
    }

    initMap()

    /* map.overlayMapTypes.insertAt(0, imgMapLayer) */
})