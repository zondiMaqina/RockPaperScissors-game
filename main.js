
// Number of rounds
 let round_numbers;

// DOM elements
const computor_choice = document.getElementById("computor-choice")

const player_choice = document.getElementById("user-choice")

const rounds = document.getElementById("rounds")

let input_of_user = document.getElementById("input")

const gameState = document.getElementById("state")

const textResults = document.getElementById("text")

// booleans for game to start and restart
let isStarted = false;
let RoundsFinished = false;
let isOver;


// function for generating random choices for computor
let choiceOfComputor = ["paper","scissors", "rock"]

function computorRandomChoice(){
    let randomChoice = choiceOfComputor[
        Math.floor(Math.random() * choiceOfComputor.length)
    ]

    return randomChoice
}


// function for starting game

let welcomePage = document.getElementById("welcome");
let response;
let tries;

function startGame(){
    isStarted = true

   if (isStarted){

     response = `Rock! Paper! Scissors!`

    welcomePage.textContent = response;

     tries = window.prompt(`How many Rounds do you want`)

    round_numbers = Number(tries)   

    if (round_numbers !== NaN){
        rounds.textContent = round_numbers;
    }

   }else{
    return null
   }
}

// function for submitting user input

let user_choice;
let totalPoints = 0;

function submit(){

    isOver = false;
    if (isStarted){
        rounds.textContent -= 1 ;


    // user choice
        user_choice = input_of_user.value ;

        player_choice.textContent = String(user_choice).toLowerCase();

        computor_choice.textContent = computorRandomChoice();

                // outcomes
                if ( user_choice == computor_choice.textContent){
                    gameState.textContent = `It is a Tie Master! Your ${user_choice} equals the Computor's ${computor_choice.textContent}`
                } else if (
                    (user_choice == "rock" && computor_choice.textContent == "scissors") ||
                    (user_choice == "paper" && computor_choice.textContent == "rock") ||
                    (user_choice == "scissors" && computor_choice.textContent == "paper")
                ){
                    gameState.textContent = `You win Master! Your ${user_choice} beats the Computor's ${computor_choice.textContent}`;
                    totalPoints ++;

                } else{
                    gameState.textContent = `You Lose this one Master! Your ${user_choice} is beaten by the Computor's ${computor_choice.textContent}`
                }


        if (rounds.textContent == 0){
            isStarted = false;
            isOver = true;
            let response2 = `Game is Over`
            player_choice.textContent = " ";
            computor_choice.textContent = " "

            welcomePage.textContent = response2;
            gameState.textContent = " ";
            textResults.textContent = `You have won ${totalPoints} times`;
        }
    }

    
}

// function for restarting game 

function retry(){
    textResults.textContent = " ";
    totalPoints = 0;
    
    if (rounds.textContent == 0 && isOver){

        welcomePage.textContent = response;
        tries = window.prompt(`How many Rounds do you want`);
        round_numbers = Number(tries)   
        rounds.textContent = round_numbers;
        isStarted = true;
    }
}