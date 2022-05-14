import idList from "./db/idList.js"

class Navbar {
  id = Date.now();
  title = "";
  bgColor = "";
  itemColor = "";
  items = [];

  constructor(title,  items, bgColor, itemColor){
    this.title = title;
    this.items = items;
    this.bgColor = bgColor;
    this.itemColor = itemColor;
  }

  
  //============================//
  // Getters and Setters        //
  //============================//
  get id() {
    return this.id;
  }
  set id(val) {
    const isValidInteger = Number.isInteger(val)
    if(!isValidInteger || idList.conatains(val)) throw new Error("Error: The id that you provided not a valid id. Please try with unique one")
    this.id = val 
  }

  get title() {
    return this.title;
  }
  set title(val){
    const isValidStringObj = Object.prototype.toString.call(val) === "[object string]"
    if(!isValidStringObj) throw new Error("ERROR: The tite string you entered is not valid, please provide a valid string.")
    this.title = val;
  }

  get bgColor() {
    return this.bgColor;
  }
  set bgColor(val) {
    this.bgColor = val;
  }

  get items() {
    return this.items;
  }
  set items(val) {
    if(!val) throw new Error("Error: Your items array is invalid, try something like: myMenu = []")
    this.items = val
  }
  get itemColor() {
    return this.itemColor;
  }
}

// In helper method can the color of certain item changable. like color of brand or any specific menu element.
  //

export {Navbar as default}
