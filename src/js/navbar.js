// Use this placeholder object to create nav elements
const navItems = {
  siteName: ["My Website", "/"],
  home: ["Home Page", "/"],
  about: ["About", "#"],
  blog: ["Blog", "#"],
  karierre: ["Karierre", "#"],
  contact: ["Contact", "#"],
};

const subNavItems = {
  // data-attribute: ["innerText", "url"]
  stepOne: ["Step One", "#"],
  testingSubNav: ["Testing sub nav", "#"],
  github: ["Github", "https://github.com/m0xai"],
  kerem: ["Kerem Zopcuk", "https://keremz.de"],
};

function createNavbar(parentKey, navItemsObj) {
  createAndAttach(parentKey, "nav", "nav-wrapper", "nav-wrapper");
  createNavList("nav-wrapper", navItemsObj, "parent");
}

createNavbar("header", navItems);

// Create sub nav function takes parentKey, subItemsObj.
// This function creates data id for every item .
// This function finds items incex from its data attribute.
//! Call this only if there should be a sub nav element
// Subnavkey can be anything
function createSubNav(parentKey, subItemsObj) {
  createNavList(parentKey, subItemsObj, "child");
}

createSubNav("blog", subNavItems);
createSubNav("about", subNavItems);

//* Helper Function: Create and attach an item to an parent element.
function createAndAttach(parentKey, el, elKey, elClass) {
  const item = document.createElement(el);
  const parent = document.querySelector(`[data-key=${parentKey}]`);
  item.setAttribute("data-key", elKey);
  elClass ? item.classList.add(elClass) : null;
  parent.appendChild(item);
}

function addListener(el, sub) {
  console.log("subdisp", sub.style.display);
  el.addEventListener("click", () => {
    console.log("hello");
    toggleDisplay(el, sub);
  });
}

function toggleDisplay(el, sub) {
  if (sub.style.display === "none" || sub.style.display === "") {
    sub.style.display = "block";
    el.style.backgroundColor = "white";
  } else {
    sub.style.display = "none";
    el.style.backgroundColor = "unset";
  }
}

//* Helper Function: create nav ul list. This can be merge with createAndAttach. But it should stay maintainable
// return a list object of html elements
//TODO: Divide this to new under functions like: createNavList_li
function createNavList(parent, list, type) {
  const parentEl = getELFromKey(parent);
  const ul = document.createElement("ul");
  // spare items of their type
  if (type === "parent") ul.classList.add("menu-list-wrapper");
  if (type === "child") {
    parentEl
      .querySelector("a")
      .querySelector("span")
      .classList.add("has-subnav");
    ul.classList.add("subnav-wrapper");
    addListener(parentEl, ul);
  }
  for (let prop in list) {
    console.log("param: prop in for..in loop at createNavList");
    const li = document.createElement("li");
    li.classList.add("menu-link");
    li.dataset.key = prop;
    const a = document.createElement("a");
    a.href = list[prop][1];
    const span = document.createElement("span");
    span.innerText = list[prop][0];
    a.appendChild(span);
    li.appendChild(a);
    ul.appendChild(li);
  }
  parentEl.appendChild(ul);
}
//* Helper Function: Get item from given data attribute value
function getELFromKey(key) {
  const item = document.querySelector(`[data-key=${key}]`);
  return item;
}

//TODO: Create a helper function to add and delete navbars
//TODO: On the palayground page place right side adding and left side deleting navbars

export { createNavbar, createSubNav };
