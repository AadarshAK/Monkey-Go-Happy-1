
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score=0;
var ground;
var bc=0;

var play=1;
function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");

}



function setup() {
  createCanvas(600,600);
      monkey=createSprite(100,510,20,20);
    monkey.addAnimation("RCB",monkey_running);
    monkey.scale=0.2;
  ground = createSprite(300,590,600,10);
  bananaGroup=new Group();
  obstacleGroup=new Group();
}


function draw() {
  background("white");
  
  


  if((keyDown("space"))&&monkey.y>=523){
    monkey.velocityY=-28; 
   }   


    
      monkey.lifetime=600;
      
      monkey.velocityY=monkey.velocityY+0.8;
     monkey.collide(ground);  
      ground.velocityX=-2;
    ground.x=ground.width/2;
  
  bananafun();
  stones();
  
    score = score + Math.round(getFrameRate()/60);
  
  if(monkey.isTouching(obstacleGroup)){
    monkey.visible=false;
    score=0;
    bc=0;
    play=0;
  }
  
  if(monkey.isTouching(bananaGroup)){
    bananaGroup.destroyEach();
    bc=bc+1;
  }
  
  if(keyDown("r")&&play===0){
    monkey.visible=true;
    play=1;
  }

  if(play===0){
    fill("green");
    textSize(32);
    text("You lose press 'r' to restart",180,300);
    bananaGroup.destroyEach();
    obstacleGroup.destroyEach();
    score=0;
  }
  
console.log(frameCount);
  drawSprites();
  fill("blue");
  textSize(20);
  text("Score : "+score,420,30);
  text("Bananas collected : "+bc,50,30);
}



function bananafun(){
  if(frameCount%80===0){
   banana=createSprite(550,300,20,20);
   banana.velocityX=-4;
   banana.addImage(bananaImage);
   banana.scale=0.20;
   banana.y=Math.round(random(120, 200));
   bananaGroup.add(banana);
   bananaGroup.setLifetimeEach=-1;
  }

}


function stones(){
  if(frameCount%200===0){
   obstacle=createSprite(550,550,20,20);
   obstacle.addImage(obstacleImage);
   obstacle.scale=0.20;
   obstacle.velocityX= -(4 + 3*score/10);
  obstacleGroup.setLifetimeEach=-1;
  obstacleGroup.add(obstacle);
  }
}