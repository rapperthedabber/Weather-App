
var date = document.getElementById("date")
var btn = document.querySelector(".btn")
var form = document.querySelector("#searchCountry")
var searchBar = document.querySelector("#searchBar")
var p = document.querySelector("p")
var temperature = document.querySelector("#humidity")
var humidity = document.querySelector("#humidity")
//var formSubmitHandler = function (event) {
    // event.preventDefault();
    // var city = searchBar
    // if (city) {
    //     findCity(city)

    // } else {
    //     alert("please enter a city/country")
    // }


function findCity(event) {
    event.preventDefault()
    var cityUrl = "https://api.openweathermap.org/data/2.5/weather?q=" + searchBar.value + "&appid=08553de1a0124c7f4f47f18b48ab8cf6"
    fetch(cityUrl).then(response =>
     response.json()).then(data => {var displayCity = data['name'];
     var displayTemperature = data['main']['temp']
     var displayHumidity = data['main']['humidity']

     p.innerHTML = displayCity;
     temperature.innerHTML = displayTemperature;
    humidity.innerHTML = displayHumidity
    })}

function test(event) {
    event.preventDefault()
    var cityUrl = "https://api.openweathermap.org/data/2.5/weather?q=" + searchBar.value + "&appid=08553de1a0124c7f4f47f18b48ab8cf6"
    fetch(cityUrl).then(response =>
     response.json()).then(data => console.log(data))}






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
