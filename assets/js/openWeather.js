const openweather_baseurl = "https://api.openweathermap.org/data/2.5/"
/* Function that assembles the api call url and calls the jsonP1 function */
function JSONP_openWeather(input, dataObject) {
    var url = openweather_baseurl + "forecast?lat=" + input.lat + "&lon=" + input.long + "&appid=" + owkey;
    jsonP1(url, input.callback, dataObject);
}

/* Function to sort recived data into a weatherdatamatrix object.
Inputs 
weather: weatherdata recived from worldweatheronline API
dataObject: a empty weatherdatamatrix object.
  */
function sortOpenWeatherData(weather ,dataObject){
    var i = 0;
    
    for (i = 0; i < weather.length; i++) { 
        if (weather[i].hasOwnProperty('rain') == true) {
            dataObject.add(weather[i].valueOf().dt_txt.split(" ")[0], weather[i].valueOf().dt_txt.split(" ")[1].split(":")[0], Math.round(weather[i].valueOf().main.temp - 273),
            weather[i].valueOf().weather[0].description, weather[i].rain["3h"], weather[i].valueOf().wind.speed, weather[i].wind.valueOf().deg,
                "no data", "no data", "no data", "http://openweathermap.org/img/wn/" + weather[i].weather[0].icon + "@2x.png");
            
        }else if(weather[i].hasOwnProperty('snow') == true){
            dataObject.add(weather[i].valueOf().dt_txt.split(" ")[0], weather[i].valueOf().dt_txt.split(" ")[1].split(":")[0], Math.round(weather[i].valueOf().main.temp - 273),
            weather[i].valueOf().weather[0].description, weather[i].snow["3h"], weather[i].valueOf().wind.speed, weather[i].wind.valueOf().deg,
                "no data", "no data", "no data", "http://openweathermap.org/img/wn/" + weather[i].weather[0].icon + "@2x.png");
       
        }else {
            dataObject.add(weather[i].valueOf().dt_txt.split(" ")[0], weather[i].valueOf().dt_txt.split(" ")[1].split(":")[0], Math.round(weather[i].valueOf().main.temp - 273),
            weather[0].valueOf().weather[0].description, "0", weather[i].valueOf().wind.speed, weather[i].valueOf().wind.deg,
                "no data", "no data", "no data", "http://openweathermap.org/img/wn/" + weather[i].weather[0].icon + "@2x.png");
        };
    };
}
/*  this function is based on example in WWO documentation and then modified to 
call function sortWorldWeatherOnlineData to sort relevant information recived from the api call 
into a weatherdatamatric object, and then use the ojects methods to generate cards and display them in the DOM */
function jsonP1(url, callback, dataObject) {
    $.ajax({
        type: 'GET',
        url: url,
        async: false,
        contentType: "application/json",
        jsonpCallback: callback,
        dataType: 'jsonp',
        success: function (json) {
            sortOpenWeatherData(json.list ,dataObject);
            dataObject.generateCards();
            dataObject.display();
        },
        error: function (e) {
            console.log(e.message);
        }
    });
}


