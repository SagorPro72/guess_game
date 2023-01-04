//Selecting DOM Elements
const colorSquares = document.querySelectorAll(".square");
const answerDisplay = document.querySelector(".correct");
const colorDisplay = document.querySelector(".color_code");
const button = document.querySelector(".genBtn");
const hintBtn = document.querySelector(".hint_btn");
const hintColor = document.querySelector(".btn");
const winOut = document.querySelector(".win");
let colors = [];
let winCount = 0;

generateRandomColor();
assingColor();
checkColour();
function generateRandomColor() {
  for (let i = 0; i < colorSquares.length; i++) {
    colors.push(
      `rgb(${Math.floor(Math.random() * 255)},${Math.floor(
        Math.random() * 255
      )},${Math.floor(Math.random() * 255)})`
    );
  }
}

//Assing color

function assingColor() {
  colors.forEach((colour, index) => {
    colorSquares[index].style.background = colour;
    colorSquares[index].setAttribute("data-colour", colour);
  });
}

function getRandomPickedColor() {
  const randomColor = colors[Math.floor(Math.random() * colors.length)];
  colorDisplay.textContent = randomColor;
  hintBtn.addEventListener("click", () => {
    hintColor.style.background = randomColor;
  });
  return randomColor;
}

//Check Color Condition
function checkColour() {
  colorSquares.forEach((square) => {
    square.addEventListener("click", (e) => {
      if (e.target.dataset.colour === pickedColor) {
        answerDisplay.textContent = "Correct";
        winOut.innerHTML = winCount;
        winCount++;
      } else {
        answerDisplay.textContent = "wrong";
        e.target.classList.add("fide");
      }
    });
  });
}

let pickedColor = getRandomPickedColor();

//Reset Function
function reset() {
  colors = [];
  generateRandomColor();
  colorSquares.forEach((square) => square.classList.remove("fide"));
  pickedColor = getRandomPickedColor();
  assingColor();
  checkColour();
}

button.addEventListener("click", () => {
  reset();
});

//this is the section of calculat
mainCal();
function mainCal() {
  const inputValueA = document.querySelector(".a");
  const inputValueB = document.querySelector(".b");
  const inputValueC = document.querySelector(".c");
  const resultSec = document.querySelector(".outValue");
  const ckeckBtn = document.querySelector(".button .btn");

  ckeckBtn.addEventListener("click", () => {
    valueA = Number(inputValueA.value);
    valueB = Number(inputValueB.value);
    valueC = Number(inputValueC.value);

    let cheker = valueB * valueB - 4 * valueA * valueC;

    if (cheker === 0) {
      x = -valueB / (2 * valueA);
      xfinal = x.toFixed(4);
      resultSec.innerHTML = `${xfinal}`;
    } else if (cheker > 0) {
      x1 = -valueB + Math.sqrt(cheker) / (2 * valueA);
      x2 = -valueB - Math.sqrt(cheker) / (2 * valueA);
      xfinal1 = x1.toFixed(4);
      xfinal2 = x1.toFixed(4);
      resultSec.innerHTML = `${xfinal1} And ${xfinal2}`;
    } else {
      resultSec.innerHTML = "Not Possible.";
    }
    if (valueA == "" || valueB == "" || valueC == "") {
      resultSec.innerHTML = "Enter the value .!";
      resultSec.classList.add("nunValue");
    }
  });
}
