let mic;
let dist = 500;
let points = [];
var terrain = [];
var stars = [];
let myFont;
let telescope;
flySpeed = 20;
floorLineNumber = 3;
floorLineStartPos = -3000;
floorLineTravelDist = 4000;

function preload() {
    myFont = loadFont('IBMPlexMono-Bold.ttf');
    //telescope = loadModel('assets/telescope.obj')
}

function setup() {
    colorMode(HSB, 100);

    createCanvas(windowWidth, windowHeight, WEBGL);
    w = windowHeight;
    h = windowWidth;

    camera(0, 0, -2000)

    textFont(myFont);
    textSize(dist/5.5);
    textAlign(CENTER, CENTER);
    stroke(255)

    //Initiaize Floor and Stars
    lineDist = floorLineTravelDist / floorLineNumber
    for (i=1;i < floorLineNumber; i++){
        zPos = floorLineStartPos + (i* lineDist)
        terrain.push(zPos)

        noiseX = random(-dist*5, dist*5)
        noiseY = random(0, -dist *4)
        stars.push([noiseX, noiseY, zPos])
    }
}

function draw() {

    strokeWeight(4)

    //Global Translation
    //rotateY(millis() * 0.001)
    rotateY(sin(millis() * 0.00005) * 0.9 - PI)
    translate(-w / 3, 50, -200);

    //Global Colors
    background(0);
    let hue = sin(millis() * 0.0001) * 100
    noFill()
    stroke(hue, 255, 255)

    //ambientLight(20, 0, 60);
    //if (millis() % 2000 < 1000) pointLight(250, 255, 55, -4000, 0, -200);
    //pointLight(250, 250, 255, w/2, 1000, 0);


    //Texts ---------------------------------------
    fill(hue, 100, 100)
    text("Raumplan neues kino", dist, -dist)
    fill(100, 0, 100)
    push()
    text('Gemeinschaftsraum', 20, 20);
    translate(dist * 2, 0, 0)
    text('Galerie', 0, 0);
    translate(-dist * 2, dist, 0)
    text('Kino', 0, 0);
    translate(dist * 2, 0, 0)
    text('Foyer', 0, 0);
    pop()
    noFill()

    //The Telescope -------------
    // push()
    // stroke(hue, 50, 50)
    // strokeWeight(1)
    // translate(-dist, dist + dist/2, dist*4)
    // rotateY(3.5)
    // scale(-90)
    // model(telescope)
    // pop()

    //draw the rooms --------------
    translate(0, 0, 0)
    endShape();
    push()
    box(dist * 2, dist)
    translate(dist * 2, 0, 0)
    box(dist * 2, dist)
    translate(0, dist, 0)
    box(dist * 2, dist)
    translate(-dist * 2, 0, 0)
    box(dist * 2, dist)
    translate(dist * 2 + dist / 2, 0, dist * 0.75)
    box(dist, dist, dist / 2)
    pop()

    //Backdrop of Rooms
    fill(0)
    push()
    //Top rect
    translate(0, 0, -dist / 2)
    rect(-dist, -dist/2, dist*4, dist*2)
    pop()
    push()
    //Floor
    translate(0, dist * 1.5, 0)
    rotateX(PI / 2)
    rect(-dist, -dist/2, dist*4, dist)
    pop()

    //We need Stairs -------------------------------

    steps = 10
    noFill()
    //Stairs right
    push()
    translate(dist * 1.5, dist / 2 + (dist / steps / 2), dist / 2 + (dist / steps / 2))
    for (i = 0; i < steps; i++) {
        box(dist / 4, dist / steps)
        translate(0, dist / steps, dist / steps * 0.7)
    }
    pop()

    //Stairs left
    push()
    translate(-dist / 2 + (dist / steps / 2), dist / 2 + (dist / steps / 2), dist / 2 + (dist / steps / 2))
    rotateY(-PI / 2)

    //Top Set
    for (i = 0; i < steps / 2; i++) {
        box(dist / 4, dist / steps)
        translate(0, dist / steps, dist / steps)
    }
    box(dist / 4, dist / steps)
    rotateY(PI)
    translate(-dist / 4, 0, 0)
    //Bottom Set
    for (i = 0; i < steps / 2; i++) {
        box(dist / 4, dist / steps)
        translate(0, dist / steps, dist / steps)
    }
    pop()

    strokeWeight(3)
    //Floor------------------------------------
    for (i = 0; i < terrain.length; i++) {
        push()
        translate(0, 0, terrain[i])
        //if (terrain[i] !== 0)
        line(-dist*10, dist* 1.5, dist*10, dist* 1.5)
            //line(-dist * 5, (-dist / 2 + 10), terrain[i], -dist /2, (-dist / 2 + 10), terrain[i])
        terrain[i] += flySpeed
        if (terrain[i] >= floorLineStartPos + floorLineTravelDist) terrain[i] = floorLineStartPos
        pop()

    }

    strokeWeight(3)
    // //Stars------------------------------------
    // if (frameCount % 10 === 0 && stars.length < 99) {
    //     noiseX = random(-dist*5, dist*5)
    //     noiseY = random(0, -dist *4)
    //     stars.unshift([noiseX, noiseY, -1000])
    // }

    for (var i = 1; i < stars.length; i++) {
        point(stars[i][0], stars[i][1], stars[i][2])
        stars[i][2] += 10

        if (stars[i][2] > floorLineStartPos + floorLineTravelDist){
            noiseX = random(-dist*5, dist*5)
            noiseY = random(0, -dist *4)
            stars[i][0] = noiseX
            stars[i][1] = noiseY
            stars[i][2] = floorLineStartPos
        }
    }
}