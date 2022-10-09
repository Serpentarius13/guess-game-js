'use strict'

const body = document.querySelector('body');

const goAgain = document.querySelector('.again');
const guessText = document.querySelector('.guess');
const inputValue = document.querySelector('.inputer');

const btnGuess = document.querySelector('.check');

const lowHigh = document.querySelector('.low-high');
const curScore = document.querySelector('.score');
const highScore = document.querySelector('.high-score');

const btnAgain = document.querySelector('.again');


const number = Math.round(Math.random() * 20 + 1, 0);

let count = 20;

btnGuess.addEventListener('click', function () {
    const guess = Number(inputValue.value);

    if (number === 'winner') {
         return null;
    }

    if (!guess) {
        lowHigh.textContent = 'No number!';
    } else if (guess === number) {
        guessText.textContent = number;
        lowHigh.textContent = 'You won!';
        lowHigh.style.fontSize = '1.6rem';
        body.style.backgroundColor = 'green';
        number = 'Winner';
    } else if (guess < number) {
        lowHigh.textContent = 'Too low!';
        count--;
    } else if (guess > number) {
        lowHigh.textContent = 'Too high!';
        count--;
    } 

    if (count < 0) {
        curScore.textContent = 0;
    } else {
        curScore.textContent = `Score: ${count}`;
    }

    if (count <= 0) {
        lowHigh.textContent = `You've lost! Start again!`
        number = 'Loser';
    }

} )

btnAgain.addEventListener('click', () => location.reload());