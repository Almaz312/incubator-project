function chainToSwitch(val) {
    var answer = "";
    // Only change code below this line
    switch(val) {
        case "bob":
            answer = "Marley";
            break;
        case 42:
            answer = "The Answer";
            break;
        case 1:
            answer = "There is no #1";
            break;
        case 99:
            answer = "Missed me by this much!";
            break;
        case 7:
            answer = "Ate Nine";
            break;
    }
    // Only change code above this line
    return answer;
}

chainToSwitch(7);

function isLess(a, b) {
    // Only change code below this line
    return a < b;
    // Only change code above this line
}

isLess(10, 15);

// Setup
function abTest(a, b) {
    // Only change code below this line
    if (a <0 || b <0) {
        return undefined;
    }
    // Only change code above this line

    return Math.round(Math.pow(Math.sqrt(a) + Math.sqrt(b), 2));
}

abTest(2,2);