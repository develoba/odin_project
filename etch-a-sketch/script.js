const DEFAULT_SIZE = 16;
const DEFAULT_COLOR = '#000';
const DEFAULT_MODE = 'black';

let gridMode = DEFAULT_MODE;
let gridColor = DEFAULT_COLOR;
let gridSize = DEFAULT_SIZE;


const grid = document.querySelector(".grid");
const btnSize = document.getElementById("btnSize");
const btnErase = document.getElementById("btnErase");
const colorChoices = document.querySelectorAll(".colorChoice");
const btnColor = document.getElementById("btnColor");

let mouseDown = false;
document.body.onmousedown = () => mouseDown = true;
document.body.onmouseup = () => mouseDown = false;

setGrid();

// btn.addEventListener('click', () => {
//     let newSize = prompt("Enter new size: ");
//     GRID_SIZE = newSize;

//     setGrid();
//     draw();
// });
// btnErase.addEventListener('click', () => {
//     setGrid();
//     draw();
// });
// btnColor.addEventListener('click', () => {

//     colorChoices.forEach(choice => {
//         if (choice.checked) {
//             color = choice.value;
//         }
//     });
    
// });
function clearGrid() {
    grid.innerHTML = '';
}
function setGrid() {
    grid.style.gridTemplateColumns = `repeat(${gridSize}, 1fr)`;

    for (let row = 0; row < gridSize; row++) {
        for (let col = 0; col < gridSize; col++) {
            let div = document.createElement("div");
            div.classList.add("square");
            div.addEventListener('mouseover', changeColor);
            div.addEventListener('mousedown', changeColor);
            grid.appendChild(div);
        }
    }
}

function changeColor(e) {
    if (e.type == 'mouseover' && !mouseDown) return
    if (colorMode == 'black') {
        e.target.style.backgroundColor = 'blue';
    }
}

function setRandomColor() {
    let red, green, blue;
    red = Math.floor(Math.random() * 256);
    green = Math.floor(Math.random() * 256);
    blue = Math.floor(Math.random() * 256);
    return `rgb(${red}, ${green}, ${blue})`;
}

function draw() {
    // const squares = document.querySelectorAll(".square");
    // let clickCounter = 0;
    // squares.forEach(square => square.addEventListener('click', () => {
    //     clickCounter++;
    //     if (color == 'random') {
    //         color = setRandomColor();
    //     }
    //     square.style.backgroundColor = color;
    //     squares.forEach(hoveredSquare => hoveredSquare.addEventListener('mouseover', () => {
    //         if (clickCounter % 2 == 0) {
    //             hoveredSquare.style.backgroundColor = 'white';
    //         } else {
    //             hoveredSquare.style.backgroundColor = color;
    //         }
    //     }));
    
    // }))
}
