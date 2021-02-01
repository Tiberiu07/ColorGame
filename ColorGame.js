var numOfSquares = 6;
var colors = generateRandomColors(numOfSquares);
var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var h1_span = document.querySelector("#colorDisplay");
var h1Display = document.querySelector("#h1");
var newColorsDisplay = document.querySelector("#new");
var clickedColor;
var messageDisplay = document.querySelector("#message");
var easyBtn = document.querySelector("#easybtn");
var hardBtn = document.querySelector("#hardbtn");
h1_span.textContent = pickedColor;




easyBtn.addEventListener("click", function () {
    this.classList.add("selected");
    hardBtn.classList.remove("selected");
    numOfSquares = 3;
    colors = generateRandomColors(numOfSquares);
    pickedColor = pickColor();
    h1_span.textContent = pickedColor;
    for (var it = 0; it < squares.length; it++) {
        squares[it].style.backgroundColor = colors[it];
        if (it >= numOfSquares) {
            squares[it].style.display = "none";
        }
    }
    h1Display.style.backgroundColor = "steelblue";
    messageDisplay.style.color = "white";
})

hardBtn.addEventListener("click", function () {
    this.classList.add("selected");
    easyBtn.classList.remove("selected");
    numOfSquares = 6;
    colors = generateRandomColors(numOfSquares);
    pickedColor = pickColor();
    h1_span.textContent = pickedColor;
    for (var it = 0; it < squares.length; it++) {
        squares[it].style.backgroundColor = colors[it];
        squares[it].style.display = "block";
    }
    h1Display.style.backgroundColor = "steelblue";
    messageDisplay.style.color = "white";
})


newColorsDisplay.addEventListener("click", function () {
    //generate all new colors
    //pick a differed collor
    //change colors of squares
    colors = generateRandomColors(numOfSquares);
    pickedColor = pickColor();
    h1_span.textContent = pickedColor;
    for (var it = 0; it < squares.length; it++) {
        squares[it].style.backgroundColor = colors[it];
    }
    h1Display.style.backgroundColor = "steelblue";
    this.textContent = "New Colors";
    messageDisplay.style.color = "white";
})

for (var it = 0; it < squares.length; it++) {
    squares[it].style.backgroundColor = colors[it];
    squares[it].addEventListener("click", function () {
        clickedColor = this.style.backgroundColor;
        if (clickedColor === pickedColor) {
            messageDisplay.style.color = "black";
            messageDisplay.textContent = "Correct";
            changeColor(clickedColor);
            h1Display.style.backgroundColor = pickedColor;
            newColorsDisplay.textContent = "Play Again";
        }
        else {
            this.style.backgroundColor = "#232323";
            messageDisplay.style.color = "black";
            messageDisplay.textContent = "Try again";
        }
    })
}

function changeColor(color) {
    for (var it = 0; it < squares.length; it++)
        squares[it].style.backgroundColor = color;
}

function pickColor() {
    var index = Math.floor(Math.random() * colors.length);
    return colors[index];
}

function generateRandomColors(colorNumber) {
    var arr = [];

    for (var it = 0; it < colorNumber; it++) {
        //get random number and push into the array
        arr.push(randomColor());
    }
    return arr;
}

function randomColor() {
    var red = Math.floor(Math.random() * 256);
    var green = Math.floor(Math.random() * 256);
    var blue = Math.floor(Math.random() * 256);
    return "rgb(" + red + ", " + green + ", " + blue + ")";
}