const weatherCards = document.querySelector('.weather-cards');
const arrowIcons = document.querySelectorAll(".i");

let isDragging = false , startX, startScrollLeft;

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
  showHideIcons();
};

const dragStop = () => {
  isDragging = false;
  weatherCards.classList.remove('dragging');
};

const showHideIcons = () => {
  // showing and hiding prev/next icon according to carousel scroll left value 
  let scrollWidth = weatherCards.scrollWidth - weatherCards.clientWidth; // getting max scrollable width
  arrowIcons[0].style.display = weatherCards.scrollLeft == 0 ? 'none' : 'grid';
  arrowIcons[1].style.display = weatherCards.scrollLeft == scrollWidth ? 'none' : 'grid';
}

export { dragStart, dragStop, dragging, showHideIcons }