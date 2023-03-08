// ==== Problem #5 ====
/* The car lot manager needs to find out how many cars are 
older than the year 2000. Using the array you just obtained from 
the previous problem, find out how many cars were made before the year 2000 
and return the array of older cars and log its length.*/

const { inventory } = require('./inventory.cjs');

const { problem4 } = require('./problem4.cjs');

const years = problem4(inventory);

function problem5(years) {
    try {
        const total=0;
        for (let year of years) {
            if (year < 2000) {
                total+=1;
            }
        }
        return total;
    } catch (err) {
        return 0;    
    }
}

exports.problem5=problem5;