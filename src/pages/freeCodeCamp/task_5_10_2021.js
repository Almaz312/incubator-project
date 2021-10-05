var a = 3;
var b = 17;
var c = 12;

// Only change code below this line
a += 12;
b += b;
c += 7;

var a = 11;
var b = 9;
var c = 3;

// Only change code below this line
a -= 6;
b -= 15;
c -= 1;

var a = 5;
var b = 12;
var c = 4.6;

// Only change code below this line
a *= 5;
b *= 3;
c *= 10;

var a = 48;
var b = 108;
var c = 33;

// Only change code below this line
a /= 12;
b /= 4;
c /= 11;

let myFirstName = "Vasya"
let myLastName = "Alibabaevich"

var myStr = "I am a \"double quoted\" string inside \"double quotes\"."; // Change this line

var myStr = '<a href="http://www.example.com" target="_blank">Link</a>';

var myStr = 'FirstLine\n\t\\SecondLine\nThirdLine'; // Change this line

var myStr = "This is the start. " + "This is the end."; // Change this line

// Only change code below this line

var myStr = "This is the first sentence. ";
myStr += "This is the second sentence.";

// Only change code below this line
var myName = "freeCodeCamp";
var myStr = "My name is " + myName + "and I am well!";

// Change code below this line

var someAdjective = "awesome!";
var myStr = "Learning to code is ";
myStr += someAdjective;

// Setup
var lastNameLength = 0;
var lastName = "Lovelace";

// Only change code below this line

lastNameLength = lastName.length;

// Setup
var firstLetterOfLastName = "";
var lastName = "Lovelace";

// Only change code below this line
firstLetterOfLastName = lastName[0]; // Change this line

// Setup
var myStr = "Jello World";

// Only change code below this line
myStr = "Hello World"; // Change this line
// Only change code above this line

// Setup
var lastName = "Lovelace";

// Only change code below this line
var thirdLetterOfLastName = lastName[2]; // Change this line

// Setup
var lastName = "Lovelace";

// Only change code below this line
var lastLetterOfLastName = lastName[lastName.length - 1]; // Change this line

// Setup
var lastName = "Lovelace";

// Only change code below this line
var secondToLastLetterOfLastName = lastName[lastName.length - 2]; // Change this line

// Only change code below this line
var myArray = ["peanut butter",  9, "jelly", 6, "bread"];

// Only change code below this line
var myArray = [["Dog", 34], ["Bob",  76]];

var myArray = [50,60,70];

var myData = myArray[0]

// Setup
var myArray = [18,64,99];
myArray[0] = 45;

// Only change code below this line

var myArray = [[1,2,3], [4,5,6], [7,8,9], [[10,11,12], 13, 14]];

var myData = myArray[2][1];

// Setup
var myArray = [["John", 23], ["cat", 2]];
myArray.push(["dog", 3])
// Only change code below this line

// Setup
var myArray = [["John", 23], ["cat", 2]];

// Only change code below this line
var removedFromMyArray = myArray.pop();

// Setup
var myArray = [["John", 23], ["dog", 3]];

// Only change code below this line
var removedFromMyArray = myArray.shift();

// Setup
var myArray = [["John", 23], ["dog", 3]];
myArray.shift();
myArray.unshift(["Paul",35]);

// Only change code below this line

var myList = [["Bar", 15], ["Bar", 15], ["Bar", 15], ["Bar", 15], ["Bar", 15], ["Bar", 15], ];

function reusableFunction() {
    console.log("Hi World");
}
reusableFunction();

function functionWithArgs(param1, param2) {
    console.log(param1 + param2);
}
functionWithArgs(1,2);
functionWithArgs(7,9);

// Declare the myGlobal variable below this line
var myGlobal = 10;

function fun1() {
    // Assign 5 to oopsGlobal Here
    oopsGlobal = 5;
}

// Only change code above this line

function fun2() {
    var output = "";
    if (typeof myGlobal != "undefined") {
        output += "myGlobal: " + myGlobal;
    }
    if (typeof oopsGlobal != "undefined") {
        output += " oopsGlobal: " + oopsGlobal;
    }
    console.log(output);
}