var numSquares = 6;
var colors = generateRandomColor(numSquares);


// selector variables
var resetButton = document.querySelector("#reset");
var header = document.querySelector("h1");
var colorDisplay = document.getElementById("colorDisplay");
var correctColor = pickColor();
var squares = document.querySelectorAll(".square");

colorDisplay.textContent = correctColor;
var messageDisplay = document.querySelector("#message");
var modes = document.querySelectorAll(".mode");

//Application Logic
squares.forEach(function (square, i) {
  square.style.background = colors[i];
  square.addEventListener("click", function () {
    WinLose(square);
  });
});

for (var i = 0; i < modes.length; i++) {
  modes[i].addEventListener("click", function () {
    modes[0].classList.remove("selected");
    modes[1].classList.remove("selected");
    this.classList.add("selected");
    if (this.textContent === "Easy") {
      numSquares = 3;
     
    } else {
      numSquares = 6;
    }
    reset()
  });
}

resetButton.addEventListener("click", () => {
  reset()
});

// Application Functions
function WinLose(square) {
  var clicked = square.style.background;
  console.log(clicked, correctColor);
  if (clicked === correctColor) {
    // header.style.background = ;
    messageDisplay.textContent = "correct";
    resetButton.textContent = "Play Again?";
    for (var i = 0; i < squares.length; i++) {
      squares[i].style.background = clicked;
    }
  } else {
    square.style.background = "#232323";
    messageDisplay.textContent = "Try again";
  }
}
var spreadColor = () => {
  squares.forEach(function (square, i) {
    if (colors[i]) {
      square.style.background = colors[i];
      square.style.display = "block"
    } else {
      square.style.display = "none"
    }
  });
};

function reset() {
  colors = generateRandomColor(numSquares);
  correctColor = pickColor();
  spreadColor();
  header.style.background = "steelblue";
  colorDisplay.textContent = correctColor;
  resetButton.textContent = "New Colors?";
  messageDisplay.textContent = "";
}
function randomColor() {
  var r = Math.floor(Math.random() * 257);
  var g = Math.floor(Math.random() * 257);
  var b = Math.floor(Math.random() * 257);
  return "rgb(" + r + ", " + g + ", " + b + ")";
}
function generateRandomColor(num) {
  var arr = [];
  while (num > 0) {
    arr.push(randomColor());
    num--;
  }
  return arr;
}
function pickColor() {
  var index = Math.floor(Math.random() * colors.length);
  return colors[index];
}
