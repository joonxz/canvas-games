var entities = [];

var snake = new Snake(100, 150);

var createPellet = function () {
  // set pellet with random x and y
  entities.push(new Pellets(Math.round((Math.random()*canvas.width)), Math.round((Math.random()*canvas.height)) ));
};

var createSnake = function () {
  entities.push(snake);
};

// for (var i = 0; i < snake.tail.length; i++) {
//   console.log(snake.tail);
// };

createSnake();
createPellet(); 
