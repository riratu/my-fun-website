let ball, floor;
let hovering = false;
let posX
let poxY
let balls =0;
// let lift
let roll1
let screeUnit
var dingsSolor = "black"
function setup() {
    screeUnit = (windowWidth + windowHeight) / 100;
    createCanvas(windowWidth, windowHeight);

    world.gravity.y = 50;

    ceiling = new Sprite();
    ceiling.y = 0;
    ceiling.w = windowWidth;
    ceiling.h = 5;
    ceiling.collider = 'static';
    ceiling.color = dingsSolor

    floor = new Sprite();
    floor.y = windowHeight;
    floor.w = windowWidth;
    floor.h = 5;
    floor.color = dingsSolor
    floor.collider = 'static';

    leftWall = new Sprite();
    leftWall.y = windowHeight/2 - 200;
    leftWall.x = 0;
    leftWall.w = 10;
    leftWall.h = windowHeight + 400;
    leftWall.friction =
    leftWall.color = dingsSolor
    leftWall.collider = 'static';

    rightWall = new Sprite();
    rightWall.y = windowHeight/2 - 200;
    rightWall.x = windowWidth;
    rightWall.w = 10;
    rightWall.h = windowHeight + 400;
    rightWall.collider = 'static';

    rollBottom = new Sprite();
    rollBottom.y = windowHeight -50;
    rollBottom.x = windowWidth/2 - 10
    rollBottom.w = windowWidth + 50 ;
    rollBottom.h = 5;
    rollBottom.rotation = -2
    rollBottom.friction = 0
    rollBottom.color = dingsSolor
    rollBottom.strokeWeight = 0
    rollBottom.collider = 'static';

    rollTop = new Sprite();
    rollTop.y = 250;
    rollTop.x = windowWidth/2 + 75
    rollTop.w = windowWidth -250;
    rollTop.h = 5;
    rollTop.rotation = 2
    rollTop.friction = 0
    rollTop.color = dingsSolor
    rollTop.strokeWeight = 0
    rollTop.collider = 'static';

    rollTop = new Sprite();
    rollTop.y = 350;
    rollTop.x = windowWidth/2 + 220
    rollTop.w = windowWidth;
    rollTop.h = 5;
    rollTop.rotation = -1
    rollTop.friction = 0
    rollTop.color = dingsSolor
    rollTop.strokeWeight = 0
    rollTop.collider = 'static';

    thirdFloor = new Sprite();
    thirdFloor.y = 450;
    thirdFloor.x = windowWidth/2 + 50
    thirdFloor.w = windowWidth -180;
    thirdFloor.h = 5;
    thirdFloor.rotation = 1
    thirdFloor.friction = 0
    thirdFloor.color = dingsSolor
    thirdFloor.strokeWeight = 0
    thirdFloor.collider = 'static';

    fourthFloor = new Sprite(windowWidth/2 + 130,  550,  windowWidth -100, 5, 'static');
    fourthFloor.rotation = -1
    fourthFloor.friction = 0
    fourthFloor.color = dingsSolor
    fourthFloor.strokeWeight = 0

    floor5 = new Sprite(windowWidth/2,  620,  windowWidth -200, 5, 'static');
    floor5.rotation = 1
    floor5.friction = 0
    floor5.color = dingsSolor
    floor5.strokeWeight = 0

    liftBoundrie = new Sprite();
    liftBoundrie.y = 430;
    liftBoundrie.x = 150
    liftBoundrie.w = 10
    liftBoundrie.h = windowHeight/2;
    liftBoundrie.rotation = 15
    liftBoundrie.friction = 0
    liftBoundrie.color = dingsSolor
    liftBoundrie.strokeWeight = 0
    liftBoundrie.collider = 'static';

    // stopBottom = new Sprite();
    // stopBottom.y = windowHeight;
    // stopBottom.x = 0;
    // stopBottom.w = 10;
    // stopBottom.h = 400;
    // stopBottom.rotation = 45
    // stopBottom.collider = 'static';

    for (i = 0; i < 300; i++){
        var ball = new Sprite();
        ball.x = random(windowWidth)
        ball.y = random(windowHeight - 80)
        ball.diameter = 20
        ball.vel.x = random(-10, 10);
        ball.vel.y = random(10, -10);
        ball.strokeWeight = 0
        ball.color = color(ball.y / windowHeight * 255 , 255 - ball.x / windowWidth * 255, 0)
    }

    // for (i = 0; i < 200; i++){
    // lift = new Sprite(windowWidth/2, windowHeight/2, windowHeight - 200, 20, 'kinematic');
    // lift.rotation = i*45
    // lift.offset.x = -windowWidth/2;
    // //lift.debug = true;
    // lift.color = dingsSolor
    // lift.strokeWeight = 2
    // lift.rotationSpeed = 0.5;
    // }

    liftNo = 30
    for (i = 0; i <= liftNo; i++){
        lift = new Sprite(windowWidth, windowHeight, windowHeight/5, 5, 'kinematic');
        lift.rotation = 365 / liftNo * i
        lift.offset.x = -windowWidth;
        //lift.debug = true;
        lift.color = dingsSolor
        lift.strokeWeight = 2
        lift.rotationSpeed = 0.3;
    }

    // for (i = 0; i < 200; i++){
    //     lift = new Sprite(windowWidth/2, windowHeight/2, windowHeight/8, 20, 'kinematic');
    //     lift.rotation = i*45
    //     lift.offset.x = -windowWidth/8;
    //     //lift.debug = true;
    //     lift.color = dingsSolor
    //     lift.strokeWeight = 2
    //     lift.rotationSpeed = 2;
    // }

}

function draw() {
   if (frameCount % 150 == 0) {
       // lift = new Sprite(windowWidth / 2, windowHeight - windowHeight/3 , 100, 5, 'kinematic');
       // lift.rotation = -15
       // lift.offset.x = -windowWidth/3;
       // lift.debug = true;
       // liftSequence(lift);


       //liftSequence(lift);
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
//
// async function liftSequence(lift) {
//     await lift.rotateTo(365, 2);
//     //await lift.moveTo(1000, 100, 1);
//     lift.remove()
// }