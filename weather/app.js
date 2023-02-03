// SELECT ELEMENTS
const iconElement = document.querySelector(".weather-icon");
const tempElement = document.querySelector(".temperature-value p");
const descElement = document.querySelector(".temperature-description p");
const locationElement = document.querySelector(".location p");
const dayElement = document.querySelector(".day-value")
const windElement = document.querySelector(".wind-value")
const humidityElement = document.querySelector(".humidity-value")
const pressureElement = document.querySelector(".pressure-value")
const sunriseElement = document.querySelector(".sunrise-value")
const sunsetElement = document.querySelector(".sunset-value")

const iconElement2 = document.querySelector(".weather-icon2");
const tempElement2 = document.querySelector(".temperature-value2 p");
const descElement2 = document.querySelector(".temperature-description2 p");
const locationElement2 = document.querySelector(".location2 p");
const dayElement2 = document.querySelector(".day-value2")
const windElement2 = document.querySelector(".wind-value2")
const humidityElement2 = document.querySelector(".humidity-value2")
const pressureElement2 = document.querySelector(".pressure-value2")
const sunriseElement2 = document.querySelector(".sunrise-value2")
const sunsetElement2 = document.querySelector(".sunset-value2")

const iconElement3 = document.querySelector(".weather-icon3");
const tempElement3 = document.querySelector(".temperature-value3 p");
const descElement3 = document.querySelector(".temperature-description3 p");
const locationElement3 = document.querySelector(".location3 p");
const dayElement3 = document.querySelector(".day-value3")
const windElement3 = document.querySelector(".wind-value3")
const humidityElement3 = document.querySelector(".humidity-value3")
const pressureElement3 = document.querySelector(".pressure-value3")
const sunriseElement3 = document.querySelector(".sunrise-value3")
const sunsetElement3 = document.querySelector(".sunset-value3")

const iconElement4 = document.querySelector(".weather-icon4");
const tempElement4 = document.querySelector(".temperature-value4 p");
const descElement4 = document.querySelector(".temperature-description4 p");
const locationElement4 = document.querySelector(".location4 p");
const dayElement4 = document.querySelector(".day-value4")
const windElement4 = document.querySelector(".wind-value4")
const humidityElement4 = document.querySelector(".humidity-value4")
const pressureElement4 = document.querySelector(".pressure-value4")
const sunriseElement4 = document.querySelector(".sunrise-value4")
const sunsetElement4 = document.querySelector(".sunset-value4")

const iconElement5 = document.querySelector(".weather-icon5");
const tempElement5 = document.querySelector(".temperature-value5 p");
const descElement5 = document.querySelector(".temperature-description5 p");
const locationElement5 = document.querySelector(".location5 p");
const dayElement5 = document.querySelector(".day-value5")
const windElement5 = document.querySelector(".wind-value5")
const humidityElement5 = document.querySelector(".humidity-value5")
const pressureElement5 = document.querySelector(".pressure-value5")
const sunriseElement5 = document.querySelector(".sunrise-value5")
const sunsetElement5 = document.querySelector(".sunset-value5")




// App data
const weather = {};

weather.temperature = {
    unit: "celsius"
}

// APP CONSTS AND VARS
const KELVIN = 273;
// API KEY
const key = "94724cd14db5eb6e2a40ddca60060b2d";

// GET WEATHER FROM API PROVIDER
let apiNOW = 'https://api.openweathermap.org/data/2.5/weather?q=birmingham,GB&appid=94724cd14db5eb6e2a40ddca60060b2d';
let api = `https://api.openweathermap.org/data/2.5/forecast?q=birmingham,GB&appid=94724cd14db5eb6e2a40ddca60060b2d`;

