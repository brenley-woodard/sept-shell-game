/* Imports */
// import { getRandomItem } from './utils.js';

/* State */
let gameState = 'guess'; // 'guess' or 'results'

/* Actions */
function loadPage() {
    displayShells();
}

/* Components */
let guess = ''; // 'shell-1', 'shell-2', or 'shell-3'
let pearl = ''; // 'pearl' or 'pearl hidden'
let result = ''; //'win' or 'lose'

/* Component */
// get DOM
const results = document.getElementById('results');

const guessShell1 = document.getElementById('shell-1');
const guessShell2 = document.getElementById('shell-2');
const guessShell3 = document.getElementById('shell-3');

// display
function displayShells() {
    if (gameState === 'guess') {
        results.classList.add('hidden');
    }
}

// event listeners

/* Run page load code */
loadPage();
