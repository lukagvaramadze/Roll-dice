"use strict";

let dice = document.querySelector(".dice");
let newGame = document.querySelector(".new-game");
let rollDice = document.querySelector(".roll-dice");
let livescore1 = document.querySelector(".livescore-1");
let livescore2 = document.querySelector(".livescore-2");
let score1 = document.querySelector(".score-1");
let score2 = document.querySelector(".score-2");
let livescore = 0;
let scoreVar1 = 80;
let scoreVar2 = 90;
let switchVar = false;
let hold = document.querySelector(".hold");
let section1 = document.querySelector(".section1");
let section2 = document.querySelector(".section2");
let sectionActive1 = document.querySelector(".sec-active1");
let sectionActive2 = document.querySelector(".sec-active2");
let playing = true;


section2.classList.remove("sec-active2");

rollDice.addEventListener("click", function () {
  if(playing){
  let diceNum = Math.floor(Math.random() * 6 + 1);
  if (switchVar == false) {
    console.log(diceNum);
    dice.classList.remove("hidden");
    dice.src = `dice-${diceNum}.png`;
    livescore += diceNum;
    livescore1.textContent = livescore;
    if (diceNum === 1) {
      livescore = 0;
      livescore1.textContent = 0;
      switchVar = !switchVar;
    }
  } else if (switchVar == true) {
    console.log(diceNum);
    dice.src = `dice-${diceNum}.png`;
    livescore += diceNum;
    livescore2.textContent = livescore;
    if (diceNum == 1) {
      livescore = 0;
      livescore2.textContent = 0;
      switchVar = !switchVar;
    }
  }
}});

hold.addEventListener("click", function () {
  if(playing){
  if (switchVar == false) {
    scoreVar1 += livescore;
    score1.textContent = scoreVar1;
    livescore1.textContent = 0;
  } else if (switchVar == true) {
    scoreVar2 += livescore;
    score2.textContent = scoreVar2;
    livescore2.textContent = 0;
  }
  switchVar = !switchVar;
  livescore = 0;
  if (scoreVar1 >= 100) {
    section1.style.backgroundColor = "black";
    playing = false;
    dice.classList.add("hidden");
  } else if (scoreVar2 >= 100) {
    section2.style.backgroundColor = "black";
    playing = false;
    dice.classList.add("hidden");
  }
}});

document.addEventListener("click", function () {
  if (switchVar === false) {
    section2.classList.remove("sec-active2");
    section1.classList.add("sec-active1");
  } else if (switchVar === true) {
    section2.classList.add("sec-active2");
    section1.classList.remove("sec-active1");
  }
});

newGame.addEventListener('click', function(){
  window.location.reload();
})
