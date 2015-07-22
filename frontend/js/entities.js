var entities = [];

var snake = new Circle(100, 150);

var createPellet = function () {
  entities.push(new Pellets(Math.round((Math.random()*canvas.width)), Math.round((Math.random()*canvas.height)) ));
}

// var resetPellet = function () {
//   for (var i = 0; i < entities.length; i++) {
//     entities[i]
//   };
// }

console.log(entities);
var createSnake = function () {
  entities.push(snake);
}

createSnake();
createPellet(); 
