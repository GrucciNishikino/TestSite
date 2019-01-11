//Declares all necessary variables.
var myGamePiece, myGamePiece1, myGamePiece2, enemyGamePiece1, enemyGamePiece2, enemyGamePiece3, enemyGamePiece4, enemyGamePiece5, enemyGamePiece6, enemyGamePiece7, enemyGamePiece8, escapeGamePiece;
var mySound;
var myScore;
var myMusic;
var i = 1;
var testPlayer1Collide = 0;
var testPlayer2Collide = 0;
var testPlayer1Win = 0;
var testPlayer2Win = 0;
var RAND1;
var RAND2;
var RAND3;
var RAND4;
var RAND5;
var RAND6;
var RAND7;
var RAND8;
var gameAreaSpec = 0;
var bgReady = false;
var bgImage = new Image();
bgImage.onload = function () {
	bgReady = true;
};
bgImage.src = "background.png";
var canvas = document.getElementById;
//Allows the sleep function.
function sleep(milliseconds) {
  var start = new Date().getTime();
  for (var i = 0; i < 1e7; i += 1) {
    if ((new Date().getTime() - start) > milliseconds){
      break;
    }
  }
}


//Creates all components and sound.
//Add new gamemode by adding new startgame"x" function. See lines 161, 254, and 709.
function startGame() {
	gameAreaSpec = 0;
	enemyGamePiece1 = new component(30,30, "#000080", 694.5, 310.5);
	enemyGamePiece2 = new component(30,30, "#000080", 1328, 120);
	enemyGamePiece3 = new component(30,30, "#000080", 1328, 120);
	enemyGamePiece4 = new component(30,30, "#000080", 1328, 120);
	enemyGamePiece5 = new component(30,30, "#000080",1328 ,120);
	enemyGamePiece6 = new component(30,30, "#ffbf00",694.5 ,310.5);
	enemyGamePiece7 = new component(30,30, "purple",694.5 ,310.5);
	enemyGamePiece8 = new component(30,30, "#decade",694.6 ,310.5);
	escapeGamePiece = new component(30,30, "#98FB98",694.5 ,310.5);
	myGamePiece = new component(30,30, "black", 10, 500);
	myScore = new component("30px", "Consolas", "black", 280, 40, "text");
    myGameArea.start();
	ctx.drawImage(bgImage, 0, 0);
	mySound = new sound("nope.mp3");
    myMusic = new sound("bgm.mp3");
    myMusic.play();
}

function startGame2() {
	gameAreaSpec = 1;
	enemyGamePiece1 = new component(30,30, "#000080", 694.5, 310.5);
	enemyGamePiece2 = new component(30,30, "#000080", 1328, 120);
	enemyGamePiece3 = new component(30,30, "#000080", 1328, 120);
	enemyGamePiece4 = new component(30,30, "#000080", 1328, 120);
	enemyGamePiece5 = new component(30,30, "#000080",1328 ,120);
	enemyGamePiece6 = new component(30,30, "#ffbf00",694.5 ,720);
	escapeGamePiece = new component(30,30, "#98FB98",694.5 ,310.5);
	myGamePiece = new component(30,30, "black", 694.5, 0);
	myScore = new component("30px", "Consolas", "black", 280, 40, "text");
    myGameArea2.start();
	ctx.drawImage(bgImage, 0, 0);
	mySound = new sound("nope.mp3");
    myMusic = new sound("bgm.mp3");
    myMusic.play();
}

function startGame3() {
	gameAreaSpec = 2;
	enemyGamePiece1 = new component(30,30, "#000080", 694.5, 310.5);
	enemyGamePiece2 = new component(30,30, "#000080", 1328, 120);
	enemyGamePiece3 = new component(30,30, "#000080", 1328, 120);
	enemyGamePiece4 = new component(30,30, "#000080", 1328, 120);
	enemyGamePiece5 = new component(30,30, "#000080", 1328, 120);
	enemyGamePiece6 = new component(30,30, "#ffbf00", 694.5, 310.5);
	escapeGamePiece = new component(30,30, "#98FB98", 694.5, 310.5);
	myGamePiece = new component(30,30, "black", 10, 500);
	myScore = new component("30px", "Consolas", "black", 280, 40, "text");
    myGameArea3.start();
	ctx.drawImage(bgImage, 0, 0);
	mySound = new sound("nope.mp3");
    myMusic = new sound("bgm.mp3");
    myMusic.play();
}

function startGame4() {
	gameAreaSpec = 3;
	enemyGamePiece1 = new component(30,30, "#000080", 1328, 120);
	enemyGamePiece2 = new component(30,30, "#000080", 1328, 120);
	enemyGamePiece3 = new component(30,30, "#000080", 1328, 120);
	enemyGamePiece4 = new component(30,30, "#000080", 1328, 120);
	enemyGamePiece5 = new component(30,30, "#000080",1328 ,120);
	enemyGamePiece6 = new component(30,30, "#ffbf00",1328 ,120);
	escapeGamePiece = new component(30,30, "#98FB98",1328 ,120);
	myGamePiece = new component(30,30, "black", 695, 360);
	myScore = new component("30px", "Consolas", "black", 280, 40, "text");
    myGameArea4.start();
	ctx.drawImage(bgImage, 0, 0);
	mySound = new sound("nope.mp3");
    myMusic = new sound("bgm3.mp3");
    myMusic.play();
}

function startGame5() {
	gameAreaSpec = 4;
	enemyGamePiece1 = new component(30,30, "#000080", 694.5, 310.5);
	enemyGamePiece2 = new component(30,30, "#000080", 1328, 120);
	enemyGamePiece3 = new component(30,30, "#000080", 1328, 120);
	enemyGamePiece4 = new component(30,30, "#000080", 1328, 120);
	enemyGamePiece5 = new component(30,30, "#000080",1328 ,120);
	enemyGamePiece6 = new component(30,30, "#ffbf00",694.5 ,310.5);
	enemyGamePiece7 = new component(30,30, "purple",694.5 ,310.5);
	enemyGamePiece8 = new component(30,30, "#decade",694.6 ,310.5);
	escapeGamePiece = new component(30,30, "#98FB98",694.5 ,310.5);
	myGamePiece = new component(30,30, "black", 10, 500);
	myScore = new component("30px", "Consolas", "black", 280, 40, "text");
    myGameArea5.start();
	ctx.drawImage(bgImage, 0, 0);
	mySound = new sound("nope.mp3");
    myMusic = new sound("bgm2.mp3");
    myMusic.play();
}
function endlessStart() {
	gameAreaSpec = 5;
	enemyGamePiece1 = new component(30,30, "#000080", 694.5, 310.5);
	enemyGamePiece2 = new component(30,30, "#000080", 1328, 120);
	enemyGamePiece3 = new component(30,30, "#000080", 1328, 120);
	enemyGamePiece4 = new component(30,30, "#000080", 1328, 120);
	enemyGamePiece5 = new component(30,30, "#000080",1328 ,120);
	enemyGamePiece6 = new component(30,30, "#ffbf00",694.5 ,310.5);
	enemyGamePiece7 = new component(30,30, "purple",694.5 ,310.5);
	enemyGamePiece8 = new component(30,30, "#decade",694.6 ,310.5);
	myGamePiece = new component(30,30, "black", 10, 500);
	myScore = new component("30px", "Consolas", "black", 280, 40, "text");
    myGameArea6.start();
	ctx.drawImage(bgImage, 0, 0);
	mySound = new sound("nope.mp3");
    myMusic = new sound("bgm4.mp3");
    myMusic.play();
}
function jacksStart() {
	gameAreaSpec = 6;
	enemyGamePiece1 = new component(30,30, "#decade",100 ,100);
	enemyGamePiece2 = new component(30,30, "#decade",0 ,360);
	enemyGamePiece3 = new component(30,30, "#decade",100 ,620);
	enemyGamePiece4 = new component(30,30, "#decade",669 ,720);
	enemyGamePiece5 = new component(30,30, "#decade",1238 ,620);
	enemyGamePiece6 = new component(30,30, "#decade",1338 ,360);
	enemyGamePiece7 = new component(30,30, "#decade",1238 ,100);
	enemyGamePiece8 = new component(30,30, "#decade",669 ,0);
	escapeGamePiece = new component(30,30,"#98FB98",1138 ,200);
	myGamePiece = new component(30,30, "black", 619, 310);
	myScore = new component("30px", "Consolas", "black", 280, 40, "text");
	myGameArea7.start();
	ctx.drawImage(bgImage, 0, 0);
	mySound = new sound("nope.mp3");
	myMusic = new sound("bgm5.mp3")
	myMusic.play();
}
function instadeathStart() {
	gameAreaSpec = 7;
	enemyGamePiece1 = new component(30,30, "#000080",605 ,265);
	enemyGamePiece2 = new component(30,30, "#000080",918 ,140);
	enemyGamePiece3 = new component(30,30, "#000080",415 ,158);
	enemyGamePiece4 = new component(30,30, "#000080",197 ,48);
	enemyGamePiece5 = new component(30,30, "#000080",103 ,306);
	enemyGamePiece6 = new component(30,30, "#000080",509 ,78);
	enemyGamePiece7 = new component(30,30, "#000080",1238 ,519);
	enemyGamePiece8 = new component(30,30, "#decade",1010 ,657);
	escapeGamePiece = new component(30,30,"#98FB98",1138 ,200);
	myGamePiece = new component(30,30, "black", 10, 500);
	myScore = new component("30px", "Consolas", "black", 280, 40, "text");
	myGameArea8.start();
	ctx.drawImage(bgImage, 0, 0);
	mySound = new sound("nope.mp3");
	myMusic = new sound("bgm6.mp3");
	myMusic.play();
}
function vsStart() {
	gameAreaSpec = 8;
	enemyGamePiece1 = new component(30,30, "#000080",1121,50);
	enemyGamePiece2 = new component(30,30, "#000080",1299,190);
	escapeGamePiece = new component(30,30, "#98FB98",699,0);
	myGamePiece1 = new component(30,30, "black",50,670);
	myGamePiece2 = new component(30,30, "#ffbf00",1213,111);
	myScore = new component("30px", "Consolas", "black", 280, 40, "text");
	myGameArea9.start();
	mySound = new sound("nope.mp3");
	myMusic = new sound("bgm7.mp3");
	myMusic.play();
}
function coOpStart() {
	gameAreaSpec = 9;
	testPlayer1Collide = 0;
	testPlayer2Collide = 0;
	testPlayer1Win = 0;
	testPlayer2Win = 0;
	enemyGamePiece1 = new component(30,30, "#000080",1121,50);
	enemyGamePiece2 = new component(30,30, "#000080",1299,190);
	enemyGamePiece3 = new component(30,30, "#000080",1121,50);
	enemyGamePiece4 = new component(30,30, "#000080",1299,190);
	escapeGamePiece = new component(30,30, "#98FB98",699,0);
	myGamePiece1 = new component(30,30, "black",50,670);
	myGamePiece2 = new component(30,30, "green",100,620);
	myScore = new component("30px", "Consolas", "black", 280, 40, "text");
	myGameArea10.start();
	mySound = new sound("nope.mp3");
	myMusic = new sound("bgm7.mp3");
	myMusic.play();
}
function surviveCoOpStart() {
	gameAreaSpec = 10;
	testPlayer1Collide = 0;
	testPlayer2Collide = 0;
	enemyGamePiece1 = new component(30,30, "#000080",1121,50);
	enemyGamePiece2 = new component(30,30, "#000080",1299,190);
	enemyGamePiece3 = new component(30,30, "#000080",1121,50);
	enemyGamePiece4 = new component(30,30, "#000080",1299,190);
	escapeGamePiece = new component(30,30, "#98FB98",699,0);
	myGamePiece1 = new component(30,30, "black",50,670);
	myGamePiece2 = new component(30,30, "green",66.5,111);
	myScore = new component("30px", "Consolas", "black", 280, 40, "text");
	myGameArea11.start();
	mySound = new sound("nope.mp3");
	myMusic = new sound("bgm7.mp3");
	myMusic.play();
}
function ultimateStart() {
	gameAreaSpec = 11;
	enemyGamePiece1 = new component(30,30, "#000080",605 ,265);
	enemyGamePiece2 = new component(30,30, "#000080",918 ,140);
	enemyGamePiece3 = new component(30,30, "#000080",415 ,158);
	enemyGamePiece4 = new component(30,30, "#000080",297 ,48);
	enemyGamePiece5 = new component(30,30, "#000080",503 ,306);
	enemyGamePiece6 = new component(30,30, "#000080",509 ,78);
	enemyGamePiece7 = new component(30,30, "#000080",1238 ,519);
	enemyGamePiece8 = new component(30,30, "#decade",1010 ,657);
	enemyGamePiece9 = new component(30,30, "white",1010,657);
	escapeGamePiece = new component(30,30,"#98FB98",1138 ,200);
	myGamePiece = new component(30,30, "black", 100, 500);
	myScore = new component("30px", "Consolas", "black", 280, 40, "text");
	myGameArea12.start();
	ctx.drawImage(bgImage, 0, 0);
	mySound = new sound("nope.mp3");
	myMusic = new sound("bgm8.mp3");
	myMusic.play();
}
//Throws image when game is won.
function gameWin() {
	clearInterval(myGameArea.interval);
	myMusic.stop();
	myGameArea.clear();
	var img = document.getElementById("win");
	ctx.drawImage(img, 436, 140);
	ctx.drawImage(img, 566, 140);
	ctx.drawImage(img, 696, 140);
	ctx.font = "30px Lucida Console";
	ctx.fillStyle="#000050";
	ctx.fillText("You",619,330);
	ctx.fillText("Win!",619,350);	
}
function gameWin2() {
	clearInterval(myGameArea2.interval);
	myMusic.stop();
	myGameArea2.clear();
	var img = document.getElementById("win");
	ctx2.drawImage(img, 436, 140);
	ctx2.drawImage(img, 566, 140);
	ctx2.drawImage(img, 696, 140);
	ctx2.font = "30px Lucida Console";
	ctx2.fillStyle="#000050";
	ctx2.fillText("You",619,330);
	ctx2.fillText("Win!",619,350);	
}
function gameWin3() {
	clearInterval(myGameArea3.interval);
	myMusic.stop();
	myGameArea3.clear();
	var img = document.getElementById("win");
	ctx3.drawImage(img, 436, 140);
	ctx3.drawImage(img, 566, 140);
	ctx3.drawImage(img, 696, 140);
	ctx3.font = "30px Lucida Console";
	ctx3.fillStyle="#000050";
	ctx3.fillText("You",619,330);
	ctx3.fillText("Win!",619,350);
}
function gameWin4() {
	clearInterval(myGameArea4.interval);
	myMusic.stop();
	myGameArea4.clear();
	var img = document.getElementById("win");
	ctx4.drawImage(img, 436, 140);
	ctx4.drawImage(img, 566, 140);
	ctx4.drawImage(img, 696, 140);
	ctx4.font = "30px Lucida Console";
	ctx4.fillStyle="#000050";
	ctx4.fillText("You",619,330);
	ctx4.fillText("Win!",619,350);
}
function gameWin5() {
	clearInterval(myGameArea5.interval);
	myMusic.stop();
	myGameArea5.clear();
	var img = document.getElementById("win");
	ctx5.drawImage(img, 436, 140);
	ctx5.drawImage(img, 566, 140);
	ctx5.drawImage(img, 696, 140);
	ctx5.font = "30px Lucida Console";
	ctx5.fillStyle="#000050";
	ctx5.fillText("You",619,330);
	ctx5.fillText("Win!",619,350);
}
//There is no 6, 7 is used to avoid confusion for the programmer. Please ignore this.
function gameWin7() {
	clearInterval(myGameArea7.interval);
	myMusic.stop();
	myGameArea7.clear();
	var img = document.getElementById("win");
	ctx7.drawImage(img, 436, 140);
	ctx7.drawImage(img, 566, 140);
	ctx7.drawImage(img, 696, 140);
	ctx7.font = "30px Lucida Console";
	ctx7.fillStyle="#000050";
	ctx7.fillText("You",619,330);
	ctx7.fillText("Win!",619,350);
}
function gameWin8() {
	clearInterval(myGameArea8.interval);
	myMusic.stop();
	myGameArea8.clear();
	var img = document.getElementById("win");
	ctx8.drawImage(img, 436, 140);
	ctx8.drawImage(img, 566, 140);
	ctx8.drawImage(img, 696, 140);
	ctx8.font = "30px Lucida Console";
	ctx8.fillStyle="#000050";
	ctx8.fillText("You",619,330);
	ctx8.fillText("Win!",619,350);
	ctx8.font = "12px Lucida Console";
	ctx8.fillStyle="black";
	ctx8.fillText("The code is 8XhFgN",10,570)
}
function gameWin9() {
	clearInterval(myGameArea9.interval);
	myMusic.stop();
	myGameArea9.clear();
	var img = document.getElementById("win");
	ctx9.drawImage(img, 436, 140);
	ctx9.drawImage(img, 566, 140);
	ctx9.drawImage(img, 696, 140);
	ctx9.font = "30px Lucida Console";
	ctx9.fillStyle="#000050";
	ctx9.fillText("P1",619,330);
	ctx9.fillText("Wins!",619,350);
}
function gameWin10() {
	clearInterval(myGameArea10.interval);
	myMusic.stop();
	myGameArea10.clear();
	var img = document.getElementById("win");
	ctx10.drawImage(img, 436, 140);
	ctx10.drawImage(img, 566, 140);
	ctx10.drawImage(img, 696, 140);
	ctx10.font = "30px Lucida Console";
	ctx10.fillStyle="#000050";
	ctx10.fillText("You",619,330);
	ctx10.fillText("Win!",619,350);
}
function gameWin12() {
	clearInterval(myGameArea12.interval);
	myMusic.stop();
	myGameArea12.clear();
	var img = document.getElementById("win");
	ctx12.drawImage(img, 436, 140);
	ctx12.drawImage(img, 566, 140);
	ctx12.drawImage(img, 696, 140);
	ctx12.font = "30px Lucida Console";
	ctx12.fillStyle="#000050";
	ctx12.fillText("You",619,330);
	ctx12.fillText("Win!",619,350);
	ctx12.fillText("Because you lived long enough to earn " + myGameArea12.frameNo + " points",225,100);
}
//Throws image and plays sound when the game ends.
function gameOver() {
	clearInterval(myGameArea.interval);
	myGameArea.clear();
	var img = document.getElementById("gameover");
	ctx.drawImage(gameover, 450, 140);
	ctx.font = "30px Lucida Console";
	ctx.fillStyle="#500000";
	ctx.fillText("Game",619,330);
	ctx.fillText("Over",619,350);
}
//Throws image and plays sound when the game ends.
function gameOver2() {
	clearInterval(myGameArea2.interval);
	myGameArea2.clear();
	var img = document.getElementById("gameover");
	ctx2.drawImage(gameover, 450, 140);
	ctx2.font = "30px Lucida Console";
	ctx2.fillStyle="#500000";
	ctx2.fillText("Game",619,330);
	ctx2.fillText("Over",619,350);
}
function gameOver3() {
	clearInterval(myGameArea3.interval);
	myGameArea3.clear();
	var img = document.getElementById("gameover");
	ctx3.drawImage(gameover, 450, 140);
	ctx3.font = "30px Lucida Console";
	ctx3.fillStyle="#500000";
	ctx3.fillText("Game",619,330);
	ctx3.fillText("Over",619,350);
}
function gameOver4() {
	clearInterval(myGameArea4.interval);
	myGameArea4.clear();
	var img = document.getElementById("gameover");
	ctx4.drawImage(gameover, 450, 140);
	ctx4.font = "30px Lucida Console";
	ctx4.fillStyle="#500000";
	ctx4.fillText("Game",619,330);
	ctx4.fillText("Over",619,350);
}
function gameOver5() {
	clearInterval(myGameArea5.interval);
	myGameArea5.clear();
	var img = document.getElementById("gameover");
	ctx5.drawImage(gameover, 450, 140);
	ctx5.font = "30px Lucida Console";
	ctx5.fillStyle="#500000";
	ctx5.fillText("Game",619,330);
	ctx5.fillText("Over",619,350);
}

function gameOver6() {
	clearInterval(myGameArea6.interval);
	myGameArea6.clear();
	var img = document.getElementById("gameover");
	ctx6.drawImage(gameover, 450, 140);
	ctx6.font = "30px Lucida Console";
	ctx6.fillStyle="#500000";
	ctx6.fillText("Game",619,330);
	ctx6.fillText("Over",619,350);
	ctx6.fillText("You lived long enough to earn " + myGameArea6.frameNo + " points",275,100);
}
function gameOver7() {
	clearInterval(myGameArea7.interval);
	myGameArea7.clear();
	var img = document.getElementById("gameover");
	ctx7.drawImage(gameover, 450, 140);
	ctx7.font = "30px Lucida Console";
	ctx7.fillStyle="#500000";
	ctx7.fillText("Game",619,330);
	ctx7.fillText("Over",619,350);
}
function gameOver8() {
	clearInterval(myGameArea8.interval);
	myGameArea8.clear();
	var img = document.getElementById("gameover");
	ctx8.drawImage(gameover, 450, 140);
	ctx8.font = "30px Lucida Console";
	ctx8.fillStyle="#500000";
	ctx8.fillText("Game",619,330);
	ctx8.fillText("Over",619,350);
}
function gameOver9() {
	clearInterval(myGameArea9.interval);
	myGameArea9.clear();
	var img = document.getElementById("gameover");
	ctx9.drawImage(gameover, 450, 140);
	ctx9.font = "30px Lucida Console";
	ctx9.fillStyle="#500000";
	ctx9.fillText("P2",619,330);
	ctx9.fillText("Wins!",619,350);
}
function gameOver10() {
	clearInterval(myGameArea10.interval);
	myGameArea10.clear();
	var img = document.getElementById("gameover");
	ctx10.drawImage(gameover, 450, 140);
	ctx10.font = "30px Lucida Console";
	ctx10.fillStyle="#500000";
	ctx10.fillText("Game",619,330);
	ctx10.fillText("Over",619,350);
}
function gameOver10a() {
	clearInterval(myGameArea10.interval);
	myGameArea10.clear();
	var img = document.getElementById("gameover");
	ctx10.drawImage(gameover, 450, 140);
	ctx10.font = "30px Lucida Console";
	ctx10.fillStyle="#500000";
	ctx10.fillText("P1 Game",619,330);
	ctx10.fillText("Over",619,350);
	var img = document.getElementById("win")
	ctx10.drawImage(img, 936, 240);
}
function gameOver10b() {
	clearInterval(myGameArea10.interval);
	myGameArea10.clear();
	var img = document.getElementById("gameover");
	ctx10.drawImage(gameover, 450, 140);
	ctx10.font = "30px Lucida Console";
	ctx10.fillStyle="#500000";
	ctx10.fillText("P2 Game",619,330);
	ctx10.fillText("Over",619,350);
	var img = document.getElementById("win")
	ctx10.drawImage(img, 136, 240);
}
function gameOver11() {
	clearInterval(myGameArea11.interval);
	myGameArea11.clear();
	var img = document.getElementById("gameover");
	ctx11.drawImage(gameover, 450, 140);
	ctx11.font = "30px Lucida Console";
	ctx11.fillStyle="#500000";
	ctx11.fillText("Game",619,330);
	ctx11.fillText("Over",619,350);
	ctx11.fillText("You lived long enough to earn " + myGameArea11.frameNo + " points",275,100);
}
function gameOver12() {
	if (myGameArea12.frameNo < 3000) {
		clearInterval(myGameArea12.interval);
		myGameArea12.clear();
		var img = document.getElementById("gameover");
		ctx12.drawImage(gameover, 450, 140);
		ctx12.font = "30px Lucida Console";
		ctx12.fillStyle="#500000";
		ctx12.fillText("Game",619,330);
		ctx12.fillText("Over",619,350);
		ctx12.fillText("You lived long enough to earn " + myGameArea12.frameNo + " points",275,100);
	} else {
		gameWin12();
	}
}
//Sound Handler to allow sound to play.
function sound(src) {
    this.sound = document.createElement("audio");
    this.sound.src = src;
    this.sound.setAttribute("preload", "auto");
    this.sound.setAttribute("controls", "none");
    this.sound.style.display = "none";
    document.body.appendChild(this.sound);
    this.play = function(){
        this.sound.play();
    };
    this.stop = function(){
        this.sound.pause();
    };
}


//Creates Easy Mode canvas
var myGameArea2 = {
	canvas : document.getElementById("gameBoard"),
    start : function() {
        this.canvas.width = 1338;
        this.canvas.height = 620;
		this.canvas.style.left = "100px";
		this.canvas.style.top = "500px";
        this.context = this.canvas.getContext("2d");
        document.body.insertBefore(this.canvas, document.body.childNodes[0]);
		this.frameNo = 0;
		this.interval = setInterval(updateGameArea2, 20);
		window.scrollTo(0, 0);
        window.addEventListener('keydown', function (e) {
            myGameArea2.keys = (myGameArea2.keys || []);
            myGameArea2.keys[e.keyCode] = (e.type == "keydown");
        });
        window.addEventListener('keyup', function (e) {
            myGameArea2.keys[e.keyCode] = (e.type == "keydown");            
        });
    },
//Clear function for each frame to make sure no sprite trails are created.
	clear : function() {
		this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
	},
	stop : function() {
		clearInterval(this.interval);
		gameOver2();
	}
};
var myGameArea10 = {
	canvas : document.getElementById("gameBoard"),
    start : function() {
        this.canvas.width = 1338;
        this.canvas.height = 620;
		this.canvas.style.left = "100px";
		this.canvas.style.top = "500px";
        this.context = this.canvas.getContext("2d");
        document.body.insertBefore(this.canvas, document.body.childNodes[0]);
		this.frameNo = 0;
		this.interval = setInterval(updateGameArea10, 20);
		window.scrollTo(0, 0);
        window.addEventListener('keydown', function (e) {
            myGameArea10.keys = (myGameArea10.keys || []);
            myGameArea10.keys[e.keyCode] = (e.type == "keydown");
        });
        window.addEventListener('keyup', function (e) {
            myGameArea10.keys[e.keyCode] = (e.type == "keydown");            
        });
    },
//Clear function for each frame to make sure no sprite trails are created.
	clear : function() {
		this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
	},
	stop : function() {
		clearInterval(this.interval);
		gameOver10();
	}
};
var myGameArea11 = {
	canvas : document.getElementById("gameBoard"),
    start : function() {
        this.canvas.width = 1338;
        this.canvas.height = 620;
		this.canvas.style.left = "100px";
		this.canvas.style.top = "500px";
        this.context = this.canvas.getContext("2d");
        document.body.insertBefore(this.canvas, document.body.childNodes[0]);
		this.frameNo = 0;
		this.interval = setInterval(updateGameArea11, 20);
		window.scrollTo(0, 0);
        window.addEventListener('keydown', function (e) {
            myGameArea11.keys = (myGameArea11.keys || []);
            myGameArea11.keys[e.keyCode] = (e.type == "keydown");
        });
        window.addEventListener('keyup', function (e) {
            myGameArea11.keys[e.keyCode] = (e.type == "keydown");            
        });
    },
//Clear function for each frame to make sure no sprite trails are created.
	clear : function() {
		this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
	},
	stop : function() {
		clearInterval(this.interval);
		gameOver11();
	}
};
var myGameArea12 = {
	canvas : document.getElementById("gameBoard"),
    start : function() {
        this.canvas.width = 1338;
        this.canvas.height = 620;
		this.canvas.style.left = "100px";
		this.canvas.style.top = "500px";
        this.context = this.canvas.getContext("2d");
        document.body.insertBefore(this.canvas, document.body.childNodes[0]);
		this.frameNo = 0;
		this.interval = setInterval(updateGameArea12, 20);
		window.scrollTo(0, 0);
		window.addEventListener('keydown', function (e) {
            myGameArea12.keys = (myGameArea12.keys || []);
            myGameArea12.keys[e.keyCode] = (e.type == "keydown");
        });
        window.addEventListener('keyup', function (e) {
            myGameArea12.keys[e.keyCode] = (e.type == "keydown");            
        });
    },
//Clear function for each frame to make sure no sprite trails are created.
	clear : function() {
		this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
	},
	stop : function() {
		clearInterval(this.interval);
		gameOver12();
	}
};
//Creates Easy Mode canvas
var myGameArea7 = {
	canvas : document.getElementById("gameBoard"),
    start : function() {
		x = 1
        this.canvas.width = 1338;
        this.canvas.height = 620;
        this.context = this.canvas.getContext("2d");
        document.body.insertBefore(this.canvas, document.body.childNodes[0]);
		this.frameNo = 0;
		this.interval = setInterval(updateGameArea7, 20);
		window.scrollTo(0, 0);
        window.addEventListener('keydown', function (e) {
            myGameArea7.keys = (myGameArea7.keys || []);
            myGameArea7.keys[e.keyCode] = (e.type == "keydown");
        });
        window.addEventListener('keyup', function (e) {
            myGameArea7.keys[e.keyCode] = (e.type == "keydown");
        });
    },
//Clear function for each frame to make sure no sprite trails are created.
	clear : function() {
		this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
	},
	stop : function() {
		clearInterval(this.interval);
		gameOver7();
	}
};
var myGameArea8 = {
	canvas : document.getElementById("gameBoard"),
    start : function() {
        this.canvas.width = 1338;
        this.canvas.height = 620;
        this.context = this.canvas.getContext("2d");
        document.body.insertBefore(this.canvas, document.body.childNodes[0]);
		this.frameNo = 0;
		this.interval = setInterval(updateGameArea8, 20);
		window.scrollTo(0, 0);
        window.addEventListener('keydown', function (e) {
            myGameArea8.keys = (myGameArea8.keys || []);
            myGameArea8.keys[e.keyCode] = (e.type == "keydown");
        });
        window.addEventListener('keyup', function (e) {
            myGameArea8.keys[e.keyCode] = (e.type == "keydown");
        });
    },
//Clear function for each frame to make sure no sprite trails are created.
	clear : function() {
		this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
	},
	stop : function() {
		clearInterval(this.interval);
		gameOver8();
	}
};
var myGameArea9 = {
	canvas : document.getElementById("gameBoard"),
    start : function() {
        this.canvas.width = 1338;
        this.canvas.height = 620;
        this.context = this.canvas.getContext("2d");
        document.body.insertBefore(this.canvas, document.body.childNodes[0]);
		this.frameNo = 0;
		this.interval = setInterval(updateGameArea9, 20);
		window.scrollTo(0, 0);
        window.addEventListener('keydown', function (e) {
            myGameArea9.keys = (myGameArea9.keys || []);
            myGameArea9.keys[e.keyCode] = (e.type == "keydown");
        });
        window.addEventListener('keyup', function (e) {
            myGameArea9.keys[e.keyCode] = (e.type == "keydown");
        });
    },
//Clear function for each frame to make sure no sprite trails are created.
	clear : function() {
		this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
	},
	stop : function() {
		clearInterval(this.interval);
		gameOver9();
	}
};
var myGameArea6 = {
	canvas : document.getElementById("gameBoard"),
    start : function() {
        this.canvas.width = 1338;
        this.canvas.height = 620;
		this.canvas.style.left = "100px";
		this.canvas.style.top = "500px";
        this.context = this.canvas.getContext("2d");
        document.body.insertBefore(this.canvas, document.body.childNodes[0]);
		this.frameNo = 0;
		this.interval = setInterval(updateGameArea6, 20);
		window.scrollTo(0, 0);
        window.addEventListener('keydown', function (e) {
            myGameArea6.keys = (myGameArea6.keys || []);
            myGameArea6.keys[e.keyCode] = (e.type == "keydown");
        });
        window.addEventListener('keyup', function (e) {
            myGameArea6.keys[e.keyCode] = (e.type == "keydown");            
        });
    },
//Clear function for each frame to make sure no sprite trails are created.
	clear : function() {
		this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
	},
	stop : function() {
		clearInterval(this.interval);
		gameOver6();
	}
};
var myGameArea3 = {
    canvas : document.getElementById("gameBoard"),
    start : function() {
        this.canvas.width = 1338;
        this.canvas.height = 620;
		this.canvas.style.left = "100px";
		this.canvas.style.top = "500px";
        this.context = this.canvas.getContext("2d");
        document.body.insertBefore(this.canvas, document.body.childNodes[0]);
		this.frameNo = 0;
		this.interval = setInterval(updateGameArea3, 20);
		window.scrollTo(0, 0);
      window.addEventListener('keydown', function (e) {
            myGameArea3.keys = (myGameArea3.keys || []);
            myGameArea3.keys[e.keyCode] = (e.type == "keydown");
        });
        window.addEventListener('keyup', function (e) {
            myGameArea3.keys[e.keyCode] = (e.type == "keydown");            
        });
    },

//Clear function for each frame to make sure no sprite trails are created.
	clear : function() {
		this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
	},
	stop : function() {
		clearInterval(this.interval);
		gameOver3();
	}
};
//Add new Game Modes with the following format. See lines 27, 254, and 709.
// var myGameArea"x" = {
	//canvas : document.getElementById("gameBoard"),
	//start : function() {
		//this.canvas.width = 1338;
		//this.canvas.height = 620;
		//this.context = this.canvas.getContext("2d")
		//document.body.insertBefore(this.canvas, document.body.childNodes[0]);
		//this.frameNo = 0;
		//this.interval = setInterval(updateGameArea"x", 20);
        //window.addEventListener('keydown', function (e) {
            //myGameArea"x".keys = (myGameArea"x".keys || []);
            //myGameArea"x".keys[e.keyCode] = (e.type == "keydown");
        //});
        //window.addEventListener('keyup', function (e) {
            //myGameArea"x".keys[e.keyCode] = (e.type == "keydown");            
        //});
    //},

