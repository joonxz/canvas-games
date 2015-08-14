var gameOverScreen = function () {

  ctx.save();
  {
    ctx.font = "50px roboto";
    ctx.strokeStyle = scoreColor;
    ctx.lineWidth = 3;
    ctx.fillStyle = "#C7F464";
    
    ctx.strokeText("GAMEOVER", canvas.width/8 + 15, canvas.height/2);
    ctx.fillText("GAMEOVER", canvas.width/8 + 15, canvas.height/2);  
  }
  ctx.restore();
 
  ctx.save();
  {
  
    ctx.font = "14px arial";
    ctx.fillStyle = scoreColor;

    ctx.strokeText("press SPACEBAR to begin", canvas.width/4 + 15, canvas.height/2 + 20);
    ctx.fillText("press SPACEBAR to begin", canvas.width/4 + 15, canvas.height/2 + 20);  
  }
  ctx.restore();
};