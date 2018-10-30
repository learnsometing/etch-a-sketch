function createGrid(squaresPerSide){
    const container = document.querySelector('.gridContainer');
    container.setAttribute('style', `grid-template-columns: repeat(${squaresPerSide}, ${32/squaresPerSide}em [col-start]);
                            grid-template-rows: repeat(${squaresPerSide}, ${22/squaresPerSide}em [row-start])`);

    for(let i=0; i<squaresPerSide; i++){
        const gridColumn = document.createElement('div');
        for(let j=0; j<squaresPerSide; j++){
            const gridSquare = document.createElement('div');
            gridSquare.className = 'empty';
            gridColumn.appendChild(gridSquare);
            gridSquare.setAttribute('style', `width: ${32/squaresPerSide}em; height: ${22/squaresPerSide}em`);  
        }
        container.appendChild(gridColumn);    
        gridColumn.setAttribute('style', `grid-row-end: ${squaresPerSide + 1}`);
    } 
}

createGrid(100);

const draw = document.querySelectorAll('.empty');
draw.forEach((cell) => {cell.addEventListener('mouseover', (e) => {cell.classList.add('filled')})});

