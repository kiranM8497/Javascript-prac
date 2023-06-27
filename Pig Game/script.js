'use strict';

const player0El = document.querySelector(`.player--0`);
const player1El = document.querySelector(`.player--1`);

const score0El = document.querySelector('#score--0');
// no need to use # when using getElementById plus this faster than querySelector
const score1El = document.getElementById('score--1');
const diceEl = document.querySelector('.dice');

const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');

const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

const switchPlayer = function () {
  document.getElementById(`current--${activePlayer}`).textContent = 0;

  //changing currentscore back to zero so next player will start from zero again
  currentScore = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  //toggle will check if the ekement have tha given class if it does it will remove if it does not it will add
  player0El.classList.toggle('player--active');
  player1El.classList.toggle('player--active');
};

//statring factors
let currentScore;
let scores;
let playing;
let activePlayer;
const init = function () {
  //starting conditions
   currentScore = 0;
   scores = [0, 0];
   playing = true;
  // bydefault we have selected player 1 as active he ) in this scenario activePlayer = 0;

  //hiding dice roll
  diceEl.classList.add('hidden');

  //starting conditions of scores back to zero
  score0El.textContent = 0;
  score1El.textContent = 0;

  //making current score zero
  current0El.textContent = 0;
  current1El.textContent = 0;

  //removing winner class to remove the winner black background
  //since we dont know who won remving from both
  player0El.classList.remove('player--winner');
  player1El.classList.remove('player--winner');

  //also need to remove active player class
  player0El.classList.add('player--active');
  player1El.classList.remove('player--active');
};

//calling init function so that whenever page reloads it will run
init();

//rolling dice functionality
btnRoll.addEventListener('click', function () {
  if (playing) {
    //1.generrate  a random dice roll
    //Math.random()*6 wiil generate a random number between 0 to 5 and + 1 to avoid zero and have 6 also
    const dice = Math.trunc(Math.random() * 6) + 1;

    //2.display the dice
    diceEl.classList.remove('hidden');
    diceEl.src = `dice-${dice}.png`;

    //3.check if its 1 or not
    if (dice !== 1) {
      //when its not 1 add score to currentscore
      currentScore += dice;
      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore;
    } else {
      //if its one  then switch the player and make active player scor back to zero
      switchPlayer();
    }
  }
});

btnHold.addEventListener('click', function () {
  if (playing) {
    //1.add current score to actve player score
    scores[activePlayer] += currentScore;
    diceEl.classList.add('hidden');

    //display it
    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer];
    // console.log('i am here');
    //check if the players score is >= 100
    //player wins
    if (scores[activePlayer] >= 20) {
      playing = false;

      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');
      //removing avtive player class otherwise player will both playerwin and playeractive class
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove('player--active');
    } else {
      //if game finishes we will not switch if does not then we will
      //switch player
      switchPlayer();
    }
  }
});

btnNew.addEventListener('click', init);
