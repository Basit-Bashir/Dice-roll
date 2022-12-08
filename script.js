'use strict';
const score0E = document.querySelector('#score--0');
const score1E = document.querySelector('#score--1');
const current0E = document.getElementById('current--0');
const current1E = document.getElementById('current--1');
const dispDice = document.querySelector('.dice');
const btnroll = document.querySelector('.btn--roll');
const btnnew = document.querySelector('.btn--new');
const btnhold = document.querySelector('.btn--hold');
const player1E = document.querySelector('.player--0');
const player2E = document.querySelector('.player--1');
// score0E.textContent = 0;
// score1E.textContent = 0;
dispDice.classList.add('hidden');
let scores = [0, 0];
let currentScore = 0;
let activePlayer = 0;
let play = true;
const changePlayer = function () {
  document.getElementById(`current--${activePlayer}`).textContent = 0 + '😟';
  currentScore = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;

  player1E.classList.toggle('player--active');
  player2E.classList.toggle('player--active');
};

const roll = function () {
  if (play) {
    let dice = Math.trunc(Math.random() * 6) + 1;
    // console.log(dice);
    dispDice.classList.remove('hidden');
    dispDice.src = `dice-${dice}.png`;

    if (dice !== 1) {
      currentScore += dice;
      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore + '😊';
    } else {
      changePlayer();

      // current0E.textContent = currentScore + '😊';
    }
  }
};
btnroll.addEventListener('click', roll);
btnhold.addEventListener('click', function () {
  if (play) {
    scores[activePlayer] += currentScore;
    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer];
    if (scores[activePlayer] >= 21) {
      play = false;
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove('player--active');
    } else {
      changePlayer();
    }
  }
});
btnnew.addEventListener('click', function () {
  scores = [0, 0];
  activePlayer = 0;
  currentScore = 0;
  play = true;
  dispDice.classList.add('hidden');
  score0E.textContent = 0;
  score1E.textContent = 0;
  current0E.textContent = 0;
  current1E.textContent = 0;
  player1E.classList.add('player--active');
  player2E.classList.remove('player--active');
  player1E.classList.remove('player--winner');
  player2E.classList.remove('player--winner');
});
