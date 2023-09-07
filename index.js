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

  const currentTime = new Date().toUTCString().split(" ")[4] + " UTC";

  UTCTimeElement.textContent = currentTime;
  dayOfTheWeekElement.textContent = currentDayOfWeek;
};

timeFunction();

setInterval(timeFunction, 1000);
