const resolutionButton = document.querySelector(".resolution");

let resolution = 16;

resolutionButton.addEventListener("click", () => {
    resolution = Number(prompt("What resolution would you like? (1-100)", 50));

    if(Number.isInteger(resolution)
        && resolution >= 1
        && resolution <= 100) {
        createGrid(resolution);
    } else {
        alert("Input an integer from 1-100");
    }
});

const gridContainer = document.querySelector(".container");
let gridWidth = Math.ceil(Number((getComputedStyle(gridContainer).width).slice(0, -2)));

function createGrid(resolution) {
    let boxItems = Array.from(document.querySelectorAll(".box"));
    let hoveredBoxItems = Array.from(document.querySelectorAll(".hoverBox"));
    let gridItems = boxItems.concat(hoveredBoxItems);
    console.log(gridItems);

    gridItems.forEach((item) => item.remove());

    let isDrawing;
    let isErasing;
    document.addEventListener("keydown", () => (isDrawing = true, isErasing = false));
    document.addEventListener("keyup", () => (isDrawing = false, isErasing = true));

    for(i = 1; i <= resolution ** 2; i++) {
        let box = document.createElement("div");
        box.classList.add("box");

        let boxSize = (gridWidth / resolution + "px");
        box.style.width = boxSize;
        box.style.height = boxSize;

        //box.style.opacity = 0.5;
        //Enable when changing opacity

        box.addEventListener("mouseenter",  () => {
            if(isDrawing) {
                box.classList.remove("box");
                box.classList.add("hoverBox");
                //Disable toggles to class list when changing opacity

                //box.style.opacity = Number(box.style.opacity) + 0.2;
                //Increase opacity every time mouse enters

                // box.style.backgroundColor = 
                // `rgb(${Math.floor(Math.random() * 257)}, ${Math.floor(Math.random() * 257)}, ${Math.floor(Math.random() * 257)})`;
                //Change box color to random
            } else if(isErasing) {
                box.classList.remove("hoverBox");
                box.classList.add("box");
            }
        })

        gridContainer.appendChild(box);
    }
}

createGrid(resolution);