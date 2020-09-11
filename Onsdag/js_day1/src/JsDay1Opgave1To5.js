/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


// Function Declaration
//Observe: no return type, no type on parameters
function add(n1, n2) {
    return n1 + n2;
}

// Function Expression
var sub = function (n1, n2) {
    return n1 - n2;
};

// Callback example
var cb = function (n1, n2, callback) {
    return "Result from the two numbers: " + n1 + "+" + n2 + "=" + callback(n1, n2);
};

//Opgave2
//OUTCOMMENT the thing you want to see.
//console.log( add(1,2) )     // What will this print? 1+2 = 3
//console.log( add(1,2,3,5) ) ; // What will it print? It only take the first 2 variables. so 1+2 = 3
//console.log( add(1) );	  // What will it print? Missing a variable, NaN (not a number), 1 + undefined = NaN
//console.log( cb(3,3,add) ); // What will it print? It calls the add function for the result, and prints the into the cb function that prints the varibles.
//console.log( cb(4,3,sub) ); // What will it print? Same as above, though this time calling the sub function. Though minor error, hence that the cb function is still adding in the string.
//console.log(cb(3,3,add())); // What will it print (and what was the problem)? This gives an error, hence the syntax is wrong. Its calling two undefined parameters from the function add. Remove the "()" after add to call the reference of the callback func.
//console.log(cb(3,"hh",add));// What will it print? 3+hh = 3hh. This is just as concatination, but differently than that of java, it can concatinate numbers and letters, even through the cb function.

typeof n1 === "number" //Will fail if n1 is undefined, or is not a number
typeof callback === "function" //Will fail if callback is undefined or is not a function

// Opgave3
// Callback example 2
var cb2 = function (n1, n2, callback) {
    try {
        if ((typeof callback === "function") && (typeof n1 === "number") && (typeof n2 === "number")) {
            return "Result from the two numbers: " + n1 + "+" + n2 + "=" + callback(n1, n2);
        } else {
            throw new Error("Whoops. Something is wrong");
        }
    } catch (e) {
        console.error(e.name + ": " + e.message);
    }
};

function mul(n1, n2) {
    return n1 * n2;
}

// Function Expression
var div = function (n1, n2) {
    return n1 / n2;
};

//opgave4
console.log(cb(4, 3, mul));
//Expected ouput: 4 * 3 = 12... But since we havn't made any if clauses,
// the output will write it as 4 + 3 = 12. But the functionality is there for mul.

//opgave5
console.log(cb(12, 4, div));
//Same as the mul, but here we divide even tho it writes "+" in the output.
