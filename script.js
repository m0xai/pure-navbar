// Navbar Dropdown
const navBarMoreBtn = document.getElementsByClassName('menu-link');

const menuLink = navBarMoreBtn[navBarMoreBtn.length - 1];

function addIndicator(menuItem) {
  const indicator = document.createElement('span');
  indicator.textContent = '>';
  menuItem.addEventListener('click', () => handleOnClick(indicator));
  menuItem.appendChild(indicator);
}

function handleOnClick(indicator) {
  indicator.classList.add('anim-menu-toggle-button');
}

addIndicator(menuLink);
