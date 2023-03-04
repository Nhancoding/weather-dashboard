console.log("hello world")

// requestUrl = "http://api.openweathermap.org/geo/1.0/direct?q=London&limit=5&appid=3d29d8181da8427e1bf1ba26b53024b7"
// fetch(requestUrl)
//         .then(function (response) {
//             console.log(response);
//             return response.json();
//         }
//     )

var apiKey = "fa2177c2fdb5b040bb46204ac6bac826"

const input = document.getElementById("search-city")
const button = document.querySelector(".button")
const currentWeather = document.querySelector(".weather")
const currentTemp = document.querySelector(".temp")
const currentWind = document.querySelector(".wind")
const currentHumidity = document.querySelector(".humidity")
const City = document.querySelector(".title")
const header = document.querySelector(".header")
const today = document.querySelector(".today")
const forecastContainer = document.querySelector(".nes-container")


const fetchCurrentData = function(city){
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=imperial`)
    .then(function (response){
        return response.json()
        .then(function (data){
            header.innerHTML = ""
            currentTemp.innerHTML = ""
            currentWind.innerHTML = ""
            currentHumidity.innerHTML = ""
            
            console.log(data);
            const oneDayCity = document.createElement("p")
            oneDayCity.innerHTML = "Today's forcast in " + data.name
            header.append(oneDayCity)
            currentTemp.innerHTML = "Today's temperature " + data.main.temp
            currentWind.innerHTML = "Today's wind " + data.wind.speed
            currentHumidity.innerHTML = "Today's humidity " + data.main.humidity
            currentWeather.innerHTML = "Today's weather " + data.weather[0].description
            
            let date = data.dt
            let conversion = date*1000
            let now = new Date(conversion)
            let dateString = now.toDateString()
            let currentDate = document.createElement("h5")
            currentDate.innerHTML = dateString
            header.append(currentDate)
            
        })
    })
};

const getForecastAndCoordinate = function(city){
    //api.openweathermap.org/data/2.5/forecast?q={city name}&appid={API key}
    let cardArray = []
    fetch(`http://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&units=imperial`)
    .then(function (response){
        return response.json()
        .then(function (data){
            console.log(data);
            for (let i = 0; i < data.list.length; i=i+8) {
            console.log(data.list[i]);
            const card = `<div class="card">
            <div class="card-content">
              <div class="content">
                <p id="forecast-date">${data.list[i].dt_txt.split(" ")[0]}</p>
                <p id="weather-5-day">${data.list[i].weather[0].description}</p>
                <p id="temp-5-day">${data.list[i].main.temp}</p>
                <p id="wind-5-day">${data.list[i].wind.speed}t</p>
                <p id="humidity-5-day">${data.list[i].main.humidity}</p>
            </div>
          </div>` 
          cardArray.push(card)
            }
            // cardArray.forEach((card)=>{
            //     forecastContainer.innerHTML=card
            // })
        forecastContainer.innerHTML=cardArray
        })
    })
};



//create elements card in getForecastAndCoordinate

button.addEventListener("click", function(event){
    event.preventDefault()
    fetchCurrentData(input.value)
    getForecastAndCoordinate(input.value)
});

