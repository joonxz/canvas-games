// doFrame function name is game loop convention name
var doFrame = function (time) {
  // handleInput();
  // simulation(time);
  draw();

  // loop request
  window.requestAnimationFrame(doFrame);
};

// initial request
window.requestAnimationFrame(doFrame);