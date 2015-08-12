// set width and height of canvas
var resizeCanvas = function () {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
};

window.addEventListener('resize', resizeCanvas, false);

resizeCanvas();