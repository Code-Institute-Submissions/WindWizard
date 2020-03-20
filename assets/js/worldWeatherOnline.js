const baseURL = 'https://api.worldweatheronline.com/premium/v1/';
/* Function that assembles the api call url and calls the jsonP function */
function JSONP_MarineWeather(input, dataObject) {
    var url = baseURL + "marine.ashx?q=" + input.query + "&format=" + input.format + "&key=" + WorldWeatherOnlineKey;
    jsonP(url, input.callback, dataObject);
}
/* Function to sort recived data into a weatherdatamatrix object.
Inputs 
weather: weatherdata recived from worldweatheronline API
dataObject: a empty weatherdatamatrix object.
  */
function sortWorldWeatherOnlineData(weather, dataObject) {
    var i;
    var j;
    for (i = 0; i < weather.length; i++) {
        for (j = 0; j < weather[i].hourly.length; j++) {
            dataObject.add(weather[i].date, weather[i].hourly[j].time, weather[i].hourly[j].tempC, weather[i].hourly[j].weatherDesc[0].value,
                weather[i].hourly[j].precipMM, Math.round(weather[i].hourly[j].windspeedKmph / 3.6), weather[i].hourly[j].winddirDegree, Math.round(weather[i].hourly[j].WindGustKmph / 3.6),
                weather[i].hourly[j].swellHeight_m, weather[i].hourly[j].waterTemp_C, weather[i].hourly[j].weatherIconUrl[0].value.replace("http:", "https:"));
        };
    };
}

/* this function is based on example in WWO documentation and then modified to 
call function sortWorldWeatherOnlineData to sort relevant information recived from the api call 
into a weatherdatamatric object, and then use the ojects methods to generate cards and display them in the DOM */
function jsonP(url, callback, dataObject) {
    $.ajax({
        type: 'GET',
        url: url,
        async: false,
        contentType: "application/json",
        jsonpCallback: callback,
        dataType: 'jsonp',
        success: function (json) {
            sortWorldWeatherOnlineData(json.data.weather, dataObject);

            dataObject.generateCards();
            dataObject.display();
        },
        error: function (xhr) {
            var errorMessage = xhr.status + ': ' + xhr.statusText
            alert('Error calling api for weatherforecast' + errorMessage);
        }
    });
}