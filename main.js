'use strict'
const grid = document.querySelector('#grid');
const clearBtn = document.querySelector('.clear')
const slider = document.querySelector('.slider')
let gridSize = 16;
let squares = []

function createGrid() {
    for (let i = 0; i < gridSize * gridSize; i++) {
        const square = document.createElement('div')
        square.classList.add('squares');
        grid.appendChild(square);
        squares.push(square);
    }
}

function generateColor() {
    const red = Math.floor((Math.random() * 256) + 1)
    const green = Math.floor((Math.random() * 256) + 1)
    const blue = Math.floor((Math.random() * 256) + 1);

    return `rgb(${red}, ${green}, ${blue})`
}
createGrid()


squares.forEach(square => square.addEventListener('mouseover', function () {
    let colour = generateColor();
    square.style.backgroundColor = colour;
}))

function clear() {
    clearBtn.addEventListener('click', function () {
            squares.forEach(square => {
                square.style.backgroundColor = 'white';
            })
        }

    )
}

clear();