import { firstCardWidth, getCityCoordinates, riminiCityCoordinates, getUserCoordinates } from "./fetchWeather.js";
import { dragStart, dragStop, dragging, showHideIcons } from "./draggableCard.js";

const searchInput = document.querySelector(".search-input");
const searchButton = document.querySelector(".search-button");
const locationIcon = document.querySelector(".location-icon");
const weatherCards = document.querySelector(".weather-cards");
const arrowIcons = document.querySelectorAll(".i");
const iconsNav = document.querySelectorAll(".icon-nav");

// Weather Api

locationIcon.addEventListener("click", getUserCoordinates);
searchButton.addEventListener("click", getCityCoordinates);
searchInput.addEventListener("keyup", e => e.key === 'Enter' && getCityCoordinates());
window.addEventListener('DOMContentLoaded', riminiCityCoordinates);

// Draggable Card

arrowIcons.forEach((icon) => {
  icon.addEventListener('click', () => {
    weatherCards.scrollLeft += icon.id === 'left' ? -firstCardWidth : firstCardWidth;
    setTimeout(() => showHideIcons(), 60);
  })
});

weatherCards.addEventListener('mousedown', dragStart);
weatherCards.addEventListener('touchstart', dragStart);

weatherCards.addEventListener('mousemove', dragging);
weatherCards.addEventListener('touchmove', dragging);

weatherCards.addEventListener('mouseup', dragStop);
weatherCards.addEventListener('touchend', dragStop);
weatherCards.addEventListener('mouseleave', dragStop);

// Hover Elements

iconsNav.forEach((icon) => {
  icon.addEventListener('touchstart', () =>  {
    icon.style.opacity = '1'
  })
  icon.addEventListener('touchend', () =>  {
    setInterval(() => {icon.style.opacity = '.6'}, 1500)
  })
});