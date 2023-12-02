import { getCityCoordinates, getUserCoordinates } from "./fetchWeather.js";

export const searchInput = document.querySelector(".search-input"),
searchButton = document.querySelector(".search-button");
const locationIcon = document.querySelector(".location-icon");


searchInput.addEventListener('touchstart', function(event) {
  event.preventDefault();
});


locationIcon.addEventListener("click", getUserCoordinates);
searchButton.addEventListener("click", getCityCoordinates);
searchInput.addEventListener("keyup", e => e.key === 'Enter' && getCityCoordinates());
window.addEventListener('DOMContentLoaded', getCityCoordinates);