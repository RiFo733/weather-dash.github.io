
var city = "";

$("button").on("click", function (event) {
    event.preventDefault();
    var city = $("#city-pick").val();


    var queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=e0a36ad06de017b792780e9815ad3893";

   

    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {
        console.log(queryURL);
        console.log(response);
        console.log(response.name);
        console.log(response.main.temp);
        console.log(response.main.humidity);
        console.log(response.wind.speed);
        console.log(response.weather[0].icon)
        lon = response.coord.lon;
        lat = response.coord.lat;
        console.log(lon);
        console.log(lat);

        $("#city-name").html(response.name);

        $(".temp").text("Temperature: " + respoonse.main.temp + "\u00B0 F");
        $(".humidity").text("Humidity: " + response.main.humidity + "%");
        $(".wind").text("Wind Speed: " + response.wind.speed + "MPH");


        var tempF = (response.main.temp - 273.15) * 1.80 + 32;

        $("#tempF").text("Temperature (F) " + tempF.toFixed(2));

        var date = moment.unix(response.dt);
        var dateStr = date.format("M/D/YYYY");
        $("#current-date").text(dateStr);


    });

    var uvURL = "https://api.openweathermap.org/data/2.5/uvi?lat=" + lat + "&lon=" + lon + "&appid=e0a36ad06de017b792780e9815ad3893";

    $.ajax({
        url: uvURL,
        method: "GET"
    }).then(function (response) {
        console.log(uvURL);

    });


    var forecastURL = "https://api.openweathermap.org/data/2.5/forecast?q=" + city + "&appid=e0a36ad06de017b792780e9815ad3893";
    $.ajax({
        url: forecastURL,
        method: "GET"
    }).then(function(response){
        console.log(forecastURL);



    });


});