//Clear function for each frame to make sure no sprite trails are created.
	//clear : function() {
		//this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
	//},
	//stop : function() {
		//clearInterval(this.interval);
		//gameOver"x"();
	//}
//};
//Creates Hard Mode Canvas
var myGameArea = {
    canvas : document.getElementById("gameBoard"),
    start : function() {
        this.canvas.width = 1338;
        this.canvas.height = 620;
		this.canvas.style.left = "100px";
		this.canvas.style.top = "500px";
        this.context = this.canvas.getContext("2d");
        document.body.insertBefore(this.canvas, document.body.childNodes[0]);
		this.frameNo = 0;
		this.interval = setInterval(updateGameArea, 20);
		window.scrollTo(0, 0);
        window.addEventListener('keydown', function (e) {
            myGameArea.keys = (myGameArea.keys || []);
            myGameArea.keys[e.keyCode] = (e.type == "keydown");
        });
        window.addEventListener('keyup', function (e) {
            myGameArea.keys[e.keyCode] = (e.type == "keydown");
        });
    },

//Clear function for each frame to make sure no sprite trails are created.
	clear : function() {
		this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
	},
	stop : function() {
		clearInterval(this.interval);
		gameOver();
	}
};
var myGameArea4 = {
    canvas : document.getElementById("gameBoard"),
    start : function() {
        this.canvas.width = 1338;
        this.canvas.height = 620;
		this.canvas.style.left = "100px";
		this.canvas.style.top = "500px";
        this.context = this.canvas.getContext("2d");
        document.body.insertBefore(this.canvas, document.body.childNodes[0]);
		this.frameNo = 0;
		this.interval = setInterval(updateGameArea4, 20);
		window.scrollTo(0, 0);
        window.addEventListener('keydown', function (e) {
            myGameArea4.keys = (myGameArea4.keys || []);
            myGameArea4.keys[e.keyCode] = (e.type == "keydown");
        });
        window.addEventListener('keyup', function (e) {
            myGameArea4.keys[e.keyCode] = (e.type == "keydown");            
        });
    },

//Clear function for each frame to make sure no sprite trails are created.
	clear : function() {
		this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
	},
	stop : function() {
		clearInterval(this.interval);
		gameOver4();
	}
};
var myGameArea5 = {
    canvas : document.getElementById("gameBoard"),
    start : function() {
        this.canvas.width = 1338;
        this.canvas.height = 620;
		this.canvas.style.left = "100px";
		this.canvas.style.top = "500px";
        this.context = this.canvas.getContext("2d");
        document.body.insertBefore(this.canvas, document.body.childNodes[0]);
		this.frameNo = 0;
		this.interval = setInterval(updateGameArea5, 20);
		window.scrollTo(0, 0);
        window.addEventListener('keydown', function (e) {
            myGameArea5.keys = (myGameArea5.keys || []);
            myGameArea5.keys[e.keyCode] = (e.type == "keydown");
        });
        window.addEventListener('keyup', function (e) {
            myGameArea5.keys[e.keyCode] = (e.type == "keydown");
        });
    },

//Clear function for each frame to make sure no sprite trails are created.
	clear : function() {
		this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
	},
	stop : function() {
		clearInterval(this.interval);
		gameOver5();
	}
};
function everyinterval(n) {
	if ((myGameArea.frameNo / n) % 1 == 0) {return true;}
	return false;
	if ((myGameArea2.frameNo / n) % 1 == 0) {return true;}
	return false;
	if ((myGameArea3.frameNo / n) % 1 == 0) {return true;}
	return false;
	if ((myGameArea4.frameNo / n) % 1 == 0) {return true;}
	return false;
	if ((myGameArea5.frameNo / n) % 1 == 0) {return true;}
	return false;
	if ((myGameArea6.frameNo / n) % 1 == 0) {return true;}
	return false;
	if ((myGameArea7.frameNo / n) % 1 == 0) {return true;}
	return false;
	if ((myGameArea8.frameNo / n) % 1 == 0) {return true;}
	return false;
	if ((myGameArea9.frameNo / n) % 1 == 0) {return true;}
	return false;
	if ((myGameArea10.frameNo / n) % 1 == 0) {return true;}
	return false;
	if ((myGameArea11.frameNo / n) % 1 == 0) {return true;}
	return false;
	if ((myGameArea12.frameNo / n) % 1 == 0) {return true;}
	return false;
}

