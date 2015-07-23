var handleInput = function () {

  if (dir === "right") {
    snake.velocity = {x: 8, y: 0};
  }
  if (dir === "left") {
    snake.velocity = {x: -8, y: 0};  
  }
  if (dir === "down") {
    snake.velocity = {x: 0, y: 8};  
  }
  if (dir === "up") {
    snake.velocity = {x: 0, y: -8};  
  }
};