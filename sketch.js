
var trex ,trex_running;
var ground,groundImage;
function preload(){
  trex_running=loadAnimation("trex1.png","trex3.png","trex4.png")

}

function setup(){
  createCanvas(600,200)
  
  //create a trex sprite
  trex=createSprite(100,100,50,50)
trex.addAnimation("runnigntrex",trex_running)
trex.scale=0.7
ground=createSprite(300,180,600,10)

 
}

function draw(){
  background(180)
  drawSprites()
if (keyDown("space")){
trex.velocityY=-10   
}
trex.velocityY+=0.5
trex.collide(ground)

}
