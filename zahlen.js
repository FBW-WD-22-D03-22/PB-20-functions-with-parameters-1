
const firstNumber = 20;
let secondNumber = 15;



function addition(a, b, c) {
    console.log("summe ist:", secondNumber + a + b + c + firstNumber);
    if ((secondNumber + a + b + c + firstNumber) >49) {
        console.log("ergebniss richtig")
    } else {
        console.log("ergebniss falsch")
    }
}

function subtraktion(a, b, c) {
    console.log("summe ist:", secondNumber - a - b - c - firstNumber);
}

function multiplikation(a, b, c) {
    console.log("summe ist:", secondNumber * a * b * c * firstNumber);
}

function division(a, b, c) {
    console.log("summe ist:", secondNumber / a / b / c / firstNumber);
}

addition(3, 5, 7)
subtraktion(5, 6, 3)
multiplikation(1, 0, 12)
division(8, 5, 2)