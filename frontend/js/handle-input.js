var handleInput = function () {

  if (dir === "right") {
    snake.x += speed;
  }
  if (dir === "left") {
    snake.x -= speed;  
  }
  if (dir === "down") {
    snake.y += speed;  
  }
  if (dir === "up") {
    snake.y -= speed;  
  }
};