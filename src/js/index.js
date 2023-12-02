import { firstCardWidth, getCityCoordinates, getUserCoordinates } from "./fetchWeather.js";
import { dragStart, dragStop, dragging, showHideIcons } from "./draggableCard.js";

const searchInput = document.querySelector(".search-input");
const searchButton = document.querySelector(".search-button");
const locationIcon = document.querySelector(".location-icon");
const weatherCards = document.querySelector(".weather-cards");
const arrowIcons = document.querySelectorAll(".i");

// Weather Api

locationIcon.addEventListener("click", getUserCoordinates);
searchButton.addEventListener("click", getCityCoordinates);
searchInput.addEventListener("keyup", e => e.key === 'Enter' && getCityCoordinates());
window.addEventListener('DOMContentLoaded', getCityCoordinates);

// Draggable Card

arrowIcons.forEach((icon) => {
  icon.addEventListener('click', () => {
    weatherCards.scrollLeft += icon.id === 'left' ? -firstCardWidth : firstCardWidth;
    setTimeout(() => showHideIcons(), 60);
  })
});

weatherCards.addEventListener('mousedown', dragStart);
weatherCards.addEventListener('mousemove', dragging);
document.addEventListener('mouseup', dragStop);