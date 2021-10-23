// Create navbar takes tree param, one of them is a parent id, navbar will be attached this element. Other param is an object. Sitename is string.

// Use this to create nav elements
const navItems = {
  siteName: ['My Website', '/'],
  home: ['Home Page', '/'],
  about: ['About', '/about'],
  blog: ['Blog', '/blog'],
  karierre: ['Karierre', '/karierre'],
  contact: ['Contact', '/contact'],
};

function createNavbar(parentKey, navItemsObj) {
  createAndAttach(parentKey, 'nav', 'nav-wrapper');
  createNavList('nav-wrapper', navItemsObj);
}

//$
createNavbar('header', navItems);

// Create sub nav function takes parentKey, subItemsObj.
// This function creates data id for every item .
// This function finds items incex from its data attribute.
//! Call this only if there should be a sub nav element
// Subnavkey can be anything
function newCreateSubNav(parentKey, subItemsObj) {
  createNavList(parentKey, subItemsObj);
}

//* Helper Function: Create and attach an item to an parent element.
function createAndAttach(parentKey, el, elKey, elClass) {
  const item = document.createElement(el);
  const parent = document.querySelector(`[data-key=${parentKey}]`);
  item.setAttribute('data-key', elKey);
  item.classList.add(elClass);
  parent.appendChild(item);
}

//* Helper Function: create nav ul list. This can be merge with createAndAttach. But it should stay maintainable
// return a list object of html elements
function createNavList(parent, list) {
  console.log('param: list in createnavList ', list);
  const ul = document.createElement('ul');
  ul.classList.add('menu-wrapper');
  for (let prop in list) {
    console.log('param: prop in for..in loop at createNavList');
    const li = document.createElement('li');
    li.classList.add('menu-link');
    li.dataset.key = prop;
    const a = document.createElement('a');
    a.innerText = list[prop][0];
    a.href = list[prop][1];
    li.appendChild(a);
    ul.appendChild(li);
  }
  getELFromKey(parent).appendChild(ul);
  console.log('Ul item generated in createNavList: ', ul);
}

//* Helper Function: Get item from given data attribute value
function getELFromKey(key) {
  const item = document.querySelector(`[data-key=${key}]`);
  return item;
}

//TODO: Create a helper function to add and delete navbars
//TODO: On the palayground page place right side adding and left side deleting navbars

const subNavItems = {
  // data-attribute: ["innerText", "url"]
  stepOne: ['Step One', '/aobut'],
  testingSubNav: ['Testing sub nav', '/merhaba'],
  github: ['Github', 'https://github.com/m0xai'],
  kerem: ['Kerem Zopcuk', 'https://keremz.de'],
};

function setActiveMenuItem(elements, e) {
  console.log('setActivemenuItems working');
  console.log('e target', e.target);
  elements.forEach((item) => {
    if (e.target === item) {
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

function createSubNav(parentLi) {
  parentLi.classList.add('has-subnav');
  const nav = document.createElement('nav');
  nav.classList.add('dropdown-wrapper', 'hidden');
  createSubNavItems(nav);
  toggleHidden(parentLi, nav);
  parentLi.appendChild(nav);
}

// function appendSubnavIcon(parentLi) {
//   const parentItemSpan = parentLi.getElementsByTagName('span')[0];
//   const subNavIcon = document.createElement('span');
//   subNavIcon.classList.add('subnav-icon');
//   subNavIcon.innerText = '>';
//   parentItemSpan.insertAdjacentElement('afterend', subNavIcon);
// }

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

function toggleHidden(parentLi, nav) {
  parentLi.addEventListener('click', () => {
    nav.classList.toggle('hidden');
    parentLi.classList.toggle('dropdown-parent');
  });
}

// Chose any menu link to add a sub navbar
// createSubNav(document.getElementsByClassName('menu-link')[3]);

//// Home Subnav creator functions
// function selectToAddSubnav() {
// Select all nav items
// Check if an item has already nav
//   const button = document.getElementById('navar-generator');
// }

export { createSubNav };
