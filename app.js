/* Imports */
// import { getRandomItem } from './utils.js';

import { getRandomItem } from './utils.js';

/* State */
let gameState = 'guess'; // 'guess' or 'results'
let guess = ''; // 'shell-1', 'shell-2', or 'shell-3'
let reveal = ''; // 'pearl' or 'pearl hidden'
let result = ''; //'win' or 'lose'

const shell1 = document.getElementById('shell-1');
const shell2 = document.getElementById('shell-2');
const shell3 = document.getElementById('shell-3');

/* Actions */
function loadPage() {
    displayShells();
}

/* Components */

/* Component */
// get DOM
// const guessShell1 = document.getElementById('guess-1');
// const guessShell2 = document.getElementById('guess-2');
// const guessShell3 = document.getElementById('guess-3');

// display
function displayShells() {
    if (gameState === 'guess') {
        results.classList.add('hidden');
        pearl1.classList.add('hidden');
        pearl2.classList.add('hidden');
        pearl3.classList.add('hidden');
        shell1.classList.remove('reveal');
    } else {
        results.classList.remove('hidden');
    }
}

// DOM
const results = document.getElementById('results');

const pearl1 = document.getElementById('pearl-1');
const pearl2 = document.getElementById('pearl-2');
const pearl3 = document.getElementById('pearl-3');

// event listeners
//guessShell1.addEventListener('click', () => {});

//guessShell2.addEventListener('click', () => {});

//guessShell3.addEventListener('click', () => {});

/* Run page load code */
loadPage();
