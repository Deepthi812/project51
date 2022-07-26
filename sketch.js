var canvas;
var backgroundImage, girl_img, man_img,girl_anim,man_anim
var girl, man
var climber, swing, slide
var climber_play, swing_play, slide_play
var chatsGroup

function preload() {
  backgroundImage = loadImage("./assets/bg.jpg");
  girl_img = loadImage("./assets/girlstanding.png")
  girl_anim = loadAnimation("./assets/girlstanding.png","./assets/girlwalking.png")
  man_img = loadImage("./assets/manstanding.png")
  man_anim = loadAnimation("./assets/manstanding.png","./assets/manwalking.png",)
  climber_play = loadImage("./assets/climber.png")
  swing_play = loadImage("./assets/swing.png")
  slide_play = loadImage("./assets/slide.png")
}


function setup() {
  canvas = createCanvas(windowWidth,windowHeight);
  // createSprite(400, 200, 50, 50);
  
 girl = createSprite(200,655,50,50)
 girl.addImage(girl_img)
 girl.scale = 0.4
 girl.addAnimation(girl_anim)
 
   man = createSprite(1600,650,50,50)
   man.addImage(man_img)
  man.scale = 0.3
  man.addAnimation(man_anim)

climber = createSprite(1100,610,50,50)
climber.addImage(climber_play)

swing = createSprite(800,650,50,50)
swing.addImage(swing_play)
swing.scale = 0.7

slide = createSprite(500,635,50,50)
slide.addImage(slide_play)
// slide.scale = 0.7


}

function draw() {
  background(backgroundImage); 

  // if(keyDown("RIGHT_ARROW")) {
    // girl.velocityX = 3;
  //}

  //if(keyDown("RIGHT_ARROW")) {
   // man.velocityX = -3;
 // }

 // if(girl) 

    drawSprites();
}