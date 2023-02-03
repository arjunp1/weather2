// SELECT ELEMENTS
const iconElement6 = document.querySelector(".weather-icon6");
const tempElement6 = document.querySelector(".temperature-value6 p");
const descElement6 = document.querySelector(".temperature-description6 p");
const locationElement6 = document.querySelector(".location6 p");
const dayElement6 = document.querySelector(".day-value6")
const windElement6 = document.querySelector(".wind-value6")
const humidityElement6 = document.querySelector(".humidity-value6")
const pressureElement6 = document.querySelector(".pressure-value6")
const sunriseElement6 = document.querySelector(".sunrise-value6")
const sunsetElement6 = document.querySelector(".sunset-value6")

const iconElement7 = document.querySelector(".weather-icon7");
const tempElement7 = document.querySelector(".temperature-value7 p");
const descElement7 = document.querySelector(".temperature-description7 p");
const locationElement7 = document.querySelector(".location7 p");
const dayElement7 = document.querySelector(".day-value7")
const windElement7 = document.querySelector(".wind-value7")
const humidityElement7 = document.querySelector(".humidity-value7")
const pressureElement7 = document.querySelector(".pressure-value7")
const sunriseElement7 = document.querySelector(".sunrise-value7")
const sunsetElement7 = document.querySelector(".sunset-value7")

const iconElement8 = document.querySelector(".weather-icon8");
const tempElement8 = document.querySelector(".temperature-value8 p");
const descElement8 = document.querySelector(".temperature-description8 p");
const locationElement8 = document.querySelector(".location8 p");
const dayElement8 = document.querySelector(".day-value8")
const windElement8 = document.querySelector(".wind-value8")
const humidityElement8 = document.querySelector(".humidity-value8")
const pressureElement8 = document.querySelector(".pressure-value8")
const sunriseElement8 = document.querySelector(".sunrise-value8")
const sunsetElement8 = document.querySelector(".sunset-value8")

const iconElement9 = document.querySelector(".weather-icon9");
const tempElement9 = document.querySelector(".temperature-value9 p");
const descElement9 = document.querySelector(".temperature-description9 p");
const locationElement9 = document.querySelector(".location9 p");
const dayElement9 = document.querySelector(".day-value9")
const windElement9 = document.querySelector(".wind-value9")
const humidityElement9 = document.querySelector(".humidity-value9")
const pressureElement9 = document.querySelector(".pressure-value9")
const sunriseElement9 = document.querySelector(".sunrise-value9")
const sunsetElement9 = document.querySelector(".sunset-value9")

const iconElement10 = document.querySelector(".weather-icon10");
const tempElement10 = document.querySelector(".temperature-value10 p");
const descElement10 = document.querySelector(".temperature-description10 p");
const locationElement10 = document.querySelector(".location10 p");
const dayElement10 = document.querySelector(".day-value10")
const windElement10 = document.querySelector(".wind-value10")
const humidityElement10 = document.querySelector(".humidity-value10")
const pressureElement10 = document.querySelector(".pressure-value10")
const sunriseElement10 = document.querySelector(".sunrise-value10")
const sunsetElement10 = document.querySelector(".sunset-value10")

// App data
const weather2 = {};

weather2.temperature = {
    unit: "celsius"
}

// APP CONSTS AND VARS
const KELVIN2 = 273;

// GET WEATHER FROM API PROVIDER
let apiNOWCHI = 'https://api.openweathermap.org/data/2.5/weather?q=chicago&appid=94724cd14db5eb6e2a40ddca60060b2d';
let apiCHI = `https://api.openweathermap.org/data/2.5/forecast?q=chicago&appid=94724cd14db5eb6e2a40ddca60060b2d`;