fetch(apiNOW)
    .then(function(response) {
        let data = response.json();
        return data;
    })
    .then(function(data) {
        weather.temperature.value = Math.floor(data.main.temp - KELVIN);
        weather.description = data.weather[0].description;
        weather.iconId = data.weather[0].icon;
        weather.city = data.name;
        weather.country = data.sys.country;
        weather.day = "Current Weather"
        weather.wind = "Wind Speed: " + data.wind.speed + " m/s";
        weather.humidity = "Humidity: " + data.main.humidity + "%";
        weather.pressure = "Pressure: " + data.main.pressure + "hPa";
        weather.sunrise = data.sys.sunrise;
        weather.sunset = data.sys.sunset;
    })
    .then(function() {
        displayWeather();
    });

// DISPLAY WEATHER TO UI
function displayWeather() {
    iconElement.innerHTML = `<img src="weather/icons/${weather.iconId}.png"/>`;
    tempElement.innerHTML = `${weather.temperature.value}°<span>C</span>`;
    descElement.innerHTML = weather.description;
    locationElement.innerHTML = `${weather.city}, ${weather.country}`;
    dayElement.innerHTML = weather.day;
    windElement.innerHTML = weather.wind;
    humidityElement.innerHTML = weather.humidity;
    pressureElement.innerHTML = weather.pressure;

    let unix_timestamp = weather.sunrise
    var date = new Date(unix_timestamp * 1000);
    var hours = date.getHours();
    var minutes = "0" + date.getMinutes();
    var seconds = "0" + date.getSeconds();
    var formattedSunriseTime = hours + ':' + minutes.substr(-2) + ':' + seconds.substr(-2);
    sunriseElement.innerHTML = "Sunrise: " + formattedSunriseTime;

    let unix_timestamp2 = weather.sunset
    var date2 = new Date(unix_timestamp2 * 1000);
    var hours2 = date2.getHours();
    var minutes2 = "0" + date2.getMinutes();
    var seconds2 = "0" + date2.getSeconds();
    var formattedSunsetTime2 = hours2 + ':' + minutes2.substr(-2) + ':' + seconds2.substr(-2);
    sunsetElement.innerHTML = "Sunset: " + formattedSunsetTime2;
}

fetch(api)
    .then(function(response2) {
        let data2 = response2.json();

        return data2;
    })
    .then(function(data2) {
        weather.temperature.value2 = Math.floor(data2.list[8].main.temp - KELVIN);
        weather.description2 = data2.list[8].weather[0].description;
        weather.iconId2 = data2.list[8].weather[0].icon;
        weather.city2 = data2.city.name;
        weather.country2 = data2.city.country;
        weather.day2 = data2.list[8].dt_txt;
        weather.wind2 = "Wind Speed: " + data2.list[8].wind.speed + " m/s";
        weather.humidity2 = "Humidity: " + data2.list[8].main.humidity + "%";
        weather.pressure2 = "Pressure: " + data2.list[8].main.pressure + "hPa";
        weather.sunrise2 = data2.city.sunrise;
        weather.sunset2 = data2.city.sunset;

    })
    .then(function() {
        displayWeather2();
    });

// DISPLAY WEATHER TO UI
function displayWeather2() {
    iconElement2.innerHTML = `<img src="weather/icons/${weather.iconId2}.png"/>`;
    tempElement2.innerHTML = `${weather.temperature.value2}°<span>C</span>`;
    descElement2.innerHTML = weather.description2;
    locationElement2.innerHTML = `${weather.city2}, ${weather.country2}`;
    dayElement2.innerHTML = weather.day2;
    windElement2.innerHTML = weather.wind2;
    humidityElement2.innerHTML = weather.humidity2;
    pressureElement2.innerHTML = weather.pressure2;
    sunsetElement2.innerHTML = weather.sunrise2;
    sunsetElement2.innerHTML = weather.sunset2;

    let unix_timestamp3 = weather.sunrise2
    var date3 = new Date(unix_timestamp3 * 1000);
    var hours3 = date3.getHours();
    var minutes3 = "0" + date3.getMinutes();
    var seconds3 = "0" + date3.getSeconds();
    var formattedSunriseTime3 = hours3 + ':' + minutes3.substr(-2) + ':' + seconds3.substr(-2);
    sunriseElement2.innerHTML = "Sunrise: " + formattedSunriseTime3;

    let unix_timestamp4 = weather.sunset2
    var date4 = new Date(unix_timestamp4 * 1000);
    var hours4 = date4.getHours();
    var minutes4 = "0" + date4.getMinutes();
    var seconds4 = "0" + date4.getSeconds();
    var formattedSunsetTime4 = hours4 + ':' + minutes4.substr(-2) + ':' + seconds4.substr(-2);
    sunsetElement2.innerHTML = "Sunset: " + formattedSunsetTime4;
}

