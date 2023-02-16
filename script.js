let container = document.querySelector('.grid');



for (let i = 0; i < 256; i++) {
    let div = document.createElement('div');
    div.classList.add('tile')
    div.textContent = ''
    container.appendChild(div);
}