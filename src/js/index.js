import { getCityCoordinates, getUserCoordinates, animationInput } from "./fetchWeather.js";

export const searchInput = document.querySelector(".search-input"),
searchButton = document.querySelector(".search-button");
const locationIcon = document.querySelector(".location-icon");





locationIcon.addEventListener("click", getUserCoordinates);
searchButton.addEventListener("click", getCityCoordinates);
searchButton.addEventListener("click", animationInput);
searchInput.addEventListener("keyup", e => e.key === 'Enter' && getCityCoordinates());
window.addEventListener('DOMContentLoaded', getCityCoordinates);
