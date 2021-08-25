var plr;
var enemy, enemyHead;
var bg;
var sword;
var PLAY = 0;
var END = 1;
var gameState = PLAY;
var lives = 3;
var score = 0;
var dino1,dano2,dino3,dino4;
var dino1Animation,dino2Animation,dino3Animation,dino4Animation;


function preload(){
  plrWalk = loadAnimation("PLR/Walk/walk1.png", "PLR/Walk/walk1.png", "PLR/Walk/walk1.png", "PLR/Walk/walk1.png");
  enemyRun = loadAnimation("ENEMIES/2_enemies_1_run_000.png", "ENEMIES/2_enemies_1_run_001.png", "ENEMIES/2_enemies_1_run_002.png",
  "ENEMIES/2_enemies_1_run_003.png", "ENEMIES/2_enemies_1_run_004.png", "ENEMIES/2_enemies_1_run_005.png");
  bg1Img = loadImage("BG/01.jpg");
  bg2Img = loadImage("BG/War.png");
  bg3Img = loadImage("BG/War2.png");
  bg4Img = loadImage("BG/War3.png");

  dino1Animation = loadAnimation("Mini-Dinos/DinoSprites_doux-0/0.png","Mini-Dinos/DinoSprites_doux-0/1.png","Mini-Dinos/DinoSprites_doux-0/2.png",
     "Mini-Dinos/DinoSprites_doux-0/3.png","Mini-Dinos/DinoSprites_doux-0/4.png","Mini-Dinos/DinoSprites_doux-0/5.png","Mini-Dinos/DinoSprites_doux-0/6.png",
     "Mini-Dinos/DinoSprites_doux-0/7.png","Mini-Dinos/DinoSprites_doux-0/8.png","Mini-Dinos/DinoSprites_doux-0/9.png",
     "Mini-Dinos/DinoSprites_doux-0/10.png","Mini-Dinos/DinoSprites_doux-0/11.png","Mini-Dinos/DinoSprites_doux-0/12.png","Mini-Dinos/DinoSprites_doux-0/13.png",
     "Mini-Dinos/DinoSprites_doux-0/14.png")  

  dino2Animation = loadAnimation("Mini-Dinos/DinoSprites_mort-0/0.png","Mini-Dinos/DinoSprites_mort-0/1.png","Mini-Dinos/DinoSprites_mort-0/2.png",
    "Mini-Dinos/DinoSprites_mort-0/3.png","Mini-Dinos/DinoSprites_mort-0/4.png","Mini-Dinos/DinoSprites_mort-0/5.png","Mini-Dinos/DinoSprites_mort-0/6.png",
    "Mini-Dinos/DinoSprites_mort-0/7.png","Mini-Dinos/DinoSprites_mort-0/8.png","Mini-Dinos/DinoSprites_mort-0/9.png",
    "Mini-Dinos/DinoSprites_mort-0/10.png","Mini-Dinos/DinoSprites_mort-0/11.png","Mini-Dinos/DinoSprites_mort-0/12.png","Mini-Dinos/DinoSprites_mort-0/13.png",
    "Mini-Dinos/DinoSprites_mort-0/14.png") 

  dino3Animation = loadAnimation("Mini-Dinos/DinoSprites_tard-0/0.png","Mini-Dinos/DinoSprites_tard-0/1.png","Mini-Dinos/DinoSprites_tard-0/2.png",
    "Mini-Dinos/DinoSprites_tard-0/3.png","Mini-Dinos/DinoSprites_tard-0/4.png","Mini-Dinos/DinoSprites_tard-0/5.png","Mini-Dinos/DinoSprites_tard-0/6.png",
    "Mini-Dinos/DinoSprites_tard-0/7.png","Mini-Dinos/DinoSprites_tard-0/8.png","Mini-Dinos/DinoSprites_tard-0/9.png",
    "Mini-Dinos/DinoSprites_tard-0/10.png","Mini-Dinos/DinoSprites_tard-0/11.png","Mini-Dinos/DinoSprites_tard-0/12.png","Mini-Dinos/DinoSprites_tard-0/13.png",
    "Mini-Dinos/DinoSprites_tard-0/14.png") 

  dino4Animation = loadAnimation("Mini-Dinos/DinoSprites_vita-0/0.png","Mini-Dinos/DinoSprites_vita-0/1.png","Mini-Dinos/DinoSprites_vita-0/2.png",
    "Mini-Dinos/DinoSprites_vita-0/3.png","Mini-Dinos/DinoSprites_vita-0/4.png","Mini-Dinos/DinoSprites_vita-0/5.png","Mini-Dinos/DinoSprites_vita-0/6.png",
    "Mini-Dinos/DinoSprites_vita-0/7.png","Mini-Dinos/DinoSprites_vita-0/8.png","Mini-Dinos/DinoSprites_vita-0/9.png",
    "Mini-Dinos/DinoSprites_vita-0/10.png","Mini-Dinos/DinoSprites_vita-0/11.png","Mini-Dinos/DinoSprites_vita-0/12.png","Mini-Dinos/DinoSprites_vita-0/13.png",
    "Mini-Dinos/DinoSprites_vita-0/14.png") 
}

