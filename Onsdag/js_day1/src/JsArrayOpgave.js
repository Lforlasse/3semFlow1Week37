/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


//OpgaveA----------------------------------------------------------------------
console.log("Opgave A:");
var boys = ["Peter", "lars", "Ole"];
var girls = ["Janne", "hanne", "Sanne"];
//it does not mutate the array, as it will open up for a new memory reference

//OpgaveB----------------------------------------------------------------------
console.log("Opgave B:");
var all = boys.concat(girls);

//OpgaveC----------------------------------------------------------------------
console.log("Opgave C:");
console.log(all.join());
//Comma seperated

console.log(all.join("-"));
//Dash seperated

//OpgaveD----------------------------------------------------------------------
console.log("Opgave D:");
var addLnG = all.push('Lone', 'Gitte');
console.log(all);
//Expected Output: Hanne and Gitte added to the end of array.

//OpgaveE----------------------------------------------------------------------
console.log("Opgave E:");
console.log(all.unshift('Hans', 'Kurt'));
console.log(all);
//Expected Output: Hans and Kurt added to start of array.

//OpgaveF----------------------------------------------------------------------
console.log("Opgave F:");
var removeHans = all.shift();
console.log(all);
//Expected Output: "Hans" removed from start of array.

//OpgaveG----------------------------------------------------------------------
console.log("Opgave G:");
console.log(all.pop());
//Expected output: "Gitte"

console.log(all);
//Expected output: Array without Gitte in the end and Hans in the start (due to task F).

//OpgaveH----------------------------------------------------------------------
console.log("Opgave H:");
var removeOleAndJanne = all.splice(3, 1) + all.splice(3, 1);
//When Ole is removed, janna gets the new index 3.
console.log(all);
//Expected output: Array without Ole and Janne.

//OpgaveI----------------------------------------------------------------------
console.log("Opgave I:");
var reverseBoysAndGirls = all.reverse();
console.log(all);
//Expected output: Boys and Girls array swapped places.

//OpgaveJ----------------------------------------------------------------------
console.log("Opgave J:");
all.sort();
console.log(all);
//Expected Output: Array sorted after each character's Unicode. What we see:
// is that it sorted the names with a Capital Letter first.
// and THEN sorted the names with a non capital letter afterwards.

//OpgaveK(Red Opgave)-----------------------------------------------------------
console.log("Opgave K:");
//Temporary array holds objects with position and sort-value
var mapped = all.map(function(el, i){
    return { index: i, value: el.toLowerCase() };
});

//Sorting the mapped array containing the reduced values
mapped.sort(function(a, b) {
    if(a.value > b.value) {
        return 1;
    }
    if(a.value < b.value) {
        return -1;
    }
    return 0;
});

//container for the resulting order
var all = mapped.map(function(el){
    return all[el.index];
});
console.log(all);
//Expected Output: sorted array in lowerCase.

//This can be used too.
//all.sort(function(a,b) {
//    a = a.toLowerCase();
//    b = b.toLowerCase();
//    if( a == b) return 0;
//    return a < b ? -1 : 1;
//});
//console.log(all);

//OpgaveL----------------------------------------------------------------------
console.log("Opgave L:");
var all = all.map(all => all.toUpperCase());
console.log(all);
//Expected Output: gives array in upperCase.

//OpgaveM----------------------------------------------------------------------
console.log("Opgave M:");
function filterNames(arr, query) {
  return arr.filter(function(el) {
      return el.toLowerCase().indexOf(query.toLowerCase()) !== -1;
  });
}
console.log(filterNames(all, "L"));
//Hence task K, all of the array has been converted to Lower and later to 
//uppercase. But the point is that this is the function to call in this task.