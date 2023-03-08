// ==== Problem #3 ====
/* The marketing team wants the car models listed alphabetically on the website. 
Execute a function to Sort all the car model names i
nto alphabetical order and log the results in the console as it was returned.*/

const { inventory } = require('./inventory.cjs')

function problem3(inventory) {
    try {
        let sortedInventory = inventory.sort((a, b) => {
            let firstcar = a.car_make.toLowerCase(),
                secondcar = b.car_make.toLowerCase();

            if (firstcar < secondcar) {
                return -1;
            }
            if (firstcar > secondcar) {
                return 1;
            }
            return 0;
        }
        );
        console.log('sa');
        return sortedInventory;
    } catch (err) {
        return [];
    }
}


exports.problem3=problem3;
