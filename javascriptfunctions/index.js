//functions

// parameters are in the parenthesis
function calcArea(w, l) {
    return w * l;
}

var kitchenArea = calcArea(15, 18);
var bedroomArea = calcArea (12, 10);

console.log(kitchenArea);
console.log(bedroomArea);

//fahrenheit to celsius function

function toCelsius(f) {
    var temp = (5 / 9) * (f - 32)
    return temp.toFixed(2); // to fixed returns a string in number form to the 2nd decimal place
}

//var cel = toCelsius(46); --> this variable can be called within the weather variable instead of on its own and get the same result in the console.

var weather = ' the temperature outside is ' + toCelsius(46) + ' celsius'
// console.log(cel);
console.log(weather);

//character upgrade function

var warrior = {
    name: 'Super Tuffy',
    attack: 70,
    defense: 55,
    mana: 100
}

function levelUp(prop, val) {
    warrior[prop] += val;
}
//warrior[] the square bracket takes place of dot notation --> warrier.attack += val --> warrior[prop] +=val
//the [prop] would then be the 'attack', 'defense', or 'mana' properties listed below in the level up function call
//call the function and the object to be updated followed by the value to update it with

levelUp('attack', 2);
levelUp('defense', 8);
levelUp('mana', 17);


// this is the basic way to update the values given to the character without use of function
// warrior.attack += 2;
// warrior.defense += 6;
// warrior.mana += 12;

console.log(warrior)