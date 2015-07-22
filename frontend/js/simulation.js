var simulation = function (time) {
  

  for (var i = 0; i < entities.length; i++) {
    entities[i].update(time);
  }

  for (var i = 0; i < entities.length; i++) {
    var entity = entities[i];

    if (entity instanceof Pellets) { 
      if (snake.collidesWith(entity)) {
        snake.color = 'orange';

        // sets dead property to true for removal on filter
        entity.dead = true;
        createPellet();
        score += 1;
        break;
      }
      
      if (!snake.collidesWith(entity)) {
        snake.color = 'blue';
      }
    }
  }

  entities = entities.filter(function (entity) {
    //only returns any entity within the array with the dead property false. 
    return (entity.dead === false);
  });
};