fetch(apiNOWCHI)
    .then(function(response6) {
        let data6 = response6.json();
        return data6;
    })
    .then(function(data6) {
        weather2.temperature.value6 = Math.floor(data6.main.temp - KELVIN);
        weather2.description6 = data6.weather[0].description;
        weather2.iconId6 = data6.weather[0].icon;
        weather2.city6 = data6.name;
        weather2.country6 = data6.sys.country;
        weather2.day6 = "Current Weather"
        weather2.wind6 = "Wind Speed: " + data6.wind.speed + " m/s";
        weather2.humidity6 = "Humidity: " + data6.main.humidity + "%";
        weather2.pressure6 = "Pressure: " + data6.main.pressure + "hPa";
        weather2.sunrise6 = data6.sys.sunrise;
        weather2.sunset6 = data6.sys.sunset;
    })
    .then(function() {
        displayWeather6();
    });

// DISPLAY WEATHER TO UI
function displayWeather6() {
    iconElement6.innerHTML = `<img src="weatherCHI/icons/${weather2.iconId6}.png"/>`;
    tempElement6.innerHTML = `${weather2.temperature.value6}°<span>C</span>`;
    descElement6.innerHTML = weather2.description6;
    locationElement6.innerHTML = `${weather2.city6}, ${weather2.country6}`;
    dayElement6.innerHTML = weather2.day6;
    windElement6.innerHTML = weather2.wind6;
    humidityElement6.innerHTML = weather2.humidity6;
    pressureElement6.innerHTML = weather2.pressure6;

    let unix_timestamp11 = weather2.sunrise6
    var date11 = new Date(unix_timestamp11 * 1000);
    var hours11 = date11.getHours();
    var minutes11 = "0" + date11.getMinutes();
    var seconds11 = "0" + date11.getSeconds();
    var formattedSunriseTime11 = hours11 + ':' + minutes11.substr(-2) + ':' + seconds11.substr(-2);
    sunriseElement6.innerHTML = "Sunrise: " + formattedSunriseTime11;

    let unix_timestamp12 = weather2.sunset6
    var date12 = new Date(unix_timestamp12 * 1000);
    var hours12 = date12.getHours();
    var minutes12 = "0" + date12.getMinutes();
    var seconds12 = "0" + date12.getSeconds();
    var formattedSunsetTime12 = hours12 + ':' + minutes12.substr(-2) + ':' + seconds12.substr(-2);
    sunsetElement6.innerHTML = "Sunset: " + formattedSunsetTime12;
}

fetch(apiCHI)
    .then(function(response7) {
        let data7 = response7.json();
        return data7;
    })
    .then(function(data7) {
        weather2.temperature.value7 = Math.floor(data7.list[8].main.temp - KELVIN);
        weather2.description7 = data7.list[8].weather[0].description;
        weather2.iconId7 = data7.list[8].weather[0].icon;
        weather2.city7 = data7.city.name;
        weather2.country7 = data7.city.country;
        weather2.day7 = data7.list[0].dt_txt;
        weather2.wind7 = "Wind Speed: " + data7.list[8].wind.speed + " m/s";
        weather2.humidity7 = "Humidity: " + data7.list[8].main.humidity + "%";
        weather2.pressure7 = "Pressure: " + data7.list[8].main.pressure + "hPa";
        weather2.sunrise7 = data7.city.sunrise;
        weather2.sunset7 = data7.city.sunset;
    })
    .then(function() {
        displayWeather7();
    });

// DISPLAY WEATHER TO UI
function displayWeather7() {
    iconElement7.innerHTML = `<img src="weatherCHI/icons/${weather2.iconId7}.png"/>`;
    tempElement7.innerHTML = `${weather2.temperature.value7}°<span>C</span>`;
    descElement7.innerHTML = weather2.description7;
    locationElement7.innerHTML = `${weather2.city7}, ${weather2.country7}`;
    dayElement7.innerHTML = weather2.day7;
    dayElement7.innerHTML = weather2.day7;
    windElement7.innerHTML = weather2.wind7;
    humidityElement7.innerHTML = weather2.humidity7;
    pressureElement7.innerHTML = weather2.pressure7;

    let unix_timestamp13 = weather2.sunrise7
    var date13 = new Date(unix_timestamp13 * 1000);
    var hours13 = date13.getHours();
    var minutes13 = "0" + date13.getMinutes();
    var seconds13 = "0" + date13.getSeconds();
    var formattedSunriseTime13 = hours13 + ':' + minutes13.substr(-2) + ':' + seconds13.substr(-2);
    sunriseElement7.innerHTML = "Sunrise: " + formattedSunriseTime13;

    let unix_timestamp14 = weather2.sunset7
    var date14 = new Date(unix_timestamp14 * 1000);
    var hours14 = date14.getHours();
    var minutes14 = "0" + date14.getMinutes();
    var seconds14 = "0" + date14.getSeconds();
    var formattedSunsetTime14 = hours14 + ':' + minutes14.substr(-2) + ':' + seconds14.substr(-2);
    sunsetElement7.innerHTML = "Sunset: " + formattedSunsetTime14;
}

