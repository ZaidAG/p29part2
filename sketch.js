const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint
 


function preload()
{
	
}

function setup() {
	createCanvas(800, 800);


	engine = Engine.create();
	world = engine.world;
	  
	slingShoot=new SlingShot()

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("red");
  
}
