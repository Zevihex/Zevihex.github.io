const gambaButton = document.getElementById("gambaButton");
const showArray = document.getElementById("gambaArray");
const currentNumber = document.getElementById("currentNumber");
const numberPercent = document.getElementById("percent");
const boxes = document.getElementsByClassName("boxContainer")[0];
const box = document.getElementsByClassName("box");
const click = document.getElementById("clicks");
let clickNum = 0;

let playerArray = [];
gambaButton.addEventListener("hover", function() {
  
})
gambaButton.addEventListener("click", function() {
  const rngNum = Math.floor(Math.random() * 100) + 1;
  currentNumber.innerHTML = "Current Number: " + rngNum;
  if(!playerArray.includes(rngNum)) {
    playerArray.push(rngNum);
    numberPercent.innerHTML = playerArray.length + "%";
    box[rngNum-1].innerHTML = rngNum;
  }
  clickNum++;
  click.innerHTML = clickNum;
});

for(let i = 0; i < 100; i++) {
  const newBox = document.createElement("div");
  newBox.className = "box";
  newBox.id = i+1;
  boxes.appendChild(newBox);
}