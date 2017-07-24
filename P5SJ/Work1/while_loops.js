
function setup(){
createCanvas(800,500);
}
function draw(){
background(0);
var x = 0;
while(x <= width){
  ellipse(x,200,20,20);
  x= x + 50;
  console.log("x");
}



for (var y = 0; y <= width; y= y+50){
    ellipse(y, 300, 20,20);
}
fill(255);
textSize(40);
text("Hello World" ,400,250);
}
