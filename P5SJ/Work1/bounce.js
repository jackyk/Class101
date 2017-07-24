x = 300;
y = 200;
speedInX = 5;
speedInY = 5; 
width = 500;
height= 500;

function setup(){
createCanvas(width,height);
bg = loadImage("images/Screenshot.png");
}
function draw(){
//clear();
background(bg);


x =x+speedInX;
y =y+speedInY;

ellipse(x,y,40,40);

if (y > height-10 || y < 0+10){
	y =speedInY*-1;
}
if (x > width-10 || x < 0+10){
	x =speedInX*-1;
}



}
