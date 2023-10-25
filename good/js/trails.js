let particles = [];
const num = 10000;
beatLength = 5000;
lastBeat = 0;
currentSeed = 0
newSeed = 0
speed = 1
curlFactor = 0.01
var w
var h

var noiseScale = 0.01;

function setup() {
    fill(0)
    rect(0, 0, width, height)

    createCanvas(windowWidth, windowHeight, WEBGL);
    for(let i = 0; i < num; i ++) {
        particles.push(createVector(random(width), random(height)));
    }

    stroke(255, 50);
    clear();
}

function draw() {
    translate(- width/2, - height/2)
    fill(0, 8)
    rect(0, 0, width, height)
    strokeWeight(0.5)

    curlFactor = (sin(millis() * 0.0005) + 1)
    checkBeat()
    if(beat){
        newSeed += random(0.5)
    }
    currentSeed += (newSeed - currentSeed) * 0.01
    noiseSeed(currentSeed);

    //background(0, 0, 0);
    for(let i = 0; i < num; i ++) {
        let p = particles[i];
        point(p.x, p.y);
        let n = noise(p.x * noiseScale, p.y * noiseScale, frameCount * noiseScale * noiseScale);
        let b = TAU * n * ((p.x / width) -0.5) * curlFactor;
        let a = TAU * n * ((p.y / height));
        p.x += cos(a) * speed;
        p.y += sin(b) * speed
        if(!onScreen(p)) {
            p.x = random(width);
            p.y = random(height);
        }
    }
}

function mouseReleased() {

}

function onScreen(v) {
    return v.x >= 0 && v.x <= width && v.y >= 0 && v.y <= height;
}


function checkBeat(){
    beat = false
    if (millis() > (lastBeat + beatLength)){
        lastBeat = millis()
        beat = true
    }
}