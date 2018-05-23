$(document).ready(function () {
    var htmlcode = '';
    //  function render(){
    //      $("#weather-box").html('');
    //  }
    $("button").click(function () {
        // document.getElementById('weather-box').innerHTML = '';
        //    render();

        var url = 'http://api.openweathermap.org/data/2.5/weather?q=';
        var city = document.getElementById('text').value;
        url += city;
        var apikey = '=b3bfa0bd378e4d96fc07d16e859d9503';
        url += '&APPID' + apikey;
        $.ajaxSetup({
            async: false
        });

        $.getJSON(url, function (data) {
            htmlcode += '<label class="name">' + city.toUpperCase() + '</label>';
            htmlcode += '<ul>';
            htmlcode += '<li class="temprature"> avg temp : ' + data.main.temp + ' F</li>';
            htmlcode += '<li class="temp_min"> min temp : ' + data.main.temp_min + ' F</li>';
            htmlcode += '<li class="temp_max"> max temp : ' + data.main.temp_max + ' F</li>';
            htmlcode += '</ul>';
        });
        $.ajaxSetup({
            async: false
        });

        console.log(htmlcode);
        $("#weather-box").html(htmlcode);
        $("#weather-box").show();
        htmlcode = '';
        //document.getElementById('weather-box').innerHTML = htmlcode;

    });
});
