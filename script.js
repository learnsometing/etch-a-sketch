const gridWidth = 32
,   gridHeight = 22
,   grid = document.querySelector('.grid')
,   reset = document.querySelector('button');

reset.addEventListener('click', (e) => {resetButton()});
createGrid(16);

function createGrid(cellsPerSide){

    setGridDimensions(cellsPerSide);

    populateGridColumnsAndRows(cellsPerSide);    

    enableDrawing();
}

function setGridDimensions(cellsPerSide){

    let cellWidth = gridWidth/cellsPerSide
    , cellHeight = gridHeight/cellsPerSide;

    grid.setAttribute('style', `grid-template-columns: repeat(${cellsPerSide}, ${cellWidth}em [col-start]); 
    grid-template-rows: repeat(${cellsPerSide}, ${cellHeight}em [row-start])`);
}

function populateGridColumnsAndRows(cellsPerSide){
    for(let i=0; i<cellsPerSide; i++){    //This for-loop creates each grid column div.//
        const gridColumn = document.createElement('div');
        gridColumn.classList.add('column');
        for(let j=0; j<cellsPerSide; j++){    //This for-loop creates the grid cell divs that reside in each grid column.//
            const gridCell = document.createElement('div');
            gridCell.className = 'empty';
            gridColumn.appendChild(gridCell);
            gridCell.setAttribute('style', `width: ${gridWidth/cellsPerSide}em; height: ${gridHeight/cellsPerSide}em`);  
        }
        grid.appendChild(gridColumn);    
        gridColumn.setAttribute('style', `grid-row-end: ${parseInt(cellsPerSide) + 1}`);
    } 
}

function enableDrawing(){
    const empty = document.querySelectorAll('.empty');
    empty.forEach((cell) => {cell.addEventListener('mouseover', (e) => {cell.classList.add('filled')})});
}

function clearGrid(){
    const column = document.querySelectorAll('.column');
    for (let i=0; i<column.length; i++){
        column[i].remove();
    }
}

function resetButton(){
    clearGrid();
    createGrid(prompt('How many cells per side?'));
}

