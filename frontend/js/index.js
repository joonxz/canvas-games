var canvas = document.getElementById('snake');
var ctx = canvas.getContext('2d');

// var dir = "right";
var spacebarPressed = false;

var inputState = {
  joystick: {x: 0.0, y: 0.0}
};

// color pallette
var scoreColor  = "#556270";
var gridColor   = "rgba(85,98,112,0.1)";
var snakeColor  = "#4ecdc4";
var pelletColor = "#c44d58";
var bgColor     = "#ffffff";
