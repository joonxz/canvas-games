//= require index.js
//= require resize-canvas.js
//= require tail.js
//= require snake.js
//= require pellets.js
//= require entities.js
//= require handle-input.js
//= require gameover.js
//= require mapping.js
//= require simulation.js
//= require draw.js
//= require filters.js

// doFrame function name is game loop convention name
var doFrame = function (time) {
  handleInput();
  simulation(time);
  draw();

  // loop request
  window.requestAnimationFrame(doFrame);
};

// initial request
window.requestAnimationFrame(doFrame);