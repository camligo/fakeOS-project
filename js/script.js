import { getCurrentTime } from "./features/time.js";
import { getCurrentDate } from "./features/date.js";

function displayCurrentTime() {
  let formattedTime = getCurrentTime();
  document.getElementById('timeDisplay').textContent = formattedTime;
}
displayCurrentTime();
setInterval(displayCurrentTime, 10000); // updates every 10s

// display date in dropdown
function displayCurrentDate() {
  let formattedDate = getCurrentDate()
  document.getElementById('dateDisplay').textContent = formattedDate;
}
displayCurrentDate();

// menu dropdown
const dropdownItems = document.querySelectorAll('.dropdown');

// adds condition that only one of the dropdowns can be opened at once
dropdownItems.forEach(item => {
  item.addEventListener('click', () => {
    const dropdownMenu = item.querySelector('.dropdown-list');
    const isActive = dropdownMenu.classList.contains('active');

    // closes all menus
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

// Modals
const modals = document.querySelectorAll('.modal');
const apps = document.querySelectorAll('.app-box')

const openModal = (modal) => {
  modal.classList.remove('hidden');
}

const closeModal = (modal) => {
  modal.classList.add('hidden');
}

apps.forEach((app) => {
  app.addEventListener('click', () => {
    let modal;
    if (app.id === 'paintApp') {
      modal = document.getElementById('paintModal');
    } else if (app.id === 'binApp') {
      modal = document.getElementById('binModal');
    } else if (app.id === 'printApp') {
      modal = document.getElementById('printModal');
    }
    if (modal) {
      openModal(modal);
    }
  })
})

modals.forEach(modal => {
  const closeBtn = modal.querySelector('.btn-close');
  if (closeBtn) {
    closeBtn.addEventListener('click', () => {
      closeModal(modal);
    });
  }
});
