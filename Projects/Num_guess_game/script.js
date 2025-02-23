let randomNumber = parseInt(Math.random() * 100 + 1);
const submit = document.getElementById("submit");
const userInput = document.querySelector("#guessField");
const guessSlot = document.querySelector(".guesses");
const remaining = document.querySelector(".lastResult");
const lowOrHi = document.querySelector(".lowOrHi");
const startOver = document.querySelector(".resultPars");

const p = document.createElement("p");

let prevguess = [];
let numGuesses = 1;

let playGame = true;

if(playGame){
    submit.addEventListener('click',function(e){
        e.preventDefault();
        let guess = parseInt(userInput.value);
        validateGuess(guess);
    })
}

function validateGuess(guess){
    if(isNaN(guess)){
        alert('Please Enter a Valid Number');
    }else if(guess>100){
        alert('Please Enter number less than 100')
    }else if(guess<1){
        alert('Enter number greater than 1')
    }else{
        prevguess.push(guess);
        if(prevguess==11){
            displayGuess(guess)
            displayGuess(`Game Over. Random Number was ${randomNumber}`);
            endGame();
        }else{
            displayGuess(guess);
            chekGuess(guess);
        }
    }
}

function chekGuess(guess){
    //chek the entered number is low or high
    if(guess === randomNumber){
        displayMessage(`You guess Right Number. ${randomNumber}`)
        endGame();
    }else if(guess > randomNumber){
        displayMessage(`Your guess is too much greater `)
    }else if(guess < randomNumber){
        displayMessage(`Your guess is too much low.`);
    }
}

function displayGuess(guess){
    //
    userInput.value = '';
    guessSlot.innerHTML = `${prevguess}, `;
    numGuesses++;
    remaining.innerHTML= `${11 - numGuesses}`;
}

function displayMessage(message){
    //
    lowOrHi.innerHTML = `<h2>${message}</h2>`;

}

function endGame(){
    //
    userInput.value = ''
    userInput.setAttribute('disabled', '')
    p.classList.add('button')
    p.innerHTML = `<button id="newGame">Start New Game</button>`;
    startOver.appendChild(p);
    playGame = false;
    newGame();
}
    
function newGame(){
    //
    const newGameButton=document.querySelector('#newGame');
    newGameButton.style.cursor="pointer";
    newGameButton.style.borderRadius="10px";
    newGameButton.style.padding="10px";

    newGameButton.addEventListener('click',function(e){
        randomNumber = parseInt(Math.random() * 100+1);
        prevguess = []
        numGuesses =1
        guessSlot.innerHTML = ''
        remaining.innerHTML = `${11 - numGuesses}`
        userInput.removeAttribute('disable');
        startOver.removeChild(p);

        playGame = true
    })
}


