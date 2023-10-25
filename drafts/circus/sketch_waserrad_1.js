let ball, floor;
let hovering = false;
let posX
let poxY
let balls =0;
// let lift
let roll1
let screeUnit
function setup() {
    screeUnit = (windowWidth + windowHeight) / 100;
    createCanvas(windowWidth, windowHeight);

    world.gravity.y = 10;

    ceiling = new Sprite();
    ceiling.y = 0;
    ceiling.w = windowWidth;
    ceiling.h = 5;
    ceiling.collider = 'static';
    ceiling.color = "black"

    floor = new Sprite();
    floor.y = windowHeight;
    floor.w = windowWidth;
    floor.h = 5;
    floor.color = "black"
    floor.collider = 'static';

    leftWall = new Sprite();
    leftWall.y = windowHeight/2 - 200;
    leftWall.x = 0;
    leftWall.w = 10;
    leftWall.h = windowHeight + 400;
    leftWall.friction =
    leftWall.color = "black"
    leftWall.collider = 'static';

    rightWall = new Sprite();
    rightWall.y = windowHeight/2 - 200;
    rightWall.x = windowWidth;
    rightWall.w = 10;
    rightWall.h = windowHeight + 400;
    rightWall.collider = 'static';

    rollBottom = new Sprite();
    rollBottom.y = windowHeight -150;
    rollBottom.x = windowWidth/2
    rollBottom.w = windowWidth;
    rollBottom.h = 5;
    rollBottom.rotation = -10
    rollBottom.friction = 0
    rollBottom.color = "black"
    rollBottom.strokeWeight = 0
    rollBottom.collider = 'static';
    //
    // stopBottom = new Sprite();
    // stopBottom.y = windowHeight;
    // stopBottom.x = 0;
    // stopBottom.w = 10;
    // stopBottom.h = 400;
    // stopBottom.rotation = 45
    // stopBottom.collider = 'static';

    for (i = 0; i < 200; i++){
        var ball = new Sprite();
        ball.x = random(windowWidth)
        ball.x = random(windowHeight)
        ball.diameter = 50
        ball.vel.x = random(-10, 10);
        ball.vel.y = random(10, -10);
        ball.strokeWeight = 0
    }
}

function draw() {
   if (frameCount % 50 == 0) {
       // lift = new Sprite(windowWidth / 2, windowHeight - windowHeight/3 , 100, 5, 'kinematic');
       // lift.rotation = -15
       // lift.offset.x = -windowWidth/3;
       // lift.debug = true;
       // liftSequence(lift);

       lift = new Sprite(windowWidth - windowWidth / 4, windowHeight - windowHeight/4 , 500, 5, 'kinematic');
       lift.rotation = -15
       lift.offset.x = -windowWidth/2 - windowWidth / 4;
       //lift.debug = true;
       lift.color = "black"
       lift.strokeWeight = 0
       liftSequence(lift);
       //
       // lift = new Sprite(windowWidth / 2, windowHeight - windowHeight/3 - 60 , 100, 5, 'kinematic');
       // lift.rotation = -15
       // lift.offset.x = -windowWidth/4;
       // lift.debug = true;
       // liftSequence(lift);
       //
       // lift = new Sprite(windowWidth / 2, windowHeight - windowHeight/3 - 70 , 100, 5, 'kinematic');
       // lift.rotation = -15
       // lift.offset.x = -windowWidth/2.5;
       // lift.debug = true;
       // liftSequence(lift);
       //
       // lift = new Sprite(windowWidth / 2, windowHeight - windowHeight/3 - 80 , 100, 5, 'kinematic');
       // lift.rotation = -15
       // lift.offset.x = -windowWidth/2;
       // lift.debug = true;
       // liftSequence(lift);

   }
    background("black")
    //clear();
}

async function liftSequence(lift) {
    await lift.rotateTo(40, 0.2);
    //await lift.moveTo(1000, 100, 1);
    lift.remove()
}