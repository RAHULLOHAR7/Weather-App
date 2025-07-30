const locationInput = document.getElementById("locationInput");
const locationName = document.getElementById("locationName");
const temperature = document.getElementById("temperature");
const description = document.getElementById("description");
const feelsLike = document.getElementById("feelsLike");
const humidity = document.getElementById("humidity");
const windSpeed = document.getElementById("windSpeed");
const weatherDetails = document.getElementById("weatherDetails");

const API_KEY = "895284fb2d2c50a520ea537456963d9c";

locationInput.addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    const location = locationInput.value;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=${API_KEY}`;

    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        locationName.textContent = data.name || "";
        temperature.textContent = data.main
          ? `${data.main.temp.toFixed()}°C`
          : "";
        description.textContent = data.weather ? data.weather[0].main : "";
        feelsLike.textContent = data.main
          ? `${data.main.feels_like.toFixed()}°C`
          : "";
        humidity.textContent = data.main ? `${data.main.humidity}%` : "";
        windSpeed.textContent = data.wind
          ? `${data.wind.speed.toFixed()} m/s`
          : "";

        if (data.name) {
          weatherDetails.style.display = "flex";
        }

        locationInput.value = "";
      })
      .catch((err) => {
        alert("Location not found");
        weatherDetails.style.display = "none";
        locationInput.value = "";
      });
  }
});
