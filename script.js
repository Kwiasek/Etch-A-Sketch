let container = document.querySelector('.grid');
let tiles;

const eventMouse = () => {
    tiles.forEach(tile => {
        tile.addEventListener('mouseover', () => {
            tile.style.background = randColor();
    })
})}

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

canvas(16); //Default 16x16 canvas

document.querySelector('#button').addEventListener('click', () => {
    let size = prompt('Give a size of your new canvas, input number of rows, columns will be equal to them.');
    size = parseInt(size);
    if (size > 100) {
        alert('Max size is 100x100');
    }
    else if (size < 1) {
        alert('Give a proper size');
    }
    else {
        container.innerHTML = '';
        canvas(size);
    }
})

const randColor = () => {
    let r = Math.floor(Math.random() * 257);
    let g = Math.floor(Math.random() * 257);
    let b = Math.floor(Math.random() * 257);

    return `rgb(${r}, ${g}, ${b})`;
}





