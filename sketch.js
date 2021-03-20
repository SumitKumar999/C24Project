var rect, rect1, rect2, ball, ground;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 600);


	engine = Engine.create();
	world = engine.world;

	fill("white");
	rect = createSprite(700,570,15,200);
	rect1 = createSprite(500,570,15,200);
	rect2 = createSprite(600,620,220,115);

	rect1.shapeColor = "White";
	rect.shapeColor = "White";
	rect2.shapeColor = "White";

	ball = createSprite(100,615,20,120);
	ball.shapeColor = "red";

	ground = createSprite(400,635,800,110);
	ground.shapeColor = "yellow";

	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
 
}



