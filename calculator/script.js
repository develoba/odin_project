const btns = document.querySelectorAll('button');
const result = document.getElementById('result');
const regexNum = /[123456789]/;

let op1 = '', op2 = '', operator = '';
let counter = 0;

btns.forEach(btn => btn.addEventListener('click', () => {
    if (regexNum.test(btn.textContent)) {
        if (counter % 2 == 0) {
            op1 += btn.textContent;
            console.log(op1)
        } else {
            op2 += btn.textContent;
        }
        result.textContent += btn.textContent
    } else if (btn.textContent == '=') {
        op1 = Number(op1);
        op2 = Number(op2);
        let res = operate(op1, operator, op2);
        // console.log(res);
        result.textContent = res;
        
    } else {
        counter++;
        operator = btn.textContent;
        result.textContent += btn.textContent;
    }
}));

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
