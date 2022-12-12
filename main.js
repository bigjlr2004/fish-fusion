const { fishMenu } = require("./restaurant.js")
const { fishMonger } = require("./fishMonger.js");
const {boatInventory} = require("./fishingBoat.js");


// Uncomment this code block when you're ready to test your logic
const fullInventory = boatInventory();
const mongerInventory = fishMonger(fullInventory, 7.5);

const menu = fishMenu(mongerInventory, 5);
console.log(menu)