function setup() {
  createCanvas(800,400);
  camera.zoom = 1.5
  
  bg = createSprite(400, 200);
  bg.addImage(bg1Img);
  bg.scale = 1.5;

  bg2 = createSprite(1220, 200);
  bg2.addImage(bg1Img);
  bg2.scale = 1.5;

  plr = createSprite(100, 220, 50, 50);
  plr.addAnimation("Walk", plrWalk);
  plr.scale = 0.8;
  plr.setCollider("rectangle", -20, 0, 50, 80);

  ground1 = createSprite(85, 295, 170, 20);

  gw1 =  createSprite(1, 285, 10, 20);
  gw2 =  createSprite(165, 285, 10, 20);

  ground1.visible = false;
  dino1 = createSprite(55, 278, 270, 20);
  dino1.addAnimation("dino1", dino1Animation)
  dino1.velocityX = -2;
  ground2 = createSprite(365, 264, 130, 20);

  gw3 = createSprite(306, 255, 10, 20);
  gw4 = createSprite(420, 255, 10, 20)

  ground2.visible = false;

  dino2 = createSprite(350, 245, 270, 20);
  dino2.addAnimation("dino2", dino2Animation)
  // ground2.velocityX = -2;
  dino2.velocityX = -2;

  ground3 = createSprite(530, 340, 70, 20);
  ground3.visible = false;

  gw5 = createSprite(491, 331, 10, 20);
  gw6 = createSprite(565, 331, 10, 20)

  dino3 = createSprite(530, 317, 270, 20);
  dino3.addAnimation("dino3", dino3Animation)
  dino3.velocityX = -2;
  
  ground4 = createSprite(690, 295, 150, 20);
  ground4.visible = false;

  dino4 = createSprite(690, 270, 270, 20);
  dino4.addAnimation("dino4", dino4Animation)
  dino4.velocityX = -2;

  dino5 = createSprite(950, 270, 270, 20);
  dino5.addAnimation("dino5", dino1Animation);
  dino5.velocityX = -2;  
 
  gw7 = createSprite(770, 285, 10, 20);
  gw8 = createSprite(610, 285, 10, 20);
  
  gw9 = createSprite(830, 285, 10, 20);
  gw10 = createSprite(990, 285, 10, 20);
}

function draw() {
  //background(bg1Img); 

  text("SCORE:"+score, 400, 100);

  if(keyDown("right")){
    plr.x += 4;
  }
  if(keyDown("up")){
   // plr.velocityY = -4;
  }
  if(keyDown("left")){
    plr.x -= 4;
  }
  // if(keyDown("down")){
  //   plr.x += 4;
  // }
  if(keyDown("space") && plr.y >200){
    plr.velocityY = -12;
    if(keyDown("right")){
      plr.x += 5;
    }
  }
  plr.velocityY += 0.6;


  plr.collide(ground1);
  plr.collide(ground2);
  plr.collide(ground3);
  plr.collide(ground4);  

  if(plr.isTouching(dino1)){
      dino1.destroy();
      score+=200;
  }
  if(plr.isTouching(dino2)){
    dino2.destroy();
    score+=200;
  }
  if(plr.isTouching(dino3)){
    dino3.destroy();
    score+=200;
  }
  if(plr.isTouching(dino4)){
    dino4.destroy();
    score+=200;
  }
  if(plr.isTouching(dino5)){
    dino5.destroy();
    score+=200;
  }

  //plr.debug = true;

  //if(bg.x<0){
    //bg.x = 400;
  //}

  //if(ground1.x<0){
    //ground1.x = 400;
  //}
  //if(ground2.x<0){
    //ground2.x = 400;
  //}
  
  camera.x = plr.x+140;
  camera.y = plr.y; 

  dino2.bounceOff(gw3);
  dino2.bounceOff(gw4);
  dino3.bounceOff(gw5);
  dino3.bounceOff(gw6);
  dino1.bounceOff(gw1);
  dino1.bounceOff(gw2);
  dino4.bounceOff(gw7);
  dino4.bounceOff(gw8);
  dino5.bounceOff(gw9);
  dino5.bounceOff(gw10);


  // reset

  if(plr.x-ground1.x>620) ground1.x=plr.x+200;
  // ground1.visible = true
  // ground4.visible = true
  if(plr.x-ground2.x>620) ground2.x=plr.x+200;

  if(plr.x-ground3.x>620) ground3.x=plr.x+200;
  if(plr.x-ground4.x>620) ground4.x=plr.x+200;

  
  // ground2.visible = true
  // if(plr.x-bg.x>620) bg.x=plr.x+120;
  // if(plr.x-bg2.x>620) bg2.x=plr.x+200;
  
  drawSprites();
}






