const grid = document.getElementById("grid");

for (i = 0; i < 256; i++) {
    let block = document.createElement('div');
    block.id = "block" + i;
    block.className = "block";
    block.style.width = "29.25px";
    block.style.height = "29.25px";
    block.style.border = "black solid 1px";
    block.addEventListener("mouseover", () => {
        block.style.backgroundColor = "black";
    })
    grid.appendChild(block);
}

const blocks = document.getElementsByClassName("block");
const reset = document.getElementById("reset");

reset.addEventListener("click", () => {
    for (i = 0; i < blocks.length; i++) {
        blocks[i].style.backgroundColor = "white";
    }
})