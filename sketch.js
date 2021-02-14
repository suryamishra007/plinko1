const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var wall,obs,ball

function setup() {
  createCanvas(800,1200);
  engine = Engine.create();
	world = engine.world;

wall1 = new Wall(400,1100,20,200);
wall2 = new Wall(200,1100,20,200);
wall3 = new Wall(0,1100,20,200);
wall4 = new Wall(600,1100,20,200);
wall5 = new Wall(800,1100,20,200);
wall6 = new Wall(1200,1100,20,200);
wall7 = new Wall(400,1190,800,20);

obs1 = new Obstacle(400,600,50);
obs2 = new Obstacle(500,500,50);
obs3 = new Obstacle(600,600,50);
obs4 = new Obstacle(700,500,50);
obs5 = new Obstacle(800,600,50);
obs6 = new Obstacle(300,500,50);
obs7 = new Obstacle(200,600,50);
obs8 = new Obstacle(100,500,50);
obs9 = new Obstacle(0,600,50);

ball1 = new Ball(430,100,50);

  Engine.run(engine);
}

function draw() {
  background(255,255,255);  

  

  wall1.display();
  wall2.display();
  wall3.display();
  wall4.display();
  wall5.display();
  wall6.display();
  wall7.display();

  obs1.display();
  obs2.display();
  obs3.display();
  obs4.display();
  obs5.display();
  obs6.display();
  obs7.display();
  obs8.display();
  obs9.display();

  ball1.display();



  drawSprites();
}