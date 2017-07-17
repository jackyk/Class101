function setup(){
  createCanvas(500,500);
  // background(0);
}
function draw(){
  if (mouseIsPressed){
    fill(255);
  }
  else{
    fill(0,0,255);
  }

  // fill(0,200,255);
  ellipse(mouseX,mouseY,80,80);
  // point(350,400);
  // stroke(200,10,40);
  // strokeWeight(20);
}
