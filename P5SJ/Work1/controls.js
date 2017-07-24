var sprite1;
var spriteXPos = 200;
var spriteYPos = 150;


function setup() {
    createCanvas(500,500);
    bg = loadImage("images/Screenshot.png");
    sprite1 = loadImage("images/ball.png");
}
function draw() {
    clear();
    background(bg);
    image(sprite1, spriteXPos,spriteYPos,50,50);

    if (keyIsDown(LEFT_ARROW)){
        spriteXPos-=5;
      }
    if (keyIsDown(RIGHT_ARROW)){
        spriteXPos+=5;
      }
    if (keyIsDown(UP_ARROW)){
        spriteYPos-=5;
      }
    if (keyIsDown(DOWN_ARROW)){
        spriteYPos+=5;
      }





    }
