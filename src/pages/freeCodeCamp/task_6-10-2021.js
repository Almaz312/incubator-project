// Setup
var outerWear = "T-Shirt";

function myOutfit() {
    // Only change code below this line

    var outerWear = "sweater"

    // Only change code above this line
    return outerWear;
}

myOutfit();

function timesFive(num) {
    return num * 5;
}
var answer = timesFive(5)

// Setup
var sum = 0;

function addThree() {
    sum = sum + 3;
}

// Only change code below this line
function addFive() {
    sum = sum + 5;
}

// Only change code above this line

addThree();
addFive();

// Setup
var processed = 2;

function processArg(num) {
    return (num + 3) / 5;
}
processed = processArg(7)
// Only change code below this line

function nextInLine(arr, item) {
    // Only change code below this line
    arr.push(item)
    var array = arr.shift()
    return array;
    // Only change code above this line


}

// Setup
var testArr = [1,2,3,4,5];

// Display code
console.log("Before: " + JSON.stringify(testArr));
console.log(nextInLine(testArr, 6));
console.log("After: " + JSON.stringify(testArr));