var canvas = document.getElementById('snake');
var ctx = canvas.getContext('2d');

// var dir = "right";
var spacebarPressed = false;

var inputState = {
  joystick: {x: 0.0, y: 0.0}
};

// color pallette
var scoreColor  = "#556270";
var gridColor   = "rgba(85,98,112,0.1)";
var snakeColor  = "#4ecdc4";
var pelletColor = "#c44d58";
var bgColor     = "#ffffff";

// set width and height of canvas
// var resizeCanvas = function () {
//   canvas.width = window.innerWidth;
//   canvas.height = window.innerHeight;
// };

// window.addEventListener('resize', resizeCanvas, false);

// resizeCanvas();
var Tail = function (x, y) {
  this.x = x;
  this.y = y;
  this.radius = 4;
  // this.color = '#fa1b88';
  this.dead = false;
}

Tail.prototype.update = function(time) {

};

Tail.prototype.draw = function(ctx) {
  ctx.save();
  {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI*2, true);
    ctx.closePath();
    ctx.fillStyle = snake.color;
    ctx.fill();
  }
  ctx.restore();
};

Tail.prototype.distanceTo = function(otherCircle) {
  return Math.sqrt(Math.pow(otherCircle.x - this.x, 2) + Math.pow(otherCircle.y - this.y, 2));
};

var Snake = function (x, y) {
  this.x = x;
  this.y = y;
  this.radius = 4;
  this.color = snakeColor;
  this.dead = false;
  this.tail = [];

  // create default tail -----
  for (var i = 0; i < 5; i++) {
    this.eat({});  
  };
  // -----

  this.direction = {x: 1.0, y: 0.0};
  this.speed     = 8;
};

Snake.prototype.draw = function (ctx) {
  ctx.save();
  {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius + 1, 0, Math.PI*2, true);
    ctx.closePath();
    ctx.fillStyle = this.color;
    ctx.fill();
  }
  ctx.restore();

  for (var i = 0; i < this.tail.length; i++) {
    this.tail[i].draw(ctx);
  }
};

Snake.prototype.update = function(time) {
  for (var i = this.tail.length - 1; i >= 1; i-=1) {
    this.tail[i].x = this.tail[i-1].x;
    this.tail[i].y = this.tail[i-1].y;
  }

  if (this.tail.length > 0 && this.tail[0].distanceTo(this) > 0) {
    this.tail[0].x = this.x;
    this.tail[0].y = this.y;
  }

  var velocity = {
    x: this.direction.x * this.speed,
    y: this.direction.y * this.speed
  };

  this.x += velocity.x;
  this.y += velocity.y;
};

Snake.prototype.eat = function(pellet) {
  pellet.dead = true;
  this.tail.unshift(new Tail(this.x, this.y));
};

Snake.prototype.collidesWith = function(otherCircle) {
  var sumRadius = otherCircle.radius + this.radius;
  var distance = Math.sqrt(Math.pow(otherCircle.x - this.x, 2) + Math.pow(otherCircle.y - this.y, 2));
  return distance < sumRadius;
};

Snake.prototype.collidesWithWall = function() {
  if (this.x <= this.radius) {
    return true;
  }
  if (this.x >= canvas.width - this.radius) {
    return true;
  }
  if (this.y <= this.radius) {
    return true;
  }
  if (this.y >= canvas.height - this.radius) {
    return true;
  }
};

Snake.prototype.collidesWithSelf = function() {
  for (var i = 0; i < this.tail.length; i++) {
    if (this.x === this.tail[i].x && this.y === this.tail[i].y) {
      return true;
    }
  }
  
};


var Pellets = function (x, y) {
  this.x = x;
  this.y = y;
  this.radius = 4;
  this.dead = false;
  this.color = pelletColor;
}

Pellets.prototype.draw = function (ctx) {
  ctx.save();
  {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI*2, true);
    ctx.closePath();
    ctx.fillStyle = this.color;
    ctx.fill();
  }
  ctx.restore();
};

Pellets.prototype.update = function(time) {

};
var entities = [];
var snake;
var dir;
var score; 

var createPellet = function () {
  var gridSize = 8;

  var pelletX = gridSize + Math.round((Math.random() * (canvas.width  - gridSize * 2)) / gridSize) * gridSize;
  var pelletY = gridSize + Math.round((Math.random() * (canvas.height - gridSize * 2)) / gridSize) * gridSize;

  // set pellet with random x and y
  entities.push(new Pellets(pelletX, pelletY));
};

var resetGame = function () {
  entities = [];

  snake = new Snake(80, 120);
  entities.push(snake);
  createPellet();

  dir = "right";
  score = 0; 
};

