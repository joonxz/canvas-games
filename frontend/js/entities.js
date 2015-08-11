var entities = [];

var snake = new Snake(80, 120);

var createPellet = function () {
  var pelletX = Math.round((Math.random() * canvas.width) / 8) * 8;
  var pelletY = Math.round((Math.random() * canvas.height) / 8) * 8;

  // set pellet with random x and y
  entities.push(new Pellets(pelletX, pelletY));

  console.log(pelletX, pelletY);
};

var createSnake = function () {
  entities.push(snake);
};

createSnake();
createPellet(); 
