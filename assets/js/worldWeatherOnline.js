var baseURL =  'https://api.worldweatheronline.com/premium/v1/';
var key = wwokey;
function inputBuilder(place){
    this.query = place;
    this.format = "json";
    this.fx = 'yes'
};

document.addEventListener("DOMContentLoaded", function() {
    var test = new inputBuilder("48.834,2.394");
    console.log(test.query);
    JSONP_MarineWeather(test); 
     
});


function JSONP_MarineWeather(input) {
    var url = baseURL + "marine.ashx?q=" + input.query + "&format=" + input.format + "&key=" + key;

    jsonP(url, input.callback);
}

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
        },
        error: function (e) {
            console.log(e.message);
        }
    });
}
