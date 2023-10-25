let ball, floor;
let hovering = false;
let posX
let poxY
let balls =0;
function setup() {
    createCanvas(windowWidth, windowHeight);
    background(255)
    world.gravity.y = 10;

    ceiling = new Sprite();
    ceiling.y = -200;
    ceiling.w = windowWidth;
    ceiling.h = 5;
    ceiling.collider = 'static';

    floor = new Sprite();
    floor.y = windowHeight;
    floor.w = windowWidth;
    floor.h = 5;
    floor.collider = 'static';

    leftWall = new Sprite();
    leftWall.y = windowHeight/2 - 200;
    leftWall.x = 0;
    leftWall.w = 10;
    leftWall.h = windowHeight + 400;
    leftWall.collider = 'static';

    rightWall = new Sprite();
    rightWall.y = windowHeight/2 - 200;
    rightWall.x = windowWidth;
    rightWall.w = 10;
    rightWall.h = windowHeight + 400;
    rightWall.collider = 'static';

}

function draw() {
    const link = document.getElementById("link");
    link.onmouseover = handleHover;
    link.onmouseout =  handleMouseOut;

    if (hovering) {
        balls ++
        var ball = new Sprite();
        ball.diameter = random(5, 50);
        ball.x = posX;
        ball.y = posY;
        ball.vel.x = random(-8, 8);
        ball.vel.y = random(-12, -15);
        ball.strokeWeight = 0
    }
    clear();
    if (balls >=500) next();
    console.log(balls)
}

function handleHover() {
    hovering = true;
    posX = mouseX;
    posY = mouseY;
}
function handleMouseOut() {
    hovering = false;
}