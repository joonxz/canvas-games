var entities = [];

var snake = new Snake(100, 150);

var createPellet = function () {
  entities.push(new Pellets(Math.round((Math.random()*canvas.width)), Math.round((Math.random()*canvas.height)) ));
}

var createSnake = function () {
  entities.push(snake);
}

createSnake();
createPellet(); 
