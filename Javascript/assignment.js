function addition(num1, num2) {
    return num1 + num2;
}

function subtraction(num3, num4) {
    return num3 - num4;
}

function multiplication(num5, num6) {
    return num5 * num6;
}

function division(num7, num8) {
    return num7 / num8;
}

function mods(num9, num) {
    return num9 % num;
}
function exponential(i, j) {
    return i ** j;
}

let operator;
// the calculator nmethod
function calculator(a, b, operator) {
    switch (operator) {
        case "+":
            return addition(a, b);
        case "-":
            return subtraction(a, b);
        case "*":
            return multiplication(a, b);
        case "/":
            return division(a, b);
            case "**":
                return exponential(a, b);
        default:
            return "Invalid operator";
    }
}

let i = 2;
let j = 3;
let operat = "**";

const result = calculator(i, j, operat);
console.log(`Result= ${result}`);