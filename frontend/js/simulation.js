var simulation = function (time) {
  

  for (var i = 0; i < entities.length; i++) {
    entities[i].update(time);
  }

  for (var i = 0; i < entities.length; i++) {
    var entity = entities[i];
    console.log(entity);

    if (entity instanceof Pellets) { 
      if (snake.collidesWith(entity)) {
        snake.color = 'orange';
        
        // remove current pellet and create a new one
        entities.splice(1, 1);
        createPellet();
        break;
      }
      if (!snake.collidesWith(entity)) {
        snake.color = 'blue';
      }
    }
  }
};