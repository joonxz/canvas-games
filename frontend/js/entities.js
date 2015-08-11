var entities = [];

var snake = new Snake(100, 150);

var createPellet = function () {
  var pelletX = Math.round((Math.random()*canvas.width));
  var pelletY = Math.round((Math.random()*canvas.height));

  // set pellet with random x and y
  entities.push(new Pellets(pelletX, pelletY));
};

var createSnake = function () {
  entities.push(snake);
};

createSnake();
createPellet(); 
