var Snake = function (x, y) {
  this.x = x;
  this.y = y;
  this.radius = 5;
  this.color = 'blue';
  this.dead = false;
}

Snake.prototype = new Circle();

Snake.prototype.update = function(time) {

};