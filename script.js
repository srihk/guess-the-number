const key = Math.floor(Math.random() * 100 + 1);

const lastResult = document.querySelector('.lastResult');
const guessField = document.querySelector('.guessField');
const lowOrHi = document.querySelector('.lowOrHi');
const guesses = document.querySelector('.guesses');
const guessSubmit = document.querySelector('.guessSubmit');
const resultParas = document.querySelector('.resultParas');
const form = document.querySelector('form');

let attempt = 1;

function end() {
    const restartButton = document.createElement('button');
    restartButton.textContent = 'Restart';
    restartButton.addEventListener('click', () => {
        guessField.value = '';
        location.reload();
    });
    resultParas.appendChild(restartButton);
    guessField.setAttribute('disabled', true);
    guessSubmit.setAttribute('disabled', true);
}

form.addEventListener('submit', (event) => {
    event.preventDefault();
    const guess = guessField.value;

    if (guess == key) {
        guesses.append(` ${guess}`);
        lastResult.textContent = `Congrats! The key is ${key}. You are free.`;
        lastResult.style.background = "rgba(0, 200, 0, 0.2)";
        lowOrHi.textContent = '';
        end();
        return;
    }
    
    if (attempt == 10) {
        lastResult.textContent = "Sorry, You are locked!";
        end();
        return;
    }

    if (guesses.textContent.length == 0) {
        guesses.append(`Previous Guesses: `);
    }

    ++attempt;

    guesses.append(` ${guess}`);
    lowOrHi.style.background = "rgba(200, 0, 0, 0.2)";
    if (guess < key) {
        lowOrHi.textContent = `The key is greater than ${guess}.`;
    }
    else {
        lowOrHi.textContent = `The key is less than ${guess}.`;
    }

    guessField.value = '';
    guessField.focus();
});
