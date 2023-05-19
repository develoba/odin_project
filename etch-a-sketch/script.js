let GRID_SIZE = 16;
const container = document.querySelector(".container");
const btn = document.getElementById("btnSize");
const btnErase = document.getElementById("btnErase");

set_grid();
draw();

btn.addEventListener('click', () => {
    let newSize = prompt("Enter new size: ");
    GRID_SIZE = newSize;

    set_grid();
    draw();
});
btnErase.addEventListener('click', () => {
    set_grid();
    draw();
})

function set_grid() {
    container.innerHTML='';
    let w = 1000/GRID_SIZE;
    for (let row = 0; row < GRID_SIZE; row++) {
        for (let col = 0; col < GRID_SIZE; col++) {
            let div = document.createElement("div");
            div.classList.add("square");
            div.style.width = `${w}px`;
            div.style.height = `${w}px`;
            container.appendChild(div);
        }
    }
    console.log(GRID_SIZE)
}

function draw() {
    const squares = document.querySelectorAll(".square");
    let clickCounter = 0;
    squares.forEach(square => square.addEventListener('mouseover', () => {
        clickCounter++;
        square.style.backgroundColor = "violet";
        // squares.forEach(hoveredSquare => hoveredSquare.addEventListener('mouseover', () => {
        //     if (clickCounter % 2 == 0) {
        //         hoveredSquare.style.backgroundColor = 'white';
        //     } else {
        //         hoveredSquare.style.backgroundColor = 'black';
        //     }
        // }));
        console.log(clickCounter);
    
    }))
}
