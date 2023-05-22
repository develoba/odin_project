const DEFAULT_SIZE = 16;
const DEFAULT_COLOR = '#000';
const DEFAULT_MODE = 'black';

let gridMode = DEFAULT_MODE;
let gridColor = DEFAULT_COLOR;
let gridSize = DEFAULT_SIZE;


const grid = document.querySelector(".grid");
const btnSize = document.getElementById("btnSize");

const btnBlack = document.getElementById('btnBlack');
const btnGray = document.getElementById('btnGray');
const btnRainbow = document.getElementById('btnRainbow');
const btnRandom = document.getElementById('btnRandom');
const btnErase = document.getElementById("btnErase");
const btnEraseAll = document.getElementById("btnEraseAll");

function setMode(newMode) {
    if (newMode == 'random') {
        setColor('random');
    }
    gridMode = newMode;
    
}

function setColor(newColor) {
    if (newColor == 'random') {
        let red = Math.floor(Math.random() * 256);
        let green = Math.floor(Math.random() * 256);
        let blue = Math.floor(Math.random() * 256);
        gridColor = `rgb(${red}, ${green}, ${blue})`;
        console.log(gridColor);
    }
}

btnBlack.onclick = () => setMode('black');
btnGray.onclick = () => setMode('gray');
btnRainbow.onclick = () => setMode('rainbow');
btnRandom.onclick = () => setMode('random');
btnErase.onclick = () => setMode('eraser');
btnEraseAll.onclick = () => {
    clearGrid();
    setGrid();
}

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
    if (gridMode == 'rainbow') {
        let red = Math.floor(Math.random() * 256);
        let green = Math.floor(Math.random() * 256);
        let blue = Math.floor(Math.random() * 256);
        e.target.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
        e.target.style.opacity = 1;
    } else if (gridMode == 'black') {
        e.target.style.backgroundColor = DEFAULT_COLOR;
        e.target.style.opacity = 1;
    } else if (gridMode == 'random') {
        e.target.style.backgroundColor = gridColor;
        e.target.style.opacity = 1;
    } else if (gridMode == 'gray') {
        let opacity = e.target.style.opacity;
        e.target.style.backgroundColor = 'black';
        e.target.style.opacity = Number(opacity) + 0.05;
    } else if (gridMode == 'eraser') {
        e.target.style.backgroundColor = 'white';
        e.target.style.opacity = 1;
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