function component(width, height, color, x, y, type) {
	this.type = type;
    this.width = width;
    this.height = height;
    this.speed = 0;
    this.angle = 0;
    this.moveAngle = 0;
    this.x = x;
    this.y = y;
	this.update = function(){
		if (gameAreaSpec == 0) {
			ctx = myGameArea.context;
			ctx.save();
			ctx.translate(this.x, this.y);
			ctx.rotate(this.angle);
			ctx.fillStyle = color;
			ctx.fillRect(this.width / -2, this.height / -2, this.width, this.height);
			ctx.restore();
		} else if (gameAreaSpec == 1) {
			ctx2 = myGameArea2.context;
			ctx2.save();
			ctx2.translate(this.x, this.y);
			ctx2.rotate(this.angle);
			ctx2.fillStyle = color;
			ctx2.fillRect(this.width / -2, this.height / -2, this.width, this.height);
			ctx2.restore();
		} else if (gameAreaSpec == 2) {
			ctx3 = myGameArea3.context;
			ctx3.save();
			ctx3.translate(this.x, this.y);
			ctx3.rotate(this.angle);
			ctx3.fillStyle = color;
			ctx3.fillRect(this.width / -2, this.height / -2, this.width, this.height);
			ctx3.restore();
		} else if (gameAreaSpec == 3) {
			ctx4 = myGameArea4.context;
			ctx4.save();
			ctx4.translate(this.x, this.y);
			ctx4.rotate(this.angle);
			ctx4.fillStyle = color;
			ctx4.fillRect(this.width / -2, this.height / -2, this.width, this.height);
			ctx4.restore();
		} else if (gameAreaSpec == 4) {
			ctx5 = myGameArea5.context;
			ctx5.save();
			ctx5.translate(this.x, this.y);
			ctx5.rotate(this.angle);
			ctx5.fillStyle = color;
			ctx5.fillRect(this.width / -2, this.height / -2, this.width, this.height);
			ctx5.restore();
		} else if (gameAreaSpec == 5) {
		    if (this.type == "text") {
				ctx6.font = this.width + " " + this.height;
				ctx6.fillStyle = color;
				ctx6.fillText(this.text, this.x, this.y);
			} else {
				ctx6 = myGameArea6.context;
				ctx6.save();
				ctx6.translate(this.x, this.y);
				ctx6.rotate(this.angle);
				ctx6.fillStyle = color;
				ctx6.fillRect(this.width / -2, this.height / -2, this.width, this.height);
				ctx6.restore();
			}
		} else if (gameAreaSpec == 6) {
			ctx7 = myGameArea7.context;
			ctx7.save();
			ctx7.translate(this.x, this.y);
			ctx7.rotate(this.angle);
			ctx7.fillStyle = color;
			ctx7.fillRect(this.width / -2, this.height / -2, this.width, this.height);
			ctx7.restore();
		} else if (gameAreaSpec == 7) {
			ctx8 = myGameArea8.context;
			ctx8.save();
			ctx8.translate(this.x, this.y);
			ctx8.rotate(this.angle);
			ctx8.fillStyle = color;
			ctx8.fillRect(this.width / -2, this.height / -2, this.width, this.height);
			ctx8.restore();
		} else if (gameAreaSpec == 8) {
			ctx9 = myGameArea9.context;
			ctx9.save();
			ctx9.translate(this.x, this.y);
			ctx9.rotate(this.angle);
			ctx9.fillStyle = color;
			ctx9.fillRect(this.width / -2, this.height / -2, this.width, this.height);
			ctx9.restore();
		} else if (gameAreaSpec == 9) {
			ctx10 = myGameArea10.context;
			ctx10.save();
			ctx10.translate(this.x, this.y);
			ctx10.rotate(this.angle);
			ctx10.fillStyle = color;
			ctx10.fillRect(this.width / -2, this.height / -2, this.width, this.height);
			ctx10.restore();
		} else if (gameAreaSpec == 10) {
			ctx11 = myGameArea11.context;
			ctx11.save();
			ctx11.translate(this.x, this.y);
			ctx11.rotate(this.angle);
			ctx11.fillStyle = color;
			ctx11.fillRect(this.width / -2, this.height / -2, this.width, this.height);
			ctx11.restore();
		} else if (gameAreaSpec == 11) {
			ctx12 = myGameArea12.context;
			ctx12.save();
			ctx12.translate(this.x, this.y);
			ctx12.rotate(this.angle);
			ctx12.fillStyle = color;
			ctx12.fillRect(this.width / -2, this.height / -2, this.width, this.height);
			ctx12.restore();
		}
			//Add in more gamemodes with the following format. See lines 27, 161, and 709.
		//} else if (gameAreaSpec == x) {
			//Block
		//}
	};
    this.newPos = function() {
		this.angle += this.moveAngle * Math.PI / 100;
        this.x += this.speed * Math.sin(this.angle);
        this.y -= this.speed * Math.cos(this.angle);     
    };    
    this.crashWith = function(otherobj) {
        var myleft = this.x;
        var myright = this.x + (this.width);
        var mytop = this.y;
        var mybottom = this.y + (this.height);
        var otherleft = otherobj.x;
        var otherright = otherobj.x + (otherobj.width);
        var othertop = otherobj.y;
        var otherbottom = otherobj.y + (otherobj.height);
        var crash = true;
		if ((mybottom < othertop) ||
			(mytop > otherbottom) ||
			(myright < otherleft) ||
			(myleft > otherright)) {
			crash = false;
		}
		return crash;
    };
}
function updateGameArea6() {
	myGameArea6.clear();
	myGameArea6.frameNo += 1;
	myGamePiece.moveAngle = 0;
	myGamePiece.speed = 0;
    if (myGameArea6.keys && myGameArea6.keys[65]) {myGamePiece.moveAngle = -1; }
    if (myGameArea6.keys && myGameArea6.keys[68]) {myGamePiece.moveAngle = 1; }
    if (myGameArea6.keys && myGameArea6.keys[87]) {myGamePiece.speed = myGamePiece.speed + 2.5; }
    if (myGameArea6.keys && myGameArea6.keys[83]) {myGamePiece.speed = myGamePiece.speed - 2; }
	myGamePiece.newPos();	
    myGamePiece.update();
	myScore.text="You survived long enough to earn " + myGameArea.frameNo + " points.";
    myScore.update();
	myGamePiece.speedX = 0;
    myGamePiece.speedY = 0;
//Tests if the player has collided with enemies.
    if (myGamePiece.crashWith(enemyGamePiece1)) {
		mySound.play();
        myGameArea6.stop();
		myMusic.stop();
	} else if (myGamePiece.crashWith(enemyGamePiece2)) {
		mySound.play();
		myGameArea6.stop();
		myMusic.stop();
	} else if (myGamePiece.crashWith(enemyGamePiece3)) {
		mySound.play();
		myGameArea6.stop();
		myMusic.stop();
	} else if (myGamePiece.crashWith(enemyGamePiece4)) {
		mySound.play();
		myGameArea6.stop();
		myMusic.stop();
	} else if (myGamePiece.crashWith(enemyGamePiece5)) {
		mySound.play();
		myGameArea6.stop();
		myMusic.stop();
	} else if (myGamePiece.crashWith(enemyGamePiece6)) {
		mySound.play();
		myGameArea6.stop();
		myMusic.stop();
	} else if (myGamePiece.crashWith(enemyGamePiece7)) {
		mySound.play();
		myGameArea6.stop();
		myMusic.stop();
	} else if (myGamePiece.crashWith(enemyGamePiece8)) {
		mySound.play();
		myGameArea6.stop();
		myMusic.stop();
//If the player has not died yet...
    } else {
		//Clear game area.
        myGameArea6.clear();
	    myGameArea6.context.drawImage(bgImage, 10, 10);
		var canvas = document.getElementById("myCanvas");
		var ctx = canvas.getContext("2d");
		ctx.font = "25px Consolas";
		ctx.fillStyle="white";
		ctx.fillRect(0,0,200,100);
		var grd=ctx.createLinearGradient(0,0,200,0);
		grd.addColorStop(0,"red");
		grd.addColorStop(0.2,"orange");
		grd.addColorStop(0.4,"yellow");
		grd.addColorStop(0.6,"green");
		grd.addColorStop(0.8,"blue");
		grd.addColorStop(1,"purple");
		ctx.fillStyle=grd;
		ctx.fillText("Super Crazy",5,30);
		ctx.fillText("Coding Maniac",15,60);
		ctx.fillText("Deluxe Site 4",5,90);
		//Update all pieces.
        enemyGamePiece1.update();
		enemyGamePiece2.update();
		enemyGamePiece3.update();
		enemyGamePiece4.update();
		enemyGamePiece5.update();
		enemyGamePiece6.update();
		enemyGamePiece7.update();
		enemyGamePiece8.update();
		myGamePiece.newPos(); 
        myGamePiece.update();
		//Piece 1 AI
		if (enemyGamePiece1.x >= myGamePiece.x) {
			enemyGamePiece1.y -= 2;
		} else if (enemyGamePiece1.x <= myGamePiece.x) {
			enemyGamePiece1.y += 2;
		}
		if (enemyGamePiece1.y <= myGamePiece.y) {
			enemyGamePiece1.x -= 2;
		} else if (enemyGamePiece1.y >= myGamePiece.y) {
			enemyGamePiece1.x += 2;
		}
		//Piece 2 AI
		if (enemyGamePiece2.x <= myGamePiece.x) {
			enemyGamePiece2.x += 3;
		} else if (enemyGamePiece2.x >= myGamePiece.x) {
			enemyGamePiece2.x -= 3;
		}
		if (enemyGamePiece2.y <= myGamePiece.y) {
			enemyGamePiece2.y += 3;
		} else if (enemyGamePiece2.y >= myGamePiece.y) {
			enemyGamePiece2.y -= 2;
		}
		//Piece 3 AI
		if (enemyGamePiece3.x <= myGamePiece.x) {
			enemyGamePiece3.x += 3.25;
		} else if (enemyGamePiece3.x >= myGamePiece.x) {
			enemyGamePiece3.x -= 3.25;
		}
		if (enemyGamePiece3.y <= myGamePiece.y) {
			enemyGamePiece3.y += 3.25;
		} else if (enemyGamePiece3.y >= myGamePiece.y) {
			enemyGamePiece3.y -= 3.25;
		}
		//Piece 4 AI
		if (enemyGamePiece4.x <=myGamePiece.x/2) {
			enemyGamePiece4.x += 2.57079632675;
		} else if (enemyGamePiece4.x >=myGamePiece.x/2) {
			enemyGamePiece4.x -= 2.57079632675;
		}
		if (enemyGamePiece4.y <=myGamePiece.y/2) {
			enemyGamePiece4.y += 2.57079632675;
		} else if (enemyGamePiece4.y >=myGamePiece.y/2) {
			enemyGamePiece4.y -= 2.57079632675;
		}
		//Piece 5 AI
		if (enemyGamePiece5.x <= myGamePiece.x) {
			enemyGamePiece5.x += (myGameArea6.frameNo/1000)*2;
		} else if (enemyGamePiece5.x >= myGamePiece.x) {
			enemyGamePiece5.x -= (myGameArea6.frameNo/1000)*2;
			}
		if (enemyGamePiece5.y <= myGamePiece.y) {
			enemyGamePiece5.y += (myGameArea6.frameNo/1000)*2;
		} else if (enemyGamePiece5.y >= myGamePiece.y) {
			enemyGamePiece5.y -= (myGameArea6.frameNo/1000)*2;
		}
		//Piece 6 AI
		if (enemyGamePiece6.x <= myGamePiece.x) {
			enemyGamePiece6.x += enemyGamePiece6.y/208;
		} else if (enemyGamePiece6.x >= myGamePiece.x) {
			enemyGamePiece6.x -= enemyGamePiece6.y/208;
		}
		if (enemyGamePiece6.y <= myGamePiece.y) {
			enemyGamePiece6.y += enemyGamePiece6.x/308;
		} else if (enemyGamePiece6.y >= myGamePiece.y) {
			enemyGamePiece6.y -= enemyGamePiece6.x/308;
		}
		//Piece 7 AI
		if (myGameArea6.frameNo % 25 == 0) {
			if (enemyGamePiece7.x <= myGamePiece.x) {
				enemyGamePiece7.x += 50;
			} else if (enemyGamePiece7.x >= myGamePiece.x) {
				enemyGamePiece7.x -= 50;
			}
			if (enemyGamePiece7.y <= myGamePiece.y) {
				enemyGamePiece7.y += 50;
			} else if (enemyGamePiece7.y >= myGamePiece.y) {
				enemyGamePiece7.y -= 50;
			}
		}
		//Piece 8 AI
		if (myGameArea6.frameNo % 250 == 0) {
			RAND1 = Math.floor(Math.random() * (6 - 1 + 1)) + 1;
		}
		if (RAND1 == 1) {
			if (enemyGamePiece8.x >= myGamePiece.x) {
				enemyGamePiece8.y -= 1.5;
			} else if (enemyGamePiece8.x <= myGamePiece.x) {
				enemyGamePiece8.y += 1.5;
			}
			if (enemyGamePiece8.y <= myGamePiece.y) {
				enemyGamePiece8.x -= 1.5;
			} else if (enemyGamePiece8.y >= myGamePiece.y) {
				enemyGamePiece8.x += 1.5;
			}
		} else if (RAND1 == 2) {
			if (enemyGamePiece8.x <= myGamePiece.x) {
				enemyGamePiece8.x += 2.5;
			} else if (enemyGamePiece8.x >= myGamePiece.x) {
				enemyGamePiece8.x -= 2.5;
			}
			if (enemyGamePiece8.y <= myGamePiece.y) {
				enemyGamePiece8.y += 2.5;
			} else if (enemyGamePiece8.y >= myGamePiece.y) {
				enemyGamePiece8.y -= 1.5;
			}
		} else if (RAND1 == 3) {
			if (enemyGamePiece8.x <= myGamePiece.x) {
				enemyGamePiece8.x += 2.75;
			} else if (enemyGamePiece8.x >= myGamePiece.x) {
				enemyGamePiece8.x -= 2.75;
			}
			if (enemyGamePiece8.y <= myGamePiece.y) {
				enemyGamePiece8.y += 2.75;
			} else if (enemyGamePiece8.y >= myGamePiece.y) {
				enemyGamePiece8.y -= 2.75;
			}
		} else if (RAND1 == 4) {
			if (enemyGamePiece8.x <=myGamePiece.x/2) {
				enemyGamePiece8.x += 2.07079632675;
			} else if (enemyGamePiece8.x >=myGamePiece.x/2) {
				enemyGamePiece8.x -= 2.07079632675;
			}
			if (enemyGamePiece8.y <=myGamePiece.y/2) {
				enemyGamePiece8.y += 2.07079632675;
			} else if (enemyGamePiece8.y >=myGamePiece.y/2) {
				enemyGamePiece8.y -= 2.07079632675;
			}
		} else if (RAND1 == 5) {
			if (enemyGamePiece8.x <= myGamePiece.x) {
				enemyGamePiece8.x += (myGameArea.frameNo/1000)*1.5;
			} else if (enemyGamePiece8.x >= myGamePiece.x) {
				enemyGamePiece8.x -= (myGameArea.frameNo/1000)*1.5;
			}
			if (enemyGamePiece8.y <= myGamePiece.y) {
				enemyGamePiece8.y += (myGameArea.frameNo/1000)*1.5;
			} else if (enemyGamePiece8.y >= myGamePiece.y) {
				enemyGamePiece8.y -= (myGameArea.frameNo/1000)*1.5;
			}
		} else if (RAND1 == 6) {
			if (enemyGamePiece8.x <= myGamePiece.x) {
				enemyGamePiece8.x += enemyGamePiece8.y/208;
			} else if (enemyGamePiece8.x >= myGamePiece.x) {
				enemyGamePiece8.x -= enemyGamePiece8.y/208;
			}
			if (enemyGamePiece8.y <= myGamePiece.y) {
				enemyGamePiece8.y += enemyGamePiece8.x/208;
			} else if (enemyGamePiece8.y >= myGamePiece.y) {
				enemyGamePiece8.y -= enemyGamePiece8.x/208;
			}
		} else if (RAND1 == 7) {
			if (myGameArea6.frameNo % 50 == 0) {
				if (enemyGamePiece8.x <= myGamePiece.x) {
					enemyGamePiece8.x += 50;
				} else if (enemyGamePiece8.x >= myGamePiece.x) {
					enemyGamePiece8.x -= 50;
				}
				if (enemyGamePiece8.y <= myGamePiece.y) {
					enemyGamePiece8.y += 50;
				} else if (enemyGamePiece8.y >= myGamePiece.y) {
					enemyGamePiece8.y -= 50;
				}
			}
		}
		if (myGamePiece.x <=5) {
			myGamePiece.x += 5;
		}
		if (myGamePiece.x >1338) {
			myGamePiece.x -= 5;
		}
		if (myGamePiece.y <5) {
			myGamePiece.y +=5;
		}
		if (myGamePiece.y >620) {
			myGamePiece.y -= 5;
		}
		if (enemyGamePiece1.x <=5) {
			enemyGamePiece1.x += 5;
		}
		if (enemyGamePiece1.x >1338) {
			enemyGamePiece1.x -= 5;
		}
		if (enemyGamePiece1.y <5) {
			enemyGamePiece1.y +=5;
		}
		if (enemyGamePiece1.y >620) {
			enemyGamePiece1.y -= 5;
		}
		if (enemyGamePiece2.x <=5) {
			enemyGamePiece2.x += 5;
		}
		if (enemyGamePiece2.x >1338) {
			enemyGamePiece2.x -= 5;
		}
		if (enemyGamePiece2.y <5) {
			enemyGamePiece2.y +=5;
		}
		if (enemyGamePiece2.y >620) {
			enemyGamePiece2.y -= 5;
		}
		if (enemyGamePiece3.x <=5) {
			enemyGamePiece3.x += 5;
		}
		if (enemyGamePiece3.x >1338) {
			enemyGamePiece3.x -= 5;
		}
		if (enemyGamePiece3.y <0) {
			enemyGamePiece3.y +=5;
		}
		if (enemyGamePiece3.y >620) {
			enemyGamePiece3.y -= 5;
		}
		if (enemyGamePiece4.x <=5) {
			enemyGamePiece4.x += 5;
		}
		if (enemyGamePiece4.x >1338) {
			enemyGamePiece4.x -= 5;
		}
		if (enemyGamePiece4.y <0) {
			enemyGamePiece4.y +=5;
		}
		if (enemyGamePiece4.y >620) {
			enemyGamePiece4.y -= 5;
		}
		if (enemyGamePiece5.x <=5) {
			enemyGamePiece5.x += 5;
		}
		if (enemyGamePiece5.x >1338) {
			enemyGamePiece5.x -= 5;
		}
		if (enemyGamePiece5.y <0) {
			enemyGamePiece5.y +=5;
		}
		if (enemyGamePiece5.y >620) {
			enemyGamePiece5.y -= 5;
		}
		if (enemyGamePiece6.x <=5) {
			enemyGamePiece6.x += 5;
		}
		if (enemyGamePiece6.x >1338) {
			enemyGamePiece6.x -= 5;
		}
		if (enemyGamePiece6.y <0) {
			enemyGamePiece6.y +=5;
		}
		if (enemyGamePiece6.y >620) {
			enemyGamePiece6.y -= 5;
		}
		if (enemyGamePiece7.x <=5) {
			enemyGamePiece7.x += 5;
		}
		if (enemyGamePiece7.x >1338) {
			enemyGamePiece7.x -= 5;
		}
		if (enemyGamePiece7.y <0) {
			enemyGamePiece7.y +=5;
		}
		if (enemyGamePiece7.y >620) {
			enemyGamePiece7.y -= 5;
		}
		if (enemyGamePiece8.x <=5) {
			enemyGamePiece8.x += 5;
		}
		if (enemyGamePiece8.x >1338) {
			enemyGamePiece8.x -= 5;
		}
		if (enemyGamePiece8.y <0) {
			enemyGamePiece8.y +=5;
		}
		if (enemyGamePiece8.y >620) {
			enemyGamePiece8.y -= 5;
		}
    }
}
function updateGameArea7() {
	if (myGameArea7.frameNo % 30 == 1) {
		if (i > 0 && i < 9) {
			eval("RAND" + i + "=3")
			i++
		}
	}
	myGameArea7.clear();
	myGameArea7.frameNo += 1;
	myGamePiece.moveAngle = 0;
	myGamePiece.speed = 0;
    if (myGameArea7.keys && myGameArea7.keys[65]) {myGamePiece.moveAngle = -1; }
    if (myGameArea7.keys && myGameArea7.keys[68]) {myGamePiece.moveAngle = 1; }
    if (myGameArea7.keys && myGameArea7.keys[87]) {myGamePiece.speed = myGamePiece.speed + 2.5; }
    if (myGameArea7.keys && myGameArea7.keys[83]) {myGamePiece.speed = myGamePiece.speed - 2; }
	myGamePiece.newPos();	
    myGamePiece.update();
	myScore.text="You survived long enough to earn " + myGameArea7.frameNo + " points.";
    myScore.update();
	myGamePiece.speedX = 0;
    myGamePiece.speedY = 0;
//Tests if the player has collided with enemies.
    if (myGamePiece.crashWith(enemyGamePiece1)) {
		mySound.play();
        myGameArea7.stop();
		myMusic.stop();
	} else if (myGamePiece.crashWith(enemyGamePiece2)) {
		mySound.play();
		myGameArea7.stop();
		myMusic.stop();
	} else if (myGamePiece.crashWith(enemyGamePiece3)) {
		mySound.play();
		myGameArea7.stop();
		myMusic.stop();
	} else if (myGamePiece.crashWith(enemyGamePiece4)) {
		mySound.play();
		myGameArea7.stop();
		myMusic.stop();
	} else if (myGamePiece.crashWith(enemyGamePiece5)) {
		mySound.play();
		myGameArea7.stop();
		myMusic.stop();
	} else if (myGamePiece.crashWith(enemyGamePiece6)) {
		mySound.play();
		myGameArea7.stop();
		myMusic.stop();
	} else if (myGamePiece.crashWith(enemyGamePiece7)) {
		mySound.play();
		myGameArea7.stop();
		myMusic.stop();
	} else if (myGamePiece.crashWith(enemyGamePiece8)) {
		mySound.play();
		myGameArea7.stop();
		myMusic.stop();
	} else if (myGamePiece.crashWith(escapeGamePiece)) {
		gameWin7();
//If the player has not died yet...
    } else {
		//Clear game area.
        myGameArea7.clear();
	    myGameArea7.context.drawImage(bgImage, 10, 10);
		var canvas = document.getElementById("myCanvas");
		var ctx = canvas.getContext("2d");
		ctx.font = "25px Consolas";
		ctx.fillStyle="white";
		ctx.fillRect(0,0,200,100);
		var grd=ctx.createLinearGradient(0,0,200,0);
		grd.addColorStop(0,"red");
		grd.addColorStop(0.2,"orange");
		grd.addColorStop(0.4,"yellow");
		grd.addColorStop(0.6,"green");
		grd.addColorStop(0.8,"blue");
		grd.addColorStop(1,"purple");
		ctx.fillStyle=grd;
		ctx.fillText("Super Crazy",5,30);
		ctx.fillText("Coding Maniac",15,60);
		ctx.fillText("Deluxe Site 4",5,90);
		//Update all pieces.
        enemyGamePiece1.update();
		enemyGamePiece2.update();
		enemyGamePiece3.update();
		enemyGamePiece4.update();
		enemyGamePiece5.update();
		enemyGamePiece6.update();
		enemyGamePiece7.update();
		enemyGamePiece8.update();
		escapeGamePiece.update();
		myGamePiece.newPos();
        myGamePiece.update();
		//Piece 1 AI
		if (myGameArea7.frameNo % 350 == 0) {
			RAND1 = Math.floor(Math.random() * (6 - 1 + 1)) + 1;
		}
		if (RAND1 == 1) {
			if (enemyGamePiece1.x >= myGamePiece.x) {
				enemyGamePiece1.y -= 1;
			} else if (enemyGamePiece1.x <= myGamePiece.x) {
				enemyGamePiece1.y += 1;
			}
			if (enemyGamePiece1.y <= myGamePiece.y) {
				enemyGamePiece1.x -= 1;
			} else if (enemyGamePiece1.y >= myGamePiece.y) {
				enemyGamePiece1.x += 1;
			}
		} else if (RAND1 == 2) {
			if (enemyGamePiece1.x <= myGamePiece.x) {
				enemyGamePiece1.x += 2;
			} else if (enemyGamePiece1.x >= myGamePiece.x) {
				enemyGamePiece1.x -= 2;
			}
			if (enemyGamePiece1.y <= myGamePiece.y) {
				enemyGamePiece1.y += 2;
			} else if (enemyGamePiece1.y >= myGamePiece.y) {
				enemyGamePiece1.y -= 1;
			}
		} else if (RAND1 == 3) {
			if (enemyGamePiece1.x <= myGamePiece.x) {
				enemyGamePiece1.x += 2.25;
			} else if (enemyGamePiece1.x >= myGamePiece.x) {
				enemyGamePiece1.x -= 2.25;
			}
			if (enemyGamePiece1.y <= myGamePiece.y) {
				enemyGamePiece1.y += 2.25;
			} else if (enemyGamePiece1.y >= myGamePiece.y) {
				enemyGamePiece1.y -= 2.25;
			}
		} else if (RAND1 == 4) {
			if (enemyGamePiece1.x <=myGamePiece.x/2) {
				enemyGamePiece1.x += 1.57079632675;
			} else if (enemyGamePiece1.x >=myGamePiece.x/2) {
				enemyGamePiece1.x -= 1.57079632675;
			}
			if (enemyGamePiece1.y <=myGamePiece.y/2) {
				enemyGamePiece1.y += 1.57079632675;
			} else if (enemyGamePiece1.y >=myGamePiece.y/2) {
				enemyGamePiece1.y -= 1.57079632675;
			}
		} else if (RAND1 == 5) {
			if (enemyGamePiece1.x <= myGamePiece.x) {
				enemyGamePiece1.x += (myGameArea7.frameNo/1000);
			} else if (enemyGamePiece1.x >= myGamePiece.x) {
				enemyGamePiece1.x -= (myGameArea7.frameNo/1000);
			}
			if (enemyGamePiece1.y <= myGamePiece.y) {
				enemyGamePiece1.y += (myGameArea7.frameNo/1000);
			} else if (enemyGamePiece1.y >= myGamePiece.y) {
				enemyGamePiece1.y -= (myGameArea7.frameNo/1000);
			}
		} else if (RAND1 == 6) {
			if (enemyGamePiece1.x <= myGamePiece.x) {
				enemyGamePiece1.x += enemyGamePiece1.y/308;
			} else if (enemyGamePiece1.x >= myGamePiece.x) {
				enemyGamePiece1.x -= enemyGamePiece1.y/308;
			}
			if (enemyGamePiece1.y <= myGamePiece.y) {
				enemyGamePiece1.y += enemyGamePiece1.x/408;
			} else if (enemyGamePiece1.y >= myGamePiece.y) {
				enemyGamePiece1.y -= enemyGamePiece1.x/408;
			}
		} else if (RAND1 == 7) {
			if (myGameArea7.frameNo % 75 == 0) {
				if (enemyGamePiece1.x <= myGamePiece.x) {
					enemyGamePiece1.x += 50;
				} else if (enemyGamePiece1.x >= myGamePiece.x) {
					enemyGamePiece1.x -= 50;
				}
				if (enemyGamePiece1.y <= myGamePiece.y) {
					enemyGamePiece1.y += 50;
				} else if (enemyGamePiece1.y >= myGamePiece.y) {
					enemyGamePiece1.y -= 50;
				}
			}
		}
		if (myGameArea7.frameNo % 350 == 0) {
			RAND2 = Math.floor(Math.random() * (6 - 1 + 1)) + 1;
		}
		if (RAND2 == 1) {
			if (enemyGamePiece2.x >= myGamePiece.x) {
				enemyGamePiece2.y -= 1;
			} else if (enemyGamePiece2.x <= myGamePiece.x) {
				enemyGamePiece2.y += 1;
			}
			if (enemyGamePiece2.y <= myGamePiece.y) {
				enemyGamePiece2.x -= 1;
			} else if (enemyGamePiece2.y >= myGamePiece.y) {
				enemyGamePiece2.x += 1;
			}
		} else if (RAND2 == 2) {
			if (enemyGamePiece2.x <= myGamePiece.x) {
				enemyGamePiece2.x += 2;
			} else if (enemyGamePiece2.x >= myGamePiece.x) {
				enemyGamePiece2.x -= 2;
			}
			if (enemyGamePiece2.y <= myGamePiece.y) {
				enemyGamePiece2.y += 2;
			} else if (enemyGamePiece2.y >= myGamePiece.y) {
				enemyGamePiece2.y -= 1;
			}
		} else if (RAND2 == 3) {
			if (enemyGamePiece2.x <= myGamePiece.x) {
				enemyGamePiece2.x += 2.25;
			} else if (enemyGamePiece2.x >= myGamePiece.x) {
				enemyGamePiece2.x -= 2.25;
			}
			if (enemyGamePiece2.y <= myGamePiece.y) {
				enemyGamePiece2.y += 2.25;
			} else if (enemyGamePiece2.y >= myGamePiece.y) {
				enemyGamePiece2.y -= 2.25;
			}
		} else if (RAND2 == 4) {
			if (enemyGamePiece2.x <=myGamePiece.x/2) {
				enemyGamePiece2.x += 1.57079632675;
			} else if (enemyGamePiece2.x >=myGamePiece.x/2) {
				enemyGamePiece2.x -= 1.57079632675;
			}
			if (enemyGamePiece2.y <=myGamePiece.y/2) {
				enemyGamePiece2.y += 1.57079632675;
			} else if (enemyGamePiece2.y >=myGamePiece.y/2) {
				enemyGamePiece2.y -= 1.57079632675;
			}
		} else if (RAND2 == 5) {
			if (enemyGamePiece2.x <= myGamePiece.x) {
				enemyGamePiece2.x += (myGameArea7.frameNo/1000);
			} else if (enemyGamePiece2.x >= myGamePiece.x) {
				enemyGamePiece2.x -= (myGameArea7.frameNo/1000);
			}
			if (enemyGamePiece2.y <= myGamePiece.y) {
				enemyGamePiece2.y += (myGameArea7.frameNo/1000);
			} else if (enemyGamePiece2.y >= myGamePiece.y) {
				enemyGamePiece2.y -= (myGameArea7.frameNo/1000);
			}
		} else if (RAND2 == 6) {
			if (enemyGamePiece2.x <= myGamePiece.x) {
				enemyGamePiece2.x += enemyGamePiece2.y/308;
			} else if (enemyGamePiece2.x >= myGamePiece.x) {
				enemyGamePiece2.x -= enemyGamePiece2.y/308;
			}
			if (enemyGamePiece2.y <= myGamePiece.y) {
				enemyGamePiece2.y += enemyGamePiece2.x/408;
			} else if (enemyGamePiece2.y >= myGamePiece.y) {
				enemyGamePiece2.y -= enemyGamePiece2.x/408;
			}
		} else if (RAND2 == 7) {
			if (myGameArea7.frameNo % 75 == 0) {
				if (enemyGamePiece2.x <= myGamePiece.x) {
					enemyGamePiece2.x += 50;
				} else if (enemyGamePiece2.x >= myGamePiece.x) {
					enemyGamePiece2.x -= 50;
				}
				if (enemyGamePiece2.y <= myGamePiece.y) {
					enemyGamePiece2.y += 50;
				} else if (enemyGamePiece2.y >= myGamePiece.y) {
					enemyGamePiece2.y -= 50;
				}
			}
		}
		if (myGameArea7.frameNo % 350 == 0) {
			RAND3 = Math.floor(Math.random() * (6 - 1 + 1)) + 1;
		}
		if (RAND3 == 1) {
			if (enemyGamePiece3.x >= myGamePiece.x) {
				enemyGamePiece3.y -= 1;
			} else if (enemyGamePiece3.x <= myGamePiece.x) {
				enemyGamePiece3.y += 1;
			}
			if (enemyGamePiece3.y <= myGamePiece.y) {
				enemyGamePiece3.x -= 1;
			} else if (enemyGamePiece3.y >= myGamePiece.y) {
				enemyGamePiece3.x += 1;
			}
		} else if (RAND3 == 2) {
			if (enemyGamePiece3.x <= myGamePiece.x) {
				enemyGamePiece3.x += 2;
			} else if (enemyGamePiece3.x >= myGamePiece.x) {
				enemyGamePiece3.x -= 2;
			}
			if (enemyGamePiece3.y <= myGamePiece.y) {
				enemyGamePiece3.y += 2;
			} else if (enemyGamePiece3.y >= myGamePiece.y) {
				enemyGamePiece3.y -= 1;
			}
		} else if (RAND3 == 3) {
			if (enemyGamePiece3.x <= myGamePiece.x) {
				enemyGamePiece3.x += 2.25;
			} else if (enemyGamePiece3.x >= myGamePiece.x) {
				enemyGamePiece3.x -= 2.25;
			}
			if (enemyGamePiece3.y <= myGamePiece.y) {
				enemyGamePiece3.y += 2.25;
			} else if (enemyGamePiece3.y >= myGamePiece.y) {
				enemyGamePiece3.y -= 2.25;
			}
		} else if (RAND3 == 4) {
			if (enemyGamePiece3.x <=myGamePiece.x/2) {
				enemyGamePiece3.x += 1.57079632675;
			} else if (enemyGamePiece3.x >=myGamePiece.x/2) {
				enemyGamePiece3.x -= 1.57079632675;
			}
			if (enemyGamePiece3.y <=myGamePiece.y/2) {
				enemyGamePiece3.y += 1.57079632675;
			} else if (enemyGamePiece3.y >=myGamePiece.y/2) {
				enemyGamePiece3.y -= 1.57079632675;
			}
		} else if (RAND3 == 5) {
			if (enemyGamePiece3.x <= myGamePiece.x) {
				enemyGamePiece3.x += (myGameArea7.frameNo/1000);
			} else if (enemyGamePiece3.x >= myGamePiece.x) {
				enemyGamePiece3.x -= (myGameArea7.frameNo/1000);
			}
			if (enemyGamePiece3.y <= myGamePiece.y) {
				enemyGamePiece3.y += (myGameArea7.frameNo/1000);
			} else if (enemyGamePiece3.y >= myGamePiece.y) {
				enemyGamePiece3.y -= (myGameArea7.frameNo/1000);
			}
		} else if (RAND3 == 6) {
			if (enemyGamePiece3.x <= myGamePiece.x) {
				enemyGamePiece3.x += enemyGamePiece3.y/308;
			} else if (enemyGamePiece3.x >= myGamePiece.x) {
				enemyGamePiece3.x -= enemyGamePiece3.y/308;
			}
			if (enemyGamePiece3.y <= myGamePiece.y) {
				enemyGamePiece3.y += enemyGamePiece3.x/408;
			} else if (enemyGamePiece3.y >= myGamePiece.y) {
				enemyGamePiece3.y -= enemyGamePiece3.x/408;
			}
		} else if (RAND3 == 7) {
			if (myGameArea7.frameNo % 75 == 0) {
				if (enemyGamePiece3.x <= myGamePiece.x) {
					enemyGamePiece3.x += 50;
				} else if (enemyGamePiece3.x >= myGamePiece.x) {
					enemyGamePiece3.x -= 50;
				}
				if (enemyGamePiece3.y <= myGamePiece.y) {
					enemyGamePiece3.y += 50;
				} else if (enemyGamePiece3.y >= myGamePiece.y) {
					enemyGamePiece3.y -= 50;
				}
			}
		}
		if (myGameArea7.frameNo % 350 == 0) {
			RAND4 = Math.floor(Math.random() * (6 - 1 + 1)) + 1;
		}
		if (RAND4 == 1) {
			if (enemyGamePiece4.x >= myGamePiece.x) {
				enemyGamePiece4.y -= 1;
			} else if (enemyGamePiece4.x <= myGamePiece.x) {
				enemyGamePiece4.y += 1;
			}
			if (enemyGamePiece4.y <= myGamePiece.y) {
				enemyGamePiece4.x -= 1;
			} else if (enemyGamePiece4.y >= myGamePiece.y) {
				enemyGamePiece4.x += 1;
			}
		} else if (RAND4 == 2) {
			if (enemyGamePiece4.x <= myGamePiece.x) {
				enemyGamePiece4.x += 2;
			} else if (enemyGamePiece4.x >= myGamePiece.x) {
				enemyGamePiece4.x -= 2;
			}
			if (enemyGamePiece4.y <= myGamePiece.y) {
				enemyGamePiece4.y += 2;
			} else if (enemyGamePiece4.y >= myGamePiece.y) {
				enemyGamePiece4.y -= 1;
			}
		} else if (RAND4 == 3) {
			if (enemyGamePiece4.x <= myGamePiece.x) {
				enemyGamePiece4.x += 2.25;
			} else if (enemyGamePiece4.x >= myGamePiece.x) {
				enemyGamePiece4.x -= 2.25;
			}
			if (enemyGamePiece4.y <= myGamePiece.y) {
				enemyGamePiece4.y += 2.25;
			} else if (enemyGamePiece4.y >= myGamePiece.y) {
				enemyGamePiece4.y -= 2.25;
			}
		} else if (RAND4 == 4) {
			if (enemyGamePiece4.x <=myGamePiece.x/2) {
				enemyGamePiece4.x += 1.57079632675;
			} else if (enemyGamePiece4.x >=myGamePiece.x/2) {
				enemyGamePiece4.x -= 1.57079632675;
			}
			if (enemyGamePiece4.y <=myGamePiece.y/2) {
				enemyGamePiece4.y += 1.57079632675;
			} else if (enemyGamePiece4.y >=myGamePiece.y/2) {
				enemyGamePiece4.y -= 1.57079632675;
			}
		} else if (RAND4 == 5) {
			if (enemyGamePiece4.x <= myGamePiece.x) {
				enemyGamePiece4.x += (myGameArea7.frameNo/1000);
			} else if (enemyGamePiece4.x >= myGamePiece.x) {
				enemyGamePiece4.x -= (myGameArea7.frameNo/1000);
			}
			if (enemyGamePiece4.y <= myGamePiece.y) {
				enemyGamePiece4.y += (myGameArea7.frameNo/1000);
			} else if (enemyGamePiece4.y >= myGamePiece.y) {
				enemyGamePiece4.y -= (myGameArea7.frameNo/1000);
			}
		} else if (RAND4 == 6) {
			if (enemyGamePiece4.x <= myGamePiece.x) {
				enemyGamePiece4.x += enemyGamePiece4.y/308;
			} else if (enemyGamePiece4.x >= myGamePiece.x) {
				enemyGamePiece4.x -= enemyGamePiece4.y/308;
			}
			if (enemyGamePiece4.y <= myGamePiece.y) {
				enemyGamePiece4.y += enemyGamePiece4.x/408;
			} else if (enemyGamePiece4.y >= myGamePiece.y) {
				enemyGamePiece4.y -= enemyGamePiece4.x/408;
			}
		} else if (RAND4 == 7) {
			if (myGameArea7.frameNo % 75 == 0) {
				if (enemyGamePiece4.x <= myGamePiece.x) {
					enemyGamePiece4.x += 50;
				} else if (enemyGamePiece4.x >= myGamePiece.x) {
					enemyGamePiece4.x -= 50;
				}
				if (enemyGamePiece4.y <= myGamePiece.y) {
					enemyGamePiece4.y += 50;
				} else if (enemyGamePiece4.y >= myGamePiece.y) {
					enemyGamePiece4.y -= 50;
				}
			}
		}
		if (myGameArea7.frameNo % 350 == 0) {
			RAND5 = Math.floor(Math.random() * (6 - 1 + 1)) + 1;
		}
		if (RAND5 == 1) {
			if (enemyGamePiece5.x >= myGamePiece.x) {
				enemyGamePiece5.y -= 1;
			} else if (enemyGamePiece5.x <= myGamePiece.x) {
				enemyGamePiece5.y += 1;
			}
			if (enemyGamePiece5.y <= myGamePiece.y) {
				enemyGamePiece5.x -= 1;
			} else if (enemyGamePiece5.y >= myGamePiece.y) {
				enemyGamePiece5.x += 1;
			}
		} else if (RAND5 == 2) {
			if (enemyGamePiece5.x <= myGamePiece.x) {
				enemyGamePiece5.x += 2;
			} else if (enemyGamePiece5.x >= myGamePiece.x) {
				enemyGamePiece5.x -= 2;
			}
			if (enemyGamePiece5.y <= myGamePiece.y) {
				enemyGamePiece5.y += 2;
			} else if (enemyGamePiece5.y >= myGamePiece.y) {
				enemyGamePiece5.y -= 1;
			}
		} else if (RAND5 == 3) {
			if (enemyGamePiece5.x <= myGamePiece.x) {
				enemyGamePiece5.x += 2.25;
			} else if (enemyGamePiece5.x >= myGamePiece.x) {
				enemyGamePiece5.x -= 2.25;
			}
			if (enemyGamePiece5.y <= myGamePiece.y) {
				enemyGamePiece5.y += 2.25;
			} else if (enemyGamePiece5.y >= myGamePiece.y) {
				enemyGamePiece5.y -= 2.25;
			}
		} else if (RAND5 == 4) {
			if (enemyGamePiece5.x <=myGamePiece.x/2) {
				enemyGamePiece5.x += 1.57079632675;
			} else if (enemyGamePiece5.x >=myGamePiece.x/2) {
				enemyGamePiece5.x -= 1.57079632675;
			}
			if (enemyGamePiece5.y <=myGamePiece.y/2) {
				enemyGamePiece5.y += 1.57079632675;
			} else if (enemyGamePiece5.y >=myGamePiece.y/2) {
				enemyGamePiece5.y -= 1.57079632675;
			}
		} else if (RAND5 == 5) {
			if (enemyGamePiece5.x <= myGamePiece.x) {
				enemyGamePiece5.x += (myGameArea7.frameNo/1000);
			} else if (enemyGamePiece5.x >= myGamePiece.x) {
				enemyGamePiece5.x -= (myGameArea7.frameNo/1000);
			}
			if (enemyGamePiece5.y <= myGamePiece.y) {
				enemyGamePiece5.y += (myGameArea7.frameNo/1000);
			} else if (enemyGamePiece5.y >= myGamePiece.y) {
				enemyGamePiece5.y -= (myGameArea7.frameNo/1000);
			}
		} else if (RAND5 == 6) {
			if (enemyGamePiece5.x <= myGamePiece.x) {
				enemyGamePiece5.x += enemyGamePiece5.y/308;
			} else if (enemyGamePiece5.x >= myGamePiece.x) {
				enemyGamePiece5.x -= enemyGamePiece5.y/308;
			}
			if (enemyGamePiece5.y <= myGamePiece.y) {
				enemyGamePiece5.y += enemyGamePiece5.x/408;
			} else if (enemyGamePiece5.y >= myGamePiece.y) {
				enemyGamePiece5.y -= enemyGamePiece5.x/408;
			}
		} else if (RAND5 == 7) {
			if (myGameArea7.frameNo % 75 == 0) {
				if (enemyGamePiece5.x <= myGamePiece.x) {
					enemyGamePiece5.x += 50;
				} else if (enemyGamePiece5.x >= myGamePiece.x) {
					enemyGamePiece5.x -= 50;
				}
				if (enemyGamePiece5.y <= myGamePiece.y) {
					enemyGamePiece5.y += 50;
				} else if (enemyGamePiece5.y >= myGamePiece.y) {
					enemyGamePiece5.y -= 50;
				}
			}
		}
		if (myGameArea7.frameNo % 350 == 0) {
			RAND6 = Math.floor(Math.random() * (6 - 1 + 1)) + 1;
		}
		if (RAND6 == 1) {
			if (enemyGamePiece6.x >= myGamePiece.x) {
				enemyGamePiece6.y -= 1;
			} else if (enemyGamePiece6.x <= myGamePiece.x) {
				enemyGamePiece6.y += 1;
			}
			if (enemyGamePiece6.y <= myGamePiece.y) {
				enemyGamePiece6.x -= 1;
			} else if (enemyGamePiece6.y >= myGamePiece.y) {
				enemyGamePiece6.x += 1;
			}
		} else if (RAND6 == 2) {
			if (enemyGamePiece6.x <= myGamePiece.x) {
				enemyGamePiece6.x += 2;
			} else if (enemyGamePiece6.x >= myGamePiece.x) {
				enemyGamePiece6.x -= 2;
			}
			if (enemyGamePiece6.y <= myGamePiece.y) {
				enemyGamePiece6.y += 2;
			} else if (enemyGamePiece6.y >= myGamePiece.y) {
				enemyGamePiece6.y -= 1;
			}
		} else if (RAND6 == 3) {
			if (enemyGamePiece6.x <= myGamePiece.x) {
				enemyGamePiece6.x += 2.25;
			} else if (enemyGamePiece6.x >= myGamePiece.x) {
				enemyGamePiece6.x -= 2.25;
			}
			if (enemyGamePiece6.y <= myGamePiece.y) {
				enemyGamePiece6.y += 2.25;
			} else if (enemyGamePiece6.y >= myGamePiece.y) {
				enemyGamePiece6.y -= 2.25;
			}
		} else if (RAND6 == 4) {
			if (enemyGamePiece6.x <=myGamePiece.x/2) {
				enemyGamePiece6.x += 1.57079632675;
			} else if (enemyGamePiece6.x >=myGamePiece.x/2) {
				enemyGamePiece6.x -= 1.57079632675;
			}
			if (enemyGamePiece6.y <=myGamePiece.y/2) {
				enemyGamePiece6.y += 1.57079632675;
			} else if (enemyGamePiece6.y >=myGamePiece.y/2) {
				enemyGamePiece6.y -= 1.57079632675;
			}
		} else if (RAND6 == 5) {
			if (enemyGamePiece6.x <= myGamePiece.x) {
				enemyGamePiece6.x += (myGameArea7.frameNo/1000);
			} else if (enemyGamePiece6.x >= myGamePiece.x) {
				enemyGamePiece6.x -= (myGameArea7.frameNo/1000);
			}
			if (enemyGamePiece6.y <= myGamePiece.y) {
				enemyGamePiece6.y += (myGameArea7.frameNo/1000);
			} else if (enemyGamePiece6.y >= myGamePiece.y) {
				enemyGamePiece6.y -= (myGameArea7.frameNo/1000);
			}
		} else if (RAND6 == 6) {
			if (enemyGamePiece6.x <= myGamePiece.x) {
				enemyGamePiece6.x += enemyGamePiece6.y/308;
			} else if (enemyGamePiece6.x >= myGamePiece.x) {
				enemyGamePiece6.x -= enemyGamePiece6.y/308;
			}
			if (enemyGamePiece6.y <= myGamePiece.y) {
				enemyGamePiece6.y += enemyGamePiece6.x/408;
			} else if (enemyGamePiece6.y >= myGamePiece.y) {
				enemyGamePiece6.y -= enemyGamePiece6.x/408;
			}
		} else if (RAND6 == 7) {
			if (myGameArea7.frameNo % 75 == 0) {
				if (enemyGamePiece6.x <= myGamePiece.x) {
					enemyGamePiece6.x += 50;
				} else if (enemyGamePiece6.x >= myGamePiece.x) {
					enemyGamePiece6.x -= 50;
				}
				if (enemyGamePiece6.y <= myGamePiece.y) {
					enemyGamePiece6.y += 50;
				} else if (enemyGamePiece6.y >= myGamePiece.y) {
					enemyGamePiece6.y -= 50;
				}
			}
		}
		if (myGameArea7.frameNo % 350 == 0) {
			RAND7 = Math.floor(Math.random() * (6 - 1 + 1)) + 1;
		}
		if (RAND7 == 1) {
			if (enemyGamePiece7.x >= myGamePiece.x) {
				enemyGamePiece7.y -= 1;
			} else if (enemyGamePiece7.x <= myGamePiece.x) {
				enemyGamePiece7.y += 1;
			}
			if (enemyGamePiece7.y <= myGamePiece.y) {
				enemyGamePiece7.x -= 1;
			} else if (enemyGamePiece7.y >= myGamePiece.y) {
				enemyGamePiece7.x += 1;
			}
		} else if (RAND7 == 2) {
			if (enemyGamePiece7.x <= myGamePiece.x) {
				enemyGamePiece7.x += 2;
			} else if (enemyGamePiece7.x >= myGamePiece.x) {
				enemyGamePiece7.x -= 2;
			}
			if (enemyGamePiece7.y <= myGamePiece.y) {
				enemyGamePiece7.y += 2;
			} else if (enemyGamePiece7.y >= myGamePiece.y) {
				enemyGamePiece7.y -= 1;
			}
		} else if (RAND7 == 3) {
			if (enemyGamePiece7.x <= myGamePiece.x) {
				enemyGamePiece7.x += 2.25;
			} else if (enemyGamePiece7.x >= myGamePiece.x) {
				enemyGamePiece7.x -= 2.25;
			}
			if (enemyGamePiece7.y <= myGamePiece.y) {
				enemyGamePiece7.y += 2.25;
			} else if (enemyGamePiece7.y >= myGamePiece.y) {
				enemyGamePiece7.y -= 2.25;
			}
		} else if (RAND7 == 4) {
			if (enemyGamePiece7.x <=myGamePiece.x/2) {
				enemyGamePiece7.x += 1.57079632675;
			} else if (enemyGamePiece7.x >=myGamePiece.x/2) {
				enemyGamePiece7.x -= 1.57079632675;
			}
			if (enemyGamePiece7.y <=myGamePiece.y/2) {
				enemyGamePiece7.y += 1.57079632675;
			} else if (enemyGamePiece7.y >=myGamePiece.y/2) {
				enemyGamePiece7.y -= 1.57079632675;
			}
		} else if (RAND7 == 5) {
			if (enemyGamePiece7.x <= myGamePiece.x) {
				enemyGamePiece7.x += (myGameArea7.frameNo/1000);
			} else if (enemyGamePiece7.x >= myGamePiece.x) {
				enemyGamePiece7.x -= (myGameArea7.frameNo/1000);
			}
			if (enemyGamePiece7.y <= myGamePiece.y) {
				enemyGamePiece7.y += (myGameArea7.frameNo/1000);
			} else if (enemyGamePiece7.y >= myGamePiece.y) {
				enemyGamePiece7.y -= (myGameArea7.frameNo/1000);
			}
		} else if (RAND7 == 6) {
			if (enemyGamePiece7.x <= myGamePiece.x) {
				enemyGamePiece7.x += enemyGamePiece7.y/308;
			} else if (enemyGamePiece7.x >= myGamePiece.x) {
				enemyGamePiece7.x -= enemyGamePiece7.y/308;
			}
			if (enemyGamePiece7.y <= myGamePiece.y) {
				enemyGamePiece7.y += enemyGamePiece7.x/408;
			} else if (enemyGamePiece7.y >= myGamePiece.y) {
				enemyGamePiece7.y -= enemyGamePiece7.x/408;
			}
		} else if (RAND7 == 7) {
			if (myGameArea7.frameNo % 75 == 0) {
				if (enemyGamePiece7.x <= myGamePiece.x) {
					enemyGamePiece7.x += 50;
				} else if (enemyGamePiece7.x >= myGamePiece.x) {
					enemyGamePiece7.x -= 50;
				}
				if (enemyGamePiece7.y <= myGamePiece.y) {
					enemyGamePiece7.y += 50;
				} else if (enemyGamePiece7.y >= myGamePiece.y) {
					enemyGamePiece7.y -= 50;
				}
			}
		}
		if (myGameArea.frameNo % 350 == 0) {
			RAND8 = Math.floor(Math.random() * (6 - 1 + 1)) + 1;
		}
		if (RAND8 == 1) {
			if (enemyGamePiece8.x >= myGamePiece.x) {
				enemyGamePiece8.y -= 1;
			} else if (enemyGamePiece8.x <= myGamePiece.x) {
				enemyGamePiece8.y += 1;
			}
			if (enemyGamePiece8.y <= myGamePiece.y) {
				enemyGamePiece8.x -= 1;
			} else if (enemyGamePiece8.y >= myGamePiece.y) {
				enemyGamePiece8.x += 1;
			}
		} else if (RAND8 == 2) {
			if (enemyGamePiece8.x <= myGamePiece.x) {
				enemyGamePiece8.x += 2;
			} else if (enemyGamePiece8.x >= myGamePiece.x) {
				enemyGamePiece8.x -= 2;
			}
			if (enemyGamePiece8.y <= myGamePiece.y) {
				enemyGamePiece8.y += 2;
			} else if (enemyGamePiece8.y >= myGamePiece.y) {
				enemyGamePiece8.y -= 1;
			}
		} else if (RAND8 == 3) {
			if (enemyGamePiece8.x <= myGamePiece.x) {
				enemyGamePiece8.x += 2.25;
			} else if (enemyGamePiece8.x >= myGamePiece.x) {
				enemyGamePiece8.x -= 2.25;
			}
			if (enemyGamePiece8.y <= myGamePiece.y) {
				enemyGamePiece8.y += 2.25;
			} else if (enemyGamePiece8.y >= myGamePiece.y) {
				enemyGamePiece8.y -= 2.25;
			}
		} else if (RAND8 == 4) {
			if (enemyGamePiece8.x <=myGamePiece.x/2) {
				enemyGamePiece8.x += 1.57079632675;
			} else if (enemyGamePiece8.x >=myGamePiece.x/2) {
				enemyGamePiece8.x -= 1.57079632675;
			}
			if (enemyGamePiece8.y <=myGamePiece.y/2) {
				enemyGamePiece8.y += 1.57079632675;
			} else if (enemyGamePiece8.y >=myGamePiece.y/2) {
				enemyGamePiece8.y -= 1.57079632675;
			}
		} else if (RAND8 == 5) {
			if (enemyGamePiece8.x <= myGamePiece.x) {
				enemyGamePiece8.x += (myGameArea7.frameNo/1000);
			} else if (enemyGamePiece8.x >= myGamePiece.x) {
				enemyGamePiece8.x -= (myGameArea7.frameNo/1000);
			}
			if (enemyGamePiece8.y <= myGamePiece.y) {
				enemyGamePiece8.y += (myGameArea7.frameNo/1000);
			} else if (enemyGamePiece8.y >= myGamePiece.y) {
				enemyGamePiece8.y -= (myGameArea7.frameNo/1000);
			}
		} else if (RAND8 == 6) {
			if (enemyGamePiece8.x <= myGamePiece.x) {
				enemyGamePiece8.x += enemyGamePiece8.y/308;
			} else if (enemyGamePiece8.x >= myGamePiece.x) {
				enemyGamePiece8.x -= enemyGamePiece8.y/308;
			}
			if (enemyGamePiece8.y <= myGamePiece.y) {
				enemyGamePiece8.y += enemyGamePiece8.x/408;
			} else if (enemyGamePiece8.y >= myGamePiece.y) {
				enemyGamePiece8.y -= enemyGamePiece8.x/408;
			}
		} else if (RAND8 == 7) {
			if (myGameArea7.frameNo % 75 == 0) {
				if (enemyGamePiece8.x <= myGamePiece.x) {
					enemyGamePiece8.x += 50;
				} else if (enemyGamePiece8.x >= myGamePiece.x) {
					enemyGamePiece8.x -= 50;
				}
				if (enemyGamePiece8.y <= myGamePiece.y) {
					enemyGamePiece8.y += 50;
				} else if (enemyGamePiece8.y >= myGamePiece.y) {
					enemyGamePiece8.y -= 50;
				}
			}
		}
		//Escape Piece AI
		if (escapeGamePiece.x <= myGamePiece.x && escapeGamePiece.x > 150) {
			escapeGamePiece.x -= 8;
		} else if (escapeGamePiece.x >= myGamePiece.x && escapeGamePiece.x < 1188) {
			escapeGamePiece.x += 8;
		} else if (escapeGamePiece.x <= myGamePiece.x && escapeGamePiece.x < 150 && escapeGamePiece.y > 520 || escapeGamePiece.x >= myGamePiece.x && escapeGamePiece.x > 1188 && escapeGamePiece.y > 520) {
		} else if (escapeGamePiece.x <= myGamePiece.x && escapeGamePiece.x < 150 && escapeGamePiece.y > 520 || escapeGamePiece.x >= myGamePiece.x && escapeGamePiece.x > 1188 && escapeGamePiece.y > 520) {
			escapeGamePiece.y -= 8;
		} else if (escapeGamePiece.x <= myGamePiece.x && escapeGamePiece.x < 150 && escapeGamePiece.y < 100 || escapeGamePiece.x >= myGamePiece.x && escapeGamePiece.x > 1188 && escapeGamePiece.y < 100) {
			escapeGamePiece.y += 8;
		}
		if (escapeGamePiece.y <= myGamePiece.y && escapeGamePiece.y > 100) {
			escapeGamePiece.y -= 8;
		} else if (escapeGamePiece.y >= myGamePiece.y && escapeGamePiece.y < 520) {
			escapeGamePiece.y += 8;
		} else if (escapeGamePiece.y <= myGamePiece.y && escapeGamePiece.y < 100 && escapeGamePiece.x > 1188 || escapeGamePiece.y >= myGamePiece.y && escapeGamePiece.y > 520 && escapeGamePiece.x > 1188) {
			escapeGamePiece.x -= 8;
		} else if (escapeGamePiece.y <= myGamePiece.y && escapeGamePiece.y < 100 && escapeGamePiece.x < 150 || escapeGamePiece.y >= myGamePiece.y && escapeGamePiece.y > 520 && escapeGamePiece.x < 150) {
			escapeGamePiece.x -= 8;
		}
		if (escapeGamePiece.x == 1238 && escapeGamePiece.y == 520) {
			escapeGamePiece.y -= 20;
			escapeGamePiece.x -= 20;
		}
		if (escapeGamePiece.x == 1238 && escapeGamePiece.y == 100) {
			escapeGamePiece.y += 20;
			escapeGamePiece.x -= 20;
		}
		if (escapeGamePiece.x == 100 && escapeGamePiece.y == 520) {
			escapeGamePiece.y -= 20;
			escapeGamePiece.x += 20;
		}
		if (escapeGamePiece.x == 100 && escapeGamePiece.y == 100) {
			escapeGamePiece.y += 20;
			escapeGamePiece.x += 20;
		}
		if (escapeGamePiece.x > 1230 && escapeGamePiece.y > 520 && myGamePiece.x > 1000 && myGamePiece.x < 1338 || myGamePiece.y > 300 && myGamePiece.y < 500) {
			escapeGamePiece.x -= 10;
		}
		if (escapeGamePiece.x > 1230 && escapeGamePiece.y < 100 && myGamePiece.x > 1000 && myGamePiece.x < 1338 && myGamePiece.y < 500 && myGamePiece.y > 250) {
			escapeGamePiece.x -= 10;
		}
		if (escapeGamePiece.x < 100 && escapeGamePiece.y > 520 && myGamePiece.x < 500 && myGamePiece.x > 250 && myGamePiece.y > 300 && myGamePiece.y < 500) {
			escapeGamePiece.y -= 10;
		}
		if (escapeGamePiece.x < 100 && escapeGamePiece.y < 100 && myGamePiece.x < 500 && myGamePiece.x > 250 || myGamePiece.y < 500 && myGamePiece.y > 250) {
			escapeGamePiece.y += 10;
		}
		if (enemyGamePiece1.x > 100 && enemyGamePiece1.x < 500 && enemyGamePiece1.y > 50 && enemyGamePiece1.y < 300) {
			escapeGamePiece.x += 5;
			escapeGamePiece.y -= 4;
		}
		if (myGamePiece.x <=5) {
			myGamePiece.x += 5;
		}
		if (myGamePiece.x >1338) {
			myGamePiece.x -= 5;
		}
		if (myGamePiece.y <5) {
			myGamePiece.y +=5;
		}
		if (myGamePiece.y >620) {
			myGamePiece.y -= 5;
		}
		if (enemyGamePiece1.x <=5) {
			enemyGamePiece1.x += 5;
		}
		if (enemyGamePiece1.x >1338) {
			enemyGamePiece1.x -= 5;
		}
		if (enemyGamePiece1.y <5) {
			enemyGamePiece1.y +=5;
		}
		if (enemyGamePiece1.y >620) {
			enemyGamePiece1.y -= 5;
		}
		if (enemyGamePiece2.x <=5) {
			enemyGamePiece2.x += 5;
		}
		if (enemyGamePiece2.x >1338) {
			enemyGamePiece2.x -= 5;
		}
		if (enemyGamePiece2.y <5) {
			enemyGamePiece2.y +=5;
		}
		if (enemyGamePiece2.y >620) {
			enemyGamePiece2.y -= 5;
		}
		if (enemyGamePiece3.x <=5) {
			enemyGamePiece3.x += 5;
		}
		if (enemyGamePiece3.x >1338) {
			enemyGamePiece3.x -= 5;
		}
		if (enemyGamePiece3.y <0) {
			enemyGamePiece3.y +=5;
		}
		if (enemyGamePiece3.y >620) {
			enemyGamePiece3.y -= 5;
		}
		if (enemyGamePiece4.x <=5) {
			enemyGamePiece4.x += 5;
		}
		if (enemyGamePiece4.x >1338) {
			enemyGamePiece4.x -= 5;
		}
		if (enemyGamePiece4.y <0) {
			enemyGamePiece4.y +=5;
		}
		if (enemyGamePiece4.y >620) {
			enemyGamePiece4.y -= 5;
		}
		if (enemyGamePiece5.x <=5) {
			enemyGamePiece5.x += 5;
		}
		if (enemyGamePiece5.x >1338) {
			enemyGamePiece5.x -= 5;
		}
		if (enemyGamePiece5.y <0) {
			enemyGamePiece5.y +=5;
		}
		if (enemyGamePiece5.y >620) {
			enemyGamePiece5.y -= 5;
		}
		if (enemyGamePiece6.x <=5) {
			enemyGamePiece6.x += 5;
		}
		if (enemyGamePiece6.x >1338) {
			enemyGamePiece6.x -= 5;
		}
		if (enemyGamePiece6.y <0) {
			enemyGamePiece6.y +=5;
		}
		if (enemyGamePiece6.y >620) {
			enemyGamePiece6.y -= 5;
		}
		if (enemyGamePiece7.x <=5) {
			enemyGamePiece7.x += 5;
		}
		if (enemyGamePiece7.x >1338) {
			enemyGamePiece7.x -= 5;
		}
		if (enemyGamePiece7.y <0) {
			enemyGamePiece7.y +=5;
		}
		if (enemyGamePiece7.y >620) {
			enemyGamePiece7.y -= 5;
		}
		if (enemyGamePiece8.x <=5) {
			enemyGamePiece8.x += 5;
		}
		if (enemyGamePiece8.x >1338) {
			enemyGamePiece8.x -= 5;
		}
		if (enemyGamePiece8.y <0) {
			enemyGamePiece8.y +=5;
		}
		if (enemyGamePiece8.y >620) {
			enemyGamePiece8.y -= 5;
		}
		if (escapeGamePiece.x <=100) {
			escapeGamePiece.x += 15;
		}
		if (escapeGamePiece.x >1238) {
			escapeGamePiece.x -= 15;
		}
		if (escapeGamePiece.y <100) {
			escapeGamePiece.y += 15;
		}
		if (escapeGamePiece.y >520) {
			escapeGamePiece.y -= 15;
		}
    }
}
//Updates game area each frame to test if the player collided, moves the enemies, and moves the player.
function updateGameArea() {
	myGameArea.clear();
	myGameArea.frameNo += 1;
	myGamePiece.moveAngle = 0;
	myGamePiece.speed = 0;
    if (myGameArea.keys && myGameArea.keys[65]) {myGamePiece.moveAngle = -1; }
    if (myGameArea.keys && myGameArea.keys[68]) {myGamePiece.moveAngle = 1; }
    if (myGameArea.keys && myGameArea.keys[87]) {myGamePiece.speed = myGamePiece.speed + 2.5; }
    if (myGameArea.keys && myGameArea.keys[83]) {myGamePiece.speed = myGamePiece.speed - 2; }
	myGamePiece.newPos();	
    myGamePiece.update();
	if (myGameArea.frameNo % 1240 == 0) {
		myMusic.play();
	}
	myScore.text="You survived long enough to earn " + myGameArea.frameNo + " points.";
    myScore.update();
	myGamePiece.speedX = 0;
    myGamePiece.speedY = 0;
//Tests if the player has collided with enemies.
    if (myGamePiece.crashWith(enemyGamePiece1)) {
		mySound.play();
        myGameArea.stop();
		myMusic.stop();
	} else if (myGamePiece.crashWith(enemyGamePiece2)) {
		mySound.play();
		myGameArea.stop();
		myMusic.stop();
	} else if (myGamePiece.crashWith(enemyGamePiece3)) {
		mySound.play();
		myGameArea.stop();
		myMusic.stop();
	} else if (myGamePiece.crashWith(enemyGamePiece4)) {
		mySound.play();
		myGameArea.stop();
		myMusic.stop();
	} else if (myGamePiece.crashWith(enemyGamePiece5)) {
		mySound.play();
		myGameArea.stop();
		myMusic.stop();
	} else if (myGamePiece.crashWith(enemyGamePiece6)) {
		mySound.play();
		myGameArea.stop();
		myMusic.stop();
	} else if (myGamePiece.crashWith(enemyGamePiece7)) {
		mySound.play();
		myGameArea.stop();
		myMusic.stop();
	} else if (myGamePiece.crashWith(enemyGamePiece8)) {
		mySound.play();
		myGameArea.stop();
		myMusic.stop();
	} else if (myGamePiece.crashWith(escapeGamePiece)) {
		gameWin();
//If the player has not died yet...
    } else {
		//Clear game area.
        myGameArea.clear();
	    myGameArea.context.drawImage(bgImage, 10, 10);
		var canvas = document.getElementById("myCanvas");
		var ctx = canvas.getContext("2d");
		ctx.font = "25px Consolas";
		ctx.fillStyle="white";
		ctx.fillRect(0,0,200,100);
		var grd=ctx.createLinearGradient(0,0,200,0);
		grd.addColorStop(0,"red");
		grd.addColorStop(0.2,"orange");
		grd.addColorStop(0.4,"yellow");
		grd.addColorStop(0.6,"green");
		grd.addColorStop(0.8,"blue");
		grd.addColorStop(1,"purple");
		ctx.fillStyle=grd;
		ctx.fillText("Super Crazy",5,30);
		ctx.fillText("Coding Maniac",15,60);
		ctx.fillText("Deluxe Site 4",5,90);
		//Update all pieces.
        enemyGamePiece1.update();
		enemyGamePiece2.update();
		enemyGamePiece3.update();
		enemyGamePiece4.update();
		enemyGamePiece5.update();
		enemyGamePiece6.update();
		enemyGamePiece7.update();
		enemyGamePiece8.update();
		escapeGamePiece.update();
		myGamePiece.newPos();
        myGamePiece.update();
		//Piece 1 AI
		if (enemyGamePiece1.x >= myGamePiece.x) {
			enemyGamePiece1.y -= 2;
		} else if (enemyGamePiece1.x <= myGamePiece.x) {
			enemyGamePiece1.y += 2;
		}
		if (enemyGamePiece1.y <= myGamePiece.y) {
			enemyGamePiece1.x -= 2;
		} else if (enemyGamePiece1.y >= myGamePiece.y) {
			enemyGamePiece1.x += 2;
		}
		//Piece 2 AI
		if (enemyGamePiece2.x <= myGamePiece.x) {
			enemyGamePiece2.x += 3;
		} else if (enemyGamePiece2.x >= myGamePiece.x) {
			enemyGamePiece2.x -= 3;
		}
		if (enemyGamePiece2.y <= myGamePiece.y) {
			enemyGamePiece2.y += 3;
		} else if (enemyGamePiece2.y >= myGamePiece.y) {
			enemyGamePiece2.y -= 2;
		}
		//Piece 3 AI
		if (enemyGamePiece3.x <= myGamePiece.x) {
			enemyGamePiece3.x += 3.25;
		} else if (enemyGamePiece3.x >= myGamePiece.x) {
			enemyGamePiece3.x -= 3.25;
		}
		if (enemyGamePiece3.y <= myGamePiece.y) {
			enemyGamePiece3.y += 3.25;
		} else if (enemyGamePiece3.y >= myGamePiece.y) {
			enemyGamePiece3.y -= 3.25;
		}
		//Piece 4 AI
		if (enemyGamePiece4.x <=myGamePiece.x/2) {
			enemyGamePiece4.x += 2.57079632675;
		} else if (enemyGamePiece4.x >=myGamePiece.x/2) {
			enemyGamePiece4.x -= 2.57079632675;
		}
		if (enemyGamePiece4.y <=myGamePiece.y/2) {
			enemyGamePiece4.y += 2.57079632675;
		} else if (enemyGamePiece4.y >=myGamePiece.y/2) {
			enemyGamePiece4.y -= 2.57079632675;
		}
		//Piece 5 AI
		if (enemyGamePiece5.x <= myGamePiece.x) {
			enemyGamePiece5.x += (myGameArea.frameNo/1000)*2;
		} else if (enemyGamePiece5.x >= myGamePiece.x) {
			enemyGamePiece5.x -= (myGameArea.frameNo/1000)*2;
			}
		if (enemyGamePiece5.y <= myGamePiece.y) {
			enemyGamePiece5.y += (myGameArea.frameNo/1000)*2;
		} else if (enemyGamePiece5.y >= myGamePiece.y) {
			enemyGamePiece5.y -= (myGameArea.frameNo/1000)*2;
		}
		//Piece 6 AI
		if (enemyGamePiece6.x <= myGamePiece.x) {
			enemyGamePiece6.x += enemyGamePiece6.y/208;
		} else if (enemyGamePiece6.x >= myGamePiece.x) {
			enemyGamePiece6.x -= enemyGamePiece6.y/208;
		}
		if (enemyGamePiece6.y <= myGamePiece.y) {
			enemyGamePiece6.y += enemyGamePiece6.x/308;
		} else if (enemyGamePiece6.y >= myGamePiece.y) {
			enemyGamePiece6.y -= enemyGamePiece6.x/308;
		}
		//Piece 7 AI
		if (myGameArea.frameNo % 50 == 0) {
			if (enemyGamePiece7.x <= myGamePiece.x) {
				enemyGamePiece7.x += 50;
			} else if (enemyGamePiece7.x >= myGamePiece.x) {
				enemyGamePiece7.x -= 50;
			}
			if (enemyGamePiece7.y <= myGamePiece.y) {
				enemyGamePiece7.y += 50;
			} else if (enemyGamePiece7.y >= myGamePiece.y) {
				enemyGamePiece7.y -= 50;
			}
		}
		//Piece 8 AI
		if (myGameArea.frameNo % 250 == 0) {
			RAND1 = Math.floor(Math.random() * (6 - 1 + 1)) + 1;
		}
		if (RAND1 == 1) {
			if (enemyGamePiece8.x >= myGamePiece.x) {
				enemyGamePiece8.y -= 1;
			} else if (enemyGamePiece8.x <= myGamePiece.x) {
				enemyGamePiece8.y += 1;
			}
			if (enemyGamePiece8.y <= myGamePiece.y) {
				enemyGamePiece8.x -= 1;
			} else if (enemyGamePiece8.y >= myGamePiece.y) {
				enemyGamePiece8.x += 1;
			}
		} else if (RAND1 == 2) {
			if (enemyGamePiece8.x <= myGamePiece.x) {
				enemyGamePiece8.x += 2;
			} else if (enemyGamePiece8.x >= myGamePiece.x) {
				enemyGamePiece8.x -= 2;
			}
			if (enemyGamePiece8.y <= myGamePiece.y) {
				enemyGamePiece8.y += 2;
			} else if (enemyGamePiece8.y >= myGamePiece.y) {
				enemyGamePiece8.y -= 1;
			}
		} else if (RAND1 == 3) {
			if (enemyGamePiece8.x <= myGamePiece.x) {
				enemyGamePiece8.x += 2.25;
			} else if (enemyGamePiece8.x >= myGamePiece.x) {
				enemyGamePiece8.x -= 2.25;
			}
			if (enemyGamePiece8.y <= myGamePiece.y) {
				enemyGamePiece8.y += 2.25;
			} else if (enemyGamePiece8.y >= myGamePiece.y) {
				enemyGamePiece8.y -= 2.25;
			}
		} else if (RAND1 == 4) {
			if (enemyGamePiece8.x <=myGamePiece.x/2) {
				enemyGamePiece8.x += 1.57079632675;
			} else if (enemyGamePiece8.x >=myGamePiece.x/2) {
				enemyGamePiece8.x -= 1.57079632675;
			}
			if (enemyGamePiece8.y <=myGamePiece.y/2) {
				enemyGamePiece8.y += 1.57079632675;
			} else if (enemyGamePiece8.y >=myGamePiece.y/2) {
				enemyGamePiece8.y -= 1.57079632675;
			}
		} else if (RAND1 == 5) {
			if (enemyGamePiece8.x <= myGamePiece.x) {
				enemyGamePiece8.x += (myGameArea.frameNo/1000);
			} else if (enemyGamePiece8.x >= myGamePiece.x) {
				enemyGamePiece8.x -= (myGameArea.frameNo/1000);
			}
			if (enemyGamePiece8.y <= myGamePiece.y) {
				enemyGamePiece8.y += (myGameArea.frameNo/1000);
			} else if (enemyGamePiece8.y >= myGamePiece.y) {
				enemyGamePiece8.y -= (myGameArea.frameNo/1000);
			}
		} else if (RAND1 == 6) {
			if (enemyGamePiece8.x <= myGamePiece.x) {
				enemyGamePiece8.x += enemyGamePiece8.y/308;
			} else if (enemyGamePiece8.x >= myGamePiece.x) {
				enemyGamePiece8.x -= enemyGamePiece8.y/308;
			}
			if (enemyGamePiece8.y <= myGamePiece.y) {
				enemyGamePiece8.y += enemyGamePiece8.x/408;
			} else if (enemyGamePiece8.y >= myGamePiece.y) {
				enemyGamePiece8.y -= enemyGamePiece8.x/408;
			}
		} else if (RAND1 == 7) {
			if (myGameArea.frameNo % 75 == 0) {
				if (enemyGamePiece8.x <= myGamePiece.x) {
					enemyGamePiece8.x += 50;
				} else if (enemyGamePiece8.x >= myGamePiece.x) {
					enemyGamePiece8.x -= 50;
				}
				if (enemyGamePiece8.y <= myGamePiece.y) {
					enemyGamePiece8.y += 50;
				} else if (enemyGamePiece8.y >= myGamePiece.y) {
					enemyGamePiece8.y -= 50;
				}
			}
		}
		//Escape Piece AI
		if (escapeGamePiece.x <= myGamePiece.x && escapeGamePiece.x > 150) {
			escapeGamePiece.x -= 8;
		} else if (escapeGamePiece.x >= myGamePiece.x && escapeGamePiece.x < 1188) {
			escapeGamePiece.x += 8;
		} else if (escapeGamePiece.x <= myGamePiece.x && escapeGamePiece.x < 150 && escapeGamePiece.y > 520 || escapeGamePiece.x >= myGamePiece.x && escapeGamePiece.x > 1188 && escapeGamePiece.y > 520) {
			escapeGamePiece.y -= 8;
		} else if (escapeGamePiece.x <= myGamePiece.x && escapeGamePiece.x < 150 && escapeGamePiece.y < 100 || escapeGamePiece.x >= myGamePiece.x && escapeGamePiece.x > 1188 && escapeGamePiece.y < 100) {
			escapeGamePiece.y += 8;
		}
		if (escapeGamePiece.y <= myGamePiece.y && escapeGamePiece.y > 100) {
			escapeGamePiece.y -= 8;
		} else if (escapeGamePiece.y >= myGamePiece.y && escapeGamePiece.y < 520) {
			escapeGamePiece.y += 8;
		} else if (escapeGamePiece.y <= myGamePiece.y && escapeGamePiece.y < 100 && escapeGamePiece.x > 1188 || escapeGamePiece.y >= myGamePiece.y && escapeGamePiece.y > 520 && escapeGamePiece.x > 1188) {
			escapeGamePiece.x -= 8;
		} else if (escapeGamePiece.y <= myGamePiece.y && escapeGamePiece.y < 100 && escapeGamePiece.x < 150 || escapeGamePiece.y >= myGamePiece.y && escapeGamePiece.y > 520 && escapeGamePiece.x < 150) {
			escapeGamePiece.x -= 8;
		}
		if (escapeGamePiece.x == 1238 && escapeGamePiece.y == 520) {
			escapeGamePiece.y -= 20;
			escapeGamePiece.x -= 20;
		}
		if (escapeGamePiece.x == 1238 && escapeGamePiece.y == 100) {
			escapeGamePiece.y += 20;
			escapeGamePiece.x -= 20;
		}
		if (escapeGamePiece.x == 100 && escapeGamePiece.y == 520) {
			escapeGamePiece.y -= 20;
			escapeGamePiece.x += 20;
		}
		if (escapeGamePiece.x == 100 && escapeGamePiece.y == 100) {
			escapeGamePiece.y += 20;
			escapeGamePiece.x += 20;
		}
		if (escapeGamePiece.x > 1230 && escapeGamePiece.y > 520 && myGamePiece.x > 1000 && myGamePiece.x < 1338 || myGamePiece.y > 300 && myGamePiece.y < 500) {
			escapeGamePiece.x -= 10;
		}
		if (escapeGamePiece.x > 1230 && escapeGamePiece.y < 100 && myGamePiece.x > 1000 && myGamePiece.x < 1338 && myGamePiece.y < 500 && myGamePiece.y > 250) {
			escapeGamePiece.x -= 10;
		}
		if (escapeGamePiece.x < 100 && escapeGamePiece.y > 520 && myGamePiece.x < 500 && myGamePiece.x > 250 && myGamePiece.y > 300 && myGamePiece.y < 500) {
			escapeGamePiece.y -= 10;
		}
		if (escapeGamePiece.x < 100 && escapeGamePiece.y < 100 && myGamePiece.x < 500 && myGamePiece.x > 250 || myGamePiece.y < 500 && myGamePiece.y > 250) {
			escapeGamePiece.y += 10;
		}
		if (enemyGamePiece1.x > 100 && enemyGamePiece1.x < 500 && enemyGamePiece1.y > 50 && enemyGamePiece1.y < 300) {
			escapeGamePiece.x += 5;
			escapeGamePiece.y -= 4;
		}
		if (myGamePiece.x <=5) {
			myGamePiece.x += 5;
		}
		if (myGamePiece.x >1338) {
			myGamePiece.x -= 5;
		}
		if (myGamePiece.y <5) {
			myGamePiece.y +=5;
		}
		if (myGamePiece.y >620) {
			myGamePiece.y -= 5;
		}
		if (enemyGamePiece1.x <=5) {
			enemyGamePiece1.x += 5;
		}
		if (enemyGamePiece1.x >1338) {
			enemyGamePiece1.x -= 5;
		}
		if (enemyGamePiece1.y <5) {
			enemyGamePiece1.y +=5;
		}
		if (enemyGamePiece1.y >620) {
			enemyGamePiece1.y -= 5;
		}
		if (enemyGamePiece2.x <=5) {
			enemyGamePiece2.x += 5;
		}
		if (enemyGamePiece2.x >1338) {
			enemyGamePiece2.x -= 5;
		}
		if (enemyGamePiece2.y <5) {
			enemyGamePiece2.y +=5;
		}
		if (enemyGamePiece2.y >620) {
			enemyGamePiece2.y -= 5;
		}
		if (enemyGamePiece3.x <=5) {
			enemyGamePiece3.x += 5;
		}
		if (enemyGamePiece3.x >1338) {
			enemyGamePiece3.x -= 5;
		}
		if (enemyGamePiece3.y <0) {
			enemyGamePiece3.y +=5;
		}
		if (enemyGamePiece3.y >620) {
			enemyGamePiece3.y -= 5;
		}
		if (enemyGamePiece4.x <=5) {
			enemyGamePiece4.x += 5;
		}
		if (enemyGamePiece4.x >1338) {
			enemyGamePiece4.x -= 5;
		}
		if (enemyGamePiece4.y <0) {
			enemyGamePiece4.y +=5;
		}
		if (enemyGamePiece4.y >620) {
			enemyGamePiece4.y -= 5;
		}
		if (enemyGamePiece5.x <=5) {
			enemyGamePiece5.x += 5;
		}
		if (enemyGamePiece5.x >1338) {
			enemyGamePiece5.x -= 5;
		}
		if (enemyGamePiece5.y <0) {
			enemyGamePiece5.y +=5;
		}
		if (enemyGamePiece5.y >620) {
			enemyGamePiece5.y -= 5;
		}
		if (enemyGamePiece6.x <=5) {
			enemyGamePiece6.x += 5;
		}
		if (enemyGamePiece6.x >1338) {
			enemyGamePiece6.x -= 5;
		}
		if (enemyGamePiece6.y <0) {
			enemyGamePiece6.y +=5;
		}
		if (enemyGamePiece6.y >620) {
			enemyGamePiece6.y -= 5;
		}
		if (enemyGamePiece7.x <=5) {
			enemyGamePiece7.x += 5;
		}
		if (enemyGamePiece7.x >1338) {
			enemyGamePiece7.x -= 5;
		}
		if (enemyGamePiece7.y <0) {
			enemyGamePiece7.y +=5;
		}
		if (enemyGamePiece7.y >620) {
			enemyGamePiece7.y -= 5;
		}
		if (enemyGamePiece8.x <=5) {
			enemyGamePiece8.x += 5;
		}
		if (enemyGamePiece8.x >1338) {
			enemyGamePiece8.x -= 5;
		}
		if (enemyGamePiece8.y <0) {
			enemyGamePiece8.y +=5;
		}
		if (enemyGamePiece8.y >620) {
			enemyGamePiece8.y -= 5;
		}
		if (escapeGamePiece.x <=100) {
			escapeGamePiece.x += 15;
		}
		if (escapeGamePiece.x >1238) {
			escapeGamePiece.x -= 15;
		}
		if (escapeGamePiece.y <100) {
			escapeGamePiece.y += 15;
		}
		if (escapeGamePiece.y >520) {
			escapeGamePiece.y -= 15;
		}
		//Test if the game is over.
		if (myGameArea.frameNo > 5000) {
			gameWin();
		}
    }
}
function updateGameArea8() {
	myGameArea8.clear();
	myGameArea8.frameNo += 1;
	myGamePiece.moveAngle = 0;
	myGamePiece.speed = 0;
    if (myGameArea8.keys && myGameArea8.keys[65]) {myGamePiece.moveAngle = -1; }
    if (myGameArea8.keys && myGameArea8.keys[68]) {myGamePiece.moveAngle = 1; }
    if (myGameArea8.keys && myGameArea8.keys[87]) {myGamePiece.speed = myGamePiece.speed + 2.5; }
    if (myGameArea8.keys && myGameArea8.keys[83]) {myGamePiece.speed = myGamePiece.speed - 2; }
	myGamePiece.newPos();
    myGamePiece.update();
	myScore.text="You survived long enough to earn " + myGameArea8.frameNo + " points.";
    myScore.update();
	myGamePiece.speedX = 0;
    myGamePiece.speedY = 0;
//Tests if the player has collided with enemies.
    if (myGamePiece.crashWith(enemyGamePiece1)) {
		mySound.play();
        myGameArea8.stop();
		myMusic.stop();
	} else if (myGamePiece.crashWith(enemyGamePiece2)) {
		mySound.play();
		myGameArea8.stop();
		myMusic.stop();
	} else if (myGamePiece.crashWith(enemyGamePiece3)) {
		mySound.play();
		myGameArea8.stop();
		myMusic.stop();
	} else if (myGamePiece.crashWith(enemyGamePiece4)) {
		mySound.play();
		myGameArea8.stop();
		myMusic.stop();
	} else if (myGamePiece.crashWith(enemyGamePiece5)) {
		mySound.play();
		myGameArea8.stop();
		myMusic.stop();
	} else if (myGamePiece.crashWith(enemyGamePiece6)) {
		mySound.play();
		myGameArea8.stop();
		myMusic.stop();
	} else if (myGamePiece.crashWith(enemyGamePiece7)) {
		mySound.play();
		myGameArea8.stop();
		myMusic.stop();
	} else if (myGamePiece.crashWith(enemyGamePiece8)) {
		mySound.play();
		myGameArea8.stop();
		myMusic.stop();
	} else if (myGamePiece.crashWith(escapeGamePiece)) {
		gameWin8();
	//If the player has not died yet...
    } else {
		//Clear game area.
        myGameArea8.clear();
		//Redraw Background
	    myGameArea8.context.drawImage(bgImage, 10, 10);
		//Redraw Logo
		var canvas = document.getElementById("myCanvas");
		var ctx = canvas.getContext("2d");
		ctx.font = "25px Consolas";
		ctx.fillStyle="white";
		ctx.fillRect(0,0,200,100);
		var grd=ctx.createLinearGradient(0,0,200,0);
		grd.addColorStop(0,"red");
		grd.addColorStop(0.2,"orange");
		grd.addColorStop(0.4,"yellow");
		grd.addColorStop(0.6,"green");
		grd.addColorStop(0.8,"blue");
		grd.addColorStop(1,"purple");
		ctx.fillStyle=grd;
		ctx.fillText("Super Crazy",5,30);
		ctx.fillText("Coding Maniac",15,60);
		ctx.fillText("Deluxe Site 4",5,90);
		//Update all pieces.
        enemyGamePiece1.update();
		enemyGamePiece2.update();
		enemyGamePiece3.update();
		enemyGamePiece4.update();
		enemyGamePiece5.update();
		enemyGamePiece6.update();
		enemyGamePiece7.update();
		enemyGamePiece8.update();
		escapeGamePiece.update();
		myGamePiece.newPos(); 
        myGamePiece.update();
		if (enemyGamePiece1.x <= myGamePiece.x) {
			enemyGamePiece1.x += (myGameArea8.frameNo/750)*1.5;
		} else if (enemyGamePiece1.x >= myGamePiece.x) {
			enemyGamePiece1.x -= (myGameArea8.frameNo/750)*1.5;
		}
		if (enemyGamePiece1.y <= myGamePiece.y) {
			enemyGamePiece1.y += (myGameArea8.frameNo/750)*1.5;
		} else if (enemyGamePiece1.y >= myGamePiece.y) {
			enemyGamePiece1.y -= (myGameArea8.frameNo/750)*1.5;
		}
		//Piece 2 AI
		if (enemyGamePiece2.x <= myGamePiece.x) {
			enemyGamePiece2.x += (myGameArea8.frameNo/750)*1.5;
		} else if (enemyGamePiece2.x >= myGamePiece.x) {
			enemyGamePiece2.x -= (myGameArea8.frameNo/750)*1.5;
			}
		if (enemyGamePiece2.y <= myGamePiece.y) {
			enemyGamePiece2.y += (myGameArea8.frameNo/750)*1.5;
		} else if (enemyGamePiece2.y >= myGamePiece.y) {
			enemyGamePiece2.y -= (myGameArea8.frameNo/750)*1.5;
		}
		//Piece 3 AI
		if (enemyGamePiece3.x <= myGamePiece.x) {
			enemyGamePiece3.x += (myGameArea8.frameNo/750)*1.5;
		} else if (enemyGamePiece3.x >= myGamePiece.x) {
			enemyGamePiece3.x -= (myGameArea8.frameNo/750)*1.5;
			}
		if (enemyGamePiece3.y <= myGamePiece.y) {
			enemyGamePiece3.y += (myGameArea8.frameNo/750)*1.5;
		} else if (enemyGamePiece3.y >= myGamePiece.y) {
			enemyGamePiece3.y -= (myGameArea8.frameNo/750)*1.5;
		}
		//Piece 4 AI
		if (enemyGamePiece4.x <= myGamePiece.x) {
			enemyGamePiece4.x += (myGameArea8.frameNo/750)*1.5;
		} else if (enemyGamePiece4.x >= myGamePiece.x) {
			enemyGamePiece4.x -= (myGameArea8.frameNo/750)*1.5;
			}
		if (enemyGamePiece4.y <= myGamePiece.y) {
			enemyGamePiece4.y += (myGameArea8.frameNo/750)*1.5;
		} else if (enemyGamePiece4.y >= myGamePiece.y) {
			enemyGamePiece4.y -= (myGameArea8.frameNo/750)*1.5;
		}
		//Piece 5 AI
		if (enemyGamePiece5.x <= myGamePiece.x) {
			enemyGamePiece5.x += (myGameArea8.frameNo/750)*1.5;
		} else if (enemyGamePiece5.x >= myGamePiece.x) {
			enemyGamePiece5.x -= (myGameArea8.frameNo/750)*1.5;
			}
		if (enemyGamePiece5.y <= myGamePiece.y) {
			enemyGamePiece5.y += (myGameArea8.frameNo/750)*1.5;
		} else if (enemyGamePiece5.y >= myGamePiece.y) {
			enemyGamePiece5.y -= (myGameArea8.frameNo/750)*1.5;
		}
		//Piece 6 AI
		if (enemyGamePiece6.x <= myGamePiece.x) {
			enemyGamePiece6.x += (myGameArea8.frameNo/750)*1.5;
		} else if (enemyGamePiece6.x >= myGamePiece.x) {
			enemyGamePiece6.x -= (myGameArea8.frameNo/750)*1.5;
			}
		if (enemyGamePiece6.y <= myGamePiece.y) {
			enemyGamePiece6.y += (myGameArea8.frameNo/750)*1.5;
		} else if (enemyGamePiece6.y >= myGamePiece.y) {
			enemyGamePiece6.y -= (myGameArea8.frameNo/750)*1.5;
		}
		//Piece 7 AI
		if (enemyGamePiece7.x <= myGamePiece.x) {
			enemyGamePiece7.x += (myGameArea8.frameNo/750)*1.5;
		} else if (enemyGamePiece7.x >= myGamePiece.x) {
			enemyGamePiece7.x -= (myGameArea8.frameNo/750)*1.5;
		}
		if (enemyGamePiece7.y <= myGamePiece.y) {
			enemyGamePiece7.y += (myGameArea8.frameNo/750)*1.5;
		} else if (enemyGamePiece7.y >= myGamePiece.y) {
			enemyGamePiece7.y -= (myGameArea8.frameNo/750)*1.5;
		}
		//Piece 8 AI
		if (myGameArea8.frameNo % 250 == 0) {
			RAND1 = Math.floor(Math.random() * (6 - 1 + 1)) + 1;
		}
		if (RAND1 == 1) {
			if (enemyGamePiece8.x >= myGamePiece.x) {
				enemyGamePiece8.y -= 1;
			} else if (enemyGamePiece8.x <= myGamePiece.x) {
				enemyGamePiece8.y += 1;
			}
			if (enemyGamePiece8.y <= myGamePiece.y) {
				enemyGamePiece8.x -= 1;
			} else if (enemyGamePiece8.y >= myGamePiece.y) {
				enemyGamePiece8.x += 1;
			}
		} else if (RAND1 == 2) {
			if (enemyGamePiece8.x <= myGamePiece.x) {
				enemyGamePiece8.x += 2;
			} else if (enemyGamePiece8.x >= myGamePiece.x) {
				enemyGamePiece8.x -= 2;
			}
			if (enemyGamePiece8.y <= myGamePiece.y) {
				enemyGamePiece8.y += 2;
			} else if (enemyGamePiece8.y >= myGamePiece.y) {
				enemyGamePiece8.y -= 1;
			}
		} else if (RAND1 == 3) {
			if (enemyGamePiece8.x <= myGamePiece.x) {
				enemyGamePiece8.x += 2.25;
			} else if (enemyGamePiece8.x >= myGamePiece.x) {
				enemyGamePiece8.x -= 2.25;
			}
			if (enemyGamePiece8.y <= myGamePiece.y) {
				enemyGamePiece8.y += 2.25;
			} else if (enemyGamePiece8.y >= myGamePiece.y) {
				enemyGamePiece8.y -= 2.25;
			}
		} else if (RAND1 == 4) {
			if (enemyGamePiece8.x <=myGamePiece.x/2) {
				enemyGamePiece8.x += 1.57079632675;
			} else if (enemyGamePiece8.x >=myGamePiece.x/2) {
				enemyGamePiece8.x -= 1.57079632675;
			}
			if (enemyGamePiece8.y <=myGamePiece.y/2) {
				enemyGamePiece8.y += 1.57079632675;
			} else if (enemyGamePiece8.y >=myGamePiece.y/2) {
				enemyGamePiece8.y -= 1.57079632675;
			}
		} else if (RAND1 == 5) {
			if (enemyGamePiece8.x <= myGamePiece.x) {
				enemyGamePiece8.x += (myGameArea.frameNo/1000);
			} else if (enemyGamePiece8.x >= myGamePiece.x) {
				enemyGamePiece8.x -= (myGameArea.frameNo/1000);
			}
			if (enemyGamePiece8.y <= myGamePiece.y) {
				enemyGamePiece8.y += (myGameArea.frameNo/1000);
			} else if (enemyGamePiece8.y >= myGamePiece.y) {
				enemyGamePiece8.y -= (myGameArea.frameNo/1000);
			}
		} else if (RAND1 == 6) {
			if (enemyGamePiece8.x <= myGamePiece.x) {
				enemyGamePiece8.x += enemyGamePiece8.y/308;
			} else if (enemyGamePiece8.x >= myGamePiece.x) {
				enemyGamePiece8.x -= enemyGamePiece8.y/308;
			}
			if (enemyGamePiece8.y <= myGamePiece.y) {
				enemyGamePiece8.y += enemyGamePiece8.x/408;
			} else if (enemyGamePiece8.y >= myGamePiece.y) {
				enemyGamePiece8.y -= enemyGamePiece8.x/408;
			}
		} else if (RAND1 == 7) {
			if (myGameArea8.frameNo % 75 == 0) {
				if (enemyGamePiece8.x <= myGamePiece.x) {
					enemyGamePiece8.x += 50;
				} else if (enemyGamePiece8.x >= myGamePiece.x) {
					enemyGamePiece8.x -= 50;
				}
				if (enemyGamePiece8.y <= myGamePiece.y) {
					enemyGamePiece8.y += 50;
				} else if (enemyGamePiece8.y >= myGamePiece.y) {
					enemyGamePiece8.y -= 50;
				}
			}
		}
		//Escape Piece AI
		if (escapeGamePiece.x <= myGamePiece.x && escapeGamePiece.x > 150) {
			escapeGamePiece.x -= 8;
		} else if (escapeGamePiece.x >= myGamePiece.x && escapeGamePiece.x < 1188) {
			escapeGamePiece.x += 8;
		} else if (escapeGamePiece.x <= myGamePiece.x && escapeGamePiece.x < 150 && escapeGamePiece.y > 520 || escapeGamePiece.x >= myGamePiece.x && escapeGamePiece.x > 1188 && escapeGamePiece.y > 520) {
			escapeGamePiece.y -= 8;
		} else if (escapeGamePiece.x <= myGamePiece.x && escapeGamePiece.x < 150 && escapeGamePiece.y < 100 || escapeGamePiece.x >= myGamePiece.x && escapeGamePiece.x > 1188 && escapeGamePiece.y < 100) {
			escapeGamePiece.y += 8;
		}
		if (escapeGamePiece.y <= myGamePiece.y && escapeGamePiece.y > 100) {
			escapeGamePiece.y -= 8;
		} else if (escapeGamePiece.y >= myGamePiece.y && escapeGamePiece.y < 520) {
			escapeGamePiece.y += 8;
		} else if (escapeGamePiece.y <= myGamePiece.y && escapeGamePiece.y < 100 && escapeGamePiece.x > 1188 || escapeGamePiece.y >= myGamePiece.y && escapeGamePiece.y > 520 && escapeGamePiece.x > 1188) {
			escapeGamePiece.x -= 8;
		} else if (escapeGamePiece.y <= myGamePiece.y && escapeGamePiece.y < 100 && escapeGamePiece.x < 150 || escapeGamePiece.y >= myGamePiece.y && escapeGamePiece.y > 520 && escapeGamePiece.x < 150) {
			escapeGamePiece.x -= 8;
		}
		if (escapeGamePiece.x == 1238 && escapeGamePiece.y == 520) {
			escapeGamePiece.y -= 20;
			escapeGamePiece.x -= 20;
		}
		if (escapeGamePiece.x == 1238 && escapeGamePiece.y == 100) {
			escapeGamePiece.y += 20;
			escapeGamePiece.x -= 20;
		}
		if (escapeGamePiece.x == 100 && escapeGamePiece.y == 520) {
			escapeGamePiece.y -= 20;
			escapeGamePiece.x += 20;
		}
		if (escapeGamePiece.x == 100 && escapeGamePiece.y == 100) {
			escapeGamePiece.y += 20;
			escapeGamePiece.x += 20;
		}
		if (escapeGamePiece.x > 1230 && escapeGamePiece.y > 520 && myGamePiece.x > 1000 && myGamePiece.x < 1338 || myGamePiece.y > 300 && myGamePiece.y < 500) {
			escapeGamePiece.x -= 10;
		}
		if (escapeGamePiece.x > 1230 && escapeGamePiece.y < 100 && myGamePiece.x > 1000 && myGamePiece.x < 1338 && myGamePiece.y < 500 && myGamePiece.y > 250) {
			escapeGamePiece.x -= 10;
		}
		if (escapeGamePiece.x < 100 && escapeGamePiece.y > 520 && myGamePiece.x < 500 && myGamePiece.x > 250 && myGamePiece.y > 300 && myGamePiece.y < 500) {
			escapeGamePiece.y -= 10;
		}
		if (escapeGamePiece.x < 100 && escapeGamePiece.y < 100 && myGamePiece.x < 500 && myGamePiece.x > 250 || myGamePiece.y < 500 && myGamePiece.y > 250) {
			escapeGamePiece.y += 10;
		}
		if (enemyGamePiece1.x > 100 && enemyGamePiece1.x < 500 && enemyGamePiece1.y > 50 && enemyGamePiece1.y < 300) {
			escapeGamePiece.x += 5;
			escapeGamePiece.y -= 4;
		}
		if (myGamePiece.x <=5) {
			myGamePiece.x += 5;
		}
		if (myGamePiece.x >1338) {
			myGamePiece.x -= 5;
		}
		if (myGamePiece.y <5) {
			myGamePiece.y +=5;
		}
		if (myGamePiece.y >620) {
			myGamePiece.y -= 5;
		}
		if (enemyGamePiece1.x <=5) {
			enemyGamePiece1.x += 5;
		}
		if (enemyGamePiece1.x >1338) {
			enemyGamePiece1.x -= 5;
		}
		if (enemyGamePiece1.y <5) {
			enemyGamePiece1.y +=5;
		}
		if (enemyGamePiece1.y >620) {
			enemyGamePiece1.y -= 5;
		}
		if (enemyGamePiece2.x <=5) {
			enemyGamePiece2.x += 5;
		}
		if (enemyGamePiece2.x >1338) {
			enemyGamePiece2.x -= 5;
		}
		if (enemyGamePiece2.y <5) {
			enemyGamePiece2.y +=5;
		}
		if (enemyGamePiece2.y >620) {
			enemyGamePiece2.y -= 5;
		}
		if (enemyGamePiece3.x <=5) {
			enemyGamePiece3.x += 5;
		}
		if (enemyGamePiece3.x >1338) {
			enemyGamePiece3.x -= 5;
		}
		if (enemyGamePiece3.y <0) {
			enemyGamePiece3.y +=5;
		}
		if (enemyGamePiece3.y >620) {
			enemyGamePiece3.y -= 5;
		}
		if (enemyGamePiece4.x <=5) {
			enemyGamePiece4.x += 5;
		}
		if (enemyGamePiece4.x >1338) {
			enemyGamePiece4.x -= 5;
		}
		if (enemyGamePiece4.y <0) {
			enemyGamePiece4.y +=5;
		}
		if (enemyGamePiece4.y >620) {
			enemyGamePiece4.y -= 5;
		}
		if (enemyGamePiece5.x <=5) {
			enemyGamePiece5.x += 5;
		}
		if (enemyGamePiece5.x >1338) {
			enemyGamePiece5.x -= 5;
		}
		if (enemyGamePiece5.y <0) {
			enemyGamePiece5.y +=5;
		}
		if (enemyGamePiece5.y >620) {
			enemyGamePiece5.y -= 5;
		}
		if (enemyGamePiece6.x <=5) {
			enemyGamePiece6.x += 5;
		}
		if (enemyGamePiece6.x >1338) {
			enemyGamePiece6.x -= 5;
		}
		if (enemyGamePiece6.y <0) {
			enemyGamePiece6.y +=5;
		}
		if (enemyGamePiece6.y >620) {
			enemyGamePiece6.y -= 5;
		}
		if (enemyGamePiece7.x <=5) {
			enemyGamePiece7.x += 5;
		}
		if (enemyGamePiece7.x >1338) {
			enemyGamePiece7.x -= 5;
		}
		if (enemyGamePiece7.y <0) {
			enemyGamePiece7.y +=5;
		}
		if (enemyGamePiece7.y >620) {
			enemyGamePiece7.y -= 5;
		}
		if (enemyGamePiece8.x <=5) {
			enemyGamePiece8.x += 5;
		}
		if (enemyGamePiece8.x >1338) {
			enemyGamePiece8.x -= 5;
		}
		if (enemyGamePiece8.y <0) {
			enemyGamePiece8.y +=5;
		}
		if (enemyGamePiece8.y >620) {
			enemyGamePiece8.y -= 5;
		}
		if (escapeGamePiece.x <=100) {
			escapeGamePiece.x += 15;
		}
		if (escapeGamePiece.x >1238) {
			escapeGamePiece.x -= 15;
		}
		if (escapeGamePiece.y <100) {
			escapeGamePiece.y += 15;
		}
		if (escapeGamePiece.y >520) {
			escapeGamePiece.y -= 15;
		}
    }
}
//Updates game area each frame to test if the player collided, moves the enemies, and moves the player.
function updateGameArea5() {
	myGameArea5.clear();
	myGameArea5.frameNo += 1;
	myGamePiece.moveAngle = 0;
	myGamePiece.speed = 0;
    if (myGameArea5.keys && myGameArea5.keys[65]) {myGamePiece.moveAngle = -1; }
    if (myGameArea5.keys && myGameArea5.keys[68]) {myGamePiece.moveAngle = 1; }
    if (myGameArea5.keys && myGameArea5.keys[87]) {myGamePiece.speed = myGamePiece.speed + 2.5; }
    if (myGameArea5.keys && myGameArea5.keys[83]) {myGamePiece.speed = myGamePiece.speed - 2; }
	myGamePiece.newPos();	
    myGamePiece.update();
	myScore.text="You survived long enough to earn " + myGameArea5.frameNo + " points.";
    myScore.update();
	myGamePiece.speedX = 0;
    myGamePiece.speedY = 0;
//Tests if the player has collided with enemies.
    if (myGamePiece.crashWith(enemyGamePiece1)) {
		mySound.play();
        myGameArea5.stop();
		myMusic.stop();
	} else if (myGamePiece.crashWith(enemyGamePiece2)) {
		mySound.play();
		myGameArea5.stop();
		myMusic.stop();
	} else if (myGamePiece.crashWith(enemyGamePiece3)) {
		mySound.play();
		myGameArea5.stop();
		myMusic.stop();
	} else if (myGamePiece.crashWith(enemyGamePiece4)) {
		mySound.play();
		myGameArea5.stop();
		myMusic.stop();
	} else if (myGamePiece.crashWith(enemyGamePiece5)) {
		mySound.play();
		myGameArea5.stop();
		myMusic.stop();
	} else if (myGamePiece.crashWith(enemyGamePiece6)) {
		mySound.play();
		myGameArea5.stop();
		myMusic.stop();
	} else if (myGamePiece.crashWith(enemyGamePiece7)) {
		mySound.play();
		myGameArea5.stop();
		myMusic.stop();
	} else if (myGamePiece.crashWith(enemyGamePiece8)) {
		mySound.play();
		myGameArea5.stop();
		myMusic.stop();
	} else if (myGamePiece.crashWith(escapeGamePiece)) {
		gameWin5();
//If the player has not died yet...
    } else {
		//Clear game area.
        myGameArea5.clear();
	    myGameArea5.context.drawImage(bgImage, 10, 10);
		var canvas = document.getElementById("myCanvas");
		var ctx = canvas.getContext("2d");
		ctx.font = "25px Consolas";
		ctx.fillStyle="white";
		ctx.fillRect(0,0,200,100);
		var grd=ctx.createLinearGradient(0,0,200,0);
		grd.addColorStop(0,"red");
		grd.addColorStop(0.2,"orange");
		grd.addColorStop(0.4,"yellow");
		grd.addColorStop(0.6,"green");
		grd.addColorStop(0.8,"blue");
		grd.addColorStop(1,"purple");
		ctx.fillStyle=grd;
		ctx.fillText("Super Crazy",5,30);
		ctx.fillText("Coding Maniac",15,60);
		ctx.fillText("Deluxe Site 4",5,90);
		//Update all pieces.
        enemyGamePiece1.update();
		enemyGamePiece2.update();
		enemyGamePiece3.update();
		enemyGamePiece4.update();
		enemyGamePiece5.update();
		enemyGamePiece6.update();
		enemyGamePiece7.update();
		enemyGamePiece8.update();
		escapeGamePiece.update();
		myGamePiece.newPos(); 
        myGamePiece.update();
		//Piece 1 AI
		if (enemyGamePiece1.x >= myGamePiece.x) {
			enemyGamePiece1.y -= 2.5;
		} else if (enemyGamePiece1.x <= myGamePiece.x) {
			enemyGamePiece1.y += 2.5;
		}
		if (enemyGamePiece1.y <= myGamePiece.y) {
			enemyGamePiece1.x -= 2.5;
		} else if (enemyGamePiece1.y >= myGamePiece.y) {
			enemyGamePiece1.x += 2.5;
		}
		//Piece 2 AI
		if (enemyGamePiece2.x <= myGamePiece.x) {
			enemyGamePiece2.x += 2.5;
		} else if (enemyGamePiece2.x >= myGamePiece.x) {
			enemyGamePiece2.x -= 2.5;
		}
		if (enemyGamePiece2.y <= myGamePiece.y) {
			enemyGamePiece2.y += 2.5;
		} else if (enemyGamePiece2.y >= myGamePiece.y) {
			enemyGamePiece2.y -= 2.5;
		}
		//Piece 3 AI
		if (enemyGamePiece3.x <= myGamePiece.x) {
			enemyGamePiece3.x += 3.25;
		} else if (enemyGamePiece3.x >= myGamePiece.x) {
			enemyGamePiece3.x -= 3.25;
		}
		if (enemyGamePiece3.y <= myGamePiece.y) {
			enemyGamePiece3.y += 3.25;
		} else if (enemyGamePiece3.y >= myGamePiece.y) {
			enemyGamePiece3.y -= 3.25;
		}
		//Piece 4 AI
		if (enemyGamePiece4.x <=myGamePiece.x/2) {
			enemyGamePiece4.x += 3.07079632675;
		} else if (enemyGamePiece4.x >=myGamePiece.x/2) {
			enemyGamePiece4.x -= 3.07079632675;
		}
		if (enemyGamePiece4.y <=myGamePiece.y/2) {
			enemyGamePiece4.y += 3.07079632675;
		} else if (enemyGamePiece4.y >=myGamePiece.y/2) {
			enemyGamePiece4.y -= 3.07079632675;
		}
		//Piece 5 AI
		if (enemyGamePiece5.x <= myGamePiece.x) {
			enemyGamePiece5.x += (myGameArea5.frameNo/1000)*2;
		} else if (enemyGamePiece5.x >= myGamePiece.x) {
			enemyGamePiece5.x -= (myGameArea5.frameNo/1000)*2;
			}
		if (enemyGamePiece5.y <= myGamePiece.y) {
			enemyGamePiece5.y += (myGameArea5.frameNo/1000)*2;
		} else if (enemyGamePiece5.y >= myGamePiece.y) {
			enemyGamePiece5.y -= (myGameArea5.frameNo/1000)*2;
		}
		//Piece 6 AI
		if (enemyGamePiece6.x <= myGamePiece.x) {
			enemyGamePiece6.x += enemyGamePiece6.y/158;
		} else if (enemyGamePiece6.x >= myGamePiece.x) {
			enemyGamePiece6.x -= enemyGamePiece6.y/158;
		}
		if (enemyGamePiece6.y <= myGamePiece.y) {
			enemyGamePiece6.y += enemyGamePiece6.x/258;
		} else if (enemyGamePiece6.y >= myGamePiece.y) {
			enemyGamePiece6.y -= enemyGamePiece6.x/258;
		}
		//Piece 7 AI
		if (myGameArea5.frameNo % 25 == 0) {
			if (enemyGamePiece7.x <= myGamePiece.x) {
				enemyGamePiece7.x += 50;
			} else if (enemyGamePiece7.x >= myGamePiece.x) {
				enemyGamePiece7.x -= 50;
			}
			if (enemyGamePiece7.y <= myGamePiece.y) {
				enemyGamePiece7.y += 50;
			} else if (enemyGamePiece7.y >= myGamePiece.y) {
				enemyGamePiece7.y -= 50;
			}
		}
		//Piece 8 AI
		if (myGameArea5.frameNo % 250 == 0) {
			RAND1 = Math.floor(Math.random() * (6 - 1 + 1)) + 1;
		}
		if (RAND1 == 1) {
			if (enemyGamePiece8.x >= myGamePiece.x) {
				enemyGamePiece8.y -= 1.5;
			} else if (enemyGamePiece8.x <= myGamePiece.x) {
				enemyGamePiece8.y += 1.5;
			}
			if (enemyGamePiece8.y <= myGamePiece.y) {
				enemyGamePiece8.x -= 1.5;
			} else if (enemyGamePiece8.y >= myGamePiece.y) {
				enemyGamePiece8.x += 1.5;
			}
		} else if (RAND1 == 2) {
			if (enemyGamePiece8.x <= myGamePiece.x) {
				enemyGamePiece8.x += 2.5;
			} else if (enemyGamePiece8.x >= myGamePiece.x) {
				enemyGamePiece8.x -= 2.5;
			}
			if (enemyGamePiece8.y <= myGamePiece.y) {
				enemyGamePiece8.y += 2.5;
			} else if (enemyGamePiece8.y >= myGamePiece.y) {
				enemyGamePiece8.y -= 1.5;
			}
		} else if (RAND1 == 3) {
			if (enemyGamePiece8.x <= myGamePiece.x) {
				enemyGamePiece8.x += 2.75;
			} else if (enemyGamePiece8.x >= myGamePiece.x) {
				enemyGamePiece8.x -= 2.75;
			}
			if (enemyGamePiece8.y <= myGamePiece.y) {
				enemyGamePiece8.y += 2.75;
			} else if (enemyGamePiece8.y >= myGamePiece.y) {
				enemyGamePiece8.y -= 2.75;
			}
		} else if (RAND1 == 4) {
			if (enemyGamePiece8.x <=myGamePiece.x/2) {
				enemyGamePiece8.x += 2.07079632675;
			} else if (enemyGamePiece8.x >=myGamePiece.x/2) {
				enemyGamePiece8.x -= 2.07079632675;
			}
			if (enemyGamePiece8.y <=myGamePiece.y/2) {
				enemyGamePiece8.y += 2.07079632675;
			} else if (enemyGamePiece8.y >=myGamePiece.y/2) {
				enemyGamePiece8.y -= 2.07079632675;
			}
		} else if (RAND1 == 5) {
			if (enemyGamePiece8.x <= myGamePiece.x) {
				enemyGamePiece8.x += (myGameArea.frameNo/1000)*1.5;
			} else if (enemyGamePiece8.x >= myGamePiece.x) {
				enemyGamePiece8.x -= (myGameArea.frameNo/1000)*1.5;
			}
			if (enemyGamePiece8.y <= myGamePiece.y) {
				enemyGamePiece8.y += (myGameArea.frameNo/1000)*1.5;
			} else if (enemyGamePiece8.y >= myGamePiece.y) {
				enemyGamePiece8.y -= (myGameArea.frameNo/1000)*1.5;
			}
		} else if (RAND1 == 6) {
			if (enemyGamePiece8.x <= myGamePiece.x) {
				enemyGamePiece8.x += enemyGamePiece8.y/308;
			} else if (enemyGamePiece8.x >= myGamePiece.x) {
				enemyGamePiece8.x -= enemyGamePiece8.y/308;
			}
			if (enemyGamePiece8.y <= myGamePiece.y) {
				enemyGamePiece8.y += enemyGamePiece8.x/408;
			} else if (enemyGamePiece8.y >= myGamePiece.y) {
				enemyGamePiece8.y -= enemyGamePiece8.x/408;
			}
		} else if (RAND1 == 7) {
			if (myGameArea5.frameNo % 50 == 0) {
				if (enemyGamePiece7.x <= myGamePiece.x) {
					enemyGamePiece7.x += 50;
				} else if (enemyGamePiece7.x >= myGamePiece.x) {
					enemyGamePiece7.x -= 50;
				}
				if (enemyGamePiece7.y <= myGamePiece.y) {
					enemyGamePiece7.y += 50;
				} else if (enemyGamePiece7.y >= myGamePiece.y) {
					enemyGamePiece7.y -= 50;
				}
			}
		}
		//Escape Piece AI
		if (escapeGamePiece.x <= myGamePiece.x && escapeGamePiece.x > 150) {
			escapeGamePiece.x -= 7;
		} else if (escapeGamePiece.x >= myGamePiece.x && escapeGamePiece.x < 1188) {
			escapeGamePiece.x += 7;
		} else if (escapeGamePiece.x <= myGamePiece.x && escapeGamePiece.x < 150 && escapeGamePiece.y > 520 || escapeGamePiece.x >= myGamePiece.x && escapeGamePiece.x > 1188 && escapeGamePiece.y > 520) {
			escapeGamePiece.y -= 7;
		} else if (escapeGamePiece.x <= myGamePiece.x && escapeGamePiece.x < 150 && escapeGamePiece.y < 100 || escapeGamePiece.x >= myGamePiece.x && escapeGamePiece.x > 1188 && escapeGamePiece.y < 100) {
			escapeGamePiece.y += 7;
		}
		if (escapeGamePiece.y <= myGamePiece.y && escapeGamePiece.y > 100) {
			escapeGamePiece.y -= 7;
		} else if (escapeGamePiece.y >= myGamePiece.y && escapeGamePiece.y < 520) {
			escapeGamePiece.y += 7;
		} else if (escapeGamePiece.y <= myGamePiece.y && escapeGamePiece.y < 100 && escapeGamePiece.x > 1188 || escapeGamePiece.y >= myGamePiece.y && escapeGamePiece.y > 520 && escapeGamePiece.x > 1188) {
			escapeGamePiece.x -= 7;
		} else if (escapeGamePiece.y <= myGamePiece.y && escapeGamePiece.y < 100 && escapeGamePiece.x < 150 || escapeGamePiece.y >= myGamePiece.y && escapeGamePiece.y > 520 && escapeGamePiece.x < 150) {
			escapeGamePiece.x -= 7;
		}
		if (escapeGamePiece.x == 1238 && escapeGamePiece.y == 520) {
			escapeGamePiece.y -= 20;
			escapeGamePiece.x -= 20;
		}
		if (escapeGamePiece.x == 1238 && escapeGamePiece.y == 100) {
			escapeGamePiece.y += 20;
			escapeGamePiece.x -= 20;
		}
		if (escapeGamePiece.x == 100 && escapeGamePiece.y == 520) {
			escapeGamePiece.y -= 20;
			escapeGamePiece.x += 20;
		}
		if (escapeGamePiece.x == 100 && escapeGamePiece.y == 100) {
			escapeGamePiece.y += 20;
			escapeGamePiece.x += 20;
		}
		if (escapeGamePiece.x > 1230 && escapeGamePiece.y > 520 && myGamePiece.x > 1000 && myGamePiece.x < 1338 || myGamePiece.y > 300 && myGamePiece.y < 500) {
			escapeGamePiece.x -= 10;
		}
		if (escapeGamePiece.x > 1230 && escapeGamePiece.y < 100 && myGamePiece.x > 1000 && myGamePiece.x < 1338 && myGamePiece.y < 500 && myGamePiece.y > 250) {
			escapeGamePiece.x -= 10;
		}
		if (escapeGamePiece.x < 100 && escapeGamePiece.y > 520 && myGamePiece.x < 500 && myGamePiece.x > 250 && myGamePiece.y > 300 && myGamePiece.y < 500) {
			escapeGamePiece.y -= 10;
		}
		if (escapeGamePiece.x < 100 && escapeGamePiece.y < 100 && myGamePiece.x < 500 && myGamePiece.x > 250 || myGamePiece.y < 500 && myGamePiece.y > 250) {
			escapeGamePiece.y += 10;
		}
		if (enemyGamePiece1.x > 100 && enemyGamePiece1.x < 500 && enemyGamePiece1.y > 50 && enemyGamePiece1.y < 300) {
			escapeGamePiece.x += 5;
			escapeGamePiece.y -= 4;
		}
		if (myGamePiece.x <=5) {
			myGamePiece.x += 5;
		}
		if (myGamePiece.x >1338) {
			myGamePiece.x -= 5;
		}
		if (myGamePiece.y <5) {
			myGamePiece.y +=5;
		}
		if (myGamePiece.y >620) {
			myGamePiece.y -= 5;
		}
		if (enemyGamePiece1.x <=5) {
			enemyGamePiece1.x += 5;
		}
		if (enemyGamePiece1.x >1338) {
			enemyGamePiece1.x -= 5;
		}
		if (enemyGamePiece1.y <5) {
			enemyGamePiece1.y +=5;
		}
		if (enemyGamePiece1.y >620) {
			enemyGamePiece1.y -= 5;
		}
		if (enemyGamePiece2.x <=5) {
			enemyGamePiece2.x += 5;
		}
		if (enemyGamePiece2.x >1338) {
			enemyGamePiece2.x -= 5;
		}
		if (enemyGamePiece2.y <5) {
			enemyGamePiece2.y +=5;
		}
		if (enemyGamePiece2.y >620) {
			enemyGamePiece2.y -= 5;
		}
		if (enemyGamePiece3.x <=5) {
			enemyGamePiece3.x += 5;
		}
		if (enemyGamePiece3.x >1338) {
			enemyGamePiece3.x -= 5;
		}
		if (enemyGamePiece3.y <0) {
			enemyGamePiece3.y +=5;
		}
		if (enemyGamePiece3.y >620) {
			enemyGamePiece3.y -= 5;
		}
		if (enemyGamePiece4.x <=5) {
			enemyGamePiece4.x += 5;
		}
		if (enemyGamePiece4.x >1338) {
			enemyGamePiece4.x -= 5;
		}
		if (enemyGamePiece4.y <0) {
			enemyGamePiece4.y +=5;
		}
		if (enemyGamePiece4.y >620) {
			enemyGamePiece4.y -= 5;
		}
		if (enemyGamePiece5.x <=5) {
			enemyGamePiece5.x += 5;
		}
		if (enemyGamePiece5.x >1338) {
			enemyGamePiece5.x -= 5;
		}
		if (enemyGamePiece5.y <0) {
			enemyGamePiece5.y +=5;
		}
		if (enemyGamePiece5.y >620) {
			enemyGamePiece5.y -= 5;
		}
		if (enemyGamePiece6.x <=5) {
			enemyGamePiece6.x += 5;
		}
		if (enemyGamePiece6.x >1338) {
			enemyGamePiece6.x -= 5;
		}
		if (enemyGamePiece6.y <0) {
			enemyGamePiece6.y +=5;
		}
		if (enemyGamePiece6.y >620) {
			enemyGamePiece6.y -= 5;
		}
		if (enemyGamePiece7.x <=5) {
			enemyGamePiece7.x += 5;
		}
		if (enemyGamePiece7.x >1338) {
			enemyGamePiece7.x -= 5;
		}
		if (enemyGamePiece7.y <0) {
			enemyGamePiece7.y +=5;
		}
		if (enemyGamePiece7.y >620) {
			enemyGamePiece7.y -= 5;
		}
		if (enemyGamePiece8.x <=5) {
			enemyGamePiece8.x += 5;
		}
		if (enemyGamePiece8.x >1338) {
			enemyGamePiece8.x -= 5;
		}
		if (enemyGamePiece8.y <0) {
			enemyGamePiece8.y +=5;
		}
		if (enemyGamePiece8.y >620) {
			enemyGamePiece8.y -= 5;
		}
		if (escapeGamePiece.x <=100) {
			escapeGamePiece.x += 15;
		}
		if (escapeGamePiece.x >1238) {
			escapeGamePiece.x -= 15;
		}
		if (escapeGamePiece.y <100) {
			escapeGamePiece.y += 15;
		}
		if (escapeGamePiece.y >520) {
			escapeGamePiece.y -= 15;
		}
		//Test if the game is over.
		if (myGameArea.frameNo > 5000) {
			gameWin();
		}
    }
}
function updateGameArea12() {
	myGameArea12.clear();
	myGameArea12.frameNo += 1;
	myGamePiece.moveAngle = 0;
	myGamePiece.speed = 0;
    if (myGameArea12.keys && myGameArea12.keys[65]) {myGamePiece.moveAngle = -1; }
    if (myGameArea12.keys && myGameArea12.keys[68]) {myGamePiece.moveAngle = 1; }
    if (myGameArea12.keys && myGameArea12.keys[87]) {myGamePiece.speed = myGamePiece.speed + 3.5; }
    if (myGameArea12.keys && myGameArea12.keys[83]) {myGamePiece.speed = myGamePiece.speed - 3; }
	myGamePiece.newPos();	
    myGamePiece.update();
	myScore.text="You survived long enough to earn " + myGameArea12.frameNo + " points.";
    myScore.update();
	myGamePiece.speedX = 0;
    myGamePiece.speedY = 0;
//Tests if the player has collided with enemies.
    if (myGamePiece.crashWith(enemyGamePiece1)) {
		mySound.play();
        myGameArea12.stop();
		myMusic.stop();
	} else if (myGamePiece.crashWith(enemyGamePiece2)) {
		mySound.play();
		myGameArea12.stop();
		myMusic.stop();
	} else if (myGamePiece.crashWith(enemyGamePiece3)) {
		mySound.play();
		myGameArea12.stop();
		myMusic.stop();
	} else if (myGamePiece.crashWith(enemyGamePiece4)) {
		mySound.play();
		myGameArea12.stop();
		myMusic.stop();
	} else if (myGamePiece.crashWith(enemyGamePiece5)) {
		mySound.play();
		myGameArea12.stop();
		myMusic.stop();
	} else if (myGamePiece.crashWith(enemyGamePiece6)) {
		mySound.play();
		myGameArea12.stop();
		myMusic.stop();
	} else if (myGamePiece.crashWith(enemyGamePiece7)) {
		mySound.play();
		myGameArea12.stop();
		myMusic.stop();
	} else if (myGamePiece.crashWith(enemyGamePiece8)) {
		mySound.play();
		myGameArea12.stop();
		myMusic.stop();
	} else if (myGamePiece.crashWith(enemyGamePiece9)) {
		mySound.play();
		myGameArea12.stop();
		myMusic.stop();
//If the player has not died yet...
    } else {
		//Clear game area.
        myGameArea12.clear();
	    myGameArea12.context.drawImage(bgImage, 10, 10);
		var canvas = document.getElementById("myCanvas");
		var ctx = canvas.getContext("2d");
		ctx.font = "25px Consolas";
		ctx.fillStyle="white";
		ctx.fillRect(0,0,200,100);
		var grd=ctx.createLinearGradient(0,0,200,0);
		grd.addColorStop(0,"red");
		grd.addColorStop(0.2,"orange");
		grd.addColorStop(0.4,"yellow");
		grd.addColorStop(0.6,"green");
		grd.addColorStop(0.8,"blue");
		grd.addColorStop(1,"purple");
		ctx.fillStyle=grd;
		ctx.fillText("Super Crazy",5,30);
		ctx.fillText("Coding Maniac",15,60);
		ctx.fillText("Deluxe Site 4",5,90);
		//Update all pieces.
        enemyGamePiece1.update();
		enemyGamePiece2.update();
		enemyGamePiece3.update();
		enemyGamePiece4.update();
		enemyGamePiece5.update();
		enemyGamePiece6.update();
		enemyGamePiece7.update();
		enemyGamePiece8.update();
		enemyGamePiece9.update();
		myGamePiece.newPos(); 
        myGamePiece.update();
		//Piece 1 AI
		if (enemyGamePiece1.x >= myGamePiece.x) {
			enemyGamePiece1.y -= 2.5;
		} else if (enemyGamePiece1.x <= myGamePiece.x) {
			enemyGamePiece1.y += 2.5;
		}
		if (enemyGamePiece1.y <= myGamePiece.y) {
			enemyGamePiece1.x -= 2.5;
		} else if (enemyGamePiece1.y >= myGamePiece.y) {
			enemyGamePiece1.x += 2.5;
		}
		//Piece 2 AI
		if (enemyGamePiece2.x <= myGamePiece.x) {
			enemyGamePiece2.x += 2.5;
		} else if (enemyGamePiece2.x >= myGamePiece.x) {
			enemyGamePiece2.x -= 2.5;
		}
		if (enemyGamePiece2.y <= myGamePiece.y) {
			enemyGamePiece2.y += 2.5;
		} else if (enemyGamePiece2.y >= myGamePiece.y) {
			enemyGamePiece2.y -= 2.5;
		}
		//Piece 3 AI
		if (enemyGamePiece3.x <= myGamePiece.x) {
			enemyGamePiece3.x += 3.25;
		} else if (enemyGamePiece3.x >= myGamePiece.x) {
			enemyGamePiece3.x -= 3.25;
		}
		if (enemyGamePiece3.y <= myGamePiece.y) {
			enemyGamePiece3.y += 3.25;
		} else if (enemyGamePiece3.y >= myGamePiece.y) {
			enemyGamePiece3.y -= 3.25;
		}
		//Piece 4 AI
		if (enemyGamePiece4.x <=myGamePiece.x/2) {
			enemyGamePiece4.x += 3.07079632675;
		} else if (enemyGamePiece4.x >=myGamePiece.x/2) {
			enemyGamePiece4.x -= 3.07079632675;
		}
		if (enemyGamePiece4.y <=myGamePiece.y/2) {
			enemyGamePiece4.y += 3.07079632675;
		} else if (enemyGamePiece4.y >=myGamePiece.y/2) {
			enemyGamePiece4.y -= 3.07079632675;
		}
		//Piece 5 AI
		if (enemyGamePiece5.x <= myGamePiece.x) {
			enemyGamePiece5.x += (myGameArea12.frameNo/1000)*2;
		} else if (enemyGamePiece5.x >= myGamePiece.x) {
			enemyGamePiece5.x -= (myGameArea12.frameNo/1000)*2;
			}
		if (enemyGamePiece5.y <= myGamePiece.y) {
			enemyGamePiece5.y += (myGameArea12.frameNo/1000)*2;
		} else if (enemyGamePiece5.y >= myGamePiece.y) {
			enemyGamePiece5.y -= (myGameArea12.frameNo/1000)*2;
		}
		//Piece 6 AI
		if (enemyGamePiece6.x <= myGamePiece.x) {
			enemyGamePiece6.x += enemyGamePiece6.y/158;
		} else if (enemyGamePiece6.x >= myGamePiece.x) {
			enemyGamePiece6.x -= enemyGamePiece6.y/158;
		}
		if (enemyGamePiece6.y <= myGamePiece.y) {
			enemyGamePiece6.y += enemyGamePiece6.x/258;
		} else if (enemyGamePiece6.y >= myGamePiece.y) {
			enemyGamePiece6.y -= enemyGamePiece6.x/258;
		}
		//Piece 7 AI
		if (myGameArea12.frameNo % 25 == 0) {
			if (enemyGamePiece7.x <= myGamePiece.x) {
				enemyGamePiece7.x += 50;
			} else if (enemyGamePiece7.x >= myGamePiece.x) {
				enemyGamePiece7.x -= 50;
			}
			if (enemyGamePiece7.y <= myGamePiece.y) {
				enemyGamePiece7.y += 50;
			} else if (enemyGamePiece7.y >= myGamePiece.y) {
				enemyGamePiece7.y -= 50;
			}
		}
		//Piece 8 AI
		if (myGameArea12.frameNo % 250 == 0) {
			RAND1 = Math.floor(Math.random() * (6 - 1 + 1)) + 1;
		}
		if (RAND1 == 1) {
			if (enemyGamePiece8.x >= myGamePiece.x) {
				enemyGamePiece8.y -= 1.5;
			} else if (enemyGamePiece8.x <= myGamePiece.x) {
				enemyGamePiece8.y += 1.5;
			}
			if (enemyGamePiece8.y <= myGamePiece.y) {
				enemyGamePiece8.x -= 1.5;
			} else if (enemyGamePiece8.y >= myGamePiece.y) {
				enemyGamePiece8.x += 1.5;
			}
		} else if (RAND1 == 2) {
			if (enemyGamePiece8.x <= myGamePiece.x) {
				enemyGamePiece8.x += 2.5;
			} else if (enemyGamePiece8.x >= myGamePiece.x) {
				enemyGamePiece8.x -= 2.5;
			}
			if (enemyGamePiece8.y <= myGamePiece.y) {
				enemyGamePiece8.y += 2.5;
			} else if (enemyGamePiece8.y >= myGamePiece.y) {
				enemyGamePiece8.y -= 1.5;
			}
		} else if (RAND1 == 3) {
			if (enemyGamePiece8.x <= myGamePiece.x) {
				enemyGamePiece8.x += 2.75;
			} else if (enemyGamePiece8.x >= myGamePiece.x) {
				enemyGamePiece8.x -= 2.75;
			}
			if (enemyGamePiece8.y <= myGamePiece.y) {
				enemyGamePiece8.y += 2.75;
			} else if (enemyGamePiece8.y >= myGamePiece.y) {
				enemyGamePiece8.y -= 2.75;
			}
		} else if (RAND1 == 4) {
			if (enemyGamePiece8.x <=myGamePiece.x/2) {
				enemyGamePiece8.x += 2.07079632675;
			} else if (enemyGamePiece8.x >=myGamePiece.x/2) {
				enemyGamePiece8.x -= 2.07079632675;
			}
			if (enemyGamePiece8.y <=myGamePiece.y/2) {
				enemyGamePiece8.y += 2.07079632675;
			} else if (enemyGamePiece8.y >=myGamePiece.y/2) {
				enemyGamePiece8.y -= 2.07079632675;
			}
		} else if (RAND1 == 5) {
			if (enemyGamePiece8.x <= myGamePiece.x) {
				enemyGamePiece8.x += (myGameArea12.frameNo/1000)*1.5;
			} else if (enemyGamePiece8.x >= myGamePiece.x) {
				enemyGamePiece8.x -= (myGameArea12.frameNo/1000)*1.5;
			}
			if (enemyGamePiece8.y <= myGamePiece.y) {
				enemyGamePiece8.y += (myGameArea12.frameNo/1000)*1.5;
			} else if (enemyGamePiece8.y >= myGamePiece.y) {
				enemyGamePiece8.y -= (myGameArea12.frameNo/1000)*1.5;
			}
		} else if (RAND1 == 6) {
			if (enemyGamePiece8.x <= myGamePiece.x) {
				enemyGamePiece8.x += enemyGamePiece8.y/208;
			} else if (enemyGamePiece8.x >= myGamePiece.x) {
				enemyGamePiece8.x -= enemyGamePiece8.y/208;
			}
			if (enemyGamePiece8.y <= myGamePiece.y) {
				enemyGamePiece8.y += enemyGamePiece8.x/208;
			} else if (enemyGamePiece8.y >= myGamePiece.y) {
				enemyGamePiece8.y -= enemyGamePiece8.x/208;
			}
		} else if (RAND1 == 7) {
			if (myGameArea12.frameNo % 50 == 0) {
				if (enemyGamePiece8.x <= myGamePiece.x) {
					enemyGamePiece8.x += 50;
				} else if (enemyGamePiece8.x >= myGamePiece.x) {
					enemyGamePiece8.x -= 50;
				}
				if (enemyGamePiece8.y <= myGamePiece.y) {
					enemyGamePiece8.y += 50;
				} else if (enemyGamePiece8.y >= myGamePiece.y) {
					enemyGamePiece8.y -= 50;
				}
			}
		}
		if (myGameArea12.frameNo % (Math.floor(Math.random() * (1000 - 500)) + 50)) {
			var randGod = Math.floor(Math.random() * (8 - 1)) + 1
			if (randGod == 1) {
				
			} else if (randGod == 2) {
				
			} else if (randGod == 3) {
				
			} else if (randGod == 4) {
				
			} else if (randGod == 5) {
				
			} else if (randGod == 6) {
				
			} else if (randGod == 7) {
				
			} else if (randGod == 8) {
				
			}
		} else {
			var tord = Math.floor(Math.random() * (2 - 1)) + 1
			if (tord == 1) {
				enemyGamePiece9.x = myGamePiece.y/2
				enemyGamePiece9.y = myGamePiece.x/2
			} else {
				enemyGamePiece9.x = myGamePiece.y*2
				enemyGamePiece9.y = myGamePiece.x*2
			}
		}
		if (myGamePiece.x <=5) {
			myGamePiece.x += 5;
		}
		if (myGamePiece.x >1338) {
			myGamePiece.x -= 5;
		}
		if (myGamePiece.y <5) {
			myGamePiece.y +=5;
		}
		if (myGamePiece.y >620) {
			myGamePiece.y -= 5;
		}
		if (enemyGamePiece1.x <=5) {
			enemyGamePiece1.x += 5;
		}
		if (enemyGamePiece1.x >1338) {
			enemyGamePiece1.x -= 5;
		}
		if (enemyGamePiece1.y <5) {
			enemyGamePiece1.y +=5;
		}
		if (enemyGamePiece1.y >620) {
			enemyGamePiece1.y -= 5;
		}
		if (enemyGamePiece2.x <=5) {
			enemyGamePiece2.x += 5;
		}
		if (enemyGamePiece2.x >1338) {
			enemyGamePiece2.x -= 5;
		}
		if (enemyGamePiece2.y <5) {
			enemyGamePiece2.y +=5;
		}
		if (enemyGamePiece2.y >620) {
			enemyGamePiece2.y -= 5;
		}
		if (enemyGamePiece3.x <=5) {
			enemyGamePiece3.x += 5;
		}
		if (enemyGamePiece3.x >1338) {
			enemyGamePiece3.x -= 5;
		}
		if (enemyGamePiece3.y <0) {
			enemyGamePiece3.y +=5;
		}
		if (enemyGamePiece3.y >620) {
			enemyGamePiece3.y -= 5;
		}
		if (enemyGamePiece4.x <=5) {
			enemyGamePiece4.x += 5;
		}
		if (enemyGamePiece4.x >1338) {
			enemyGamePiece4.x -= 5;
		}
		if (enemyGamePiece4.y <0) {
			enemyGamePiece4.y +=5;
		}
		if (enemyGamePiece4.y >620) {
			enemyGamePiece4.y -= 5;
		}
		if (enemyGamePiece5.x <=5) {
			enemyGamePiece5.x += 5;
		}
		if (enemyGamePiece5.x >1338) {
			enemyGamePiece5.x -= 5;
		}
		if (enemyGamePiece5.y <0) {
			enemyGamePiece5.y +=5;
		}
		if (enemyGamePiece5.y >620) {
			enemyGamePiece5.y -= 5;
		}
		if (enemyGamePiece6.x <=5) {
			enemyGamePiece6.x += 5;
		}
		if (enemyGamePiece6.x >1338) {
			enemyGamePiece6.x -= 5;
		}
		if (enemyGamePiece6.y <0) {
			enemyGamePiece6.y +=5;
		}
		if (enemyGamePiece6.y >620) {
			enemyGamePiece6.y -= 5;
		}
		if (enemyGamePiece7.x <=5) {
			enemyGamePiece7.x += 5;
		}
		if (enemyGamePiece7.x >1338) {
			enemyGamePiece7.x -= 5;
		}
		if (enemyGamePiece7.y <0) {
			enemyGamePiece7.y +=5;
		}
		if (enemyGamePiece7.y >620) {
			enemyGamePiece7.y -= 5;
		}
		if (enemyGamePiece8.x <=5) {
			enemyGamePiece8.x += 5;
		}
		if (enemyGamePiece8.x >1338) {
			enemyGamePiece8.x -= 5;
		}
		if (enemyGamePiece8.y <0) {
			enemyGamePiece8.y +=5;
		}
		if (enemyGamePiece8.y >620) {
			enemyGamePiece8.y -= 5;
		}
		if (enemyGamePiece9.x <=5) {
			enemyGamePiece9.x += 5;
		}
		if (enemyGamePiece9.x >1338) {
			enemyGamePiece9.x -= 5;
		}
		if (enemyGamePiece9.y <0) {
			enemyGamePiece9.y +=5;
		}
		if (enemyGamePiece9.y >620) {
			enemyGamePiece9.y -= 5;
		}
    }
}
//Add new updateGameArea for Each Gamemode