fetch(apiCHI)
    .then(function(response8) {
        let data8 = response8.json();
        return data8;
    })
    .then(function(data8) {
        weather2.temperature.value8 = Math.floor(data8.list[16].main.temp - KELVIN);
        weather2.description8 = data8.list[16].weather[0].description;
        weather2.iconId8 = data8.list[16].weather[0].icon;
        weather2.city8 = data8.city.name;
        weather2.country8 = data8.city.country;
        weather2.day8 = data8.list[1].dt_txt;
        weather2.wind8 = "Wind Speed: " + data8.list[16].wind.speed + " m/s";
        weather2.humidity8 = "Humidity: " + data8.list[16].main.humidity + "%";
        weather2.pressure8 = "Pressure: " + data8.list[16].main.pressure + "hPa";
        weather2.sunrise8 = data8.city.sunrise;
        weather2.sunset8 = data8.city.sunset;
    })
    .then(function() {
        displayWeather8();
    });

// DISPLAY WEATHER TO UI
function displayWeather8() {
    iconElement8.innerHTML = `<img src="weatherCHI/icons/${weather2.iconId8}.png"/>`;
    tempElement8.innerHTML = `${weather2.temperature.value8}°<span>C</span>`;
    descElement8.innerHTML = weather2.description8;
    locationElement8.innerHTML = `${weather2.city8}, ${weather2.country8}`;
    dayElement8.innerHTML = weather2.day8;
    windElement8.innerHTML = weather2.wind8;
    humidityElement8.innerHTML = weather2.humidity8;
    pressureElement8.innerHTML = weather2.pressure8;

    let unix_timestamp15 = weather2.sunrise8
    var date15 = new Date(unix_timestamp15 * 1000);
    var hours15 = date15.getHours();
    var minutes15 = "0" + date15.getMinutes();
    var seconds15 = "0" + date15.getSeconds();
    var formattedSunriseTime15 = hours15 + ':' + minutes15.substr(-2) + ':' + seconds15.substr(-2);
    sunriseElement8.innerHTML = "Sunrise: " + formattedSunriseTime15;

    let unix_timestamp16 = weather2.sunset8
    var date16 = new Date(unix_timestamp16 * 1000);
    var hours16 = date16.getHours();
    var minutes16 = "0" + date16.getMinutes();
    var seconds16 = "0" + date16.getSeconds();
    var formattedSunsetTime16 = hours16 + ':' + minutes16.substr(-2) + ':' + seconds16.substr(-2);
    sunsetElement8.innerHTML = "Sunset: " + formattedSunsetTime16;
}

fetch(apiCHI)
    .then(function(response9) {
        let data9 = response9.json();
        return data9;
    })
    .then(function(data9) {
        weather2.temperature.value9 = Math.floor(data9.list[24].main.temp - KELVIN);
        weather2.description9 = data9.list[24].weather[0].description;
        weather2.iconId9 = data9.list[24].weather[0].icon;
        weather2.city9 = data9.city.name;
        weather2.country9 = data9.city.country;
        weather2.day9 = data9.list[1].dt_txt;
        weather2.wind9 = "Wind Speed: " + data9.list[24].wind.speed + " m/s";
        weather2.humidity9 = "Humidity: " + data9.list[24].main.humidity + "%";
        weather2.pressure9 = "Pressure: " + data9.list[24].main.pressure + "hPa";
        weather2.sunrise9 = data9.city.sunrise;
        weather2.sunset9 = data9.city.sunset;
    })
    .then(function() {
        displayWeather9();
    });

