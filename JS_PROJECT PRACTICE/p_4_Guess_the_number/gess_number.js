// let k=(Math.random()*100+1)
// k=parseInt(k)
// // console.log(k)


// let submit=document.querySelector('#subt')
// let userInput=document.querySelector('#guessField')
// let guessSlot=document.querySelector('.guesses')
// let remaning=document.querySelector('.lastResult')
// let lowOrHi=document.querySelector('.lowOrHi')
// let startOver=document.querySelector('.resultParas')

// let p=document.createElement('p')

// let prev_gess=[]
// let num_gess=1

// let play_Game=true;

// if(play_Game)
// {
//     submit.addEventListener('click',(e)=>{
//         e.preventDefault()
//         // will prevent the default behaviour of the form submission from the browser
//         let guess=parsInt(userInput.value)
//         console.log(guess);
//         validate_Guess(guess);
// })
// }

// random_number=k;

// function validate_Guess(guess)
// {
//     if(isNaN(guess))
//     {
//         alert('Please enter a valid number')
//     }
//     else if(guess<1)
//     {
//         alert('Please enter a number greater than 1!')
//     }
//     else if(guess>100)
//     {
//         alert('Please enter a number less than 100!')
//     }
//     else{
//         prev_gess.push(guess);
//         if(num_gess === 11){
//             display_message(`Game Over! Number was ${k}`);
//             endgame();
//         }
//         else{
//             display_guesses(guess);
//             check_gusses(guess);
//         }           
//     }
// }


// function check_gusses(guess){
//     if(guess === k){
//         display_message(`You guessed correctly!`);
//         endgame();
//     }
//     else if( guess < k){
//         display_message(`Too Low! Try again!`);
//     }
//     else if( guess > k){
//         display_message(`Too High! Try again!`);
//     }
// }

// // function diaplay_history(){
// // }

// function display_guesses(guess){
//     userInput.value="";
//     guessSlot.innerHTML+=`${guess}  `;
//     num_gess++;
//     remaning.innerHTML=`${11-num_gess}  `;
// }

// function display_message(message){
//     lowOrHi.innerHTML=`${message}`;
// }


// function endgame(){
//     userInput.value="";
//     userInput.setAttribute('disabled','');
//     // submit.setAttribute('disabled','');
//     p.classList.add('button');
//     p.innerHTML=`<h1 id="newGame">Start New Game</h1>`;
//     startOver.appendChild(p);
//     play_Game=false;
//     newGame();
// }


// function newGame(){
//     let newGameButton=document.querySelector('#newGame');
//     newGameButton.addEventListener('click',(e)=>{
//         k=parsInt(Math.random()*100+1);
//         prev_gess=[];
//         num_gess=1;
//         guessSlot.innerHTML="";
//         remaning.innerHTML=`${11-num_gess}`;
//         userInput.removeAttribute('disabled');
//         startOver.removeChild(p);
//         play_Game=true;
//     });
// }




let randomNumber = parseInt(Math.random() * 100 + 1);

const submit = document.querySelector('#subt');
const userInput = document.querySelector('#guessField');
const guessSlot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.resultParas');

const p = document.createElement('p');

let prevGuess = [];
let numGuess = 1;

let playGame = true;

if (playGame) {
  submit.addEventListener('click', function (e) {
    e.preventDefault();
    const guess = parseInt(userInput.value);
    console.log(guess);
    validateGuess(guess);
  });
}

function validateGuess(guess) {
  if (isNaN(guess)) {
    alert('PLease enter a valid number');
  } else if (guess < 1) {
    alert('PLease enter a number more than 1');
  } else if (guess > 100) {
    alert('PLease enter a  number less than 100');
  } else {
    prevGuess.push(guess);
    if (numGuess === 11) {
      displayGuess(guess);
      displayMessage(`Game Over. Random number was ${randomNumber}`);
      endGame();
    } else {
      displayGuess(guess);
      checkGuess(guess);
    }
  }
}

function checkGuess(guess) {
  if (guess === randomNumber) {
    displayMessage(`You guessed it right`);
    endGame();
  } else if (guess < randomNumber) {
    displayMessage(`Number is TOOO low`);
  } else if (guess > randomNumber) {
    displayMessage(`Number is TOOO High`);
  }
}

function displayGuess(guess) {
  userInput.value = '';
  guessSlot.innerHTML += `${guess}, `;
  numGuess++;
  remaining.innerHTML = `${11 - numGuess} `;
}

function displayMessage(message) {
  lowOrHi.innerHTML = `<h2>${message}</h2>`;
}

function endGame() {
  userInput.value = '';
  userInput.setAttribute('disabled', '');
  p.classList.add('button');
  p.innerHTML = `<h2 id="newGame">Start new Game</h2>`;
  startOver.appendChild(p);
  playGame = false;
  newGame();
}

function newGame() {
  const newGameButton = document.querySelector('#newGame');
  newGameButton.addEventListener('click', function (e) {
    randomNumber = parseInt(Math.random() * 100 + 1);
    prevGuess = [];
    numGuess = 1;
    guessSlot.innerHTML = '';
    remaining.innerHTML = `${11 - numGuess} `;
    userInput.removeAttribute('disabled');
    startOver.removeChild(p);

    playGame = true;
  });
}