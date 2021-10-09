// Navbar Dropdown
const navBarMoreBtn = document.getElementsByClassName('menu-link');

const menuLink = navBarMoreBtn[navBarMoreBtn.length - 3];

function addIndicator(menuItem) {
  const indicator = document.createElement('span');
  indicator.textContent = '>';
  menuItem.addEventListener('click', () => handleOnClick(indicator, menuItem));
  menuItem.appendChild(indicator);
}

function handleOnClick(indicator, menuItem) {
  indicator.classList.toggle('anim-menu-toggle-button');
  createSubNavDiv(menuItem);
}

addIndicator(menuLink);

function createSubNav(itemCount) {
  const itemsArr = [];
  const itemPlaceHolders = ['Lorem', 'Ipsum', 'Dior', 'Sit', 'Amenc'];
  for (let i = 0; i < itemCount; i++) {
    const item = document.createElement('a');
    item.textContent = itemPlaceHolders[Math.random * itemPlaceHolders.length];
    item.href = '#';
    itemsArr.push(item);
  }
  return itemsArr;
}

function createSubNavDiv(parent) {
  const nav = document.createElement('nav');
  nav.classList.add('dropdown-wrapper');
  parent.appendChild(nav);
  return nav;
}
