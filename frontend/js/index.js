var canvas = document.getElementById('snake');
var ctx = canvas.getContext('2d');

var speed = 1;
var dir = "right";
var score = 0;

var inputState = {
  joystick: {x: 0.0, y: 0.0}
};