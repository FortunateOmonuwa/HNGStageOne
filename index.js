const timeFunction = function updateDateTime() {
  const dayOfTheWeekElement = document.getElementById("dayOfTheWeek");
  const UTCTimeElement = document.getElementById("UTCTime");

  const currentDate = new Date();

  const daysOfWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const currentDayOfWeek = daysOfWeek[currentDate.getUTCDay()];

  const currentTimeString = currentDate.toTimeString();

  const currentTime = currentTimeString;

  dayOfTheWeekElement.textContent = currentDayOfWeek;
  UTCTimeElement.textContent = currentTime;
};

timeFunction();

setInterval(timeFunction, 1000);
