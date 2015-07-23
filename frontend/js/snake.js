var Snake = function (x, y) {
  this.x = x;
  this.y = y;
  this.radius = 5;
  this.color = 'blue';
  this.dead = false;
  this.tail = [];
  this.velocity = {x: 1.0, y: 0.0};
};

Snake.prototype.draw = function (ctx) {
  ctx.save();
  {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI*2, true);
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

  this.x += this.velocity.x;
  this.y += this.velocity.y;
};

Snake.prototype.eat = function(pellet) {
  pellet.dead = true;
  this.tail.unshift(new Circle(this.x, this.y));
};

Snake.prototype.collidesWith = function(otherCircle) {
  var sumRadius = otherCircle.radius + this.radius;
  var distance = Math.sqrt(Math.pow(otherCircle.x - this.x, 2) + Math.pow(otherCircle.y - this.y, 2));
  return distance <= sumRadius;
};