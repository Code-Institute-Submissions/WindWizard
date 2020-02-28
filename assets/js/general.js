

document.addEventListener("DOMContentLoaded", function () {
    //var test = new inputBuilder("48.834,2.394"); /* Hardcode location */
    $("#forecast").click(function(){
        var location = $("#lat-long").val();
        var input = new inputBuilder(location);
        JSONP_MarineWeather(input);
        wWOData.display();
    }); 
    // JSONP_MarineWeather(test);
});







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