// this document was copied from googlemaps documentation for javaScript and modified
function CoordMapType(tileSize) {
    this.tileSize = tileSize;
}
CoordMapType.prototype.getTile = function (coord, zoom, ownerDocument) {
    var div = ownerDocument.createElement('div');
    var windurl = "https://tile.openweathermap.org/map/wind_new/" + zoom + "/" + coord.x + "/" + coord.y + ".png?appid=" + owkey;
    div.style.width = this.tileSize.width + 'px';
    div.style.height = this.tileSize.height + 'px';
    div.style.backgroundImage = "url('" + windurl + "')";
    return div;

};

function initMap() {
    var map = new google.maps.Map(document.getElementById('map-div'), {
        zoom: 4,
        center: {
            lat: 41.850,
            lng: -7.650
        }
    });


    // Insert this overlay map type as the first overlay map type at
    // position 0. Note that all overlay map types appear on top of
    // their parent base map.
    map.overlayMapTypes.insertAt(
        0, new CoordMapType(new google.maps.Size(256, 256)));

    map.addListener('click', function(){
        var marker = new
    });
}