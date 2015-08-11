var lastTime = 0;
var fps = 10;

var gameover = false;

var simulation = function (time) {
  if (time - lastTime > (1000 / fps)) {
    lastTime = time;

    if (gameover) {
      return;
    }

    for (var i = 0; i < entities.length; i++) {
      entities[i].update(time);
    }

    for (var i = 0; i < entities.length; i++) {
      var entity = entities[i];

      if (entity instanceof Pellets) { 
        if (snake.collidesWith(entity)) {
          snake.eat(entity);
          createPellet(); 
          score += 1;
          fps += 1;
          break;
        }
      }

      if(snake.collidesWithWall()) {
        gameover = true;
      }
    }



    entities = entities.filter(function (entity) {
      //only returns any entity within the array with the dead property false. 
      return (entity.dead === false);
    });    
  }

};