let dimensions = 16;

function createGrid(dim) {
    for (i = 0; i < dim * dim; i++) {
        grid = document.getElementById("grid");
        let block = document.createElement('div');
        block.id = "block" + i;
        block.className = "block";
        block.style.width = ((500/dimensions) - 2) + "px";
        block.style.height = ((500/dimensions) - 2) + "px";
        block.style.border = "black solid 1px";
        block.addEventListener("mouseover", () => {
            block.style.backgroundColor = "black";
        })
        grid.appendChild(block);
    }
}

createGrid(dimensions);

const reset = document.getElementById("reset");
const changeGrid = document.getElementById("change-grid");

function removeGrid() {
    blocks = document.querySelectorAll(".block");
    blocks.forEach(block => {
        block.remove();
    });
}

reset.addEventListener("click", () => {
    blocks = document.getElementsByClassName("block");
    for (i = 0; i < blocks.length; i++) {
        blocks[i].style.backgroundColor = "white";
    }
})

changeGrid.addEventListener("click", () => {
    dimensions = parseInt(prompt("Insert grid dimension (NxN)"));
    if (dimensions <= 100) {
        removeGrid();
        createGrid(dimensions);
    } else {
        dimensions = prompt("Enter valid integer that is less than 100!");
    }
})