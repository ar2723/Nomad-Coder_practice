const numberGameForm = document.querySelector("#numberGameForm");

const firstValue = document.querySelector("#firstNumber");
const secondValue = document.querySelector("#secondNumber");

const gameResultBox = document.querySelector("#gameResultbox");
const gameResultMessage = document.querySelector("#resultMessage");
const winorlose = document.querySelector("#winorlose");


numberGameForm.addEventListener("submit", numberSubmitted);

function numberSubmitted (event) {
     event.preventDefault();
     const maxNum = parseInt(firstValue.value)
     const playerNum = parseInt(secondValue.value)
     const machineNum = randomInt (maxNum)
     gamePlay(playerNum, machineNum);
};

function randomInt (max){
     let randomNum = Math.floor(Math.random()*(max));
     return randomNum;
};

function gamePlay (playerNum, machineNum) {
     gameResultBox.classList.remove("hidden")
     gameResultMessage.innerHTML = `You choose: ${playerNum}, the machine chose: ${machineNum}.`
     if(playerNum === machineNum){
          winorlose.innerText = "You win!";
     } else {
          winorlose.innerText = "You lost!";
     };
};



