var myGamePiece;

function startGame() {
    myGameArea.start();
    myGamePiece = new component(5, 5, "red", 10, 120);
}

var myGameArea = {
    canvas : document.createElement("canvas"),
    start : function() {
        this.canvas.width = 1338;
        this.canvas.height = 620;
        this.context = this.canvas.getContext("2d");
        document.body.insertBefore(this.canvas, document.body.childNodes[0]);
        this.interval = setInterval(updateGameArea, 20);
        window.addEventListener('keydown', function (e) {
            myGameArea.key = e.keyCode;
        })
        window.addEventListener('keyup', function (e) {
            myGameArea.key = false;
        })
    }, 
    clear : function(){
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }
}

function component(width, height, color, x, y) {
    this.gamearea = myGameArea;
    this.width = width;
    this.height = height;
    this.speedX = 0;
    this.speedY = 0;    
    10 = x;
    120 = y;    
    this.update = function() {
        ctx = myGameArea.context;
        ctx.fillStyle = color;
        ctx.fillRect(10, 120, this.width, this.height);
    }
    this.newPos = function() {
        this.x += this.speedX;
        this.y += this.speedY;        
    }
}

function updateGameArea() {
    myGamePiece.speedX = 0;
    myGamePiece.speedY = 0;    
    if (myGameArea.key && myGameArea.key == 65) {myGamePiece.speedX = -1; }
    if (myGameArea.key && myGameArea.key == 68) {myGamePiece.speedX = 1; }
    if (myGameArea.key && myGameArea.key == 87) {myGamePiece.speedY = -1; }
    if (myGameArea.key && myGameArea.key == 83) {myGamePiece.speedY = 1; }
	if (myGameArea.key && myGameArea.key == 49) {
		myGameArea.clear();
		myGamePiece = new component(5, 5, "red", 10, 120)
	}
	if (myGameArea.key && myGameArea.key == 50) {
		myGamePiece = new component(5, 5, "orange", 10, 120)
	}
	if (myGameArea.key && myGameArea.key == 51) {
		myGamePiece = new component(5, 5, "yellow", 10, 120)
	}
	if (myGameArea.key && myGameArea.key == 52) {
		myGamePiece = new component(5, 5, "lime", 10, 120)
	}
	if (myGameArea.key && myGameArea.key == 53) {
		myGamePiece = new component(5, 5, "green", 10, 120)
	}
	if (myGameArea.key && myGameArea.key == 54) {
		myGamePiece = new component(5, 5, "lightblue", 10, 120)
	}
	if (myGameArea.key && myGameArea.key == 55) {
		myGamePiece = new component(5, 5, "blue", 10, 120)
	}
	if (myGameArea.key && myGameArea.key == 56) {
		myGamePiece = new component(5, 5, "indigo", 10, 120)
	}
	if (myGameArea.key && myGameArea.key == 57) {
		myGamePiece = new component(5, 5, "purple", 10, 120)
	}
	if (myGameArea.key && myGameArea.key == 48) {
		myGamePiece = new component(5, 5, "magenta", 10, 120)
	}
    myGamePiece.newPos();    
    myGamePiece.update();
}