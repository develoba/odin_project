const numBtns = document.querySelectorAll('.num-btn');
const opBtns = document.querySelectorAll('.op-btn');
const funcBtns = document.querySelectorAll('.func-btn');
const result = document.getElementById('result');

const minBtn = document.getElementById('minimize');
const calcContainer = document.querySelector('.container');
const calcIcon = document.getElementById('calc-icon');
const maxBtn = document.getElementById('maximize');
const closeBtn = document.getElementById('close');

const regexNum = /[123456789]/;

let op1 = '', op2 = '', operator = '';
let counter = 0, numCounter = 0, opCounter = 0;
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

        if (opCounter > 1) {
            op1 = res;
            op2 = update(op2, btn, '');
        } else if (counter % 2 == 0) {
            op1 = update(op1, btn, op1);
        } else {
            op2 = update(op2, btn, op2);
        }

    }));

    opBtns.forEach(btn => btn.addEventListener('click', () => {
        counter++;

        if (btn.textContent != '=') {
            opCounter++;
            if (opCounter > 1) {
                op1 = Number(op1);
                op2 = Number(op2);
                res = operate(op1, operator, op2);
                result.textContent = res;
            }

            operator = btn.textContent;
            

        } else {
            op1 = Number(op1);
            op2 = Number(op2);
            res = operate(op1, operator, op2);
            result.textContent = res;

            operator = btn.textContent;
            opCounter = 0;

            op1 = '';
            op2 = '';
        }
    }));

    funcBtns.forEach(btn => btn.addEventListener('click', () => {
        if (btn.textContent == 'AC') {
            clear();
            result.textContent = '0';
        } else if (btn.textContent == '+/-') {
            result.textContent == op1 ? op1 = -op1 : result.textContent == op2 ? op2 = -op2 : res = -res;
            result.textContent = -result.textContent;
        } else if (btn.textContent == '%') {
            result.textContent == op1 ? op1 = op1 * 0.01 : result.textContent == op2 ? op2 *= 0.01 : res *= 0.01;
            result.textContent *= 0.01;
        } else {
            result.textContent == op1 ? op1 += '.' : result.textContent == op2 ? op2 += '.' : res += '.';
            result.textContent += '.';
            console.log(op1);
            console.log(op2);
            console.log(res);
        }
    }));

    minBtn.addEventListener('click', () => {
        calcContainer.classList.add('minimize');
        calcIcon.classList.remove('active-icon');
        calcIcon.classList.add('minimize-icon');
    });
    calcIcon.addEventListener('click', () => {
        if (calcContainer.classList.contains('close')) {
            calcContainer.classList.remove('close');
            calcIcon.classList.remove('close-icon');
            calcIcon.classList.add('active-icon');
            
        } else {
            calcContainer.classList.toggle('minimize');
            calcIcon.classList.toggle('active-icon');
            calcIcon.classList.toggle('minimize-icon');
        }
    });
    maxBtn.addEventListener('click', () => {
        calcContainer.classList.toggle('maximize');
    });
    closeBtn.addEventListener('click', () => {
        calcContainer.classList.add('close');
        calcIcon.classList.remove('active-icon');
        calcIcon.classList.add('close-icon');
    });

}

function clear() {
    if (numCounter == 0) {
        result.textContent = '';
        op1 = '';
        op2 = '';
        res = 0;
        operator = '';
        opCounter = 0;
        counter = 0;
    }
}

function update(op, btn, prev) {
    op = prev + btn.textContent;
    result.textContent = op;
    return op;
}

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
    return Math.round((a/b) * 1000000) / 1000000;
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

main();
