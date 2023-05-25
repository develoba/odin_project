const DEFAULT_SIZE = 16;
const DEFAULT_COLOR = '#000';
const DEFAULT_MODE = 'black';

let gridMode = DEFAULT_MODE;
let gridColor = DEFAULT_COLOR;
let gridSize = DEFAULT_SIZE;
let getCanvas;


const grid = document.querySelector(".grid");
const btnSize = document.getElementById("btnSize");

const btnBlack = document.getElementById('btnBlack');
const btnGray = document.getElementById('btnGray');
const btnRainbow = document.getElementById('btnRainbow');
const btnRandom = document.getElementById('btnRandom');
const btnErase = document.getElementById("btnErase");
const btnEraseAll = document.getElementById("btnEraseAll");
const btnColorPicker = document.getElementById('btnColorPicker');
const btnFix = document.getElementById('btnFix');
const btnDownload = document.getElementById('btnDownload');
const btnNew = document.getElementById('btnNew');

btnBlack.onclick = () => setMode('black');
btnGray.onclick = () => setMode('gray');
btnRainbow.onclick = () => setMode('rainbow');
btnRandom.onclick = () => setMode('random');
btnErase.onclick = () => setMode('eraser');
btnEraseAll.onclick = () => {
    clearGrid();
    setGrid();
};
btnColorPicker.addEventListener('input', function(e) {
    setColor(this.value);
    setMode('chosen');
});
btnSize.addEventListener('input', () => setGridSize(btnSize.value));
btnFix.addEventListener('click', () => toCanvas());
btnDownload.addEventListener('click', () => downloadCanvas()); 
btnNew.addEventListener('click', () => {
    setGridSize(gridSize);
    getCanvas = undefined;
    btnDownload.removeAttribute("dowload");
    btnDownload.removeAttribute("href");
});

let mouseDown = false;
document.body.onmousedown = () => mouseDown = true;
document.body.onmouseup = () => mouseDown = false;

function main() {
    setGrid();
}

function setMode(newMode) {
    if (newMode == 'random') {
        setColor('random');
    } else if (newMode == 'black') {
        setColor('black')
    }
    gridMode = newMode;
    
}

function setColor(newColor) {
    if (newColor == 'random') {
        let red = Math.floor(Math.random() * 256);
        let green = Math.floor(Math.random() * 256);
        let blue = Math.floor(Math.random() * 256);
        gridColor = `rgb(${red}, ${green}, ${blue})`;
    } else {
        gridColor = newColor;
    }
}

function setGridSize(size) {
    clearGrid();
    gridSize = size;
    setGrid()
}

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
    } else if (gridMode == 'gray') {
        let opacity = e.target.style.opacity;
        e.target.style.backgroundColor = 'black';
        e.target.style.opacity = Number(opacity) + 0.05;
    } else if (gridMode == 'eraser') {
        e.target.style.backgroundColor = 'white';
        e.target.style.opacity = 1;
    } else {
        e.target.style.backgroundColor = gridColor;
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

function toCanvas() {
    html2canvas(document.getElementById('grid')).then(function(canvas) {
        getCanvas = canvas;
    });
}

function downloadCanvas() {
    if (getCanvas == undefined) {
        alert("Make sure to lock your drawing before downloading!")
    } else {
        let imageData = getCanvas.toDataURL();
        let newData = imageData.replace(/^data:image\/png/, "data:application/octet-stream");
        btnDownload.setAttribute("download", "mydrawing.png");
        btnDownload.setAttribute("href", newData);
    }
}


window.onload = () => {
    main();
}