resetGame();


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
var gameOverScreen = function () {

  ctx.save();
  {
    ctx.font = "50px roboto";
    ctx.strokeStyle = scoreColor;
    ctx.lineWidth = 3;
    ctx.fillStyle = "#C7F464";
    
    ctx.strokeText("GAMEOVER", canvas.width/8 + 15, canvas.height/2);
    ctx.fillText("GAMEOVER", canvas.width/8 + 15, canvas.height/2);  
  }
  ctx.restore();
 
  ctx.save();
  {
  
    ctx.font = "14px arial";
    ctx.fillStyle = scoreColor;

    ctx.strokeText("press SPACEBAR to begin", canvas.width/4 + 15, canvas.height/2 + 20);
    ctx.fillText("press SPACEBAR to begin", canvas.width/4 + 15, canvas.height/2 + 20);  
  }
  ctx.restore();
};
// mapping
document.onkeydown = function(e) {
  switch (e.keyCode) {
    case 37:
        // left
        if (dir != "right") {
           dir = "left"; 
        }
        break;
    case 38:
        // up
        if (dir != "down") {
           dir = "up"; 
        }
        break;
    case 39:
        // right
        if (dir != "left") {
           dir = "right"; 
        }
        break;
    case 40:
        // down
        if (dir != "up") {
           dir = "down"; 
        }
        break;
    case 32:
        break;
    }

};

document.onkeyup = function(e) {
  switch (e.keyCode) {
    case 37:
        // left
        if (dir != "right") {
           dir = "left"; 
        }
        break;
    case 38:
        // up
        if (dir != "down") {
           dir = "up"; 
        }
        break;
    case 39:
        // right
        if (dir != "left") {
           dir = "right"; 
        }
        break;
    case 40:
        // down
        if (dir != "up") {
           dir = "down"; 
        }
        break;
    case 32:
        // spacebar
        if (gameover === true) {
            resetGame();
           gameover = false; 
        }
        break;
    }
};


var lastTime = 0;
var fps = 10;

var gameover = false;

var simulation = function (time) {
  if (time - lastTime > (1000 / fps)) {
    lastTime = time;

    if (gameover) {
      gameOverScreen();
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
          fps += 0.5;
          break;
        }
      }

      if (snake.collidesWithWall()) {
        gameover = true;
      }

      if (snake.collidesWithSelf()) {
        gameover = true;
      }
    }

    entities = entities.filter(function (entity) {
      //only returns any entity within the array with the dead property false. 
      return (entity.dead === false);
    });    
  }

};
var draw = function () {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  
  // apply bg color 
  ctx.save();
  {
    ctx.fillStyle = bgColor;
    ctx.fillRect(0, 0, canvas.width, canvas.height)
  }
  ctx.restore();


  // grid for testing ------------
  ctx.save();
  {
    ctx.beginPath();

    for (var x = 0; x < canvas.width; x+=8) {
      ctx.moveTo(x + 0.5, 0);
      ctx.lineTo(x + 0.5, canvas.height);
    }

    for (var y = 0; y < canvas.height; y+=8) {
      ctx.moveTo(0, y + 0.5);
      ctx.lineTo(canvas.width, y + 0.5);
    }
    ctx.strokeStyle = gridColor;
    ctx.stroke();
  }
  ctx.restore();
  // ------------------------------

  // Text
  ctx.save();
  {
    ctx.font = "20px Arial";
    ctx.fillColor = scoreColor;
    ctx.fillText("Score: " + score,10,canvas.height - 10);
  }
  ctx.restore();

  for (var i = 0; i < entities.length; i++) {
    entities[i].draw(ctx);
  };

  if (gameover) {
    gameOverScreen();
    return;
  }
  // retrieve image data for color filters
  var canvasImageData = ctx.getImageData( 0, 0, canvas.width, canvas.height);
  var data = canvasImageData.data;

  
  // initialize Filters
  // grayscaleFilter(canvasImageData, data);

}
var grayscaleFilter = function(imgdata, data) {
  for (var i = 0; i < data.length; i += 4) {
    var avg = (data[i + 0] + data[i +1] + data[i +2]) / 3;
    data[i + 0] = avg; // red
    data[i + 1] = avg; // green
    data[i + 2] = avg; // blue
    // data[i + 3] = 255;
  }
  ctx.putImageData(imgdata, 0, 0);
};

// doFrame function name is game loop convention name
var doFrame = function (time) {
  handleInput();
  simulation(time);
  draw();

  // loop request
  window.requestAnimationFrame(doFrame);
};

// initial request
window.requestAnimationFrame(doFrame);