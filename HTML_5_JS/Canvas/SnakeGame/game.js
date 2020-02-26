window.addEventListener("load", initEvents);

var canvas;
var ctx;
var snakeX = 10;
var snakeY = 10;
var move_x = 0;
var move_y = 0;
var raf;

function initEvents(){
    canvas = document.getElementById("canvas");
    ctx = canvas.getContext("2d");
    canvas.width = 800;
    canvas.height = 400;
    
    ctx.fillStyle = 'rgb(255,0,0)';
    raf = window.requestAnimationFrame(animateSnake);
}

function animateSnake(){
    ctx.clearRect(0,0, canvas.width, canvas.height);
    snakeX += move_x;
    snakeY += move_y;
    // console.log("moving");
    ctx.fillRect(snakeX,snakeY,20,20);
    document.getElementById("body").addEventListener("keyup", moveSnake);
    raf = window.requestAnimationFrame(animateSnake);
}

function moveSnake(){
    var key = event.keyCode;
    if(key == 39){
        move_x = 7;
        move_y = 0;
    }
    else if(key == 37){
        move_x = -7;
        move_y = 0;
    }
    else if(key == 38){
        move_x = 0;
        move_y = -7;
    }
    else if(key == 40){
        move_x = 0;
        move_y = 7;
    }
}

// setInterval(animateSnake, 50);