let container = document.querySelector('.grid');

for (let i = 0; i < 256; i++) {
    let div = document.createElement('div');
    div.classList.add('tile');
    container.appendChild(div);
}


let tiles = document.querySelectorAll('.tile');

tiles.forEach(tile => {
    tile.addEventListener('mouseover', () => {
        tile.classList.toggle('hovered')
    })
})


