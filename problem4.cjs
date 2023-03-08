// ==== Problem #4 ====
/* The accounting team needs all the years from every car on the lot. 
Execute a function that will return an array from the dealer data containing only 
the car years and log the result in the console as it was returned.*/

const {inventory}= require('./inventory.cjs');

function problem4(inventory){
    
    try{
        const years=[];
        for(let car of inventory){
            years.push(car.car_year)
        }
        return years;
    } catch(err){
        return [];
    }
}


exports.problem4=problem4;
