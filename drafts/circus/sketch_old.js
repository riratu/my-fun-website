let ball, floor;
let hovering = false;
let posX
let poxY
let balls =0;
// let lift
let roll1
function setup() {
    createCanvas(windowWidth, windowHeight);
    background(255)
    world.gravity.y = 15;

    ceiling = new Sprite();
    ceiling.y = -200;
    ceiling.w = windowWidth;
    ceiling.h = 5;
    ceiling.collider = 'static';

    floor = new Sprite();
    floor.y = windowHeight;
    floor.w = windowWidth;
    floor.h = 8;
    floor.friction = 0.03
    floor.collider = 'static';

    leftWall = new Sprite();
    leftWall.y = windowHeight/2 - 200;
    leftWall.x = 0;
    leftWall.w = 10;
    leftWall.h = windowHeight + 400;
    leftWall.friction = 0
    leftWall.collider = 'static';

    leftLiftboundrie = new Sprite();
    leftLiftboundrie.y = windowHeight/2 - 30;
    leftLiftboundrie.x = 100;
    leftLiftboundrie.w = 10;
    leftLiftboundrie.h = windowHeight - 430;
    leftLiftboundrie.friction = 0
    leftLiftboundrie.collider = 'static';

    rightWall = new Sprite();
    rightWall.y = windowHeight/2 - 200;
    rightWall.x = windowWidth;
    rightWall.w = 10;
    rightWall.h = windowHeight + 400;
    rightWall.collider = 'static';

    roll1 = new Sprite();
    roll1.x = 342
    roll1.y = 202;
    roll1.w = 500
    roll1.h = 5;
    roll1.collider = 'static';
    roll1.rotation = 5
    roll1.friction = 0.02

    rollBottom = new Sprite();
    rollBottom.y = windowHeight -200;
    rollBottom.x = windowWidth/2 + 100
    rollBottom.w = windowWidth;
    rollBottom.h = 5;
    rollBottom.rotation = -8
    rollBottom.friction = 0
    rollBottom.collider = 'static';

    stopBottom = new Sprite();
    stopBottom.y = windowHeight;
    stopBottom.x = 0;
    stopBottom.w = 10;
    stopBottom.h = 400;
    stopBottom.rotation = 45
    stopBottom.collider = 'static';





    for (i = 0; i < 300; i++){
        var ball = new Sprite();
        ball.x = random(windowWidth)
        ball.x = random(windowHeight)
        ball.diameter = random(10, 15)
        ball.vel.x = random(-10, 10);
        ball.vel.y = random(10, -10);
        ball.strokeWeight = 0
    }


}

function draw() {
    clear();
}

function mouseClicked(){
    lift = new Sprite();
    lift.y = windowHeight
    lift.x = 100
    lift.w = 100;
    lift.h = 5;
    lift.rotation = -20
    lift.offset.x = -40;
    lift.collider = 'kinematic';
    liftSequence(lift, 0);
}

async function liftSequence(lift) {
    await lift.moveTo(100, windowHeight/4, 2);
    lift.rotate(100, 0.9);
        await lift.moveTo(200, 100, 1);
        lift.rotate(-500, 0.3);
        await lift.moveTo(windowWidth -50, 50, 1);

    await lift.moveTo(windowWidth -20, windowHeight/2, 1);
    //lift.rotate(300, 0.5);
    //await lift.moveTo(windowWidth, windowHeight/2, 1);
    lift.rotate(100, 0.2);
    await lift.moveTo(100, windowHeight/2 + 150, 1);
    lift.rotate(-5000, 4);
    await lift.moveTo(windowWidth, windowHeight -100 , 3);
    lift.remove()


    // await lift.moveTo(-10, 0, 7);
    // lift.rotate(-100);
    // await delay(1000);
    // await lift.moveTo(-20, windowHeight + 100, 5);

    //await lift.moveTo(100, windowHeight -100, 5);


}


async function squareSequence() {
    await turtle.move(100);
    await turtle.rotate(-190);
    await delay(1000);
    squareSequence();
}