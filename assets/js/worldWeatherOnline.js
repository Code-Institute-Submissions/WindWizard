var baseURL = 'https://api.worldweatheronline.com/premium/v1/';
var key = wwokey;

var wWOData = new weatherDataMatrix();


document.addEventListener("DOMContentLoaded", function () {
    var test = new inputBuilder("48.834,2.394"); /* Hardcode location */
    JSONP_MarineWeather(test);
    console.log(wWOData)

});


function JSONP_MarineWeather(input) {
    var url = baseURL + "marine.ashx?q=" + input.query + "&format=" + input.format + "&key=" + key;

    jsonP(url, input.callback);
}
/* this function is based on example in WWO documentation and then modified to assemble the relevant data into a weatherDataMatrix object */
function jsonP(url, callback) {
    $.ajax({
        type: 'GET',
        url: url,
        async: false,
        contentType: "application/json",
        jsonpCallback: callback,
        dataType: 'jsonp',
        success: function (json) {
            console.dir('success');
            console.log(json.data.weather);
            var i;
            var j;
            for (i = 0; i < json.data.weather.length; i++) {
                for (j = 0; j < json.data.weather[i].hourly.length; j++) {
                    wWOData.add(json.data.weather[i].date, json.data.weather[i].hourly[j].time, json.data.weather[i].hourly[j].tempC, json.data.weather[i].hourly[j].weatherDesc[0].value,
                        json.data.weather[i].hourly[j].precipMM, json.data.weather[i].hourly[j].windspeedKmph, json.data.weather[i].hourly[j].winddirDegree, json.data.weather[i].hourly[j].WindGustKmph,
                        json.data.weather[i].hourly[j].swellHeight_m, json.data.weather[i].hourly[j].waterTemp_C);


                };
            };
        },
        error: function (e) {
            console.log(e.message);
        }
    });
}

/*function to build request input */
function inputBuilder(place) {
    this.query = place;
    this.format = "json";
    this.fx = 'yes';
    this.callback;
};
/* Class to asaseble and store the relevant data that has been oicked out from api raw data */

function weatherDataMatrix() {
    this.data = [
        ['day', 'time', 'temp', 'weather-description', 'precipitation', 'windspeed', 'wind-degree', 'wind-gust', 'swell-height', 'water-temp']
    ];
    /* this method is used to add another row of weather data to the array */
    this.add = function (day, time, temp, weatherDescription, precipitation, windSpeed, windDegree, windGust, swellHeight, waterTemp) {
        this.data.push([day, time, temp, weatherDescription, precipitation, windSpeed, windDegree, windGust, swellHeight, waterTemp]);
    };
   /*  this method loops throght the weather data matric object and adds the data to a html table */
    this.display = function () {
        for (i = 1; i < this.data.length; i++) {
            var table = document.getElementById("weatherTable");
            var row = table.insertRow(i);
            for (j = 0; j < this.data[i].length; j++) {
                var cell = row.insertCell(j);
                cell.innerHTML = this.data[i][j];
                
            };
        };
    };
};
