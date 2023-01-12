console.log("hello world")

requestUrl = "http://api.openweathermap.org/geo/1.0/direct?q=London&limit=5&appid=3d29d8181da8427e1bf1ba26b53024b7"
fetch(requestUrl)
        .then(function (response) {
            console.log(response);
            return response.json();
        }
    )

var apiKey = fa2177c2fdb5b040bb46204ac6bac826
// make search input give ID
// make search button give ID
// use these to select with jquery
// make on click event for search
// capture value of input
// save in variable
// console log
// make function getCity
// make api call in this function
// console log response
// make function getUV(lat, lon)
// make api call using lat lon grabbed from being inside getCity
// console log
// make showWeather function and create jquery cards to display
// return to getCity and call within showWeather and getUV
// pass them data to display