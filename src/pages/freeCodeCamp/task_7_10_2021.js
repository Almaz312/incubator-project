function testElse(val) {
    var result = "";
    // Only change code below this line

    if (val > 5) {
        result = "Bigger than 5";
    } else {
        return "5 or Smaller";
    }

    // Only change code above this line
    return result;
}

testElse(4);

function testElseIf(val) {
    if (val > 10) {
        return "Greater than 10";
    } else if (val < 5) {
        return "Smaller than 5";
    } else {
        return "Between 5 and 10";
    }
}

testElseIf(7);

function orderMyLogic(val) {
    if (val < 5) {
        return "Less than 5";
    } else if (val < 10) {
        return "Less than 10";
    } else {
        return "Greater than or equal to 10";
    }
}

orderMyLogic(7);

function testSize(num) {
    // Only change code below this line
    if (num < 5) {
        return "Tiny"
    } else if (num < 10) {
        return "Small"
    } else if (num < 15) {
        return "Medium"
    } else if (num < 20) {
        return "Large"
    } else if (num >= 20) {
        return "Huge"
    }
    // Only change code above this line
}

testSize(7);

var names = ["Hole-in-one!", "Eagle", "Birdie", "Par", "Bogey", "Double Bogey", "Go Home!"];
function golfScore(par, strokes) {
    // Only change code below this line
    if (strokes === 1) {
        return "Hole-in-one!"
    } else if (strokes === 2) {
        return "Eagle"
    } else if (strokes === 3) {
        return "Birdie"
    } else if (par === 4 && strokes === 4) {
        return "Par"
    } else if (par ===4 && strokes ===5) {
        return "Bogey"
    } else if (par ===4 && strokes ===6) {
        return "Double Bogey"
    } else if (par >=4 && strokes >=7) {
        return "Go Home!"
    } else if (par ===5 && strokes ===5) {
        return "Par"
    }

    // Only change code above this line
}

golfScore(5, 4);