/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


//Opgave1----------------------------------------------------------------------
console.log("Opgave 1:");
var names = ["Lars", "Jan", "Peter", "Bo", "Frederik"];

const result = names.filter(name => name.length <= 3);
console.log(result);

names.forEach(function (printout) {
    console.log(printout);
});

console.log("");

result.forEach(function (printout) {
    console.log(printout);
});


//Opgave2----------------------------------------------------------------------
console.log("Opgave 2:");
var upperCaseNames = names.map(names => names.toUpperCase());
console.log(upperCaseNames);

//Opgave3----------------------------------------------------------------------
console.log("Opgave 3:");
let list = names.map(function (name) {
    return "<li>" + name + "</li>";
});
let listAsString = "<ul>" + list.join("\n") + "</ul>";
console.log(listAsString);

//Opgave4----------------------------------------------------------------------
console.log("Opgave 4:");
var cars = [
    {id: 1, year: 1997, make: 'Ford', model: 'E350', price: 3000},
    {id: 2, year: 1999, make: 'Chevy', model: 'Venture', price: 4900},
    {id: 3, year: 2000, make: 'Chevy', model: 'Venture', price: 5000},
    {id: 4, year: 1996, make: 'Jeep', model: 'Grand Cherokee', price: 4799},
    {id: 5, year: 2005, make: 'Volvo', model: 'V70', price: 44799}
];

//Cars newer than 1999
console.log("Cars newer than 1999");
var resultCarsYear = cars.filter(car => car.year > 1999);
console.log(resultCarsYear);

//ALL VOLVOs
console.log("ALL VOLVOs");
var resultCarsMake = cars.filter(car => car.make === "Volvo");
console.log(resultCarsMake);

//All cars below 5000
console.log("All cars below 5000");
var resultCarsPrice = cars.filter(car => car.price < 5000);
console.log(resultCarsPrice);

//Opgave4A----------------------------------------------------------------------
console.log("Opgave 4A:");

    let values = cars.map(function(car){
       let code = "INSERT INTO cars (id,year,make,model,price) VALUES ";

       let code2 =  "(" + car.id + ", " + car.year + ", " + car.make + ", " + car.model + ", " + car.price + ");";
            return code + code2;
    });
    console.log(values);