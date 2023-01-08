
var date = document.getElementById("date")
var btn = document.querySelector(".btn")
var form = document.querySelector("#searchCountry")
var searchBar = document.querySelector("#searchBar")
var p = document.querySelector("p")
var temperature = document.querySelector(".Temperature")
var humidity = document.querySelector(".humidity")
//var formSubmitHandler = function (event) {
// event.preventDefault();
// var city = searchBar
// if (city) {
//     findCity(city)

// } else {
//     alert("please enter a city/country")

function fetch5day(lat, lon) {
    var API = "https://api.openweathermap.org/data/2.5/forecast?lat=" + lat + "&lon=" + lon + "&units=imperial&appid=08553de1a0124c7f4f47f18b48ab8cf6"
    fetch(API).then(response => response.json()).then(data => {
        console.log(data)
        for(i = 3; i < data.list.length; i += 8) {
            var div = document.createElement("div");
            document.getElementById("forecast").append(div)
            var tempP = document.createElement("p")
            tempP.textContent = "temperature: " + data.list[i].main.temp + "F"
            var humidity = document.createElement("p");
            humidity.textContent = "Humidity: " + data.list[i].main.humidity + "%"
            var Wind = document.createElement("p");
            Wind.textContent = "wind speed: " + data.list[i].wind.speed + "MPH"
            var Date = document.createElement("p");
            Date.textContent = dayjs.unix(data.list[i].dt).format("M/D/YYYY");
            var iconUrl = `https://openweathermap.org/img/w/${data.list[i].weather[0].icon}.png`;
            var icon = document.createElement("img");
            icon.setAttribute("src", iconUrl)
            div.append(Date, icon, tempP, humidity, Wind)

        }
    })

}



function findCity(event) {
    event.preventDefault()
    var cityUrl = "https://api.openweathermap.org/data/2.5/weather?q=" + searchBar.value + "&units=imperial&appid=08553de1a0124c7f4f47f18b48ab8cf6"
    fetch(cityUrl).then(response =>
        response.json()).then(data => {
            var displayCity = data['name'];
            var displayTemperature = data['main']['temp']
            var displayHumidity = data['main']['humidity']

            p.innerHTML = displayCity;
            temperature.innerHTML = "Temperature: " + displayTemperature;
            var Date = document.createElement("p")
            document.querySelector("#currentDate").textContent = dayjs.unix(data.dt).format("M/D/YYYY");
            var iconUrl = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
            var icon = document.createElement("img");
            icon.setAttribute("src", iconUrl)
            document.getElementById("forecast").append(icon);


            humidity.innerHTML = "Humidity: " + displayHumidity
            fetch5day(data.coord.lat, data.coord.lon);
            // var iconUrl = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
            // var icon = document.createElement("img");
            // icon.setAttribute("src", iconUrl)
            // document.getElementById("icon").append(icon);
            

        })
}

function test(event) {
    event.preventDefault()
    var cityUrl = "https://api.openweathermap.org/data/2.5/weather?q=" + searchBar.value + "&appid=08553de1a0124c7f4f47f18b48ab8cf6"
    fetch(cityUrl).then(response =>
        response.json()).then(data => {
            console.log(data)
            // for (i = 0; i < data.list.length; i += 8) {
            //     var div = document.createElement("div");
            //     document.getElementById("forecast").append(div)
            //     var tempP = document.createElement("p")
            //     tempP.textContent = data.list[i].main.temp
            //     var humidity = document.createElement("p");
            //     humidity.textContent = data.list[i].main.humidity
            //     var Wind = document.createElement("p");
            //     Wind.textContent = data.list[i].wind.speed
            //     var Date = document.createElement("P");
            //     date.textContent = dayjs.unix(data.list[i].dt).format("M/D/YYYY");
            //     div.append(Date, tempP, humidity, Wind)
            // }
        })

}






// function findForecast(){
// var API = fetch(url).then(function (response) {
//     if(response.ok){
//         console.log(response);
//         response.json().then(function(data){
//             console.log(data);
//      })}}).catch (function(error){
//         alert("unable to connect to Weather API")
//      }).then()}
form.addEventListener("submit", findCity)
form.addEventListener("submit", test)
