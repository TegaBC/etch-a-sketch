const body = document.body;
const gridContainer = body.querySelector(".grid-container");

function fillGrid(e){
    e.target.style.backgroundColor = "white";
}    

function createGrid(rowAmount){
    const gridAmount = rowAmount*rowAmount
    for (let i=1; i<gridAmount+1; i++){
        let grid = document.createElement("div");
        grid.classList.add("box");
        grid.addEventListener("mouseout", fillGrid);
        gridContainer.append(grid);
    }

    gridContainer.style["grid-template-columns"] = "repeat("+rowAmount+", 40px)"
    gridContainer.style["grid-template-rows"] = "repeat("+rowAmount+", 40px)"

}

function promptGridChange(){
    let number = parseInt(prompt("Type in grid row and column size."));
    if (!number) return;

    let allGrids = body.querySelectorAll(".box")
    allGrids.forEach(grid => {
        grid.remove()
    })

    createGrid(number)
}

function resetGrid(){
    const allGrids = body.querySelectorAll(".box")
    allGrids.forEach(grid => {
        grid.style.backgroundColor = "gray";
    });
}

createGrid(16)


const gridButton = body.querySelector(".custom-size");
gridButton.addEventListener("click", promptGridChange);

const resetButton = body.querySelector(".reset");
resetButton.addEventListener("click", resetGrid);