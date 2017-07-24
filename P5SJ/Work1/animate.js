var speedInX = 2;
var speedInY = 5;
var ellipseX = 100;
var ellipseY = 100;

function setup(){
createCanvas(700,500);
bg = loadImage("images/Screenshot.png");
}
function draw(){
clear();
background(bg);
fill(255);
ellipse(ellipseX, ellipseY,40,40);

ellipseX = ellipseX + speedInX;
ellipseY = ellipseY + speedInY;

if (ellipseX > width - 100 || ellipseX < 0 + 10){
	ellipseX =speedInX*- 1;
	}

if (ellipseY > height - 10 || ellipseY < 0 + 10){
	ellipseY =speedInY *-1;
	}
}
