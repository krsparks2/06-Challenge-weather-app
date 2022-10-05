let weather =
{
    "apiKey": "6b78723687548fe008cc1fed9057aafb",
    fetchWeather: function(city){
        fetch(
            "https://api.openweathermap.org/data/2.5/weather?q=" 
            + city 
            + "&units=imperial&appid=" 
            + this.apiKey
        )
            .then((response) => response.json())
            .then((data) => this.weatherInfo(data));
    },
    weatherInfo: function (data){
        const { name } = data;
        const { icon, description } = data.weather[0];
        const { temp, humidity } = data.main;
        const { speed } = data.wind;
        console.log(name, icon, description, temp, humidity, speed)
        document.querySelector(".city").innerText = "Weather in " + name;
        document.querySelector(".icon").src = "https://openweathermap.org/img/wn/" + icon + "@1x.png";
        document.querySelector(".description").innerText = "desciption: " + description;
        document.querySelector(".temp").innerText = "temperature: " + temp + "°F";
        document.querySelector(".humidity").innerText = "humidity: " + humidity + "%";
        document.querySelector(".wind").innerText = "wind speed " + speed + "mph";
        },
        search: function (){
            this.fetchWeather(document.querySelector(".searchBar").value);
        }
};

document.querySelector(".searchButton").addEventListener("click", function() {
    weather.search();
    })