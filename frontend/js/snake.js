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