fetch(api)
    .then(function(response3) {
        let data3 = response3.json();

        return data3;
    })
    .then(function(data3) {
        weather.temperature.value3 = Math.floor(data3.list[16].main.temp - KELVIN);
        weather.description3 = data3.list[16].weather[0].description;
        weather.iconId3 = data3.list[16].weather[0].icon;
        weather.city3 = data3.city.name;
        weather.country3 = data3.city.country;
        weather.day3 = data3.list[16].dt_txt;
        weather.wind3 = "Wind Speed: " + data3.list[16].wind.speed + " m/s";
        weather.humidity3 = "Humidity: " + data3.list[16].main.humidity + "%";
        weather.pressure3 = "Pressure: " + data3.list[16].main.pressure + "hPa";
        weather.sunrise3 = data3.city.sunrise;
        weather.sunset3 = data3.city.sunset;


    })
    .then(function() {
        displayWeather3();
    });

// DISPLAY WEATHER TO UI
function displayWeather3() {
    iconElement3.innerHTML = `<img src="weather/icons/${weather.iconId3}.png"/>`;
    tempElement3.innerHTML = `${weather.temperature.value3}°<span>C</span>`;
    descElement3.innerHTML = weather.description3;
    locationElement3.innerHTML = `${weather.city3}, ${weather.country3}`;
    dayElement3.innerHTML = weather.day3;
    windElement3.innerHTML = weather.wind3;
    humidityElement3.innerHTML = weather.humidity3;
    pressureElement3.innerHTML = weather.pressure3;

    let unix_timestamp5 = weather.sunrise3
    var date5 = new Date(unix_timestamp5 * 1000);
    var hours5 = date5.getHours();
    var minutes5 = "0" + date5.getMinutes();
    var seconds5 = "0" + date5.getSeconds();
    var formattedSunriseTime5 = hours5 + ':' + minutes5.substr(-2) + ':' + seconds5.substr(-2);
    sunriseElement3.innerHTML = "Sunrise: " + formattedSunriseTime5;

    let unix_timestamp6 = weather.sunset3
    var date6 = new Date(unix_timestamp6 * 1000);
    var hours6 = date6.getHours();
    var minutes6 = "0" + date6.getMinutes();
    var seconds6 = "0" + date6.getSeconds();
    var formattedSunsetTime6 = hours6 + ':' + minutes6.substr(-2) + ':' + seconds6.substr(-2);
    sunsetElement3.innerHTML = "Sunset: " + formattedSunsetTime6;

}

fetch(api)
    .then(function(response4) {
        let data4 = response4.json();

        return data4;
    })
    .then(function(data4) {
        weather.temperature.value4 = Math.floor(data4.list[24].main.temp - KELVIN);
        weather.description4 = data4.list[24].weather[0].description;
        weather.iconId4 = data4.list[24].weather[0].icon;
        weather.city4 = data4.city.name;
        weather.country4 = data4.city.country;
        weather.day4 = data4.list[24].dt_txt;
        weather.wind4 = "Wind Speed: " + data4.list[24].wind.speed + " m/s";
        weather.humidity4 = "Humidity: " + data4.list[24].main.humidity + "%";
        weather.pressure4 = "Pressure: " + data4.list[24].main.pressure + "hPa";
        weather.sunrise4 = data4.city.sunrise;
        weather.sunset4 = data4.city.sunset;

    })
    .then(function() {
        displayWeather4();
    });

