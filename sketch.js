var path,boy,coin,vampire1,vampire2,vampire3;
var pathImg,boyImg,coinImg,vampire1Img,vampire2Img,vampire3Img;
var treasureCollection = 0;
var coinGroup,vampire1G,vampire2G,vampire3G;

//Game States
var PLAY=1;
var END=0;
var gameState=1;

function preload(){
  pathImg = loadImage("Road.png");
  boyImg = loadAnimation("Runner-1.png","Runner-2.png");
  coinImg = loadImage("coin.png");
  vampire1 = loadImage("vampire_1.png");
  vampire2Img = loadImage("vampire_2.png");
  vampire3Img = loadImage("vampire_3.png");

  gameOverImg = loadImage("gameOver.png");
}

function setup(){
  
  createCanvas(400,600);
// Moving background
  
path=createSprite(200,200);
path.addImage(pathImg);
path.velocityY = 4;


//creating boy running
boy = createSprite(70,580,20,20);
boy.addAnimation("SahilRunning",boyImg);
boy.scale=0.08;
  

coinGroup=new Group();
vampie1G=new Group();
vampire2G=new Group();
vampire3G=new Group();

}

function draw() {

  if(gameState===PLAY){
  background(0);
  boy.x = World.mouseX;
  
  edges= createEdgeSprites();
  boy.collide(edges);
  
  //code to reset the background
  if(path.y > 400 ){
    path.y = height/2;
  }
  
    createCoin();
    createVampire1();
    createVampire2();
    createVampire3();

    if (coinGroup.isTouching(boy)) {
      coinGroup.destroyEach();
      treasureCollection=treasureCollection+50;
    }
    }else{
        if(vampire1G.isTouching(boy)) {
          gameState=END;
      
    }else{
        if(vampire2G.isTouching(boy)) {
          gameState=END;
      
    }else{
      if(vampire3G.isTouching(boy)) {
        gameState=END;
       
        
        coinGroup.destroyEach();
        vampire1G.destroyEach();
        vampire2G.destroyEach();
        vampire3G.destroyEach();
        
        coinGroup.setVelocityYEach(0);
        vampire1G.setVelocityYEach(0);
        vampire2G.setVelocityYEach(0);
        vampire3G.setVelocityYEach(0);


   var gameOver = createSprite(200,300,200,200);
   gameOver.addImage(gameOverImg)
   gameOver.scale=0.5
    }
  }
  
  drawSprites();
  textSize(20);
  fill(255);
  text("Treasure: "+ treasureCollection,10,30);
  }

}

function createCoin() {
  if (World.frameCount % 200 == 0) {
  var coin = createSprite(Math.round(random(50, 350),40, 10, 10));
  coin.addImage(coinImg);
  coin.scale=0.12;
  coin.velocityY = 3;
  coin.lifetime = 150;
  coinGroup.add(coin);
  }
}

function createVampire1() {
  if (World.frameCount % 320 == 0) {
  var vampire1 = createSprite(Math.round(random(50, 350),40, 10, 10));
  vampire1.addImage(vampire1Img);
  vampire1.scale=0.03;
  vampire1.velocityY = 3;
  vampire1.lifetime = 150;
  vampire1G.add(vampire1);
}
}

function createVampire2() {
  if (World.frameCount % 410 == 0) {
  var vampire2 = createSprite(Math.round(random(50, 350),40, 10, 10));
  vampire2.addImage(vampire2Img);
  vampire2.scale=0.13;
  vampire2.velocityY = 3;
  vampire2.lifetime = 150;
  vampire2G.add(vampire2);
  }
}

function createVampire3(){
  if (World.frameCount % 530 == 0) {
  var vampire3 = createSprite(Math.round(random(50, 350),40, 10, 10));
  vampire3.addImage(vampire3Img);
  vampire3.scale=0.1;
  vampire3.velocityY = 3;
  vampire3.lifetime = 150;
  vampire3G.add(vampire3);
  }
}
}