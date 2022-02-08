let maximum = parseInt(prompt('Enter a maximum number!'));

while (!maximum) {
    maximum = parseInt(prompt('Enter a valid number!'));
}

const targetNum = Math.floor(Math.random() * maximum) + 1;
console.log(targetNum);
let attempts = 1;

let guess = parseInt(prompt('Enter your first guess!'));
while (parseInt(guess) !== targetNum) {
    if (guess === 'q') break;
    attempts++;
    if (guess > targetNum) {
        guess = prompt('Too High, enter a new guess!');
    }
    else {
        guess = prompt('Too Low, enter a new guess!');
    }
}

if (guess === 'q') {
    console.log('OK! You Quit!');
}
else {
    console.log(`You Got It! It took you ${attempts} guesses`);
}

