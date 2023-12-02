const setWeekDay = (weatherItem) => {
  let weekDays = new Date(weatherItem.dt_txt.split(" ")[0]).getDay();
  switch(weekDays) {
    case 1:
      weekDays = "Mon"
      break
    case 2:
      weekDays = "Tue"
      break
    case 3:
      weekDays = "Wed"
      break
    case 4:
      weekDays = "Thu"
      break
    case 5:
      weekDays = "Fri"
      break
    case 6:
      weekDays = "Sat"
      break
    case 0:
      weekDays = "Sun"
      break
    default: return
  };

  return weekDays;
}


export const createdCard = (weatherItem) => {
  const weatherCards = document.querySelector(".weather-cards");

  const contentCard = document.createElement('li');
  contentCard.className = 'card';

  const weekDayTitle = document.createElement('h3');
  weekDayTitle.className = 'week-day-title';
  weekDayTitle.textContent = setWeekDay(weatherItem);

  const weatherImage = document.createElement('img');
  weatherImage.className = 'weather-image';
  weatherImage.src = `./image/${weatherItem.weather[0].main}.png`;
  weatherImage.alt = weatherItem.weather[0].description;

  const conditionWeek = document.createElement('p');
  conditionWeek.className = 'condition-week';
  conditionWeek.textContent = weatherItem.weather[0].description;

  const tempWeek = document.createElement('h4');
  tempWeek.className = 'temp-week';
  tempWeek.textContent = `${Math.floor(weatherItem.main.temp - 273.15)}°`;

  contentCard.append(weekDayTitle, weatherImage, conditionWeek, tempWeek);

  weatherCards.append(contentCard)
}