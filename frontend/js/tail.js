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