// DISPLAY WEATHER TO UI
function displayWeather9() {
    iconElement9.innerHTML = `<img src="weatherCHI/icons/${weather2.iconId9}.png"/>`;
    tempElement9.innerHTML = `${weather2.temperature.value9}°<span>C</span>`;
    descElement9.innerHTML = weather2.description9;
    locationElement9.innerHTML = `${weather2.city9}, ${weather2.country9}`;
    dayElement9.innerHTML = weather2.day9;
    windElement9.innerHTML = weather2.wind9;
    humidityElement9.innerHTML = weather2.humidity9;
    pressureElement9.innerHTML = weather2.pressure9;

    let unix_timestamp17 = weather2.sunrise9
    var date17 = new Date(unix_timestamp17 * 1000);
    var hours17 = date17.getHours();
    var minutes17 = "0" + date17.getMinutes();
    var seconds17 = "0" + date17.getSeconds();
    var formattedSunriseTime17 = hours17 + ':' + minutes17.substr(-2) + ':' + seconds17.substr(-2);
    sunriseElement9.innerHTML = "Sunrise: " + formattedSunriseTime17;

    let unix_timestamp18 = weather2.sunset9
    var date18 = new Date(unix_timestamp18 * 1000);
    var hours18 = date18.getHours();
    var minutes18 = "0" + date18.getMinutes();
    var seconds18 = "0" + date18.getSeconds();
    var formattedSunsetTime18 = hours18 + ':' + minutes18.substr(-2) + ':' + seconds18.substr(-2);
    sunsetElement9.innerHTML = "Sunset: " + formattedSunsetTime18;
}

fetch(apiCHI)
    .then(function(response10) {
        let data10 = response10.json();
        return data10;
    })
    .then(function(data10) {
        weather2.temperature.value10 = Math.floor(data10.list[32].main.temp - KELVIN);
        weather2.description10 = data10.list[32].weather[0].description;
        weather2.iconId10 = data10.list[32].weather[0].icon;
        weather2.city10 = data10.city.name;
        weather2.country10 = data10.city.country;
        weather2.day10 = data10.list[1].dt_txt;
        weather2.wind10 = "Wind Speed: " + data10.list[32].wind.speed + " m/s";
        weather2.humidity10 = "Humidity: " + data10.list[32].main.humidity + "%";
        weather2.pressure10 = "Pressure: " + data10.list[32].main.pressure + "hPa";
        weather2.sunrise10 = data10.city.sunrise;
        weather2.sunset10 = data10.city.sunset;
    })
    .then(function() {
        displayWeather10();
    });

// DISPLAY WEATHER TO UI
function displayWeather10() {
    iconElement10.innerHTML = `<img src="weatherCHI/icons/${weather2.iconId10}.png"/>`;
    tempElement10.innerHTML = `${weather2.temperature.value10}°<span>C</span>`;
    descElement10.innerHTML = weather2.description10;
    locationElement10.innerHTML = `${weather2.city10}, ${weather2.country10}`;
    dayElement10.innerHTML = weather2.day10;
    windElement10.innerHTML = weather2.wind10;
    humidityElement10.innerHTML = weather2.humidity10;
    pressureElement10.innerHTML = weather2.pressure10;

    let unix_timestamp19 = weather2.sunrise10
    var date19 = new Date(unix_timestamp19 * 1000);
    var hours19 = date19.getHours();
    var minutes19 = "0" + date19.getMinutes();
    var seconds19 = "0" + date19.getSeconds();
    var formattedSunriseTime19 = hours19 + ':' + minutes19.substr(-2) + ':' + seconds19.substr(-2);
    sunriseElement10.innerHTML = "Sunrise: " + formattedSunriseTime19;

    let unix_timestamp20 = weather2.sunset10
    var date20 = new Date(unix_timestamp20 * 1000);
    var hours20 = date20.getHours();
    var minutes20 = "0" + date20.getMinutes();
    var seconds20 = "0" + date20.getSeconds();
    var formattedSunsetTime20 = hours20 + ':' + minutes20.substr(-2) + ':' + seconds20.substr(-2);
    sunsetElement10.innerHTML = "Sunset: " + formattedSunsetTime20;
}