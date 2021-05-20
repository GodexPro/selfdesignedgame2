const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var ground,ground2;
var box,boxinv;
var player;
var station;
var platform,platform2,platform3,platform4;


var gamestate = "lvl1";


function setup() {

  createCanvas(1200,600);
  engine = Engine.create();
  world = engine.world; 

}

function draw(){
  background("white");
  Engine.update(engine);

  if(keyDown(RIGHT_ARROW)){
    player.x = player.x + 5;
  }

  if(keyDown(LEFT_ARROW)){
    player.x = player.x - 5;
  }

  if(keyDown("space")){
    player.y = player.y - 10;
  }

  player.velocityY = player.velocityY + 0.5; 

 if(box.isTouching(station)){
  textSize(20);
  fill("black");
  text("You  Delivered The Parcel !",600,400);
  gamestate = "lvl2";
 }

  drawSprites();

  player.collide(ground);
  player.collide(station);
  player.collide(ground2);

  if(player.isTouching(box))
  {
    box.x=box.x+5
    boxinv.x=boxinv.x+5
    }
    if(player.isTouching(boxinv))
    {
      box.x=box.x-5
      boxinv.x=boxinv.x-5
      }
      

  
}
  function level1(){
  ground = createSprite(400,570,800,20);
  ground2 = createSprite(1100,570,200,20);
  station = createSprite(900,570,200,20);
  station.shapeColor = "red";

  station.setCollider("rectangle",0,0,200,25);
           
  box = createSprite(700,540,40,40);
  boxinv= createSprite(720,540,10,40);
  boxinv.visible=false;
  box.debug=true;
  box.setCollider("rectangle",0,0,40,40)
 

  player = createSprite(200,530,40,40);

}


function level2(){

  ground = createSprite(400,570,800,20);
  ground2 = createSprite(1100,570,200,20);
  station = createSprite(900,570,200,20);
  station.shapeColor = "red";

  platform = createSprite(700,340,50,20);
  platform2 = createSprite(200,530,20,20);
  platform3 = createSprite(400,450,20,20);
  platform4 = createSprite(600,390,20,20);
  

  station.setCollider("rectangle",0,0,200,25);

  box = createSprite(700,410,40,40);
  boxinv= createSprite(720,540,10,40);
  boxinv.visible=false;
  box.debug=true;
  box.setCollider("rectangle",0,0,40,40)
  

  player = createSprite(200,530,40,40);
}