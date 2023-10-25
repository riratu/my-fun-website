let mic;
let dist = 500;
let points = [];
var terrain = [];
var stars = [];
let myFont;
let telescope;
flySpeed = 100;

function preload() {
    myFont = loadFont('IBMPlexMono-Bold.ttf');
    //telescope = loadModel('assets/telescope.obj')
}

function setup() {
    colorMode(HSB, 100);

    createCanvas(windowWidth, windowHeight, WEBGL);
    w = windowHeight;
    h = windowWidth;

    camera(0, 0, -5500)

    textFont(myFont);
    textSize(dist/5.5);
    textAlign(CENTER, CENTER);
    stroke(255, 255, 255)

}

function draw() {

    strokeWeight(4)

    //Global Translation
    rotateY(mouseX / w * 0.4 - 1.5)
    //rotateY(millis() * 0.001)
    rotateY(sin(millis() * 0.0005) * 0.2 + 4)
    translate(-w / 3, 50, -200);

    //Global Colors
    background(0, 5);
    let hue = sin(millis() * 0.0001) * 100
    noFill()
    stroke(hue, 255, 255)

    //ambientLight(20, 0, 60);
    //if (millis() % 2000 < 1000) pointLight(250, 255, 55, -4000, 0, -200);
    //pointLight(250, 250, 255, w/2, 1000, 0);

    //Mouse
    let locX = mouseX - height / 2;
    let locY = mouseY - width / 2;

    //Texts ---------------------------------------
    stroke(hue, 255, 255)
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

    //Draw the Points ------------
    beginShape();
    for (i = 0; i < points.length; i++) {
        //point = points[i]
        //console.log(points[3])
        //vertex(point[0], point[1], point[2]);
    }

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

    //Backdrop
    fill(0)
    push()
    translate(0, 0, -dist / 2)
    rect(-dist, -dist/2, dist*4, dist*2)
    pop()
    push()
    translate(0, dist * 1.5, 0)
    rotateX(PI / 2)
    rect(-dist, -dist/2, dist*4, dist)
    pop()
    //We need Stairs -------------------------------
    steps = 10
    noFill()

    //Stairs 1
    push()
    translate(dist * 1.5, dist / 2 + (dist / steps / 2), dist / 2 + (dist / steps / 2))

    for (i = 0; i < steps; i++) {
        box(dist / 4, dist / steps)
        translate(0, dist / steps, dist / steps * 0.7)
    }
    pop()

    //Stairs 2
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

    strokeWeight(1)
    //Floor------------------------------------
    if (frameCount % 50 === 0 && terrain.length < 500) {
        terrain.unshift(-8000)
    }

    if (terrain.length > 100) terrain.pop()

    beginShape(TRIANGLE_STRIP);
    for (i = 0; i < terrain.length; i++) {
        //stroke(hue, 200, terrain[i] / 2)
        line(-dist * 10, dist / 2 + 10, terrain[i], dist * 10, dist / 2 + 10, terrain[i])
        //vertex(-dist*10, 0, terrain[i], dist* 10, 0, terrain[i])

        //line(-dist*5, dist*5, terrain[i], terrain[i], terrain[i], terrain[i])
        terrain[i] += 10
    }
    endShape();

    strokeWeight(3)
    //Stars------------------------------------
    if (frameCount % 2 === 0 && stars.length < 100) {
        noiseX = noise(millis() * 0.005) * dist * 40 - (dist * 20) + random(-dist, dist)
        noiseY = noise(millis() * 0.0053) * dist * -5 - dist + random(-dist, dist)
        stars.unshift([noiseX, noiseY, -5000])
    }

    if (stars.length > 490) stars.pop()

    //beginShape(TRIANGLE_STRIP);
    for (var i = 0; i < stars.length; i++) {
        //stroke(hue, 200, terrain[i] / 2)
        //line(-dist*10, dist/2 + 10, terrain[i], dist* 10, dist/2 + 10, terrain[i])
        //vertex(-dist*10, 0, terrain[i], dist* 10, 0, terrain[i])
        //point(100, 0, 200)
        point(stars[i][0], stars[i][1], stars[i][2])
        //line(-dist*5, dist*5, terrain[i], terrain[i], terrain[i], terrain[i])
        stars[i][2] += 10
    }
    //endShape();
}