
beatLength = 2500;
lastBeat = 0;
objectSize = 100
speed = .005

circles = true
var w = 0
var h = 0


function setup() {
    createCanvas(windowWidth, windowHeight, WEBGL)
    w = windowWidth
    h = windowHeight
    stroke(255)
    noFill()
}

function draw() {
    translate(- width /2, - height/2)
   console.log(frameRate())
    amp = + (sin(millis() * 0.001) + 1)
    //clear()
    fill(0,0,0,200)
    rect(0,0,w,h)
    checkBeat()
    beginShape()
    drawObjects(0, 0, 1)
    endShape()
}

function drawObjects(x, y, count){


    if (x > w) y += objectSize
    if (x > w) x = 0
    if (y > h) return

    endX = x + sin(millis() * speed) * objectSize
    endY = y + cos(millis() * speed) * objectSize

    stroke(0, 255, 255)

    line(x, y, endX, endY)

    if (beat) circles = !circles

    stroke((cos(millis() * speed * 0.5)) *255)
    circle(endX, endY, objectSize * amp)
    circle(x, y, objectSize)

    stroke(200)
    if (circles) curveVertex(x, y, endX, endY)
    rect(x, y, endX, endY)
    drawObjects(x + objectSize, y, count + 1)
}


function checkBeat(){
    beat = false
    if (millis() > (lastBeat + beatLength)){
        beat = true
        lastBeat = millis()
    }
}