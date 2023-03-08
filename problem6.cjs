// ==== Problem #6 ====
/* A buyer is interested in seeing only BMW and Audi cars within the inventory.  
Execute a function and return an array that only contains BMW and Audi cars.  
Once you have the BMWAndAudi array, use JSON.stringify() to show the results of the array in the console.*/

const {inventory}=require('./inventory.cjs');

function problem6(inventory){
    try{
        const filtercar=[];
        for(let car of inventory){
            if(car.car_make=='BMW' || car.car_make=='Audi'){
                filtercar.push(car);
            }        
        }
        return filtercar;
    }catch(err){
        return [];
    }
}



exports.problem6=problem6;
