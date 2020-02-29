var openweather_baseurl = "api.openweathermap.org/data/2.5/"
var oWData = new weatherDataMatrix();

function JSONP_openWeather(input) {
    var url = openweather_baseurl + "forecast?lat=" + input.lat + "&lon=" + input.long + "&appid=" + owkey;
}



