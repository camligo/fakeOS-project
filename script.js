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


// Modals
const modals = document.querySelectorAll('.modal');
const closeBtn = document.querySelector('.btn-close');
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
