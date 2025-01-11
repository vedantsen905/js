const randomNumber = (parseInt(Math.random()*100 +1))

const submit = document.querySelector('#subt')

const userinput = document.querySelector('#guessField')

const guessSlot = document.querySelector('.guesses')

const remaining = document.querySelector('.lastResult')

const lowOrHi = document.querySelector('.lowOrHi')

const startOver = document.querySelector('.resultParas')


const p = document.createElement('p')

let prevguess = []
let numGuess = 1 

let playGame = true

if (playGame)
{
  submit.addEventListener('click' , function(e){
    e.preventDefault()
    // console.log(e)
     const guess = parseInt(userinput.value)
    //  console.log(guess)
     validateGuess(guess)

  })
}
//for validation of guess
function validateGuess(guess){
  if(isNaN(guess)){
    alert('please enter a valid number')
  }
  else if(guess < 1 ){
    alert('please enter a number greater than 1')
  }
  else if (guess > 100){
    alert('please enter a number smaller than 100')
  }
  else{
    prevguess.push(guess)
    if(numGuess === 10 ){
      displayGuess(guess)
      displayGuess(`Game over!!! , the coreect number is ${randomNumber}`)
      endgame()}
    
    else {
      displayGuess(guess)
      checkGuess(guess)
    }}
  }
  


// for m\printing of message whteher it is true or not 
function checkGuess(guess) {
  if (guess === randomNumber) {
    displayMessage(`You guessed it right`);
    endgame();
  } else if (guess < randomNumber) {
    displayMessage(`Number is TOOO low`);
  } else if (guess > randomNumber) {
    displayMessage(`Number is TOOO High`);
  }
}

function displayGuess(guess) {
  userinput.value = '';
  guessSlot.innerHTML += `${guess}, `;
  numGuess++;
  remaining.innerHTML = `${11 - numGuess} `;
}

function displayMessage(message) {
  lowOrHi.innerHTML = `<h2>${message}</h2>`;
}


function newGame(){
  const newGameButton = document.querySelector('#newGame');
  newGameButton.addEventListener('click', function (e) {
    randomNumber = parseInt(Math.random() * 100 + 1);
    prevguess = [];
    numGuess = 1;
    guessSlot.innerHTML = '';
    remaining.innerHTML = `${11 - numGuess} `;
    userinput.removeAttribute('disabled');
    startOver.removeChild(p);

    playGame = true;
  });
  
}

function endgame(){
  userinput.value = '';
  userinput.setAttribute('disabled', '');
  p.classList.add('button');
  p.innerHTML = `<h2 id="newGame">Start new Game</h2>`;
  startOver.appendChild(p);
  playGame = false;
  newGame();
}









