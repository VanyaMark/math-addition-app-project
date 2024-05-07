// Buena suerte!
let message = document.querySelector('#message');
let sum = 0;

const randomNum = () => Math.floor(Math.random()*101);

const sumRandomNums = () => {
const primaryNumDisplay = document.querySelector('#primary-number')
let primaryNum = randomNum();
primaryNumDisplay.textContent = primaryNum;
const secondaryNumDisplay = document.querySelector('#secondary-number')
let secondaryNum = randomNum();
secondaryNumDisplay.textContent = secondaryNum;
sum = primaryNum + secondaryNum;
console.log(sum)
}

const checkUserGuess = () => {
    let userGuess = parseInt(document.querySelector('#guess').value);
    if (userGuess == sum) {
        message.textContent = 'Your guess is right!'
    } else {
        message.textContent = 'Sorry, you are wrong!'
    }
}

const clear = () => {
    message.textContent = '';
    document.querySelector('#guess').value = '';
    sumRandomNums();
}

document.addEventListener('DOMContentLoaded', (event) => {
    // Call your function here
    sumRandomNums();
});

document.querySelector('#btn').addEventListener('click', checkUserGuess)
document.querySelector('#next-guess').addEventListener('click', clear)