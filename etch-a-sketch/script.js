const GRID_SIZE = 16;
const container = document.querySelector(".container");
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

// Select all divs created and add a listener for hover to change color
const squares = document.querySelectorAll(".square");
squares.forEach(square => square.addEventListener('mouseover', () => {
    square.style.backgroundColor = "violet";
}))