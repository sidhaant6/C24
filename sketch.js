// You could have multiple flags like: start, launch to indicate the state of the game.

const { Engine, World, Bodies, Body, Mouse, MouseConstraint, Constraint, Composite, Detector } = Matter;
// The above line creates different constant variables for Engine, World, Bodies etc.
var engine,world, ground,cannon
var angle=0

/*

const {Engine} = Matter 
is the same as c
onst Engine = Matter.Engine

*/

function setup() {
    // Setup the canvas, the ground the, tanker, the shooting ball and the bubble balls.
createCanvas(1000,400)
engine=Engine.create()
world=engine.world
cannon=new Tanker(240,267,90,20)
ground= new Ground(500,400,2000,20)
}

function draw() {
// Remember to update the Matter Engine and set the background.
background(255)
Engine.update(engine)
ground.display()
cannon.display();
}


function keyReleased() {
    // Call the shoot method for the cannon.
}