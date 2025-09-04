const gridContainer = document.querySelector(".container");

function createGrid() {
    for(i = 1; i <= 256; i++) {
        let box = document.createElement("div");
        box.classList.add("box");
        box.textContent = "Box"
        gridContainer.appendChild(box);
        console.log("rawr");
    }
}

createGrid();