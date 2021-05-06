const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
function preload()
{

	
}

function setup() {
	createCanvas(1100, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
ground= new Ground(550, 680, 1100, 20);
platform1= new Ground(390, 300, 250, 20);
platform2= new Ground(700, 200, 200, 20);

block1 = new Block(300,275,30,40);
console.log(block1);
block2 = new Block(330,275,30,40);
block3 = new Block(360,275,30,40);
block4 = new Block(390,275,30,40);
block5 = new Block(420,275,30,40);
block6 = new Block(450,275,30,40);
block7 = new Block(480,275,30,40);
//level two
block8 = new Block(330,235,30,40);
block9 = new Block(360,235,30,40);
block10 = new Block(390,235,30,40);
block11 = new Block(420,235,30,40);
block12 = new Block(450,235,30,40);
//level three
block13 = new Block(360,195,30,40);
block14 = new Block(390,195,30,40);
block15 = new Block(420,195,30,40);
//top
block16 = new Block(390,155,30,40);

//set 2 for second stand
//level one
blocks1 = new Block(640,175,30,40);
blocks2 = new Block(670,175,30,40);
blocks3 = new Block(700,175,30,40);
blocks4 = new Block(730,175,30,40);
blocks5 = new Block(760,175,30,40);
//level two
blocks6 = new Block(670,135,30,40);
blocks7 = new Block(700,135,30,40);
blocks8 = new Block(730,135,30,40);
//top
blocks9 = new Block(700,95,30,40);

ball=Bodies.circle(50, 200, 20)

World.add(world, ball)

slingshot= new Slingshot(ball, {x:100, y:200});


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(200);

  ground.display()
  slingshot.display();
  platform1.display()
  platform2.display()

  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
  fill("pink");
  block8.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();
  fill("turquoise");
  block13.display();
  block14.display();
  block15.display();
  fill("grey");
  block16.display();
  fill("skyblue");
  blocks1.display();
  blocks2.display();
  blocks3.display();
  blocks4.display();
  blocks5.display();
  fill("turquoise");
  blocks6.display();
  blocks7.display();
  blocks8.display();
  fill("pink")
  blocks9.display();

  ellipse(ball.position.x, ball.position.y, 20, 20)

  drawSprites();
 
}

function mouseDragged (){
 Matter.Body.setPosition(ball,{x:mouseX, y:mouseY})
}

function mouseReleased(){
slingshot.fly()
}