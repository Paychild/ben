const secretCodeD = document.getElementById("secretCode")
const userInput = document.getElementById("guessInput");
const  guessButton = document.getElementById("guessBtn");
const feedBackAlert = document.getElementById("feedback");
const attemptDis = document.getElementById("attemptsDisplay");


let secretCode = Math.floor(Math.random()*10) +1;
//
guessButton.addEventListener("click",checkGuess);
    
let attempts  = 0;
document.getElementById("secretCode").textContent = "Random Number :" + secretCode;
//

function checkGuess() {

 if(!userInput.value.trim()){
    feedBackAlert.textContent = "Please enter correct Number!"
    return;
 }

 const guessValue = Number(userInput.value);

 document.getElementById("guessInput").value = "";


 attempts++
 document.getElementById("attemptsDisplay").innerText = `Attempts : ${attempts}`;
 //
 if (guessValue === secretCode){
    feedBackAlert.textContent = `correct! you guessed the secret number : ${secretCode}`;
 } else if (guessValue > secretCode){
    feedBackAlert.textContent = "Too high LOL";
 } else {
    feedBackAlert.textContent = "Too low";
 }
}
//
function playAgain(){
   const secretCode = Math.floor(Math.random()*10)+1; 

   attempts = 0;

   feedBackAlert.innerText = "";
   guessInput.value = "";
   attemptDis.innerText = "Attempts: 0";
   document.getElementById("secretCode").textContent = `random Number:${secretCode}`;

}

let failedAttempts = 0;
function checkCondition(){
    const userInput = document.getElementById("guessInput");
    const guessButton = document.getElementById("guessBtn");



    if(userInput === secretCode){
        guessButton.disabled = false;
        userInput.disabled = false; 
        failedAttempts =  0;
    }else {
        failedAttempts++
    }if (failedAttempts >= 4) {
        guessButton.disabled = true;
        userInput.disabled = true;
    }
}
