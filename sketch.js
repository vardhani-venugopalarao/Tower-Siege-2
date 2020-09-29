const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const ON = 1;
const OFF = 0;


var engine, world;
var stand1, box1, box2, box3, box4, box5, box6, box7, box8, box9, box10, box11, box12, box13, box14, box15, box16, box17, box18;
var hexagonimg, hexagon;
var sling;
var gamestate;
function preload() {
  hexagonimg = loadImage("hex.jpeg");
}
function setup() {
  engine = Engine.create();
  world = engine.world;
  createCanvas(800,400);

  gamestate = ON;

  stand1 = new Ground(390,270,200,10);
  box1 = new Box(300,250,30,40);
  box2 = new Box(330,250,30,40);
  box3 = new Box(360,250,30,40);
  box4 = new Box(390,250,30,40);
  box5 = new Box(420,250,30,40);
  box6 = new Box(450,250,30,40);
  box7 = new Box(480,250,30,40);
  box8 = new Box(315,210,30,40);
  box9 = new Box(345,210,30,40);
  box10 = new Box(375,210,30,40);
  box11 = new Box(405,210,30,40);
  box12 = new Box(435,210,30,40);
  box13 = new Box(465,210,30,40);
  box14 = new Box(330,170,30,40);
  box15 = new Box(360,170,30,40);
  box16 = new Box(390,170,30,40);
  box17 = new Box(420,170,30,40);
  box18 = new Box(450,170,30,40);

  hexagon = Bodies.polygon(200,200,6,20, {restitution:1,friction:1.0,density:1.0});
  World.add(world,hexagon);

  sling = new Slingshot(this.hexagon, {x: 200, y: 200})

console.log(sling);
}

function draw() {
  background(255); 
  Engine.update(engine); 

  stand1.display();

  imageMode(CENTER);
 image(hexagonimg, hexagon.position.x, hexagon.position.y, 30, 30);
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();
  box8.display();
  box9.display();
  box10.display();
  box11.display();
  box12.display();
  box13.display();
  box14.display();
  box15.display();
  box16.display();
  box17.display();
  box18.display();



  sling.display();

  drawSprites();
}

function mouseDragged()
{
  if(gamestate === ON){
    Matter.Body.setPosition(this.hexagon,{x: mouseX, y: mouseY});
  }
}

function mouseReleased()
{
    sling.fly();
    gamestate = OFF;
}

function keyPressed()
{
    if(keyCode === 32){
      sling.attach(this.hexagon);
      gamestate = ON;
      Matter.Body.setPosition(this.hexagon,{x: 200, y: 200});
    }
}