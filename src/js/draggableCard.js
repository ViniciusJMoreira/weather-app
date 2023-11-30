const weatherCards = document.querySelector('.weather-cards');
const daysForecast = document.querySelector('.days-forecast');
const arrowIcons = document.querySelectorAll('.i');
const carouselChildrens = [...weatherCards.children];

let isDragging, startX, startScrollLeft;

 // Get the number of cards that can fit in the carousel at once
 let cardPerView = Math.round(weatherCards.offsetWidth / firstCardWidth);
 // Insert copies of the last few cards to beginning of carousel for infinite scrolling
 carouselChildrens.slice(-cardPerView).reverse().forEach(card => {
   weatherCards.insertAdjacentHTML("afterbegin", card.outerHTML);
 });
 // Insert copies of the first few cards to end of carousel for infinite scrolling
 carouselChildrens.slice(0, cardPerView).forEach(card => {
   weatherCards.insertAdjacentHTML("beforeend", card.outerHTML);
 });
 
 // add event listeners for the arrow icons to scroll the carousel left and right
 arrowIcons.forEach((icon) => {
   icon.addEventListener('click', () => {
     weatherCards.scrollLeft += icon.id === 'left' ? -firstCardWidth : firstCardWidth; 
   })
 });

 const dragStart = (e) => {
  isDragging = true;
  weatherCards.classList.add('dragging');
  // records the initial scroll  and cursor position of the carousel
  startX = e.pageX;
  startScrollLeft = weatherCards.scrollLeft;
};

 const dragging = (e) => {
  // if isDragging is false return from here
  if (!isDragging) return;
  // updates the scroll position of the carousel based on the cursor movement
  weatherCards.scrollLeft = startScrollLeft - (e.pageX - startX);
};

 const dragStop = () => {
  isDragging = false;
  weatherCards.classList.remove('dragging');
};

 const infiniteScroll = () => {
  // If the carousel is at the beginning, scroll to the end
  if(weatherCards.scrollLeft === 0) {
    weatherCards.classList.add("no-transition");
    weatherCards.scrollLeft = weatherCards.scrollWidth - (2 * weatherCards.offsetWidth);
    weatherCards.classList.remove("no-transition");
  }
  // If the carousel is at the end, scroll to the beginning
  else if(Math.ceil(weatherCards.scrollLeft) === weatherCards.scrollWidth - weatherCards.offsetWidth) {
    weatherCards.classList.add("no-transition");
    weatherCards.scrollLeft = weatherCards.offsetWidth;
    weatherCards.classList.remove("no-transition");
  }
}

weatherCards.addEventListener('mousedown', dragStart);
weatherCards.addEventListener('mousemove', dragging);
document.addEventListener('mouseup', dragStop);
weatherCards.addEventListener('scroll', infiniteScroll);