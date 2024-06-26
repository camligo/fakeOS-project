// Current time
function displayCurrentTime() {
  let currentDateTime = new Date();
  let formattedTime = `${currentDateTime.getHours()}:${currentDateTime.getMinutes()}`;
  document.getElementById('timeDisplay').textContent = `${formattedTime}`;
};
displayCurrentTime();

setInterval(() => {
  displayCurrentTime;
}, 60000); // updates every minute
