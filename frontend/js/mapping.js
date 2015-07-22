// mapping
document.onkeydown = function(e) {
  switch (e.keyCode) {
    case 37:
        // left
        if (dir != "right") {
           dir = "left"; 
        }
        break;
    case 38:
        // up
        if (dir != "down") {
           dir = "up"; 
        }
        break;
    case 39:
        // right
        if (dir != "left") {
           dir = "right"; 
        }
        break;
    case 40:
        // down
        if (dir != "up") {
           dir = "down"; 
        }
        break;
    }
};

document.onkeyup = function(e) {
  switch (e.keyCode) {
    case 37:
        // left
        if (dir != "right") {
           dir = "left"; 
        }
        break;
    case 38:
        // up
        if (dir != "down") {
           dir = "up"; 
        }
        break;
    case 39:
        // right
        if (dir != "left") {
           dir = "right"; 
        }
        break;
    case 40:
        // down
        if (dir != "up") {
           dir = "down"; 
        }
        break;
    }
};

