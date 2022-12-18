"use strict";
//Button
const btnRoll = document.querySelector(".btn--roll");
const btnNew = document.querySelector(".btn--new");
const btnHold = document.querySelector(".btn--hold");
//Score
const P1score = document.querySelector("#score--0");
const P2score = document.querySelector("#score--1");
//Current point
const P1Current = document.querySelector("#current--0");
const P2Current = document.querySelector("#current--1");
//photo
const dice = document.querySelector(".dice");

P1score.textContent = 0;
P2score.textContent = 0;
dice.classList.add("hidden");

let currentValue = 0;
let changePlayer = 0;
let score = [0, 0];
let playing = true;

const switchPlayer = () => {
  changePlayer = changePlayer === 0 ? 1 : 0; //check if random number is 1 or not

  //change background color
  document.querySelector(".player--0").classList.toggle("player--active");
  document.querySelector(".player--1").classList.toggle("player--active");

  //set 0 in player1 current value
  currentValue = 0;
  document.querySelector(`#current--0`).textContent = currentValue;

  //display current value in player 2
  document.querySelector(`#current--${changePlayer}`).textContent =
    currentValue;

  //set 0 player 2 current value
  document.querySelector(`#current--1`).textContent = currentValue;
};

const roll = () => {
  if (playing) {
    //1 generate random number
    let ramdomDice = Math.trunc(Math.random() * 6) + 1;
    dice.classList.remove("hidden");

    //display picture according to random number
    dice.src = `../Pig Game/img/dice-${ramdomDice}.png`;

    //roll dice
    if (ramdomDice !== 1) {
      currentValue += ramdomDice;
      document.querySelector(`#current--${changePlayer}`).textContent =
        currentValue;
    } else {
      switchPlayer();
    }
  }
};

const hold = () => {
  // 1 Add current score to global score
  if (playing) {
    score[changePlayer] += currentValue;
    document.querySelector(`#score--${changePlayer}`).textContent =
      score[changePlayer];
    // 2 check if player score is >=100
    if (score[changePlayer] >= 30) {
      // 3 finishing the game
      document
        .querySelector(`.player--${changePlayer}`)
        .classList.add("player--winner");
      document.querySelector(`#current--${changePlayer}`).textContent = 0;
      dice.classList.add("hidden");
      playing = false;
    } else {
      // 4 switch next user
      switchPlayer();
    }
  }
};

const again = () => {
  //reset 0 all value
  Math.trunc(Math.random() * 6) + 1;
  dice.classList.add("hidden");
  P1score.textContent = 0;
  P2score.textContent = 0;
  P1Current.textContent = 0;
  P2Current.textContent = 0;

  //reset ui
  document
    .querySelector(`.player--${changePlayer}`)
    .classList.toggle("player--active");

  document
    .querySelector(`.player--${changePlayer}`)
    .classList.toggle("player--winner");
};

btnRoll.addEventListener("click", roll);
btnNew.addEventListener("click", again);
btnHold.addEventListener("click", hold);
