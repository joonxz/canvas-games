// mapping
document.onkeydown = function(e) {
  switch (e.keyCode) {
    case 37:
        // left
        dir = "left";
        break;
    case 38:
        // up
        dir = "up";
        break;
    case 39:
        // right
        dir = "right";
        break;
    case 40:
        // down
        dir = "down";
        break;
    }
};

document.onkeyup = function(e) {
  switch (e.keyCode) {
    case 37:
        // left
        dir = "left";
        break;
    case 38:
        // up
        dir = "up";
        break;
    case 39:
        // right
        dir = "right";
        break;
    case 40:
        // down
        dir = "down";
        break;
    }
};