//Updates game area each frame to test if the player collided, moves the enemies, and moves the player.
function updateGameArea2() {
	myGameArea2.clear();
	myGameArea2.frameNo += 1;
	myGamePiece.moveAngle = 0;
	myGamePiece.speed = 0;
    if (myGameArea2.keys && myGameArea2.keys[65]) {myGamePiece.moveAngle = -1; }
    if (myGameArea2.keys && myGameArea2.keys[68]) {myGamePiece.moveAngle = 1; }
    if (myGameArea2.keys && myGameArea2.keys[87]) {myGamePiece.speed = myGamePiece.speed + 2.5; }
    if (myGameArea2.keys && myGameArea2.keys[83]) {myGamePiece.speed = myGamePiece.speed - 2; }
	myGamePiece.newPos();	
    myGamePiece.update();
	if (myGameArea2.frameNo % 1240 == 0) {
		myMusic.play();
	}
	myScore.text="You survived long enough to earn " + myGameArea.frameNo + " points.";
    myScore.update();
	myGamePiece.speedX = 0;
    myGamePiece.speedY = 0;
//Tests if the player has collided with enemies.
    if (myGamePiece.crashWith(enemyGamePiece1)) {
		mySound.play();
        myGameArea2.stop();
		myMusic.stop();
	} else if (myGamePiece.crashWith(enemyGamePiece2)) {
		mySound.play();
		myGameArea2.stop();
		myMusic.stop();
	} else if (myGamePiece.crashWith(enemyGamePiece3)) {
		mySound.play();
		myGameArea2.stop();
		myMusic.stop();
	} else if (myGamePiece.crashWith(enemyGamePiece4)) {
		mySound.play();
		myGameArea2.stop();
		myMusic.stop();
	} else if (myGamePiece.crashWith(enemyGamePiece5)) {
		mySound.play();
		myGameArea2.stop();
		myMusic.stop();
	} else if (myGamePiece.crashWith(enemyGamePiece6)) {
		mySound.play();
		myGameArea2.stop();
		myMusic.stop();
	} else if (myGamePiece.crashWith(escapeGamePiece)) {
		gameWin2();
//If the player has not died yet...
    } else {
		//Clear game area.
        myGameArea2.clear();
	    myGameArea2.context.drawImage(bgImage, 10, 10);
		var canvas = document.getElementById("myCanvas");
		var ctx = canvas.getContext("2d");
		ctx.font = "25px Consolas";
		ctx.fillStyle="white";
		ctx.fillRect(0,0,200,100);
		var grd=ctx.createLinearGradient(0,0,200,0);
		grd.addColorStop(0,"red");
		grd.addColorStop(0.2,"orange");
		grd.addColorStop(0.4,"yellow");
		grd.addColorStop(0.6,"green");
		grd.addColorStop(0.8,"blue");
		grd.addColorStop(1,"purple");
		ctx.fillStyle=grd;
		ctx.fillText("Super Crazy",5,30);
		ctx.fillText("Coding Maniac",15,60);
		ctx.fillText("Deluxe Site 4",5,90);
		//Update all pieces.
        enemyGamePiece1.update();
		enemyGamePiece2.update();
		enemyGamePiece3.update();
		enemyGamePiece4.update();
		enemyGamePiece5.update();
		enemyGamePiece6.update();
		escapeGamePiece.update();
		myGamePiece.newPos(); 
        myGamePiece.update();
		//Piece 1 AI
		if (enemyGamePiece1.x >= myGamePiece.x) {
			enemyGamePiece1.y -= 1.5;
		} else if (enemyGamePiece1.x <= myGamePiece.x) {
			enemyGamePiece1.y += 1.5;
		}
		if (enemyGamePiece1.y <= myGamePiece.y) {
			enemyGamePiece1.x -= 1.5;
		} else if (enemyGamePiece1.y >= myGamePiece.y) {
			enemyGamePiece1.x += 1.5;
		}
		//Piece 2 AI
		if (enemyGamePiece2.x <= myGamePiece.x) {
			enemyGamePiece2.x += 2.5;
		} else if (enemyGamePiece2.x >= myGamePiece.x) {
			enemyGamePiece2.x -= 2.5;
		}
		if (enemyGamePiece2.y <= myGamePiece.y) {
			enemyGamePiece2.y += 2.5;
		} else if (enemyGamePiece2.y >= myGamePiece.y) {
			enemyGamePiece2.y -= 1.5;
		}
		//Piece 3 AI
		if (enemyGamePiece3.x <= myGamePiece.x) {
			enemyGamePiece3.x += 2.75;
		} else if (enemyGamePiece3.x >= myGamePiece.x) {
			enemyGamePiece3.x -= 2.75;
		}
		if (enemyGamePiece3.y <= myGamePiece.y) {
			enemyGamePiece3.y += 2.75;
		} else if (enemyGamePiece3.y >= myGamePiece.y) {
			enemyGamePiece3.y -= 2.75;
		}
		//Piece 4 AI
		if (enemyGamePiece4.x <=myGamePiece.x/2) {
			enemyGamePiece4.x += 2.07079632675;
		} else if (enemyGamePiece4.x >=myGamePiece.x/2) {
			enemyGamePiece4.x -= 2.07079632675;
		}
		if (enemyGamePiece4.y <=myGamePiece.y/2) {
			enemyGamePiece4.y += 2.07079632675;
		} else if (enemyGamePiece4.y >=myGamePiece.y/2) {
			enemyGamePiece4.y -= 2.07079632675;
		}
		//Piece 5 AI
		if (enemyGamePiece5.x <= myGamePiece.x) {
			enemyGamePiece5.x += (myGameArea2.frameNo/1000);
		} else if (enemyGamePiece5.x >= myGamePiece.x) {
			enemyGamePiece5.x -= (myGameArea2.frameNo/1000);
			}
		if (enemyGamePiece5.y <= myGamePiece.y) {
			enemyGamePiece5.y += (myGameArea2.frameNo/1000);
		} else if (enemyGamePiece5.y >= myGamePiece.y) {
			enemyGamePiece5.y -= (myGameArea2.frameNo/1000);
		}
		//Piece 6 AI
		if (enemyGamePiece6.x <= myGamePiece.x) {
			enemyGamePiece6.x += enemyGamePiece6.y/208;
		} else if (enemyGamePiece6.x >= myGamePiece.x) {
			enemyGamePiece6.x -= enemyGamePiece6.y/208;
		}
		if (enemyGamePiece6.y <= myGamePiece.y) {
			enemyGamePiece6.y += enemyGamePiece6.x/308;
		} else if (enemyGamePiece6.y >= myGamePiece.y) {
			enemyGamePiece6.y -= enemyGamePiece6.x/308;
		}
		//Escape Piece AI
		if (escapeGamePiece.x <= myGamePiece.x && escapeGamePiece.x > 150) {
			escapeGamePiece.x -= 3.5;
		} else if (escapeGamePiece.x >= myGamePiece.x && escapeGamePiece.x < 1188) {
			escapeGamePiece.x += 3.5;
		} else if (escapeGamePiece.x <= myGamePiece.x && escapeGamePiece.x < 150 && escapeGamePiece.y > 520 || escapeGamePiece.x >= myGamePiece.x && escapeGamePiece.x > 1188 && escapeGamePiece.y > 520) {
			escapeGamePiece.y -= 3.5;
		} else if (escapeGamePiece.x <= myGamePiece.x && escapeGamePiece.x < 150 && escapeGamePiece.y < 100 || escapeGamePiece.x >= myGamePiece.x && escapeGamePiece.x > 1188 && escapeGamePiece.y < 100) {
			escapeGamePiece.y += 3.5;
		}
		if (escapeGamePiece.y <= myGamePiece.y && escapeGamePiece.y > 100) {
			escapeGamePiece.y -= 3.5;
		} else if (escapeGamePiece.y >= myGamePiece.y && escapeGamePiece.y < 520) {
			escapeGamePiece.y += 3.5;
		} else if (escapeGamePiece.y <= myGamePiece.y && escapeGamePiece.y < 100 && escapeGamePiece.x > 1188 || escapeGamePiece.y >= myGamePiece.y && escapeGamePiece.y > 520 && escapeGamePiece.x > 1188) {
			escapeGamePiece.x -= 3.5;
		} else if (escapeGamePiece.y <= myGamePiece.y && escapeGamePiece.y < 100 && escapeGamePiece.x < 150 || escapeGamePiece.y >= myGamePiece.y && escapeGamePiece.y > 520 && escapeGamePiece.x < 150) {
			escapeGamePiece.x -= 3.5;
		}
		if (escapeGamePiece.x == 1238 && escapeGamePiece.y == 520) {
			escapeGamePiece.y -= 3.5;
			escapeGamePiece.x -= 3.5;
		}
		if (escapeGamePiece.x == 1238 && escapeGamePiece.y == 100) {
			escapeGamePiece.y += 3.5;
			escapeGamePiece.x -= 3.5;
		}
		if (escapeGamePiece.x == 100 && escapeGamePiece.y == 520) {
			escapeGamePiece.y -= 3.5;
			escapeGamePiece.x += 3.5;
		}
		if (escapeGamePiece.x == 100 && escapeGamePiece.y == 100) {
			escapeGamePiece.y += 3.5;
			escapeGamePiece.x += 3.5;
		}
		if (escapeGamePiece.x > 1230 && escapeGamePiece.y > 520 && myGamePiece.x > 1000 && myGamePiece.x < 1338 || myGamePiece.y > 300 && myGamePiece.y < 500) {
			escapeGamePiece.x -= 3.5;
		}
		if (escapeGamePiece.x > 1230 && escapeGamePiece.y < 100 && myGamePiece.x > 1000 && myGamePiece.x < 1338 && myGamePiece.y < 500 && myGamePiece.y > 250) {
			escapeGamePiece.x -= 3.5;
		}
		if (escapeGamePiece.x < 100 && escapeGamePiece.y > 520 && myGamePiece.x < 500 && myGamePiece.x > 250 && myGamePiece.y > 300 && myGamePiece.y < 500) {
			escapeGamePiece.y -= 3.5;
		}
		if (escapeGamePiece.x < 100 && escapeGamePiece.y < 100 && myGamePiece.x < 500 && myGamePiece.x > 250 || myGamePiece.y < 500 && myGamePiece.y > 250) {
			escapeGamePiece.y += 3.5;
		}
		if (enemyGamePiece1.x > 100 && enemyGamePiece1.x < 500 && enemyGamePiece1.y > 50 && enemyGamePiece1.y < 300) {
			escapeGamePiece.x += 2.5;
			escapeGamePiece.y -= 2;
		}
		if (myGamePiece.x <=5) {
			myGamePiece.x += 5;
		}
		if (myGamePiece.x >1338) {
			myGamePiece.x -= 5;
		}
		if (myGamePiece.y <5) {
			myGamePiece.y +=5;
		}
		if (myGamePiece.y >620) {
			myGamePiece.y -= 5;
		}
		if (enemyGamePiece1.x <=5) {
			enemyGamePiece1.x += 5;
		}
		if (enemyGamePiece1.x >1338) {
			enemyGamePiece1.x -= 5;
		}
		if (enemyGamePiece1.y <5) {
			enemyGamePiece1.y +=5;
		}
		if (enemyGamePiece1.y >620) {
			enemyGamePiece1.y -= 5;
		}
		if (enemyGamePiece2.x <=5) {
			enemyGamePiece2.x += 5;
		}
		if (enemyGamePiece2.x >1338) {
			enemyGamePiece2.x -= 5;
		}
		if (enemyGamePiece2.y <5) {
			enemyGamePiece2.y +=5;
		}
		if (enemyGamePiece2.y >620) {
			enemyGamePiece2.y -= 5;
		}
		if (enemyGamePiece3.x <=5) {
			enemyGamePiece3.x += 5;
		}
		if (enemyGamePiece3.x >1338) {
			enemyGamePiece3.x -= 5;
		}
		if (enemyGamePiece3.y <0) {
			enemyGamePiece3.y +=5;
		}
		if (enemyGamePiece3.y >620) {
			enemyGamePiece3.y -= 5;
		}
		if (enemyGamePiece4.x <=5) {
			enemyGamePiece4.x += 5;
		}
		if (enemyGamePiece4.x >1338) {
			enemyGamePiece4.x -= 5;
		}
		if (enemyGamePiece4.y <0) {
			enemyGamePiece4.y +=5;
		}
		if (enemyGamePiece4.y >620) {
			enemyGamePiece4.y -= 5;
		}
		if (enemyGamePiece5.x <=5) {
			enemyGamePiece5.x += 5;
		}
		if (enemyGamePiece5.x >1338) {
			enemyGamePiece5.x -= 5;
		}
		if (enemyGamePiece5.y <0) {
			enemyGamePiece5.y +=5;
		}
		if (enemyGamePiece5.y >620) {
			enemyGamePiece5.y -= 5;
		}
		if (enemyGamePiece6.x <=5) {
			enemyGamePiece6.x += 5;
		}
		if (enemyGamePiece6.x >1338) {
			enemyGamePiece6.x -= 5;
		}
		if (enemyGamePiece6.y <0) {
			enemyGamePiece6.y +=5;
		}
		if (enemyGamePiece6.y >620) {
			enemyGamePiece6.y -= 5;
		}
		if (escapeGamePiece.x <=100) {
			escapeGamePiece.x += 15;
		}
		if (escapeGamePiece.x >1238) {
			escapeGamePiece.x -= 15;
		}
		if (escapeGamePiece.y <100) {
			escapeGamePiece.y += 15;
		}
		if (escapeGamePiece.y >520) {
			escapeGamePiece.y -= 15;
		}
		//Test if the game is over.
		if (myGameArea.frameNo > 5000) {
			gameWin();
		}
    }
}
function updateGameArea4() {
	myGameArea4.clear();
	myGameArea4.frameNo += 1;
	myGamePiece.moveAngle = 0;
	myGamePiece.speed = 0;
    if (myGameArea4.keys && myGameArea4.keys[65]) {myGamePiece.moveAngle = -1; }
    if (myGameArea4.keys && myGameArea4.keys[68]) {myGamePiece.moveAngle = 1; }
    if (myGameArea4.keys && myGameArea4.keys[87]) {myGamePiece.speed = myGamePiece.speed + 2.5; }
    if (myGameArea4.keys && myGameArea4.keys[83]) {myGamePiece.speed = myGamePiece.speed - 2; }
	myGamePiece.newPos();	
    myGamePiece.update();
	myScore.text="You survived long enough to earn " + myGameArea4.frameNo + " points.";
    myScore.update();
	myGamePiece.speedX = 0;
    myGamePiece.speedY = 0;
//Tests if the player has collided with enemies.
    if (myGamePiece.crashWith(enemyGamePiece1)) {
		mySound.play();
        myGameArea4.stop();
		myMusic.stop();
	} else if (myGamePiece.crashWith(enemyGamePiece2)) {
		mySound.play();
		myGameArea4.stop();
		myMusic.stop();
	} else if (myGamePiece.crashWith(enemyGamePiece3)) {
		mySound.play();
		myGameArea4.stop();
		myMusic.stop();
	} else if (myGamePiece.crashWith(enemyGamePiece4)) {
		mySound.play();
		myGameArea4.stop();
		myMusic.stop();
	} else if (myGamePiece.crashWith(enemyGamePiece5)) {
		mySound.play();
		myGameArea4.stop();
		myMusic.stop();
	} else if (myGamePiece.crashWith(enemyGamePiece6)) {
		mySound.play();
		myGameArea4.stop();
		myMusic.stop();
	} else if (myGamePiece.crashWith(escapeGamePiece)) {
		gameWin4();
//If the player has not died yet...
    } else {
		//Clear game area.
        myGameArea4.clear();
	    myGameArea4.context.drawImage(bgImage, 10, 10);
		var canvas = document.getElementById("myCanvas");
		var ctx = canvas.getContext("2d");
		ctx.font = "25px Consolas";
		ctx.fillStyle="white";
		ctx.fillRect(0,0,200,100);
		var grd=ctx.createLinearGradient(0,0,200,0);
		grd.addColorStop(0,"red");
		grd.addColorStop(0.2,"orange");
		grd.addColorStop(0.4,"yellow");
		grd.addColorStop(0.6,"green");
		grd.addColorStop(0.8,"blue");
		grd.addColorStop(1,"purple");
		ctx.fillStyle=grd;
		ctx.fillText("Super Crazy",5,30);
		ctx.fillText("Coding Maniac",15,60);
		ctx.fillText("Deluxe Site 4",5,90);
		//Update all pieces.
        enemyGamePiece1.update();
		enemyGamePiece2.update();
		enemyGamePiece3.update();
		enemyGamePiece4.update();
		enemyGamePiece5.update();
		enemyGamePiece6.update();
		escapeGamePiece.update();
		myGamePiece.newPos(); 
        myGamePiece.update();
		//Piece 1 AI
		if (enemyGamePiece1.x >= myGamePiece.x) {
			enemyGamePiece1.y -= 1;
		} else if (enemyGamePiece1.x <= myGamePiece.x) {
			enemyGamePiece1.y += 1;
		}
		if (enemyGamePiece1.y <= myGamePiece.y) {
			enemyGamePiece1.x -= 1;
		} else if (enemyGamePiece1.y >= myGamePiece.y) {
			enemyGamePiece1.x += 1;
		}
		//Piece 2 AI
		if (enemyGamePiece2.x <= myGamePiece.x) {
			enemyGamePiece2.x += 2;
		} else if (enemyGamePiece2.x >= myGamePiece.x) {
			enemyGamePiece2.x -= 2;
		}
		if (enemyGamePiece2.y <= myGamePiece.y) {
			enemyGamePiece2.y += 2;
		} else if (enemyGamePiece2.y >= myGamePiece.y) {
			enemyGamePiece2.y -= 1;
		}
		//Piece 3 AI
		if (enemyGamePiece3.x <= myGamePiece.x) {
			enemyGamePiece3.x += 2.25;
		} else if (enemyGamePiece3.x >= myGamePiece.x) {
			enemyGamePiece3.x -= 2.25;
		}
		if (enemyGamePiece3.y <= myGamePiece.y) {
			enemyGamePiece3.y += 2.25;
		} else if (enemyGamePiece3.y >= myGamePiece.y) {
			enemyGamePiece3.y -= 2.25;
		}
		//Piece 4 AI
		if (enemyGamePiece4.x <=myGamePiece.x/2) {
			enemyGamePiece4.x += 1.57079632675;
		} else if (enemyGamePiece4.x >=myGamePiece.x/2) {
			enemyGamePiece4.x -= 1.57079632675;
		}
		if (enemyGamePiece4.y <=myGamePiece.y/2) {
			enemyGamePiece4.y += 1.57079632675;
		} else if (enemyGamePiece4.y >=myGamePiece.y/2) {
			enemyGamePiece4.y -= 1.57079632675;
		}
		//Piece 5 AI
		if (enemyGamePiece5.x <= myGamePiece.x) {
			enemyGamePiece5.x += (myGameArea4.frameNo/1000);
		} else if (enemyGamePiece5.x >= myGamePiece.x) {
			enemyGamePiece5.x -= (myGameArea4.frameNo/1000);
			}
		if (enemyGamePiece5.y <= myGamePiece.y) {
			enemyGamePiece5.y += (myGameArea4.frameNo/1000);
		} else if (enemyGamePiece5.y >= myGamePiece.y) {
			enemyGamePiece5.y -= (myGameArea4.frameNo/1000);
		}
		//Piece 6 AI
		if (enemyGamePiece6.x <= myGamePiece.x) {
			enemyGamePiece6.x += enemyGamePiece6.y/258;
		} else if (enemyGamePiece6.x >= myGamePiece.x) {
			enemyGamePiece6.x -= enemyGamePiece6.y/258;
		}
		if (enemyGamePiece6.y <= myGamePiece.y) {
			enemyGamePiece6.y += enemyGamePiece6.x/358;
		} else if (enemyGamePiece6.y >= myGamePiece.y) {
			enemyGamePiece6.y -= enemyGamePiece6.x/358;
		}
		//Escape Piece AI
		if (escapeGamePiece.x <= myGamePiece.x) {
			escapeGamePiece.x -= 2.75;
		} else if (enemyGamePiece3.x >= myGamePiece.x) {
			escapeGamePiece.x += 2.75;
		}
		if (escapeGamePiece.y <= myGamePiece.y) {
			escapeGamePiece.y -= 2.75;
		} else if (enemyGamePiece3.y >= myGamePiece.y) {
			escapeGamePiece.y += 2.75;
		}
		if (myGamePiece.x <=5) {
			myGamePiece.x += 5;
		}
		if (myGamePiece.x >1338) {
			myGamePiece.x -= 5;
		}
		if (myGamePiece.y <5) {
			myGamePiece.y +=5;
		}
		if (myGamePiece.y >620) {
			myGamePiece.y -= 5;
		}
		if (enemyGamePiece1.x <=5) {
			enemyGamePiece1.x += 5;
		}
		if (enemyGamePiece1.x >1338) {
			enemyGamePiece1.x -= 5;
		}
		if (enemyGamePiece1.y <5) {
			enemyGamePiece1.y +=5;
		}
		if (enemyGamePiece1.y >620) {
			enemyGamePiece1.y -= 5;
		}
		if (enemyGamePiece2.x <=5) {
			enemyGamePiece2.x += 5;
		}
		if (enemyGamePiece2.x >1338) {
			enemyGamePiece2.x -= 5;
		}
		if (enemyGamePiece2.y <5) {
			enemyGamePiece2.y +=5;
		}
		if (enemyGamePiece2.y >620) {
			enemyGamePiece2.y -= 5;
		}
		if (enemyGamePiece3.x <=5) {
			enemyGamePiece3.x += 5;
		}
		if (enemyGamePiece3.x >1338) {
			enemyGamePiece3.x -= 5;
		}
		if (enemyGamePiece3.y <0) {
			enemyGamePiece3.y +=5;
		}
		if (enemyGamePiece3.y >620) {
			enemyGamePiece3.y -= 5;
		}
		if (enemyGamePiece4.x <=5) {
			enemyGamePiece4.x += 5;
		}
		if (enemyGamePiece4.x >1338) {
			enemyGamePiece4.x -= 5;
		}
		if (enemyGamePiece4.y <0) {
			enemyGamePiece4.y +=5;
		}
		if (enemyGamePiece4.y >620) {
			enemyGamePiece4.y -= 5;
		}
		if (enemyGamePiece5.x <=5) {
			enemyGamePiece5.x += 5;
		}
		if (enemyGamePiece5.x >1338) {
			enemyGamePiece5.x -= 5;
		}
		if (enemyGamePiece5.y <0) {
			enemyGamePiece5.y +=5;
		}
		if (enemyGamePiece5.y >620) {
			enemyGamePiece5.y -= 5;
		}
		if (enemyGamePiece6.x <=5) {
			enemyGamePiece6.x += 5;
		}
		if (enemyGamePiece6.x >1338) {
			enemyGamePiece6.x -= 5;
		}
		if (enemyGamePiece6.y <0) {
			enemyGamePiece6.y +=5;
		}
		if (enemyGamePiece6.y >620) {
			enemyGamePiece6.y -= 5;
		}
		if (escapeGamePiece.x <=100) {
			escapeGamePiece.x += 15;
		}
		if (escapeGamePiece.x >1238) {
			escapeGamePiece.x -= 15;
		}
		if (escapeGamePiece.y <100) {
			escapeGamePiece.y += 15;
		}
		if (escapeGamePiece.y >520) {
			escapeGamePiece.y -= 15;
		}
		//Test if the game is over.
		if (myGameArea.frameNo > 5000) {
			gameWin();
		}
    }
}
function updateGameArea3() {
	myGameArea3.clear();
	myGameArea3.frameNo += 1;
	myGamePiece.moveAngle = 0;
	myGamePiece.speed = 0;
    if (myGameArea3.keys && myGameArea3.keys[65]) {myGamePiece.moveAngle = -1.5; }
    if (myGameArea3.keys && myGameArea3.keys[68]) {myGamePiece.moveAngle = 1.5; }
    if (myGameArea3.keys && myGameArea3.keys[87]) {myGamePiece.speed = myGamePiece.speed + 2.5; }
    if (myGameArea3.keys && myGameArea3.keys[83]) {myGamePiece.speed = myGamePiece.speed - 2; }
	myGamePiece.newPos();	
    myGamePiece.update();
	if (myGameArea3.frameNo % 1240 == 0) {
		myMusic.play();
	}
	myScore.text="You survived long enough to earn " + myGameArea.frameNo + " points.";
    myScore.update();
	myGamePiece.speedX = 0;
    myGamePiece.speedY = 0;
//Tests if the player has collided with enemies.
    if (myGamePiece.crashWith(enemyGamePiece1)) {
		mySound.play();
        myGameArea3.stop();
		myMusic.stop();
	} else if (myGamePiece.crashWith(enemyGamePiece2)) {
		mySound.play();
		myGameArea3.stop();
		myMusic.stop();
	} else if (myGamePiece.crashWith(enemyGamePiece3)) {
		mySound.play();
		myGameArea3.stop();
		myMusic.stop();
	} else if (myGamePiece.crashWith(enemyGamePiece4)) {
		mySound.play();
		myGameArea3.stop();
		myMusic.stop();
	} else if (myGamePiece.crashWith(enemyGamePiece5)) {
		mySound.play();
		myGameArea3.stop();
		myMusic.stop();
	} else if (myGamePiece.crashWith(enemyGamePiece6)) {
		mySound.play();
		myGameArea3.stop();
		myMusic.stop();
	} else if (myGamePiece.crashWith(escapeGamePiece)) {
		gameWin3();
//If the player has not died yet...
    } else {
		//Clear game area.
        myGameArea3.clear();
	    myGameArea3.context.drawImage(bgImage, 10, 10);
		var canvas = document.getElementById("myCanvas");
		var ctx = canvas.getContext("2d");
		ctx.font = "25px Consolas";
		ctx.fillStyle="white";
		ctx.fillRect(0,0,200,100);
		var grd=ctx.createLinearGradient(0,0,200,0);
		grd.addColorStop(0,"red");
		grd.addColorStop(0.2,"orange");
		grd.addColorStop(0.4,"yellow");
		grd.addColorStop(0.6,"green");
		grd.addColorStop(0.8,"blue");
		grd.addColorStop(1,"purple");
		ctx.fillStyle=grd;
		ctx.fillText("Super Crazy",5,30);
		ctx.fillText("Coding Maniac",15,60);
		ctx.fillText("Deluxe Site 4",5,90);
		//Update all pieces.
        enemyGamePiece1.update();
		enemyGamePiece2.update();
		enemyGamePiece3.update();
		enemyGamePiece4.update();
		enemyGamePiece5.update();
		enemyGamePiece6.update();
		escapeGamePiece.update();
		myGamePiece.newPos(); 
        myGamePiece.update();
		//Piece 1 AI
		if (enemyGamePiece1.x >= myGamePiece.x) {
			enemyGamePiece1.y -= 1.5;
		} else if (enemyGamePiece1.x <= myGamePiece.x) {
			enemyGamePiece1.y += 1.5;
		}
		if (enemyGamePiece1.y <= myGamePiece.y) {
			enemyGamePiece1.x -= 1.5;
		} else if (enemyGamePiece1.y >= myGamePiece.y) {
			enemyGamePiece1.x += 1.5;
		}
		//Piece 2 AI
		if (enemyGamePiece2.x <= myGamePiece.x) {
			enemyGamePiece2.x += 2.5;
		} else if (enemyGamePiece2.x >= myGamePiece.x) {
			enemyGamePiece2.x -= 2.5;
		}
		if (enemyGamePiece2.y <= myGamePiece.y) {
			enemyGamePiece2.y += 2.5;
		} else if (enemyGamePiece2.y >= myGamePiece.y) {
			enemyGamePiece2.y -= 1.5;
		}
		//Piece 3 AI
		if (enemyGamePiece3.x <= myGamePiece.x) {
			enemyGamePiece3.x += 2.75;
		} else if (enemyGamePiece3.x >= myGamePiece.x) {
			enemyGamePiece3.x -= 2.75;
		}
		if (enemyGamePiece3.y <= myGamePiece.y) {
			enemyGamePiece3.y += 2.75;
		} else if (enemyGamePiece3.y >= myGamePiece.y) {
			enemyGamePiece3.y -= 2.75;
		}
		//Piece 4 AI
		if (enemyGamePiece4.x <=myGamePiece.x/2) {
			enemyGamePiece4.x += 2.07079632675;
		} else if (enemyGamePiece4.x >=myGamePiece.x/2) {
			enemyGamePiece4.x -= 2.07079632675;
		}
		if (enemyGamePiece4.y <=myGamePiece.y/2) {
			enemyGamePiece4.y += 2.07079632675;
		} else if (enemyGamePiece4.y >=myGamePiece.y/2) {
			enemyGamePiece4.y -= 2.07079632675;
		}
		//Piece 5 AI
		if (enemyGamePiece5.x <= myGamePiece.x) {
			enemyGamePiece5.x += (myGameArea3.frameNo/1000)*1.5;
		} else if (enemyGamePiece5.x >= myGamePiece.x) {
			enemyGamePiece5.x -= (myGameArea3.frameNo/1000)*1.5;
			}
		if (enemyGamePiece5.y <= myGamePiece.y) {
			enemyGamePiece5.y += (myGameArea3.frameNo/1000)*1.5;
		} else if (enemyGamePiece5.y >= myGamePiece.y) {
			enemyGamePiece5.y -= (myGameArea3.frameNo/1000)*1.5;
		}
		//Piece 6 AI
		if (enemyGamePiece6.x <= myGamePiece.x) {
			enemyGamePiece6.x += enemyGamePiece6.y/208;
		} else if (enemyGamePiece6.x >= myGamePiece.x) {
			enemyGamePiece6.x -= enemyGamePiece6.y/208;
		}
		if (enemyGamePiece6.y <= myGamePiece.y) {
			enemyGamePiece6.y += enemyGamePiece6.x/308;
		} else if (enemyGamePiece6.y >= myGamePiece.y) {
			enemyGamePiece6.y -= enemyGamePiece6.x/308;
		}
		//Escape Piece AI
		if (escapeGamePiece.x <= myGamePiece.x && escapeGamePiece.x > 150) {
			escapeGamePiece.x -= 7;
		} else if (escapeGamePiece.x >= myGamePiece.x && escapeGamePiece.x < 1188) {
			escapeGamePiece.x += 7;
		} else if (escapeGamePiece.x <= myGamePiece.x && escapeGamePiece.x < 150 && escapeGamePiece.y > 520 || escapeGamePiece.x >= myGamePiece.x && escapeGamePiece.x > 1188 && escapeGamePiece.y > 520) {
			escapeGamePiece.y -= 7;
		} else if (escapeGamePiece.x <= myGamePiece.x && escapeGamePiece.x < 150 && escapeGamePiece.y < 100 || escapeGamePiece.x >= myGamePiece.x && escapeGamePiece.x > 1188 && escapeGamePiece.y < 100) {
			escapeGamePiece.y += 7;
		}
		if (escapeGamePiece.y <= myGamePiece.y && escapeGamePiece.y > 100) {
			escapeGamePiece.y -= 7;
		} else if (escapeGamePiece.y >= myGamePiece.y && escapeGamePiece.y < 520) {
			escapeGamePiece.y += 7;
		} else if (escapeGamePiece.y <= myGamePiece.y && escapeGamePiece.y < 100 && escapeGamePiece.x > 1188 || escapeGamePiece.y >= myGamePiece.y && escapeGamePiece.y > 520 && escapeGamePiece.x > 1188) {
			escapeGamePiece.x -= 7;
		} else if (escapeGamePiece.y <= myGamePiece.y && escapeGamePiece.y < 100 && escapeGamePiece.x < 150 || escapeGamePiece.y >= myGamePiece.y && escapeGamePiece.y > 520 && escapeGamePiece.x < 150) {
			escapeGamePiece.x -= 7;
		}
		if (escapeGamePiece.x == 1238 && escapeGamePiece.y == 520) {
			escapeGamePiece.y -= 7;
			escapeGamePiece.x -= 7;
		}
		if (escapeGamePiece.x == 1238 && escapeGamePiece.y == 100) {
			escapeGamePiece.y += 7;
			escapeGamePiece.x -= 7;
		}
		if (escapeGamePiece.x == 100 && escapeGamePiece.y == 520) {
			escapeGamePiece.y -= 7;
			escapeGamePiece.x += 7;
		}
		if (escapeGamePiece.x == 100 && escapeGamePiece.y == 100) {
			escapeGamePiece.y += 7;
			escapeGamePiece.x += 7;
		}
		if (escapeGamePiece.x > 1230 && escapeGamePiece.y > 520 && myGamePiece.x > 1000 && myGamePiece.x < 1338 || myGamePiece.y > 300 && myGamePiece.y < 500) {
			escapeGamePiece.x -= 7;
		}
		if (escapeGamePiece.x > 1230 && escapeGamePiece.y < 100 && myGamePiece.x > 1000 && myGamePiece.x < 1338 && myGamePiece.y < 500 && myGamePiece.y > 250) {
			escapeGamePiece.x -= 7;
		}
		if (escapeGamePiece.x < 100 && escapeGamePiece.y > 520 && myGamePiece.x < 500 && myGamePiece.x > 250 && myGamePiece.y > 300 && myGamePiece.y < 500) {
			escapeGamePiece.y -= 7;
		}
		if (escapeGamePiece.x < 100 && escapeGamePiece.y < 100 && myGamePiece.x < 500 && myGamePiece.x > 250 || myGamePiece.y < 500 && myGamePiece.y > 250) {
			escapeGamePiece.y += 7;
		}
		if (enemyGamePiece1.x > 100 && enemyGamePiece1.x < 500 && enemyGamePiece1.y > 50 && enemyGamePiece1.y < 300) {
			escapeGamePiece.x += 5;
			escapeGamePiece.y -= 4;
		}
		if (myGamePiece.x <=5) {
			myGamePiece.x += 5;
		}
		if (myGamePiece.x >1338) {
			myGamePiece.x -= 5;
		}
		if (myGamePiece.y <5) {
			myGamePiece.y +=5;
		}
		if (myGamePiece.y >620) {
			myGamePiece.y -= 5;
		}
		if (enemyGamePiece1.x <=5) {
			enemyGamePiece1.x += 5;
		}
		if (enemyGamePiece1.x >1338) {
			enemyGamePiece1.x -= 5;
		}
		if (enemyGamePiece1.y <5) {
			enemyGamePiece1.y +=5;
		}
		if (enemyGamePiece1.y >620) {
			enemyGamePiece1.y -= 5;
		}
		if (enemyGamePiece2.x <=5) {
			enemyGamePiece2.x += 5;
		}
		if (enemyGamePiece2.x >1338) {
			enemyGamePiece2.x -= 5;
		}
		if (enemyGamePiece2.y <5) {
			enemyGamePiece2.y +=5;
		}
		if (enemyGamePiece2.y >620) {
			enemyGamePiece2.y -= 5;
		}
		if (enemyGamePiece3.x <=5) {
			enemyGamePiece3.x += 5;
		}
		if (enemyGamePiece3.x >1338) {
			enemyGamePiece3.x -= 5;
		}
		if (enemyGamePiece3.y <0) {
			enemyGamePiece3.y +=5;
		}
		if (enemyGamePiece3.y >620) {
			enemyGamePiece3.y -= 5;
		}
		if (enemyGamePiece4.x <=5) {
			enemyGamePiece4.x += 5;
		}
		if (enemyGamePiece4.x >1338) {
			enemyGamePiece4.x -= 5;
		}
		if (enemyGamePiece4.y <0) {
			enemyGamePiece4.y +=5;
		}
		if (enemyGamePiece4.y >620) {
			enemyGamePiece4.y -= 5;
		}
		if (enemyGamePiece5.x <=5) {
			enemyGamePiece5.x += 5;
		}
		if (enemyGamePiece5.x >1338) {
			enemyGamePiece5.x -= 5;
		}
		if (enemyGamePiece5.y <0) {
			enemyGamePiece5.y +=5;
		}
		if (enemyGamePiece5.y >620) {
			enemyGamePiece5.y -= 5;
		}
		if (enemyGamePiece6.x <=5) {
			enemyGamePiece6.x += 5;
		}
		if (enemyGamePiece6.x >1338) {
			enemyGamePiece6.x -= 5;
		}
		if (enemyGamePiece6.y <0) {
			enemyGamePiece6.y +=5;
		}
		if (enemyGamePiece6.y >620) {
			enemyGamePiece6.y -= 5;
		}
		if (escapeGamePiece.x <=100) {
			escapeGamePiece.x += 15;
		}
		if (escapeGamePiece.x >1238) {
			escapeGamePiece.x -= 15;
		}
		if (escapeGamePiece.y <100) {
			escapeGamePiece.y += 15;
		}
		if (escapeGamePiece.y >520) {
			escapeGamePiece.y -= 15;
		}
		//Test if the game is over.
		if (myGameArea.frameNo > 5000) {
			gameWin3();
		}
    }
}
function updateGameArea11() {
	myGameArea11.clear();
	myGameArea11.frameNo += 1;
	myGamePiece1.moveAngle = 0;
	myGamePiece1.speed = 0;
	myGamePiece2.moveAngle = 0;
	myGamePiece2.speed = 0;
    if (myGameArea11.keys && myGameArea11.keys[65]) {myGamePiece1.moveAngle = -1; }
    if (myGameArea11.keys && myGameArea11.keys[68]) {myGamePiece1.moveAngle = 1; }
    if (myGameArea11.keys && myGameArea11.keys[87]) {myGamePiece1.speed = myGamePiece1.speed + 2.5; }
    if (myGameArea11.keys && myGameArea11.keys[83]) {myGamePiece1.speed = myGamePiece1.speed - 2; }
	if (myGameArea11.keys && myGameArea11.keys[74]) {myGamePiece2.moveAngle = -1; }
    if (myGameArea11.keys && myGameArea11.keys[76]) {myGamePiece2.moveAngle = 1; }
	if (myGameArea11.keys && myGameArea11.keys[73]) {myGamePiece2.speed = myGamePiece2.speed + 2.5; }
	if (myGameArea11.keys && myGameArea11.keys[75]) {myGamePiece2.speed = myGamePiece2.speed - 2; }
	if (testPlayer1Collide == 0) {
		myGamePiece1.newPos();
		myGamePiece1.update();
	} else {
		myGamePiece1.update();
	}
	if (testPlayer2Collide == 0) {
		myGamePiece2.newPos();
		myGamePiece2.update();
	} else {
		myGamePiece2.update();
	}
	myScore.text="You survived long enough to earn " + myGameArea10.frameNo + " points.";
    myScore.update();
	myGamePiece1.speedX = 0;
    myGamePiece1.speedY = 0;
	myGamePiece2.speedX = 0;
	myGamePiece2.speedY = 0;
	if (testPlayer1Collide == 0) {
		if (myGamePiece1.crashWith(enemyGamePiece1)) {
			mySound.play();
			testPlayer1Collide = 1;
		} else if (myGamePiece1.crashWith(enemyGamePiece2)) {
			mySound.play();
			testPlayer1Collide = 1;
		} else if (myGamePiece1.crashWith(enemyGamePiece3)) {
			mySound.play();
			testPlayer1Collide = 1;
		} else if (myGamePiece1.crashWith(enemyGamePiece4)) {
			mySound.play();
			testPlayer1Collide = 1;
		}
	}
	if (testPlayer2Collide == 0) {
		if (myGamePiece2.crashWith(enemyGamePiece1)) {
			mySound.play();
			testPlayer2Collide = 1;
		} else if (myGamePiece2.crashWith(enemyGamePiece2)) {
			mySound.play();
			testPlayer2Collide = 1;
		} else if (myGamePiece2.crashWith(enemyGamePiece3)) {
			mySound.play();
			testPlayer2Collide = 1;
		} else if (myGamePiece2.crashWith(enemyGamePiece4)) {
			mySound.play();
			testPlayer2Collide = 1;
		}
	}
	if (testPlayer1Collide == 1 && testPlayer2Collide == 1) {
		mySound.play();
		myGameArea11.stop();
		myMusic.stop();
	} else {
		myGameArea11.clear();
	    myGameArea11.context.drawImage(bgImage, 10, 10);
		var canvas = document.getElementById("myCanvas");
		var ctx = canvas.getContext("2d");
		ctx.font = "25px Consolas";
		ctx.fillStyle="white";
		ctx.fillRect(0,0,200,100);
		var grd=ctx.createLinearGradient(0,0,200,0);
		grd.addColorStop(0,"red");
		grd.addColorStop(0.2,"orange");
		grd.addColorStop(0.4,"yellow");
		grd.addColorStop(0.6,"green");
		grd.addColorStop(0.8,"blue");
		grd.addColorStop(1,"purple");
		ctx.fillStyle=grd;
		ctx.fillText("Super Crazy",5,30);
		ctx.fillText("Coding Maniac",15,60);
		ctx.fillText("Deluxe Site 4",5,90);
		//Update all pieces.
        enemyGamePiece1.update();
		enemyGamePiece2.update();
		enemyGamePiece3.update();
		enemyGamePiece4.update();
		if (testPlayer1Collide == 0) {
			myGamePiece1.newPos();
			myGamePiece1.update();
		} else {
			myGamePiece1.update();
		}
		if (testPlayer2Collide == 0) {
			myGamePiece2.newPos();
			myGamePiece2.update();
		} else {
			myGamePiece2.update();
		}
		if (enemyGamePiece1.x <= myGamePiece1.x) {
			enemyGamePiece1.x += 2.75;
		} else if (enemyGamePiece1.x >= myGamePiece1.x) {
			enemyGamePiece1.x -= 2.75;
		}
		if (enemyGamePiece1.y <= myGamePiece1.y) {
			enemyGamePiece1.y += 2.75;
		} else if (enemyGamePiece1.y >= myGamePiece1.y) {
			enemyGamePiece1.y -= 2.75;
		}
		if (enemyGamePiece2.x <= myGamePiece1.x) {
			enemyGamePiece2.x += 2.5;
		} else if (enemyGamePiece2.x >= myGamePiece1.x) {
			enemyGamePiece2.x -= 2.5;
		}
		if (enemyGamePiece2.y <= myGamePiece1.y) {
			enemyGamePiece2.y += 2.5;
		} else if (enemyGamePiece2.y >= myGamePiece1.y) {
			enemyGamePiece2.y -= 2.5;
		}
		if (enemyGamePiece3.x <= myGamePiece2.x) {
			enemyGamePiece3.x += 2.5;
		} else if (enemyGamePiece3.x >= myGamePiece2.x) {
			enemyGamePiece3.x -= 2.5;
		}
		if (enemyGamePiece3.y <= myGamePiece2.y) {
			enemyGamePiece3.y += 2.5;
		} else if (enemyGamePiece3.y >= myGamePiece2.y) {
			enemyGamePiece3.y -= 2.5;
		}
		if (enemyGamePiece4.x <= myGamePiece2.x) {
			enemyGamePiece4.x += 2.5;
		} else if (enemyGamePiece4.x >= myGamePiece2.x) {
			enemyGamePiece4.x -= 2.5;
		}
		if (enemyGamePiece4.y <= myGamePiece2.y) {
			enemyGamePiece4.y += 2.5;
		} else if (enemyGamePiece4.y >= myGamePiece2.y) {
			enemyGamePiece4.y -= 2.5;
		}
		if (myGamePiece1.x <=5) {
			myGamePiece1.x += 5;
		}
		if (myGamePiece1.x >1338) {
			myGamePiece1.x -= 5;
		}
		if (myGamePiece1.y <5) {
			myGamePiece1.y +=5;
		}
		if (myGamePiece1.y >620) {
			myGamePiece1.y -= 5;
		}
		if (myGamePiece2.x <=5) {
			myGamePiece2.x += 5;
		}
		if (myGamePiece2.x >1338) {
			myGamePiece2.x -= 5;
		}
		if (myGamePiece2.y <5) {
			myGamePiece2.y +=5;
		}
		if (myGamePiece2.y >620) {
			myGamePiece2.y -= 5;
		}
		if (enemyGamePiece1.x <=5) {
			enemyGamePiece1.x += 5;
		}
		if (enemyGamePiece1.x >1338) {
			enemyGamePiece1.x -= 5;
		}
		if (enemyGamePiece1.y <5) {
			enemyGamePiece1.y +=5;
		}
		if (enemyGamePiece1.y >620) {
			enemyGamePiece1.y -= 5;
		}
		if (enemyGamePiece2.x <=5) {
			enemyGamePiece2.x += 5;
		}
		if (enemyGamePiece2.x >1338) {
			enemyGamePiece2.x -= 5;
		}
		if (enemyGamePiece2.y <5) {
			enemyGamePiece2.y +=5;
		}
		if (enemyGamePiece2.y >620) {
			enemyGamePiece2.y -= 5;
		}
		if (enemyGamePiece3.x <=5) {
			enemyGamePiece3.x += 5;
		}
		if (enemyGamePiece3.x >1338) {
			enemyGamePiece3.x -= 5;
		}
		if (enemyGamePiece3.y <5) {
			enemyGamePiece3.y +=5;
		}
		if (enemyGamePiece3.y >620) {
			enemyGamePiece3.y -= 5;
		}
		if (enemyGamePiece4.x <=5) {
			enemyGamePiece4.x += 5;
		}
		if (enemyGamePiece4.x >1338) {
			enemyGamePiece4.x -= 5;
		}
		if (enemyGamePiece4.y <5) {
			enemyGamePiece4.y +=5;
		}
		if (enemyGamePiece4.y >620) {
			enemyGamePiece4.y -= 5;
		}
	}
}
function updateGameArea10() {
	myGameArea10.clear();
	myGameArea10.frameNo += 1;
	myGamePiece1.moveAngle = 0;
	myGamePiece1.speed = 0;
	myGamePiece2.moveAngle = 0;
	myGamePiece2.speed = 0;
    if (myGameArea10.keys && myGameArea10.keys[65]) {myGamePiece1.moveAngle = -1; }
    if (myGameArea10.keys && myGameArea10.keys[68]) {myGamePiece1.moveAngle = 1; }
    if (myGameArea10.keys && myGameArea10.keys[87]) {myGamePiece1.speed = myGamePiece1.speed + 2.5; }
    if (myGameArea10.keys && myGameArea10.keys[83]) {myGamePiece1.speed = myGamePiece1.speed - 2; }
	if (myGameArea10.keys && myGameArea10.keys[74]) {myGamePiece2.moveAngle = -1; }
    if (myGameArea10.keys && myGameArea10.keys[76]) {myGamePiece2.moveAngle = 1; }
	if (myGameArea10.keys && myGameArea10.keys[73]) {myGamePiece2.speed = myGamePiece2.speed + 2.5; }
	if (myGameArea10.keys && myGameArea10.keys[75]) {myGamePiece2.speed = myGamePiece2.speed - 2; }
	if (testPlayer1Collide == 0) {
		myGamePiece1.newPos();
		myGamePiece1.update();
	} else {
		myGamePiece1.update();
	}
	if (testPlayer2Collide == 0) {
		myGamePiece2.newPos();
		myGamePiece2.update();
	} else {
		myGamePiece2.update();
	}
	myScore.text="You survived long enough to earn " + myGameArea10.frameNo + " points.";
    myScore.update();
	myGamePiece1.speedX = 0;
    myGamePiece1.speedY = 0;
	myGamePiece2.speedX = 0;
	myGamePiece2.speedY = 0;
	if (testPlayer1Collide == 0) {
		if (myGamePiece1.crashWith(enemyGamePiece1)) {
			mySound.play();
			testPlayer1Collide = 1;
		} else if (myGamePiece1.crashWith(enemyGamePiece2)) {
			mySound.play();
			testPlayer1Collide = 1;
		} else if (myGamePiece1.crashWith(enemyGamePiece3)) {
			mySound.play();
			testPlayer1Collide = 1;
		} else if (myGamePiece1.crashWith(enemyGamePiece4)) {
			mySound.play();
			testPlayer1Collide = 1;
		}
	}
	if (testPlayer2Collide == 0) {
		if (myGamePiece2.crashWith(enemyGamePiece1)) {
			mySound.play();
			testPlayer2Collide = 1;
		} else if (myGamePiece2.crashWith(enemyGamePiece2)) {
			mySound.play();
			testPlayer2Collide = 1;
		} else if (myGamePiece2.crashWith(enemyGamePiece3)) {
			mySound.play();
			testPlayer2Collide = 1;
		} else if (myGamePiece2.crashWith(enemyGamePiece4)) {
			mySound.play();
			testPlayer2Collide = 1;
		}
	}
	if (testPlayer1Collide == 1 && testPlayer2Collide == 1) {
		mySound.play();
		myGameArea10.stop();
		myMusic.stop();
		gameOver10();
	}
	if (testPlayer1Win == 0 && testPlayer1Collide == 0) { 
		if (myGamePiece1.crashWith(escapeGamePiece)) {
			testPlayer1Win = 1;
		}
	}
	if (testPlayer2Win == 0 && testPlayer2Collide == 0) {
		if (myGamePiece2.crashWith(escapeGamePiece)) {
			testPlayer2Win = 1;
		}
	}
	
	if (testPlayer1Collide == 1 && testPlayer2Win == 1) {
		mySound.play();
		myGameArea10.stop();
		myMusic.stop();
		gameOver10a();
	} else if (testPlayer1Win == 1 && testPlayer2Collide == 1) {
		mySound.play();
		myGameArea10.stop();
		myMusic.stop();
		gameOver10b();
	} else if (testPlayer1Win == 1 && testPlayer2Win == 1) {
		mySound.play();
		gameWin10();
		myMusic.stop();
	} else if (testPlayer1Collide == 1 && testPlayer2Collide == 1) {
		mySound.play();
		myGameArea10.stop();
		myMusic.stop();
		gameOver10();
	} else {
		myGameArea10.clear();
	    myGameArea10.context.drawImage(bgImage, 10, 10);
		var canvas = document.getElementById("myCanvas");
		var ctx = canvas.getContext("2d");
		ctx.font = "25px Consolas";
		ctx.fillStyle="white";
		ctx.fillRect(0,0,200,100);
		var grd=ctx.createLinearGradient(0,0,200,0);
		grd.addColorStop(0,"red");
		grd.addColorStop(0.2,"orange");
		grd.addColorStop(0.4,"yellow");
		grd.addColorStop(0.6,"green");
		grd.addColorStop(0.8,"blue");
		grd.addColorStop(1,"purple");
		ctx.fillStyle=grd;
		ctx.fillText("Super Crazy",5,30);
		ctx.fillText("Coding Maniac",15,60);
		ctx.fillText("Deluxe Site 4",5,90);
		//Update all pieces.
        enemyGamePiece1.update();
		enemyGamePiece2.update();
		enemyGamePiece3.update();
		enemyGamePiece4.update();
		escapeGamePiece.update();
		if (testPlayer1Collide == 0) {
			myGamePiece1.newPos();
			myGamePiece1.update();
		} else {
			myGamePiece1.update();
		}
		if (testPlayer2Collide == 0) {
			myGamePiece2.newPos();
			myGamePiece2.update();
		} else {
			myGamePiece2.update();
		}
		if (enemyGamePiece1.x <= myGamePiece1.x) {
			enemyGamePiece1.x += 2.75;
		} else if (enemyGamePiece1.x >= myGamePiece1.x) {
			enemyGamePiece1.x -= 2.75;
		}
		if (enemyGamePiece1.y <= myGamePiece1.y) {
			enemyGamePiece1.y += 2.75;
		} else if (enemyGamePiece1.y >= myGamePiece1.y) {
			enemyGamePiece1.y -= 2.75;
		}
		if (enemyGamePiece2.x <= myGamePiece1.x) {
			enemyGamePiece2.x += 2.5;
		} else if (enemyGamePiece2.x >= myGamePiece1.x) {
			enemyGamePiece2.x -= 2.5;
		}
		if (enemyGamePiece2.y <= myGamePiece1.y) {
			enemyGamePiece2.y += 2.5;
		} else if (enemyGamePiece2.y >= myGamePiece1.y) {
			enemyGamePiece2.y -= 2.5;
		}
		if (enemyGamePiece3.x <= myGamePiece2.x) {
			enemyGamePiece3.x += 2.5;
		} else if (enemyGamePiece3.x >= myGamePiece2.x) {
			enemyGamePiece3.x -= 2.5;
		}
		if (enemyGamePiece3.y <= myGamePiece2.y) {
			enemyGamePiece3.y += 2.5;
		} else if (enemyGamePiece3.y >= myGamePiece2.y) {
			enemyGamePiece3.y -= 2.5;
		}
		if (enemyGamePiece4.x <= myGamePiece2.x) {
			enemyGamePiece4.x += 2.5;
		} else if (enemyGamePiece4.x >= myGamePiece2.x) {
			enemyGamePiece4.x -= 2.5;
		}
		if (enemyGamePiece4.y <= myGamePiece2.y) {
			enemyGamePiece4.y += 2.5;
		} else if (enemyGamePiece4.y >= myGamePiece2.y) {
			enemyGamePiece4.y -= 2.5;
		}
		if (escapeGamePiece.x <= myGamePiece1.x && escapeGamePiece.x > 150) {
			escapeGamePiece.x -= 7;
		} else if (escapeGamePiece.x >= myGamePiece1.x && escapeGamePiece.x < 1188) {
			escapeGamePiece.x += 7;
		} else if (escapeGamePiece.x <= myGamePiece1.x && escapeGamePiece.x < 150 && escapeGamePiece.y > 520 || escapeGamePiece.x >= myGamePiece1.x && escapeGamePiece.x > 1188 && escapeGamePiece.y > 520) {
			escapeGamePiece.y -= 7;
		} else if (escapeGamePiece.x <= myGamePiece1.x && escapeGamePiece.x < 150 && escapeGamePiece.y < 100 || escapeGamePiece.x >= myGamePiece1.x && escapeGamePiece.x > 1188 && escapeGamePiece.y < 100) {
			escapeGamePiece.y += 7;
		}
		if (escapeGamePiece.y <= myGamePiece1.y && escapeGamePiece.y > 100) {
			escapeGamePiece.y -= 7;
		} else if (escapeGamePiece.y >= myGamePiece1.y && escapeGamePiece.y < 520) {
			escapeGamePiece.y += 7;
		} else if (escapeGamePiece.y <= myGamePiece1.y && escapeGamePiece.y < 100 && escapeGamePiece.x > 1188 || escapeGamePiece.y >= myGamePiece1.y && escapeGamePiece.y > 520 && escapeGamePiece.x > 1188) {
			escapeGamePiece.x -= 7;
		} else if (escapeGamePiece.y <= myGamePiece1.y && escapeGamePiece.y < 100 && escapeGamePiece.x < 150 || escapeGamePiece.y >= myGamePiece1.y && escapeGamePiece.y > 520 && escapeGamePiece.x < 150) {
			escapeGamePiece.x -= 7;
		}
		if (escapeGamePiece.x == 1238 && escapeGamePiece.y == 520) {
			escapeGamePiece.y -= 7;
			escapeGamePiece.x -= 7;
		}
		if (escapeGamePiece.x == 1238 && escapeGamePiece.y == 100) {
			escapeGamePiece.y += 7;
			escapeGamePiece.x -= 7;
		}
		if (escapeGamePiece.x == 100 && escapeGamePiece.y == 520) {
			escapeGamePiece.y -= 7;
			escapeGamePiece.x += 7;
		}
		if (escapeGamePiece.x == 100 && escapeGamePiece.y == 100) {
			escapeGamePiece.y += 7;
			escapeGamePiece.x += 7;
		}
		if (escapeGamePiece.x > 1230 && escapeGamePiece.y > 520 && myGamePiece1.x > 1000 && myGamePiece1.x < 1338 || myGamePiece1.y > 300 && myGamePiece1.y < 500) {
			escapeGamePiece.x -= 7;
		}
		if (escapeGamePiece.x > 1230 && escapeGamePiece.y < 100 && myGamePiece1.x > 1000 && myGamePiece1.x < 1338 && myGamePiece1.y < 500 && myGamePiece1.y > 250) {
			escapeGamePiece.x -= 7;
		}
		if (escapeGamePiece.x < 100 && escapeGamePiece.y > 520 && myGamePiece1.x < 500 && myGamePiece1.x > 250 && myGamePiece1.y > 300 && myGamePiece1.y < 500) {
			escapeGamePiece.y -= 7;
		}
		if (escapeGamePiece.x < 100 && escapeGamePiece.y < 100 && myGamePiece1.x < 500 && myGamePiece1.x > 250 || myGamePiece1.y < 500 && myGamePiece1.y > 250) {
			escapeGamePiece.y += 7;
		}
		if (enemyGamePiece1.x > 100 && enemyGamePiece1.x < 500 && enemyGamePiece1.y > 50 && enemyGamePiece1.y < 300) {
			escapeGamePiece.x += 5;
			escapeGamePiece.y -= 4;
		}
		if (myGamePiece1.x <=5) {
			myGamePiece1.x += 5;
		}
		if (myGamePiece1.x >1338) {
			myGamePiece1.x -= 5;
		}
		if (myGamePiece1.y <5) {
			myGamePiece1.y +=5;
		}
		if (myGamePiece1.y >620) {
			myGamePiece1.y -= 5;
		}
		if (myGamePiece2.x <=5) {
			myGamePiece2.x += 5;
		}
		if (myGamePiece2.x >1338) {
			myGamePiece2.x -= 5;
		}
		if (myGamePiece2.y <5) {
			myGamePiece2.y +=5;
		}
		if (myGamePiece2.y >620) {
			myGamePiece2.y -= 5;
		}
		if (enemyGamePiece1.x <=5) {
			enemyGamePiece1.x += 5;
		}
		if (enemyGamePiece1.x >1338) {
			enemyGamePiece1.x -= 5;
		}
		if (enemyGamePiece1.y <5) {
			enemyGamePiece1.y +=5;
		}
		if (enemyGamePiece1.y >620) {
			enemyGamePiece1.y -= 5;
		}
		if (enemyGamePiece2.x <=5) {
			enemyGamePiece2.x += 5;
		}
		if (enemyGamePiece2.x >1338) {
			enemyGamePiece2.x -= 5;
		}
		if (enemyGamePiece2.y <5) {
			enemyGamePiece2.y +=5;
		}
		if (enemyGamePiece2.y >620) {
			enemyGamePiece2.y -= 5;
		}
		if (enemyGamePiece3.x <=5) {
			enemyGamePiece3.x += 5;
		}
		if (enemyGamePiece3.x >1338) {
			enemyGamePiece3.x -= 5;
		}
		if (enemyGamePiece3.y <5) {
			enemyGamePiece3.y +=5;
		}
		if (enemyGamePiece3.y >620) {
			enemyGamePiece3.y -= 5;
		}
		if (enemyGamePiece4.x <=5) {
			enemyGamePiece4.x += 5;
		}
		if (enemyGamePiece4.x >1338) {
			enemyGamePiece4.x -= 5;
		}
		if (enemyGamePiece4.y <5) {
			enemyGamePiece4.y +=5;
		}
		if (enemyGamePiece4.y >620) {
			enemyGamePiece4.y -= 5;
		}
		if (escapeGamePiece.x <=100) {
			escapeGamePiece.x += 15;
		}
		if (escapeGamePiece.x >1238) {
			escapeGamePiece.x -= 15;
		}
		if (escapeGamePiece.y <100) {
			escapeGamePiece.y += 15;
		}
		if (escapeGamePiece.y >620) {
			escapeGamePiece.y -= 15;
		}
	}
}
function updateGameArea9() {
	myGameArea9.clear();
	myGameArea9.frameNo += 1;
	myGamePiece1.moveAngle = 0;
	myGamePiece1.speed = 0;
	myGamePiece2.moveAngle = 0;
	myGamePiece2.speed = 0;
    if (myGameArea9.keys && myGameArea9.keys[65]) {myGamePiece1.moveAngle = -1; }
    if (myGameArea9.keys && myGameArea9.keys[68]) {myGamePiece1.moveAngle = 1; }
    if (myGameArea9.keys && myGameArea9.keys[87]) {myGamePiece1.speed = myGamePiece1.speed + 2.5; }
    if (myGameArea9.keys && myGameArea9.keys[83]) {myGamePiece1.speed = myGamePiece1.speed - 2; }
	if (myGameArea9.keys && myGameArea9.keys[74]) {myGamePiece2.moveAngle = -0.75; }
    if (myGameArea9.keys && myGameArea9.keys[76]) {myGamePiece2.moveAngle = 0.75; }
	if (myGameArea9.keys && myGameArea9.keys[73]) {myGamePiece2.speed = myGamePiece2.speed + 2.25; }
	if (myGameArea9.keys && myGameArea9.keys[75]) {myGamePiece2.speed = myGamePiece2.speed - 1.75; }
	myGamePiece1.newPos();
    myGamePiece1.update();
	myGamePiece2.newPos();
	myGamePiece2.update();
	myScore.text="You survived long enough to earn " + myGameArea9.frameNo + " points.";
    myScore.update();
	myGamePiece1.speedX = 0;
    myGamePiece1.speedY = 0;
	myGamePiece2.speedX = 0;
	myGamePiece2.speedY = 0;
	if (myGamePiece1.crashWith(enemyGamePiece1)) {
		mySound.play();
		myGameArea9.stop();
		myMusic.stop();
	} else if (myGamePiece1.crashWith(enemyGamePiece2)) {
		mySound.play();
		myGameArea9.stop();
		myMusic.stop();
	} else if (myGamePiece1.crashWith(myGamePiece2)) {
		mySound.play();
		myGameArea9.stop();
		myMusic.stop();
	} else if (myGamePiece1.crashWith(escapeGamePiece)) {
		gameWin9();
	} else {
		myGameArea9.clear();
	    myGameArea9.context.drawImage(bgImage, 10, 10);
		var canvas = document.getElementById("myCanvas");
		var ctx = canvas.getContext("2d");
		ctx.font = "25px Consolas";
		ctx.fillStyle="white";
		ctx.fillRect(0,0,200,100);
		var grd=ctx.createLinearGradient(0,0,200,0);
		grd.addColorStop(0,"red");
		grd.addColorStop(0.2,"orange");
		grd.addColorStop(0.4,"yellow");
		grd.addColorStop(0.6,"green");
		grd.addColorStop(0.8,"blue");
		grd.addColorStop(1,"purple");
		ctx.fillStyle=grd;
		ctx.fillText("Super Crazy",5,30);
		ctx.fillText("Coding Maniac",15,60);
		ctx.fillText("Deluxe Site 4",5,90);
		//Update all pieces.
        enemyGamePiece1.update();
		enemyGamePiece2.update();
		escapeGamePiece.update();
		myGamePiece1.newPos();
        myGamePiece1.update();
		myGamePiece2.newPos();
		myGamePiece2.update();
		if (enemyGamePiece1.x <= myGamePiece1.x) {
			enemyGamePiece1.x += 2.75;
		} else if (enemyGamePiece1.x >= myGamePiece1.x) {
			enemyGamePiece1.x -= 2.75;
		}
		if (enemyGamePiece1.y <= myGamePiece1.y) {
			enemyGamePiece1.y += 2.75;
		} else if (enemyGamePiece1.y >= myGamePiece1.y) {
			enemyGamePiece1.y -= 2.75;
		}
		if (enemyGamePiece2.x <= myGamePiece1.x) {
			enemyGamePiece2.x += 2.5;
		} else if (enemyGamePiece2.x >= myGamePiece1.x) {
			enemyGamePiece2.x -= 2.5;
		}
		if (enemyGamePiece2.y <= myGamePiece1.y) {
			enemyGamePiece2.y += 2.5;
		} else if (enemyGamePiece2.y >= myGamePiece1.y) {
			enemyGamePiece2.y -= 2.5;
		}
		if (escapeGamePiece.x <= myGamePiece1.x && escapeGamePiece.x > 150) {
			escapeGamePiece.x -= 7;
		} else if (escapeGamePiece.x >= myGamePiece1.x && escapeGamePiece.x < 1188) {
			escapeGamePiece.x += 7;
		} else if (escapeGamePiece.x <= myGamePiece1.x && escapeGamePiece.x < 150 && escapeGamePiece.y > 520 || escapeGamePiece.x >= myGamePiece1.x && escapeGamePiece.x > 1188 && escapeGamePiece.y > 520) {
			escapeGamePiece.y -= 7;
		} else if (escapeGamePiece.x <= myGamePiece1.x && escapeGamePiece.x < 150 && escapeGamePiece.y < 100 || escapeGamePiece.x >= myGamePiece1.x && escapeGamePiece.x > 1188 && escapeGamePiece.y < 100) {
			escapeGamePiece.y += 7;
		}
		if (escapeGamePiece.y <= myGamePiece1.y && escapeGamePiece.y > 100) {
			escapeGamePiece.y -= 7;
		} else if (escapeGamePiece.y >= myGamePiece1.y && escapeGamePiece.y < 520) {
			escapeGamePiece.y += 7;
		} else if (escapeGamePiece.y <= myGamePiece1.y && escapeGamePiece.y < 100 && escapeGamePiece.x > 1188 || escapeGamePiece.y >= myGamePiece1.y && escapeGamePiece.y > 520 && escapeGamePiece.x > 1188) {
			escapeGamePiece.x -= 7;
		} else if (escapeGamePiece.y <= myGamePiece1.y && escapeGamePiece.y < 100 && escapeGamePiece.x < 150 || escapeGamePiece.y >= myGamePiece1.y && escapeGamePiece.y > 520 && escapeGamePiece.x < 150) {
			escapeGamePiece.x -= 7;
		}
		if (escapeGamePiece.x == 1238 && escapeGamePiece.y == 520) {
			escapeGamePiece.y -= 7;
			escapeGamePiece.x -= 7;
		}
		if (escapeGamePiece.x == 1238 && escapeGamePiece.y == 100) {
			escapeGamePiece.y += 7;
			escapeGamePiece.x -= 7;
		}
		if (escapeGamePiece.x == 100 && escapeGamePiece.y == 520) {
			escapeGamePiece.y -= 7;
			escapeGamePiece.x += 7;
		}
		if (escapeGamePiece.x == 100 && escapeGamePiece.y == 100) {
			escapeGamePiece.y += 7;
			escapeGamePiece.x += 7;
		}
		if (escapeGamePiece.x > 1230 && escapeGamePiece.y > 520 && myGamePiece1.x > 1000 && myGamePiece1.x < 1338 || myGamePiece1.y > 300 && myGamePiece1.y < 500) {
			escapeGamePiece.x -= 7;
		}
		if (escapeGamePiece.x > 1230 && escapeGamePiece.y < 100 && myGamePiece1.x > 1000 && myGamePiece1.x < 1338 && myGamePiece1.y < 500 && myGamePiece1.y > 250) {
			escapeGamePiece.x -= 7;
		}
		if (escapeGamePiece.x < 100 && escapeGamePiece.y > 520 && myGamePiece1.x < 500 && myGamePiece1.x > 250 && myGamePiece1.y > 300 && myGamePiece1.y < 500) {
			escapeGamePiece.y -= 7;
		}
		if (escapeGamePiece.x < 100 && escapeGamePiece.y < 100 && myGamePiece1.x < 500 && myGamePiece1.x > 250 || myGamePiece1.y < 500 && myGamePiece1.y > 250) {
			escapeGamePiece.y += 7;
		}
		if (enemyGamePiece1.x > 100 && enemyGamePiece1.x < 500 && enemyGamePiece1.y > 50 && enemyGamePiece1.y < 300) {
			escapeGamePiece.x += 5;
			escapeGamePiece.y -= 4;
		}
		if (myGamePiece1.x <=5) {
			myGamePiece1.x += 5;
		}
		if (myGamePiece1.x >1338) {
			myGamePiece1.x -= 5;
		}
		if (myGamePiece1.y <5) {
			myGamePiece1.y +=5;
		}
		if (myGamePiece1.y >620) {
			myGamePiece1.y -= 5;
		}
		if (myGamePiece2.x <=5) {
			myGamePiece2.x += 5;
		}
		if (myGamePiece2.x >1338) {
			myGamePiece2.x -= 5;
		}
		if (myGamePiece2.y <5) {
			myGamePiece2.y +=5;
		}
		if (myGamePiece2.y >620) {
			myGamePiece2.y -= 5;
		}
		if (enemyGamePiece1.x <=5) {
			enemyGamePiece1.x += 5;
		}
		if (enemyGamePiece1.x >1338) {
			enemyGamePiece1.x -= 5;
		}
		if (enemyGamePiece1.y <5) {
			enemyGamePiece1.y +=5;
		}
		if (enemyGamePiece1.y >620) {
			enemyGamePiece1.y -= 5;
		}
		if (enemyGamePiece2.x <=5) {
			enemyGamePiece2.x += 5;
		}
		if (enemyGamePiece2.x >1338) {
			enemyGamePiece2.x -= 5;
		}
		if (enemyGamePiece2.y <5) {
			enemyGamePiece2.y +=5;
		}
		if (enemyGamePiece2.y >620) {
			enemyGamePiece2.y -= 5;
		}
		if (escapeGamePiece.x <=100) {
			escapeGamePiece.x += 15;
		}
		if (escapeGamePiece.x >1238) {
			escapeGamePiece.x -= 15;
		}
		if (escapeGamePiece.y <100) {
			escapeGamePiece.y += 15;
		}
		if (escapeGamePiece.y >620) {
			escapeGamePiece.y -= 15;
		}
	}
}