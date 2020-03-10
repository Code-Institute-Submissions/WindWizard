const baseURL = 'https://api.worldweatheronline.com/premium/v1/';

function JSONP_MarineWeather(input, dataObject) {
    var url = baseURL + "marine.ashx?q=" + input.query + "&format=" + input.format + "&key=" + wwokey;

    jsonP(url, input.callback, dataObject);
}


/* this function is based on example in WWO documentation and then modified to assemble the relevant data into a weatherDataMatrix object */
function jsonP(url, callback, dataObject) {
    $.ajax({
        type: 'GET',
        url: url,
        async: false,
        contentType: "application/json",
        jsonpCallback: callback,
        dataType: 'jsonp',
        success: function (json) {
            console.dir('success');
            console.log(json.data);
            var i;
            var j;
            for (i = 0; i < json.data.weather.length; i++) {
                for (j = 0; j < json.data.weather[i].hourly.length; j++) {
                    dataObject.add(json.data.weather[i].date, json.data.weather[i].hourly[j].time, json.data.weather[i].hourly[j].tempC, json.data.weather[i].hourly[j].weatherDesc[0].value,
                        json.data.weather[i].hourly[j].precipMM, Math.round(json.data.weather[i].hourly[j].windspeedKmph / 3.6), json.data.weather[i].hourly[j].winddirDegree, Math.round(json.data.weather[i].hourly[j].WindGustKmph / 3.6),
                        json.data.weather[i].hourly[j].swellHeight_m, json.data.weather[i].hourly[j].waterTemp_C, json.data.weather[i].hourly[j].weatherIconUrl[0].value);
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