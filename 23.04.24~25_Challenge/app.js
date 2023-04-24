const numberGame = document.querySelector("#numberGame");

const firstValue = document.querySelector("#firstNumber");
const secondValue = document.querySelector("#secondNumber");

const gameResultBox = document.querySelector("#gameResultbox");
const gameResultMessage = document.querySelector("#result");
const winOrLose = document.querySelector("#winAndLose");


numberGame.addEventListener("submit", numberSubmitted);

function numberSubmitted (event) {
     event.preventDefault();
     const maxNum = parseInt(firstValue.value)
     const minNum = parseInt(secondValue.value)
     const machineNumber = randomInt (minNum, maxNum)
     gamePlay(minNum, machineNumber);
};

function randomInt (min, max){
     let randomNum = Math.floor(Math.random()*(max-min+1)) + min;
     return randomNum;
};

function gamePlay (playerNum, machineNum) {
     gameResultBox.classList.remove("hidden")
     gameResultMessage.innerHTML = `You choose: ${playerNum}, the machine chose: ${machineNum}.`
     if(playerNum === machineNum){
          winOrLose.innerText = "You win!";
     } else {
          winOrLose.innerText = "You lost!";
     };
};



