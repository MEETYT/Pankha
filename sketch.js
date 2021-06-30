const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var roof;
var bob1 , bob2 , bob3 , bob4 ,bob5
var r1 , r2 , r3 , r4 , r5 ;


//Create multiple bobs, mulitple ropes varibale here


function setup() {
	createCanvas(800, 600);
	rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;


	var bob_options = {
		isStatic:true,
		restitution:0.02,
		friction:0.9
	}
	bob1 = Bodies.circle(320,380,20,bob_options)
	World.add(world,bob1);
	r1 = new rope (bob1,roof,-80,0);

	bob2 = Bodies.circle(360,380,20,bob_options)
	World.add(world,bob2);

	bob3 = Bodies.circle(400,380,20,bob_options)
	World.add(world,bob3);

	bob4 = Bodies.circle(440,380,20,bob_options)
	World.add(world,bob4);
	
	bob5 = Bodies.circle(480,380,20,bob_options)
	World.add(world,bob5);




	



	
	var roof_options={
		isStatic:true			
	}

	roof = Bodies.rectangle(400,100,230,20,roof_options);
    World.add(world,roof);

	Engine.run(engine);
	
  
}

function draw() {
  rectMode(CENTER);
  background("#99004d");

  
  rect(roof.position.x,roof.position.y,230,20);
  ellipse(bob1.position.x,bob1.position.y,40,40)
  ellipse(bob2.position.x,bob2.position.y,40,40)		
  ellipse(bob3.position.x,bob3.position.y,40,40)
  ellipse(bob4.position.x,bob4.position.y,40,40)
  ellipse(bob5.position.x,bob5.position.y,40,40)

  r1.display ()


  //call display() to show ropes here

  
  //create ellipse shape for multiple bobs here

 
}

//Write keyPressed function and apply force on pressing up_arrow key on the first bob.
