function setup() {
  createCanvas(800,400);
}

function draw() {
  background(88);
  for(var i = 10; i < 780; i +=10){
    var randomXPos= random(20,300);
    ellipse(i, randomXPos, 10,10);
  }
}
