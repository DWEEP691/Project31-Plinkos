const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;

var particles = [];
var plinkos = [];
var divisions = [];

var dh = 300;
var R = 10;

var width = 480;

function preload() {
    bi = loadImage("images/NT.jpg");
}

function setup(){
    var canvas = createCanvas(480,800);
    engine = Engine.create();
    world = engine.world;

    ground = new Ground(240,795,480,10);

    for (var k=0;k<=width;k=k+80) {
        divisions.push(new Division(k,height-dh/2,10,dh));
    }
    
    for(var j=15;j<=width;j=j+50) {
        plinkos.push(new Plinko(j,75,R));
    }
    
    for(var j=15;j<=width-10;j=j+50) {
        plinkos.push(new Plinko(j,175,R));
    }
    
    for(var j=40;j<=width;j=j+50) {
        plinkos.push(new Plinko(j,275,R));
    }
    
    for(var j=15;j<=width-10;j=j+50) {
        plinkos.push(new Plinko(j,375,R));
    }

}

function draw(){
    rectMode(CENTER);
    background(bi);
    Engine.update(engine);

    ground.display();

    for(var m=0;m<particles.length;m++) {
        particles[m].display();
    }
    
    for(var k=0; k<divisions.length; k++) {
        divisions[k].display();
    }

    for(var j=0; j<plinkos.length; j++) {
        plinkos[j].display();
    }

    if(frameCount%60===0) {
        particles.push(new Particle(random(width/2-10,width/2+10),10,10));
    }

}






