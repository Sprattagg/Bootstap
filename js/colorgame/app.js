var numSquares = 6;
var colors = [];
var pickedColor;
var squares = document.querySelectorAll(".square");
var resetButton = document.querySelector("#reset");
var modeButtons = document.querySelectorAll(".mode");

var colors = ["rgb(255, 0, 0)",  "rgb(255, 0, 255)",    "rgb(255, 225, 0)",    "rgb(255, 0, 255)",    "rgb(0, 255, 255)",    "rgb(0, 255, 0)" ];
var squares = document.querySelectorAll(.squares);
for (i=0; i<squares.length; i++) {
    squares.style.backgroundColor = colors[i]};

    for(i=0; i<= squares.length; i++) {
          squares[i].addeventListeners('click', function() {
            alert('option was clicked');  
        });
    }