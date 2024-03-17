// user presses "play game"
// user enters number of rounds
// number of rounds shows
// user chooses presses choice
// computor shows choice 
// after each round feedback is needed
// if player wins one round
//  player gains one point
// if player loses one round 
//  computor gains one point
// if broth player and computor draw
//  no points earned for both
// if rounds finished 
//  winner is shown
// if winner is showed 
//  game is restarted
//  points are reset
//  rounds reset
//  choice is removed
// user enters number of rounds

// DOM
// if game is started
//  every element gets ```box-shadow```
//  game title changes color
//  body background-color changes 
// if point is gained 
//  background is green
// if no point gained 
//  screen is red

// stored nodesin variables

// game choices
const rock =
document.querySelector("#rock") ;

const paper =
document.querySelector("#paper") ;

const scissors =
document.querySelector("#scissors") ;


// Game buttons
const playGame =
document.querySelector("#playGame") ;

const restartGame =
document.querySelector("#restart") ;


// text DOM
const gameTitle =
document.querySelector("header > h1") ;

const userPoints =
document.querySelector("#player") ;

const computorPoints =
document.querySelector("#computor") ;

const userChoice =
document.querySelector("#user-score") ;

const computorChoice =
document.querySelector("#computor-score") ;

const roundsState =
document.querySelector("#game-state") ;

// conditions 

let gameStarted = false;
let gameOver = false;