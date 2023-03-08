// ==== Problem #2 ====
/* The dealer needs the information on the last car in their inventory. 
Execute a function to find what the make and model of the last car in the inventory is?  
Log the make and model into the console in the format of:*/
//"Last car is a *car make goes here* *car model goes here*"

const { inventory } = require('./inventory.cjs');

function problem2(inventory) {
    try {
        let lastId = inventory.length - 1;
        return `Last car is a ${inventory[lastId].car_make} ${inventory[lastId].car_model}`;
    } catch (err) {
        return '';
    }
}

console.log(problem2(inventory));


exports.problem2=problem2;
