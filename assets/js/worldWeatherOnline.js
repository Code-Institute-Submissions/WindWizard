var baseURL = 'https://api.worldweatheronline.com/premium/v1/';
var wWOData = new weatherDataMatrix();

function JSONP_MarineWeather(input) {
    var url = baseURL + "marine.ashx?q=" + input.query + "&format=" + input.format + "&key=" + wwokey;

    jsonP(url, input.callback);
}
/*function to build request input */
function inputBuilder(place) {
    this.query = place;
    this.format = "json";
    this.fx = 'yes';
    this.callback;
};

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


