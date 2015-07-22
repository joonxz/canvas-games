var draw = function () {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  ctx.save();
  {
    ctx.font = "20px Arial";
    ctx.fillText("Score: " + score,10,canvas.height - 10);
  }
  ctx.restore();

  for (var i = 0; i < entities.length; i++) {
    entities[i].draw(ctx);
  };
}