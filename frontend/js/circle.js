var Circle = function (x, y) {
  this.x = x;
  this.y = y;
  this.radius = 20;
  this.color = 'green';
}

Circle.prototype.update = function(time) {
  
};

Circle.prototype.draw = function(ctx) {
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