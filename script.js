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

    if (!isActive) {
      dropdownMenu.classList.add('active');
    }
  });
});
