const board = document.querySelector('#board');
const SQUARES_NUMBER = 500;


for (let i = 0; i < SQUARES_NUMBER; i++) {
    const square = document.createElement('div');
    square.classList.add('square');

    square.addEventListener("mouseover", () => setColor(square))
    square.addEventListener("mouseleave", () => removeColor(square))

    board.append(square);
}


function setColor(element) {
    let color = randomColor();
    element.style.backgroundColor = color;
    element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`
}


function removeColor(element) {
    element.style.backgroundColor = '#1d1d1d';
    element.style.boxShadow = `0 0 2px #000`
}


function randomColor() {
    return ('#' + Math.floor(Math.random()*16777215).toString(16))
}