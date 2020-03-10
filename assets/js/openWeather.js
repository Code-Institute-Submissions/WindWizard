const openweather_baseurl = "https://api.openweathermap.org/data/2.5/"
var oWData = new weatherDataMatrix();

function JSONP_openWeather(input, dataObject) {
    var url = openweather_baseurl + "forecast?lat=" + input.lat + "&lon=" + input.long + "&appid=" + owkey;
    jsonP1(url, input.callback, dataObject);
}

/* function JSONP_openWeather_current(input) */

function jsonP1(url, callback, dataObject) {
    $.ajax({
        type: 'GET',
        url: url,
        async: false,
        contentType: "application/json",
        jsonpCallback: callback,
        dataType: 'jsonp',
        success: function (json) {
            console.dir('success');
            var i = 0;
           
            for (i = 0; i < json.list.length; i++) { 
                if (json.list[i].hasOwnProperty('rain') == true) {
                    dataObject.add(json.list[i].valueOf().dt_txt.split(" ")[0], json.list[i].valueOf().dt_txt.split(" ")[1].split(":")[0], Math.round(json.list[i].valueOf().main.temp - 273),
                    json.list[i].valueOf().weather[0].description, json.list[i].rain["3h"], json.list[i].valueOf().wind.speed, json.list[i].wind.valueOf().deg,
                        "no data", "no data", "no data", "http://openweathermap.org/img/wn/" + json.list[i].weather[0].icon + "@2x.png");

                }else if(json.list[i].hasOwnProperty('snow') == true){
                    dataObject.add(json.list[i].valueOf().dt_txt.split(" ")[0], json.list[i].valueOf().dt_txt.split(" ")[1].split(":")[0], Math.round(json.list[i].valueOf().main.temp - 273),
                    json.list[i].valueOf().weather[0].description, json.list[i].snow["3h"], json.list[i].valueOf().wind.speed, json.list[i].wind.valueOf().deg,
                        "no data", "no data", "no data", "http://openweathermap.org/img/wn/" + json.list[i].weather[0].icon + "@2x.png");
               
                }else {
                    dataObject.add(json.list[i].valueOf().dt_txt.split(" ")[0], json.list[i].valueOf().dt_txt.split(" ")[1].split(":")[0], Math.round(json.list[i].valueOf().main.temp - 273),
                    json.list[0].valueOf().weather[0].description, "0", json.list[i].valueOf().wind.speed, json.list[i].valueOf().wind.deg,
                        "no data", "no data", "no data", "http://openweathermap.org/img/wn/" + json.list[i].weather[0].icon + "@2x.png");
                };
            };
            dataObject.generateCards();
            dataObject.display();
        },
        error: function (e) {
            console.log(e.message);
        }
    });
}


