const btn = document.getElementById('nine');

btn.addEventListener('click', () => {
    
})

function add(a, b) {
    return a + b;
}
function substract(a, b) {
    return a - b;
}
function multiply(a, b) {
    return a * b;
}
function divide(a, b) {
    return a  / b;
}

function operate(a, op, b) {
    if (op == '-') {
        return substract(a, b);
    } else if (op == '+') {
        return add(a, b);
    } else if (op == '*') {
        return multiply(a, b);
    } else if (op == '/') {
        return divide(a, b);
    }
}

let a = 2;
let b = 2;
let op = '/'

console.log(operate(a, op, b));
