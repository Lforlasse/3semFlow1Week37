/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


//Opgave1----------------------------------------------------------------------
console.log("Opgave 1:");

//Exspected Output; a -> d -> f -> e after 1 second -> b after 2 seconds

//Opgave2----------------------------------------------------------------------
console.log("Opgave 2:");
var msgPrinter = function (msg, delay) {
    setTimeout(function () {
        console.log(msg);
    }, delay);
};
console.log("aaaaaaaaaa");
msgPrinter("bbbbbbbbbb", 2000);
console.log("dddddddddd");
msgPrinter("eeeeeeeeee", 1000);
console.log("ffffffffff");

//As expected it outputs as written in Opgave 1.