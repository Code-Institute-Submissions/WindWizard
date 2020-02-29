var openweather_baseurl = "https://api.openweathermap.org/data/2.5/"
var oWData = new weatherDataMatrix();

function JSONP_openWeather(input) {
    var url = openweather_baseurl + "forecast?lat=" + input.lat + "&lon=" + input.long + "&appid=" + owkey;
    jsonP1(url, input.callback);
}

function jsonP1(url, callback) {
    $.ajax({
        type: 'GET',
        url: url,
        async: false,
        contentType: "application/json",
        jsonpCallback: callback,
        dataType: 'jsonp',
        success: function (json) {
            console.dir('success');
            console.log(json)
        },
        error: function (e) {
            console.log(e.message);
        }
    });
}


