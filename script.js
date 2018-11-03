function setGridCellDimensions(node, squaresPerSide){
    const gridContainerWidth = 32
          , gridContainerHeight = 22;

    let cellWidth = gridContainerWidth/squaresPerSide
    , cellHeight = gridContainerHeight/squaresPerSide;

    node.setAttribute('style', `grid-template-columns: repeat(${squaresPerSide}, ${cellWidth}em [col-start]);
                        grid-template-rows: repeat(${squaresPerSide}, ${cellHeight}em [row-start])`);
}

function createGrid(squaresPerSide){
    const gridContainer = document.querySelector('.gridContainer')

    setGridCellDimensions(gridContainer, squaresPerSide);

    for(let i=0; i<squaresPerSide; i++){
        const gridColumn = document.createElement('div');
        gridColumn.classList.add('column');
        for(let j=0; j<squaresPerSide; j++){
            const gridSquare = document.createElement('div');
            gridSquare.className = 'empty';
            gridColumn.appendChild(gridSquare);
            gridSquare.setAttribute('style', `width: ${32/squaresPerSide}em; height: ${22/squaresPerSide}em`);  
        }
        gridContainer.appendChild(gridColumn);    
        gridColumn.setAttribute('style', `grid-row-end: ${parseInt(squaresPerSide) + 1}`);
    } 

    enableDrawing();
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
    createGrid(prompt('How many squares per side?'));
}

const reset = document.querySelector('#reset');
reset.addEventListener('click', (e) => {resetButton()});

createGrid(16);

