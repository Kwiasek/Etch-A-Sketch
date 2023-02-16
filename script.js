let container = document.querySelector('.grid');
let tiles;
let defSize = 16;

const eventMouse = () => {
    tiles.forEach(tile => {
        tile.addEventListener('mouseover', () => {
            tile.style.background = randColor();
    })
})}

const resetCanvas = () => {
    container.innerHTML = '';
}

const canvas = (size) => {
    for (let i = 0; i < (size * size); i++) {
        container.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
        container.style.gridTemplateRows = `repeat(${size}, 1fr)`;
        let div = document.createElement('div');
        div.classList.add('tile');
        container.appendChild(div);
    }
    tiles = document.querySelectorAll('.tile');
    eventMouse();
}

canvas(defSize); //Default 16x16 canvas

document.querySelector('#size').addEventListener('click', () => {
    defSize = prompt('Give a size of your new canvas, input number of rows, columns will be equal to them.');
    defSize = parseInt(defSize);
    if (defSize > 100) {
        alert('Max size is 100x100');
    }
    else if (defSize < 1) {
        alert('Give a proper size');
    }
    else {
        resetCanvas();
        canvas(defSize);
    }
})

const randColor = () => {
    let r = Math.floor(Math.random() * 257);
    let g = Math.floor(Math.random() * 257);
    let b = Math.floor(Math.random() * 257);

    return `rgb(${r}, ${g}, ${b})`;
}

document.querySelector('#reset').addEventListener('click', () => {
    resetCanvas();
    canvas(defSize);
})