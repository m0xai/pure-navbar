function setActiveMenuItem(elements, e) {
  console.log('setActivemenuItems working');
  console.log('e target', e.target);
  elements.forEach((item) => {
    if (e.target == item) {
      item.classList.add('item-active');
    } else {
      item.classList.remove('item-active');
    }
  });
}

(function addEventOnMenuItems() {
  const elements = document.querySelectorAll('.menu-link');
  console.log('elements: ', elements);
  console.log('AddEventOnMenuItems working...');
  elements.forEach((element) =>
    element.addEventListener('click', (e) => {
      setActiveMenuItem(elements, e);
    })
  );
})();

function attachSubNav() {}

function createSubNav(parentLi) {
  parentLi.classList.add('dropdown-parent');
  const nav = document.createElement('nav');
  nav.classList.add('dropdown-wrapper', 'hidden');
  createSubNavItems(nav);
  parentLi.appendChild(nav);
}

function createSubNavItems(parentNav) {
  const itemPlaceHolders = [
    'Lorem',
    'Ipsum Monc',
    'Dior',
    'Sit Mencu onte',
    'Amenc',
  ];
  for (let i = 0; i < itemPlaceHolders.length; i++) {
    const item = document.createElement('a');
    item.innerText =
      itemPlaceHolders[Math.floor(Math.random() * itemPlaceHolders.length)];
    item.href = '#';
    parentNav.appendChild(item);
  }
}

createSubNav(document.getElementsByClassName('menu-link')[3]);

export { attachSubNav };
