var entities = [];
var snake;
var dir;
var score; 

var createPellet = function () {
  var gridSize = 8;

  var pelletX = gridSize + Math.round((Math.random() * (canvas.width  - gridSize * 2)) / gridSize) * gridSize;
  var pelletY = gridSize + Math.round((Math.random() * (canvas.height - gridSize * 2)) / gridSize) * gridSize;

  // set pellet with random x and y
  entities.push(new Pellets(pelletX, pelletY));
};

var resetGame = function () {
  entities = [];

  snake = new Snake(80, 120);
  entities.push(snake);
  createPellet();

  dir = "right";
  score = 0; 
};

resetGame();

