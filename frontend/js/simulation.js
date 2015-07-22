var simulation = function (time) {
  

  for (var i = 0; i < entities.length; i++) {
    entities[i].update(time);
  }

  for (var i = 0; i < entities.length; i++) {
    var entity = entities[i];

    if (entity instanceof Pellets) { 
      if (snake.collidesWith(entity)) {
        snake.color = 'orange';
      }
      if (!snake.collidesWith(entity)) {
        snake.color = 'blue';
      }
    }
  }
};