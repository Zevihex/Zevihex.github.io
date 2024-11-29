const gambaButton = document.getElementById("gambaButton");
const showArray = document.getElementById("gambaArray");
const currentNumber = document.getElementById("currentNumber");
let playerArray = [];
gambaButton.addEventListener("click", function() {
  const rngNum = Math.floor(Math.random() * 100) + 1;
  currentNumber.innerHTML = "Current Number: " + rngNum;
  if(playerArray.includes(rngNum)) {
    
  } else {
    playerArray.push(rngNum);
    playerArray.sort((a, b) => a - b); 
    showArray.innerHTML = playerArray;
  }
  });