// DISPLAY WEATHER TO UI
function displayWeather4() {
    iconElement4.innerHTML = `<img src="weather/icons/${weather.iconId4}.png"/>`;
    tempElement4.innerHTML = `${weather.temperature.value4}°<span>C</span>`;
    descElement4.innerHTML = weather.description4;
    locationElement4.innerHTML = `${weather.city4}, ${weather.country4}`;
    dayElement4.innerHTML = weather.day4;
    windElement4.innerHTML = weather.wind4;
    humidityElement4.innerHTML = weather.humidity4;
    pressureElement4.innerHTML = weather.pressure4;

    let unix_timestamp7 = weather.sunrise4
    var date7 = new Date(unix_timestamp7 * 1000);
    var hours7 = date7.getHours();
    var minutes7 = "0" + date7.getMinutes();
    var seconds7 = "0" + date7.getSeconds();
    var formattedSunriseTime7 = hours7 + ':' + minutes7.substr(-2) + ':' + seconds7.substr(-2);
    sunriseElement4.innerHTML = "Sunrise: " + formattedSunriseTime7;

    let unix_timestamp8 = weather.sunset4
    var date8 = new Date(unix_timestamp8 * 1000);
    var hours8 = date8.getHours();
    var minutes8 = "0" + date8.getMinutes();
    var seconds8 = "0" + date8.getSeconds();
    var formattedSunsetTime8 = hours8 + ':' + minutes8.substr(-2) + ':' + seconds8.substr(-2);
    sunsetElement4.innerHTML = "Sunset: " + formattedSunsetTime8;


}

fetch(api)
    .then(function(response5) {
        let data5 = response5.json();

        return data5;
    })
    .then(function(data5) {
        weather.temperature.value5 = Math.floor(data5.list[32].main.temp - KELVIN);
        weather.description5 = data5.list[32].weather[0].description;
        weather.iconId5 = data5.list[32].weather[0].icon;
        weather.city5 = data5.city.name;
        weather.country5 = data5.city.country;
        weather.day5 = data5.list[32].dt_txt;
        weather.wind5 = "Wind Speed: " + data5.list[32].wind.speed + " m/s";
        weather.humidity5 = "Humidity: " + data5.list[32].main.humidity + "%";
        weather.pressure5 = "Pressure: " + data5.list[32].main.pressure + "hPa";
        weather.sunrise5 = data5.city.sunrise;
        weather.sunset5 = data5.city.sunset;

    })
    .then(function() {
        displayWeather5();
    });

// DISPLAY WEATHER TO UI
function displayWeather5() {
    iconElement5.innerHTML = `<img src="weather/icons/${weather.iconId5}.png"/>`;
    tempElement5.innerHTML = `${weather.temperature.value5}°<span>C</span>`;
    descElement5.innerHTML = weather.description5;
    locationElement5.innerHTML = `${weather.city5}, ${weather.country5}`;
    dayElement5.innerHTML = weather.day5;
    windElement5.innerHTML = weather.wind5;
    humidityElement5.innerHTML = weather.humidity5;
    pressureElement5.innerHTML = weather.pressure5;

    let unix_timestamp9 = weather.sunrise5
    var date9 = new Date(unix_timestamp9 * 1000);
    var hours9 = date9.getHours();
    var minutes9 = "0" + date9.getMinutes();
    var seconds9 = "0" + date9.getSeconds();
    var formattedSunriseTime9 = hours9 + ':' + minutes9.substr(-2) + ':' + seconds9.substr(-2);
    sunriseElement5.innerHTML = "Sunrise: " + formattedSunriseTime9;

    let unix_timestamp10 = weather.sunset5
    var date10 = new Date(unix_timestamp10 * 1000);
    var hours10 = date10.getHours();
    var minutes10 = "0" + date10.getMinutes();
    var seconds10 = "0" + date10.getSeconds();
    var formattedSunsetTime10 = hours10 + ':' + minutes10.substr(-2) + ':' + seconds10.substr(-2);
    sunsetElement5.innerHTML = "Sunset: " + formattedSunsetTime10;
}