const numBtns = document.querySelectorAll('.num-btn');
const opBtns = document.querySelectorAll('.op-btn');
const result = document.getElementById('result');
const regexNum = /[123456789]/;

let op1 = '', op2 = '', operator = '';
let counter = 0, numCounter = 0;
let res = 0;

function main() {
    numBtns.forEach(btn => btn.addEventListener('click', () => {
        clear();
        
        if (operator == '=') {
            numCounter = 0;
            clear();
            operator = '';
        }
        numCounter++;

        console.log(counter);

        if (counter % 2 == 0) {
            op1 = update(op1, btn);
        } else {
            op2 = update(op2, btn);
        }
    }));

    opBtns.forEach(btn => btn.addEventListener('click', () => {
        counter++;

        if (btn.textContent != '=') {
            operator = btn.textContent;
        } else {
            op1 = Number(op1);
            op2 = Number(op2);
            res += operate(op1, operator, op2);
            result.textContent = res;

            operator = btn.textContent;
        }
    }))
}

function clear() {
    if (numCounter == 0) {
        result.textContent = '';
        op1 = '';
        op2 = '';
        res = 0;
    }
}

function update(op, btn) {
    op += btn.textContent;
    result.textContent = op;
    return op;
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
    } else if (op == 'x') {
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
