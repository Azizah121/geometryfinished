var ship;
var astroid;
var backg;
var backg2;
var backg3;
var mars;
var uranus;
var astroidGroup;
var block;
var block2;
var block3;
var score=100

function preload(){
spaceship=loadImage("ship.png");

rockimage=loadImage("rocks.png");

backgroundimage=loadImage("6.jpg");

marsimage=loadImage("m.png");

uranusimage=loadImage("u.png");
}
function setup(){

  createCanvas(899,1000);
  
  backg=createSprite(900,2590);
  backg.addImage("g",backgroundimage);
  backg2=createSprite(900,1470);
  backg2.addImage('t',backgroundimage);
backg3=createSprite(900,350);
backg3.addImage("r",backgroundimage);

 
 backg.velocityY=5
  backg2.velocityY=5
  backg3.velocityY=5
  
 block=createSprite(500,2850,50,3000);
 block2=createSprite(900,3350,7000,400);
 block3=createSprite(1420,2850,50,3000);
 

ship=createSprite(900,2800,10,10);
  ship.addImage("s",spaceship);
  ship.scale=0.25;

  uranus=createSprite(890,-20000)
  uranus.addImage('y',uranusimage);
  uranus.scale=0.5
   uranus.rotation=50
   uranus.velocityY=10;

  mars=createSprite(890,2850,10,10);
  mars.addImage('k',marsimage);
   mars.scale=0.3
   mars.rotation=50
   mars.velocityY=2

astroidGroup=new Group();

camera.on();
  
}
function draw(){
 background('white')
 
if(backg2.y==2860){
  backg.y=620
  backg.velocityY=5
}if(backg3.y==2860){
  backg2.y=620
  backg2.velocityY=5
}if(backg.y==2860){
  backg3.y=620
  backg3.velocityY=5
}

 

  ship.velocityX=0;

  ship.collide(block);
  ship.collide(block2);
  ship.collide(block3);
  
  if (ship.collide(astroidGroup)){
    score=score-10;
  }
  
 
  uranus.rotation=uranus.rotation+3
   mars.rotation=mars.rotation+3

  camera.x=960;
  camera.y=2800; 
  mars.depth=0.2
   backg3.depth=0.1
    backg.depth=0.1
   backg2.depth=0.1
   ship.depth=0.3
   block.depth=0.4
   block2.depth=0.4
   block3.depth=0.4
  
 

  if (frameCount%40==0){
    astroid=createSprite(950,1000,4,10);
    astroid.depth=0.1;
    astroid.velocityY=10;
    astroid.rotation=10;
  astroid.addAnimation("doo",rockimage);
    astroid.x=Math.round(random(629,1290));
astroid.setCollider("aabb",0,0,35,10);
    astroidGroup.add(astroid);
  }
  

  if(keyIsDown(RIGHT_ARROW)){
    ship.velocityX=7;
  }if(keyIsDown(LEFT_ARROW)){
    ship.velocityX=-7;
  }
   drawSprites();
  stroke("black");
   textSize(20);
   fill("white");
   text("Health:"+score,1250,2700);
  
   textSize(20);
   fill("white");
   text("Start Location: Mars", 1200,2780)

   textSize(20);
   fill("white");
   text("Destination: Uranus", 1200,2880)

   if(ship.isTouching(uranus)){
    textSize(100)
    fill("white");
    text("YOU WIN!!!", 650,2480);
     backg.velocityY=0;
     backg2.velocityY=0;
     backg3.velocityY=0;
    astroidGroup.setVelocityXEach(0)
    astroidGroup.setVelocityYEach(0)
     uranus.velocityY=0;
    ship.velocityX=0;
   ship.velocityY=0;
    
   }
   if(score==0){
    score=0
    backg.velocityY=0;
    backg2.velocityY=0;
    backg3.velocityY=0;
    uranus.velocityY=0;
  ship.velocityX=0;
  ship.velocityY=0;
  astroidGroup.setVelocityXEach(0)
  astroidGroup.setVelocityYEach(0)
   textSize(100)
   fill("white");
   text("GAME OVER",650,2780);
   }
   if(score<0){
     score=0
     backg.velocityY=0;
     backg2.velocityY=0;
     backg3.velocityY=0;
    uranus.velocityY=0;
  ship.velocityX=0;
  ship.velocityY=0;
  astroidGroup.setVelocityXEach(0)
  astroidGroup.setVelocityYEach(0)
   textSize(100)
   fill("white");
   text("GAME OVER",650,2780);
 }


} 
   