const apiKey = "9d61c935a98b7841e309894d1d791c7e";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?&units=imperial&q=";


const searchBox = document.querySelector(".search input ");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon")

async function checkWeather(city) {
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
    var data = await response.json();

    console.log(data)

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp)  + "℉";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = Math.round(data.wind.speed)  + " Mph";

if(data.weather[0].main == "clouds"){
weatherIcon.src = "images/weather images/clouds.png";
}
else if(data.weather[0].main == "clear"){
weatherIcon.src = "images/weather images/clear.png";
} 
else if(data.weather[0].main == "rain"){
weatherIcon.src = "images/weather images/rain.png";
}
else if(data.weather[0].main == "drizzle"){
weatherIcon.src = "images/weather images/drizzle.png";
}
else if(data.weather[0].main == "mist"){
weatherIcon.src = "images/weather images/mist.png";
}
}

searchBtn.addEventListener("click", ()=>{
    checkWeather(searchBox.value);
});
