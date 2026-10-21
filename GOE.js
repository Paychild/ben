
const userInput = document.getElementById("guessInput");
const guessButton = document.getElementById("guessBtn");
const feedbackMessage = document.getElementById("feedback")
const attemptsDisplay = document.getElementById("attemptsDisplay")

//
guessButton.addEventListener("click",checkGuess);
//
// guessInput.addEventListener('keydown',function(event) {
//     if(event.key === "Enter"){
//         this.guessButton();
//     }
// });


// 
//
const secretCode = Math.floor(Math.random() *10) + 1;
let attempts = 0;

document.getElementById("secretCode").textContent = "Random Number: " + secretCode;

function checkGuess(){
 
    if(!userInput.value){
        feedbackMessage.textContent = "please enter a valid number!";
        return; 
    }
    const guessValue = Number(userInput.value);
    //

    document.getElementById("guessInput").value = ""; 

    attempts++  
    document.getElementById("attemptsDisplay").innerText= `Attempts: ${attempts}`;
    //
    if(guessValue === secretCode){
        feedbackMessage.textContent = `correct! You guessed the secret number: ${secretCode}`;
    } else if  (guessValue < secretCode){
        feedbackMessage.textContent = "Too Low!"
    } else {
        feedbackMessage.textContent = "Too High"
    }

}


function playAgain(){
    secretCode =  Math.floor(Math.random() *10) + 1;
    attempts = 0;

    feedback.innerText = "";
    guessInput.value ="";
    attemptsDisplay.innerText = "Attempts: 0";
    //document.getElementById("secretCode").textContent = `random Number:${secretCode}`;
}

let failedAttempts = 0;

 function checkCondition(){
    const userInput = document.getElementById("guessInput");
    const guessButton = document.getElementById("guessBtn");

    if(userInput.value === "7") {
        guessButton.disabled = false;
        userInput.disabled = false;
        failedAttempts = 0;
    }
    else {
        failedAttempts++;
     if (failedAttempts >= 4){
        guessButton.disabled = true;
        userInput.disabled = true;
    }
}
}


