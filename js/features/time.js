export function getCurrentTime() {
  let currentDateTime = new Date();
  let hours = currentDateTime.getHours();
  let mins = currentDateTime.getMinutes();

  if (hours < 10) {
    hours = '0' + hours;
  } else if (mins < 10) {
    mins = '0' + mins;
  }

  return `${hours}:${mins}`;
};
