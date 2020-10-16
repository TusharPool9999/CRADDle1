
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball ;
var bar;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(600,height,1200,20)


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  ball = new Ball(400,350,20,20);


  ball.display();
  ground.display()
  drawSprites();
}



