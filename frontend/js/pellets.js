var Pellets = function (x, y) {
  this.x = x;
  this.y = y;
  this.radius = 4;
  this.dead = false;
  this.color = 'black';
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