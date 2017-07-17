var x = 200;
var y = 250;
function setup(){
  createCanvas(500,500);
  bg = loadImage("background.jpg");
}
function draw(){
  clear();
  background(bg);
  fill(x,40,0);
  // ellipse(x,y,50,50);
  if (x >= y){
    ellipse(x,y,80,50);
  }else{
    strokeWeight(10);
    fill(0,100,200);
    line(x-100,y-150,400,400);
  }
}
