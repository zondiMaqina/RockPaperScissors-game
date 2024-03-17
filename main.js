// after each round feedback is needed
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
let rock =
document.querySelector("#rock") ;

let paper =
document.querySelector("#paper") ;

let scissors =
document.querySelector("#scissors") ;


// Game buttons
let playGame =
document.querySelector("#playGame") ;

let restartGame =
document.querySelector("#restart") ;

let check_winner =
document.querySelector("#gameWinner")

// text DOM
let victor = 
document.querySelector(".winner")
let gameTitle =
document.querySelector("header > h1") ;

let userPoints =
document.querySelector("#player") ;

let computorPoints =
document.querySelector("#computor") ;

let userChoice =
document.querySelector("#user-score") ;

let computorChoice =
document.querySelector("#computor-score") ;

let roundsState =
document.querySelector("#game-state") ;

let rounds = 
document.querySelector("#round") ;

// conditions 
let gameStarted = false;
let gameOver = false;
let userPlayed = false;
let c_points = 0;
let u_points = 0;


computorPoints.textContent = c_points;
userPoints.textContent = u_points;
// computor choice
let computorMove = function(){

    if (userPlayed){
        let choices = ["rock", "paper", "scissors"];
        let move = 
        choices[Math.floor(Math.random() * choices.length)];
    
        return move    
    }
}
let computor_move = computorMove;


// user presses "play game"
function start_game(){
    gameStarted = true;
    if(gameStarted){
        // user enters number of rounds
        let roundAmount = 
        window.prompt("Enter your amount of rounds");

        // number of rounds shows
        rounds.innerText = roundAmount;
    }
}
playGame.onclick = start_game;


// user chooses presses choice
// user chooses rock
function rockMove(){
    userPlayed = true;

    if (rounds.textContent > "0"){
        rounds.textContent -= 1;
    }

    if (gameStarted && userPlayed && rounds.textContent > "0"){

        // computor shows choice 
        userChoice.textContent = "rock" ;
        computorChoice.textContent =
        computor_move() ;
    
        if (userChoice.textContent =="rock" &&
        computorChoice.textContent == "scissors"
    ){
        u_points ++;
      return  userPoints.textContent = u_points;
    } else if (
        userChoice.textContent =="rock" &&
        computorChoice.textContent == "paper"
    ){
        c_points ++;
       return computorPoints.innerText = c_points;
    }
    }
}
rock.onclick = rockMove ;

function paperMove(){
    userPlayed = true;

    if (rounds.textContent > "0"){
        rounds.textContent -= 1;
    }

    if (gameStarted && userPlayed && rounds.textContent > "0"){

        userChoice.textContent = "paper" ;
        computorChoice.textContent =
        computor_move() ;
    
        if (userChoice.textContent =="paper" &&
        computorChoice.textContent == "rock"
    ){
        u_points ++;
      return  userPoints.textContent = u_points;
    } else if (
        userChoice.textContent =="paper" &&
        computorChoice.textContent == "scissors"
    ){
        c_points ++;
       return computorPoints.innerText = c_points;
    }
    }

}

paper.onclick = paperMove ;

function scissorsMove(){
    userPlayed = true;

    if (rounds.textContent > "0"){
        rounds.textContent -= 1;
    }

    if (gameStarted && userPlayed && rounds.textContent > "0"){

        userChoice.textContent = "scissors" ;
        computorChoice.textContent =
        computor_move() ;
    
        if (userChoice.textContent =="scissors" &&
        computorChoice.textContent == "paper"
    ){
        u_points ++;
      return  userPoints.textContent = u_points;
    } else if (
        userChoice.textContent =="scissors" &&
        computorChoice.textContent == "rock"
    ){
        c_points ++;
       return computorPoints.innerText = c_points;
    }
    }

}
scissors.onclick = scissorsMove ;


let winner = document.createElement("span");
victor.appendChild(winner)

function checkWinner(){

    if (rounds.textContent <= "0" && gameStarted){

        if (userPoints.textContent > computorPoints.textContent){
            return winner.textContent = "You";
        }else if (computorPoints.textContent > userPoints.textContent){
            return winner.textContent = "Computor";
        }else if (userPoints.textContent == computorPoints.textContent){
            return winner.textContent = "No one";
        }
    }
}
check_winner.onclick = checkWinner ;