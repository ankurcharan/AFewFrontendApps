var numsq = 6;

var colors = generateRandomColors(numsq);

var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetBtn = document.getElementById("reset");
var modeBtns = document.querySelectorAll(".mode");

for(var i = 0 ; i < modeBtns.length ; i++) {

	modeBtns[i].addEventListener("click", function () {

		modeBtns[0].classList.remove("selected");
		modeBtns[1].classList.remove("selected");
		this.classList.remove("selected");

		this.textContent === "Easy" ? numsq = 3 : numsq = 6;
		reset(); 

	})

}

function reset() {

	this.textContent = "New Colors";

    // generate all new colors
    colors = generateRandomColors(numsq);
    // picked random color
    pickedColor = pickColor();
    // change colorDisplay to match picked color
	colorDisplay.textContent = pickedColor;
	resetBtn.textContent = "New Colors";
	messageDisplay.textContent = "";
    // change colors of sqaures
	for(var i = 0 ; i < squares.length ; i++) {

		if(colors[i]) {
			squares[i].style.display = "block";
			squares[i].style.background = colors[i];
		} else {
			squares[i].style.display = "none";
		}


        squares[i].style.background = colors[i];
    }

	h1.style.background = "steelblue";
}

// easyBtn.addEventListener("click", function () {
// 	easyBtn.classList.add("selected");
// 	hardBtn.classList.remove("selected");

// 	numsq = 3;
// 	colors = generateRandomColors(numsq);
// 	pickedColor = pickColor();
// 	colorDisplay.textContent = pickedColor;

// 	for(var i = 0 ; i < squares.length ; i++) {
// 		if(colors[i]) {
// 			squares[i].style.background = colors[i];
// 		}
// 		else {
// 			squares[i].style.display = "none";
// 		}
// 	}
// });

// hardBtn.addEventListener("click", function () {
// 	easyBtn.classList.remove("selected");
// 	hardBtn.classList.add("selected");

// 	numsq = 6;
// 	colors = generateRandomColors(numsq);
// 	pickedColor = pickColor();
// 	colorDisplay.textContent = pickedColor;

// 	for(var i = 0 ; i < squares.length ; i++) {
// 		squares[i].style.background = colors[i];
// 		squares[i].style.display = "block"
// 	}
// })


resetBtn.addEventListener("click", function () {

	this.textContent = "New Colors";

    // generate all new colors
    colors = generateRandomColors(numsq);
    // picked random color
    pickedColor = pickColor();
    // change colorDisplay to match picked color
    colorDisplay.textContent = pickedColor;
    // change colors of sqaures
	for(var i = 0 ; i < squares.length ; i++) {
        squares[i].style.background = colors[i];
    }

	h1.style.background = "steelblue";
	messageDisplay.textContent = "";
})

colorDisplay.textContent = pickedColor;

for(let i = 0 ; i < squares.length ; i++)
{
    // add colors
    squares[i].style.background = colors[i];

    // add click listener
    squares[i].addEventListener('click', function() {

        // grab color of clicked square
        var clickedColor = this.style.background;

        // compare color to pickedColor
        if(clickedColor.indexOf(pickedColor) != -1)
        {
			messageDisplay.textContent = "Correct!";
			resetBtn.textContent = "Play Again?";
            changeColors(pickedColor);
            h1.style.background = pickedColor;
        }
        else
        {
            this.style.background = "#232323";
            messageDisplay.textContent = "Try Again!";
        }

    })
}

function changeColors(color) {
    // loop through all squares
    for(var i = 0 ; i < squares.length ; i++)
    {
        // change each color to match given color
        squares[i].style.background = color;
    }
}

function pickColor() {

    // Math.random() picks number between 0 and 1 [0, 1)
    // if want to generate from 0 to 6
    // multiply by 6 and add 1
    // use Math.floor() for integer part

    var random = Math.floor(Math.random() * colors.length);

    return colors[random];
}

function generateRandomColors(num) {

    // make an array
    var arr = [];

    // add num random colors to array
    for(var i = 0 ; i < num ; i++) {
        // get random color and push into array
        arr.push(randomColor());
    }

    // return that array
    return arr;
}

function randomColor() {

    // pick red, green, blue from 0 - 255
    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);

    var color = "rgb(" + r + ", " + g + ", " + b + ")";
    return color;
}