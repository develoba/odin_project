const numBtns = document.querySelectorAll('.num-btn');
const result = document.getElementById('result');
const regexNum = /[123456789]/;

let op1 = '', op2 = '', operator = '';
let counter = 0;
let res = 0;

function main() {
    numBtns.forEach(btn => btn.addEventListener('click', () => {
        result.textContent = btn.textContent;
    }));
}

// btns.forEach(btn => btn.addEventListener('click', () => {
//     if (regexNum.test(btn.textContent)) {
//         if (res != 0) {
//             op1 = '';
//             op2 = '';
//         }
//         if (counter % 2 == 0) {
//             op1 += btn.textContent;
//             result.textContent = op1;
//         } else {
//             op2 += btn.textContent;
//             result.textContent = op2;
//         }
//     } else {
//         if (op1 != '' && op2 != '') {
//             op1 = Number(op1);
//             op2 = Number(op2);
//             res += operate(op1, operator, op2);
//             result.textContent = res;
//         }


//         if (btn.textContent == '=') {

//         } else {
//             operator = btn.textContent;
//         }


//         counter++;

//     } 
// }));

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

main();
