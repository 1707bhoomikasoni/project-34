var bobObject1,bobObject2,bobObject3,bobObject4,bobObject5
var chain,chain2,chain3,chain4,chain5
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

function preload()
{
	
}

function setup() {
	createCanvas(650, 500);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	
   bobObject1=new Bobs(400,400)
   bobObject2=new Bobs(420,400)
   bobObject3=new Bobs(440,400)
   bobObject4=new Bobs(460,400)
   bobObject5=new Bobs(480,400)
 
 

chain=new Rope(bobObject1.body,{x:200,y:50})
chain2=new Rope(bobObject2.body,{x:250,y:50})
chain3=new Rope(bobObject3.body,{x:300,y:50})
chain4=new Rope(bobObject4.body,{x:350,y:50})
chain5=new Rope(bobObject5.body,{x:400,y:50})
}


function draw() {
  rectMode(CENTER);
  background("black");
  Engine.update(engine);
  chain.display()
  chain2.display()
  chain3.display()
  chain4.display()
  chain5.display()
  bobObject1.display()
  bobObject2.display()
  bobObject3.display()
  
  bobObject4.display()
  bobObject5.display()
}

function mouseDragged(){
  Matter.Body.setPosition(bobObject5.body,{x:mouseX,y:mouseY})
}

