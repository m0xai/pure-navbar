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
  createAndAttach(parentKey, 'nav', 'nav-wrapper', 'nav-wrapper');
  createNavList('nav-wrapper', navItemsObj);
}

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
  elClass ? item.classList.add(elClass) : null;
  parent.appendChild(item);
}

//* Helper Function: create nav ul list. This can be merge with createAndAttach. But it should stay maintainable
// return a list object of html elements
function createNavList(parent, list) {
  console.log('param: list in createnavList ', list);
  const ul = document.createElement('ul');
  ul.classList.add('menu-list-wrapper');
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

export { createNavbar };
