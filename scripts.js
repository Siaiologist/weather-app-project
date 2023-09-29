//Global Variables
//HTML element vars
let enterCityName = document.getElementById("enter-city-name");
let searchButton = document.getElementById("search-button").addEventListener
("click", addItem);

//vars to be filled with data from API
let todaysForecast = {
    currentCity: "",
    currentTemp: "",
    currentTempHigh: "",
    currentTempLow: "",
    currentCountry:"",
};
let threeDayForecast = [];


function addItem() {
    let cityFromUser = enterCityName.value;
    fetch (`http://api.weatherapi.com/v1/forecast.json?key=612059a597734b73a85192239232609&q=${cityFromUser}&days=4`)
    .then(response => response.json())
    .then (data => {
        console.log(data);
        //adding data to todaysForecastObject
        todaysForecast = {
            // currentCity: data.current,
            currentTemp: data.current.temp_f,
        };
        // console.log(todaysForecast)

        //adding data to the threeDayForecast Array
        for (let i = 1; i < data.forecast.forecastday.length; i++) {
            let forecast = {
                date: data.forecast.forecastday[i].date,
                temp: data.forecast.forecastday[i].day.avgtemp_f,
                high: data.forecast.forecastday[i].day.maxtemp_f,
                temp: data.forecast.forecastday[i].day.mintemp_f,
                precipitation: data.forecast.forecastday[i].day.daily_chance_of_rain
            }
            threeDayForecast.push(forecast);
            console.log(threeDayForecast, "3dayForecast")
        // updateWebPage()
    }
})}

// function loopForThreeDays(data) {
//     console.log(data, "data")

// }

