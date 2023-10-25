let ball, floor;
let hovering = false;
let posX
let poxY
let balls = 0;
// let lift
let roll1
var offsetY = 0;
var maxRotationSpeed = 1
var targetRotation = 1
var currentRotation = 1
var liftHeight
var stepSize = 0.1
var newStepSize = 0.1

function mouseClicked() {
    for (i=0 ; i<10; i++) {
        newBall()
    }
}

function newBall() {
    var ball = new Sprite();
    ball.x = windowWidth / 10
    ball.y = -30
    ball.diameter = random(20, 35)
    ball.vel.x = random(-0.01, 0.1);
    ball.vel.y = random(0.5, -0.5);
    ball.strokeWeight = 0
}

function setup() {
    liftHeight = windowHeight / 2
    createCanvas(windowWidth, windowHeight);
    background(255)
    world.gravity.y = 15;
}

function draw() {
    clear();
    if (frameCount % 5 == 0) newLift()
    if (frameCount % 100 == 0) newBall()
}

function newLift() {
    lift = new Sprite();

    let targetOffset = mouseY / 2 - (windowHeight / 2 / 2)
    offsetY = offsetY + (targetOffset - offsetY) * 0.05
    //let offsetY = sin(frameCount / 13) * windowHeight / 15
    lift.y = windowHeight / 2 + offsetY;
    lift.x = 0
    lift.w = 50 * (sin(frameCount / 12) + 1);
    lift.h = (sin(frameCount / 6) + 1);
    lift.rotation = -20
    lift.offset.x = -40;
    lift.collider = 'kinematic';
    lift.color = "grey"
    lift.strokeWeight = 0

    //calculate the new rotation
    if (Math.abs(targetRotation - currentRotation) < 0.2 || stepSize == 0 || currentRotation < 0.2) {
        console.log('----------------------------------')

        targetRotation = Math.random() * maxRotationSpeed + 0.2

        let numberOfSteps = (15 + (50 * Math.random()))
        console.log("Step No " + numberOfSteps)
        newStepSize = (targetRotation - currentRotation) / numberOfSteps
        //stepSize = newStepSize;

        console.log("Curr Rotation:" + currentRotation)
        console.log("New Rotation:" + targetRotation)
        console.log("New Step Size:" + newStepSize)
    }
    console.log("step")
    stepSize = stepSize + ((newStepSize - stepSize) * 0.1)

    //console.log(Math.abs(targetRotation - currentRotation))
    currentRotation = currentRotation + stepSize

    liftSequence(lift, currentRotation);
}

async function liftSequence(lift, speed) {
    lift.rotate(-5000, speed);

    //let offsetY = sin(frameCount / 13.5) * windowHeight / 15
    let offsetY = mouseY / 3 - (windowHeight / 3 / 2)
    await lift.moveTo(windowWidth - 50, windowHeight / 2 + offsetY, 1.5);
    lift.remove()

}
