export const setActuallyWeather = (weatherItem, name) => {
  const cityName = document.querySelector(".city-name");
  cityName.textContent = name;

  const actuallyCondition = document.querySelector(".condition");
  actuallyCondition.textContent = weatherItem.weather[0].main;

  const actuallyTemp = document.querySelector(".actually-temp");
  actuallyTemp.textContent = `${Math.floor(weatherItem.main.temp - 273.15)}°`;

  const actuallyWeatherImage = document.querySelector(".actually-weather-image");
  actuallyWeatherImage.src = `../../image/${weatherItem.weather[0].main}.png`;

  // Condition-Info

  const conditionCloudy = document.querySelector(".cloud");
  conditionCloudy.textContent = `${weatherItem.clouds.all}%`;

  const conditionHumidity = document.querySelector(".humidity");
  conditionHumidity.textContent = `${weatherItem.main.humidity}%`;

  const conditionWind = document.querySelector(".wind");
  conditionWind.textContent = `${weatherItem.wind.speed} m/s`;
}