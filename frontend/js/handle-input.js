var handleInput = function () {

  if (dir === "right") {
    snake.direction = {x: 1, y: 0};
  }
  if (dir === "left") {
    snake.direction = {x: -1, y: 0};  
  }
  if (dir === "down") {
    snake.direction = {x: 0, y: 1};
  }
  if (dir === "up") {
    snake.direction = {x: 0, y: -1};  
  }
};