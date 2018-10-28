function createGrid(){
    let container = document.querySelector('.gridContainer');
    for(let i=0; i<16; i++){
        let gridRow = document.createElement('div');
        for(let j=0; j<16; j++){
            let gridSquare = document.createElement('div');
            gridSquare.className = 'empty';
            gridRow.appendChild(gridSquare);
        }
        container.appendChild(gridRow);
    } 
}

createGrid();

const draw = document.querySelectorAll('.empty');
draw.forEach((draw) => {draw.addEventListener('mouseover', (e) => {draw.classList.add('filled')})});