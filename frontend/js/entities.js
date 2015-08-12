var entities = [];

var snake = new Snake(80, 120);

var createPellet = function () {
  var gridSize = 8;

  var pelletX = gridSize + Math.round((Math.random() * (canvas.width  - gridSize * 2)) / gridSize) * gridSize;
  var pelletY = gridSize + Math.round((Math.random() * (canvas.height - gridSize * 2)) / gridSize) * gridSize;

  // set pellet with random x and y
  entities.push(new Pellets(pelletX, pelletY));
};

var createSnake = function () {
  entities.push(snake);
};

createSnake();

createPellet();
