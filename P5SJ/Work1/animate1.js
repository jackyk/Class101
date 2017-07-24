var speed = 3;
var x = 0;

function setup(){
createCanvas(800,500);
}
function draw(){
  clear();
background(0);
ellipse(x, 200,20,20);

if (x > width-20/2){
    speed =-5;
    console.log("speed");
}
if (x < 10+20/2){
  speed=+5
}
x = x + speed;

}

// assignment work with the y axis
