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
            console.log(json.list[0]);
            var i;
            for (i = 0; i<json.list.length; i++ );{
                oWData.add(json.list[i].dt_txt.split(' ')[0],json.list[i].dt_txt.split(' ')[1], json.list[i].main.temp-273, json.list[i].weather[0].toString(), json.list[i].rain. );
            };
        },
        error: function (e) {
            console.log(e.message);
        }
    });
}


