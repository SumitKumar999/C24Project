var box, box1, box2, ball, ground;

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

	box = new Box(700,510,15,100);
	box1 = new Box(500,510,15,100);
	box2 = new Box(600,560,220,15);

	ball = new Ball(100,550,20,20);

	ground = createSprite(400,635,800,110);
	ground.shapeColor = "yellow";

	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  box.display();
  box1.display();
  box2.display();
  ball.display();
  
  drawSprites();
 
}
