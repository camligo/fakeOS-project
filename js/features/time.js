// Current time
export function displayCurrentTime() {
  let currentDateTime = new Date();
  let hours = currentDateTime.getHours();
  let mins = currentDateTime.getMinutes();

  if (hours < 10) {
    hours = '0' + hours;
  } else if (mins < 10) {
    mins = '0' + mins;
  }

  let formattedTime = `${hours}:${mins}`;
  document.getElementById('timeDisplay').textContent = `${formattedTime}`;
};

displayCurrentTime();

setInterval(() => {
  displayCurrentTime;
}, 30000); // updates every 30s
