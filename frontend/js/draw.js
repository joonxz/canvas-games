var draw = function () {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  
  // apply bg color 
  ctx.save();
  {
    ctx.fillStyle = bgColor;
    ctx.fillRect(0, 0, canvas.width, canvas.height)
  }
  ctx.restore();


  // grid for testing ------------
  ctx.save();
  {
    ctx.beginPath();

    for (var x = 0; x < canvas.width; x+=8) {
      ctx.moveTo(x + 0.5, 0);
      ctx.lineTo(x + 0.5, canvas.height);
    }

    for (var y = 0; y < canvas.height; y+=8) {
      ctx.moveTo(0, y + 0.5);
      ctx.lineTo(canvas.width, y + 0.5);
    }
    ctx.strokeStyle = gridColor;
    ctx.stroke();
  }
  ctx.restore();
  // ------------------------------

  // Text
  ctx.save();
  {
    ctx.font = "20px Arial";
    ctx.fillColor = scoreColor;
    ctx.fillText("Score: " + score,10,canvas.height - 10);
  }
  ctx.restore();

  for (var i = 0; i < entities.length; i++) {
    entities[i].draw(ctx);
  };

  if (gameover) {
    gameOverScreen();
    return;
  }
  // retrieve image data for color filters
  var canvasImageData = ctx.getImageData( 0, 0, canvas.width, canvas.height);
  var data = canvasImageData.data;

  
  // initialize Filters
  // grayscaleFilter(canvasImageData, data);

}