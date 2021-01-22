
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);

	



	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground = new Ground(400,700,900,50);

	box1 = new Box(560,620,15,100)
	box2 = new Box(640,670,150,15)
	box3 = new Box(710,620,15,100)

	paper = new Paper(100, 600, 10);

	

	
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);

  Engine.update(engine);
  background("cyan");
  ground.display();
  box1.display();
  box2.display();
  box3.display();
  paper.display();
  
  drawSprites();
 keyPressed();
}


function keyPressed(){
	if(keyCode === UP_ARROW) {
	  Matter.Body.applyForce(paper.body, paper.body.position, {x:15, y: -15})
	}
  }

