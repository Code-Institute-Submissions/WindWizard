/* const favoriteSpots = [["Flag Beach, Fuerteventura:28.722934, -13.842284"]
    ["Boaracay, Philipines:11.962909, 121.922640"]
    ["Tarifa, Spain:36.033622,-5.628624"]
    ["Capetown, South Afrika:-33.831068, 18.481157"]
    ["Jericoacoara, Brazil:-2.793534, -40.520493"]]
 */
document.addEventListener("DOMContentLoaded", function () {
    //var test = new inputBuilder("48.834,2.394"); /* Hardcode location */

    $("#forecast").click(function () {
        if ($("#source").children("option:selected").val() == 1) {
            var worldWeatherOnlineData = new weatherDataMatrix;
            var location = $("#lat-long").val();
            var input = new inputBuilder(location);
            JSONP_MarineWeather(input, worldWeatherOnlineData);
           
        }
        else if ($("#source").children("option:selected").val() == 2) {
            var openWeatherData = new weatherDataMatrix;
            var location = $("#lat-long").val();
            var input = new inputBuilder(location);
            JSONP_openWeather(input, openWeatherData);
        };

    });
    $("#display-forecast").click(function(){
        
        if ($("#source").children("option:selected").val() == 1) {
            $.when(wWOData.generateCards()).then(wWOData.display());
        }
        else if ($("#source").children("option:selected").val() == 2) {
            $.when(oWData.generateCards()).then(oWData.display());
        };
    });
    // JSONP_MarineWeather(test);
});







/* Class to asaseble and store the relevant data that has been picked out from api raw data */
function weatherDataMatrix() {
    this.data = [
        ['day', 'time', 'temp', 'weather-description', 'precipitation', 'windspeed', 'wind-degree', 'wind-gust', 'swell-height', 'water-temp', 'imgurl']
    ];
    this.cards = "";
    /* this method is used to add another row of weather data to the array */
    this.add = function (day, time, temp, weatherDescription, precipitation, windSpeed, windDegree, windGust, swellHeight, waterTemp, imgurl) {
        this.data.push([day, time, temp, weatherDescription, precipitation, windSpeed, windDegree, windGust, swellHeight, waterTemp, imgurl]);
    };
    /*  this method loops throght the weather data matric object and adds the data to a html table */
    this.display = function () {
        document.getElementById("card-container").innerHTML = this.cards;
/*         for (i = 1; i < this.data.length; i++) {
            var table = document.getElementById("weatherTable");
            var row = table.insertRow(i);
            for (j = 0; j < this.data[i].length; j++) {
                var cell = row.insertCell(j);
                cell.innerHTML = this.data[i][j];
            };
        }; */
    };
    this.generateCards = function () {
        var day = this.data[0][0];
        var i;
        for (i = 1; i < this.data.length; i++){
            if (this.data[i][0] !== day){
                day = this.data[i][0];
                this.cards = this.cards + `<div class="card">
                <div class="card-header">${this.data[i][0]}</div>
                <div class="row no-gutters">
                  <div class="col-xs-3 weather-decription-box">Time</div>
                  <div class="col-xs-3 weather-decription-box">Wind m/s</div>
                  <div class="col-xs-3 weather-decription-box">Weather</div>
                  <div class="col-xs-3 weather-decription-box">Waves</div>
                  </div>
                </div>
                </div>`;
            };
            this.cards = this.cards + `<div class="card">
            <div class="card-body">
              <div class="row no-gutters">
                <div class="col-xs-1 weather-card-box">${this.data[i][1]}</div>
                <div class="col-xs-2 weather-card-box">${this.data[i][6]}</div>
                <div class="col-xs-3 weather-card-box">${this.data[i][5]}<br>${this.data[i][7]}</div>
                <div class="col-xs-3 weather-card-box"><img class="weather-icon" src="${this.data[i][10]}"/><br> ${this.data[i][4]} mm</div>
                <div class="col-xs-1 weather-card-box">${this.data[i][2]} C</div>
                <div class="col-xs-2 weather-card-box">${this.data[i][9]} M</div>
              </div>
            </div>
            </div>`;
        };

    };
};

