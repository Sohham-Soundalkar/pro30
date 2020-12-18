const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var polygon, polygonImage;
var box1, box2, box3, box4, box5, box6, box7, box8, box9, box10, box11, box12, box13, box14, box15, box16,
box17, box18, box19, box20, box21, box22, box23, box24, box25, box26, box27, box28, box29;
var slingshot;
var ground1, ground2;

function preload() {
  polygonImage = loadImage("polygon.png");
}
 
function setup() {
    createCanvas(1400,700);

    engine = Engine.create();
    world = engine.world;
    Engine.run(engine);
   polygon = Bodies.circle(50,200,20);
   /*polygon.body.addImage(polygonImage);
   polygon.body.scale = 0.1;*/

   World.add(world,polygon);

   slingshot = new SlingShot(this.polygon,{x:150,y:300});

   ground1 = new Ground(600,400,300,20);
   ground2 = new Ground(1100,250,130,20);
    
   //ground 1
   // level 1
   box1 = new Box(480,370,30,40);
   box2 = new Box(510,370,30,40);
   box3 = new Box(540,370,30,40);
   box4 = new Box(570,370,30,40);
   box5 = new Box(600,370,30,40);
   box6 = new Box(630,370,30,40);
   box7 = new Box(660,370,30,40);
   box8 = new Box(690,370,30,40);
   box9 = new Box(720,370,30,40);
   // level 2
   box10 = new Box(510,330,30,40);
   box11 = new Box(540,330,30,40);
   box12 = new Box(570,330,30,40);
   box13 = new Box(600,330,30,40);
   box14 = new Box(630,330,30,40);
   box15 = new Box(660,330,30,40);
   box16 = new Box(690,330,30,40);
   //level 3
   box17 = new Box(540,290,30,40);
   box18 = new Box(570,290,30,40);
   box19 = new Box(600,290,30,40);
   box20 = new Box(630,290,30,40);
   box21 = new Box(660,290,30,40);
   // level 4
   box22 = new Box(570,250,30,40);
   box23 = new Box(600,250,30,40);
   box24 = new Box(630,250,30,40);
   // level 5
   box25 = new Box(600,210,30,40);

   // ground 2
   // level 1
   box26 = new Box(1070,230,30,40);
   box27 = new Box(1100,230,30,40);
   box28 = new Box(1130,230,30,40);
   // level 2
   box29 = new Box(1100,190,30,40);
}

function draw() {
    background("black");
    imageMode(CENTER)
    image(polygonImage,polygon.position.x,polygon.position.y,40,40);

    ground1.display();
    ground2.display();

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
    box19.display();
    box20.display();
    box21.display();
    box22.display();
    box23.display();
    box24.display();
    box25.display();
    box26.display();
    box27.display();
    box28.display();
    box29.display();

   drawSprites();
}

function mouseDragged(){
    Matter.Body.setPosition(this.polygon, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    slingshot.fly();
}

function keyPressed() {
	if(keyCode === 32) {
		Matter.Body.setPosition(this.polygon, {x:150, y:300});
		slingshot.attach(this.polygon);
	}
}
