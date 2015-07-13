var Pellets = function (x, y) {
  this.x = x;
  this.y = y;
  this.radius = 8;
  this.color = 'black';
}

Pellets.prototype = new Circle();