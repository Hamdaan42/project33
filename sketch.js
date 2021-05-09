var Engine = Matter.Engine,
 World= Matter.World,
 Bodies = Matter.Bodies,
 Constraint = Matter.Constraint;

var particles = [];
var plinkos = [];
var divisions =[];
var score = 0 
var particle
var count= 0


var divisionHeight=300;


function setup() {
  createCanvas(800,400);
  
  engine = Engine.create();
  world = engine.world;

   for (var k = 0; k <=width; k = k + 80) {
     divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
   }


    for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,75));
    }

    for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,175));
    }

     for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,275));
    }

     for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,375));
    }
}

function draw() {
  background(255,255,255);  
   Engine.update(engine);
   fill("black")
   text("score"+score,20,40)
   text("500",20,100)
   text("500",110,100)
   text("500",210,100)
   text("500",270,100)
   text("100",350,100)
   text("100",430,100)
   text("100",500,100)
   text("200",580,100)
   text("200",660,100)
   text("200",740,100)

   
   if (particle!=null) {
     particle.display()
     if (particle.body.position.y>360) {
       if (particle.body.position.x<280) {
         score=score+500
         particle=null
       }
       else if (particle.body.position.x>280&&particle.body.position.x<550) {
         score=score+100
         particle= null
       }
       else if (particle.body.position.x>560&&particle.body.position.x<750) {
         score=score+200
         particle= null
       }
     }
   }
  

  
  for(var i = 0; i< plinkos.length; i++) {
   plinkos[i].display();
  }
 

 


  for(var j = 0; j < particles.length; j++) {
    particles[j].display();
 }
 for (var k = 0; k < divisions.length; k++){
  divisions[k].display();
 
}
}

function mousePressed() {
  count++
  particle = new Particle(mouseX,10,10)

}













/*var Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;
 
var particles = [];
var plinkos = [];
var divisions =[];
var divisionHeight=300;
var score =0;
function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);


   for (var k = 0; k <=width; k = k + 80) {
     divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
   }


    for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,75));
    }

    for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,175));
    }

     for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,275));
    }

     for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,375));
    }

    

    
}
 


function draw() {
  background("black");
  textSize(20)
 //text("Score : "+score,20,30);
  Engine.update(engine);
  ground.display();
  
   for (var i = 0; i < plinkos.length; i++) {
     
     plinkos[i].display();
     
   }
   if(frameCount%60===0){
     particles.push(new Particle(random(width/2-30, width/2+30), 10,10));
     score++;
   }
 
  for (var j = 0; j < particles.length; j++) {
   
     particles[j].display();
   }
   for (var k = 0; k < divisions.length; k++) {
     
     divisions[k].display();
   }
}*/