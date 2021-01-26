const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var barrel1,ground,obstacle1;
var pea1;

function preload() {
}

function setup(){
    var canvas = createCanvas(displayWidth,displayHeight-100);
    engine = Engine.create();
    world = engine.world;
    engine.world.gravity.y = 0;

    barrel1 = new barrel();
    ground = new Ground(displayWidth/2,displayHeight,1,600);
    obstacle1 = new Obstacle();
    
}

function draw(){   
    background("white");
    Engine.update(engine);

    fill("green");
    rectMode(CENTER);
    rect(displayWidth/2,displayHeight/2,600,800);
    
    obstacle1.display();
    Matter.Body.applyForce(obstacle1.body,obstacle1.body.position,{x:0,y:-5});
    barrel1.display();
    


}

function keyPressed(){
    if (keyCode===32){
        pea1 = new pea();
    }
}