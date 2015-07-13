var draw = function () {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  ctx.save();
  {
    ctx.font = "20px Arial";
    ctx.fillText("Hello World",10,50);
  }
  ctx.restore();
}