const gridContainer = document.querySelector(".container");

function createGrid() {
    for(i = 1; i <= 256; i++) {
        let box = document.createElement("div");
        box.classList.add("box");
        box.textContent = "."

        box.addEventListener("mouseenter",  () => {
            box.classList.remove("box");
            box.classList.add("hoverBox");
        })

        gridContainer.appendChild(box);
        console.log("rawr");
    }
}

createGrid();

const gridItems = document.querySelectorAll(".box");

function changeColor() {
    gridItems.addEventListener("mouseenter", function (e) {
        console.log(e);
        e.classList.toggle("box");
        e.classList.toggle("hoverBox");
    })
}