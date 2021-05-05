const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var hammer;
var rubber;


function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    plane = new Plane(600,height,1200,20)
    hammer = new Hammer(10,100);
rubber = new Rubber(100,100,20)
  iron = new Iron(300,300)
stone = new Stone(70,40)

}

function draw(){
    background("lightBlue");
    Engine.update(engine);
stone.display();
iron.display();
    plane.display();
    hammer.display();
rubber.display();
    
 
}