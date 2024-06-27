// Current time
function displayCurrentTime() {
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


// Menu dropdown
const dropdownItems = document.querySelectorAll('.dropdown');

// add condition that only one of the dropdowns can be opened at once
dropdownItems.forEach(item => {
  item.addEventListener('click', () => {
    const dropdownMenu = item.querySelector('.dropdown-list');
    const isActive = dropdownMenu.classList.contains('active');

    // close all menus
    document.querySelectorAll('.dropdown-list').forEach(menu => {
      menu.classList.remove('active');
    });

    // remove active class styling if menu is not opened
    dropdownItems.forEach(dropdown => {
      dropdown.classList.remove('active');
    });

    if (!isActive) {
      dropdownMenu.classList.add('active');
      item.classList.add('active');
    }
  });
});
