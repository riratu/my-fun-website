
beatLength = 5000;
lastBeat = 0;
objectSize = 100
speed = .005
sizeModRand = 200
amp =  0.1
var w = 0
var h = 0

circles = true
circleFill = 10
circleSize = 0


function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL)
  w = width
  h = height
  stroke(255)
  noFill()
}

function draw() {
  translate(- width /2, - height/2)
  clear()
  background(0)

  checkBeat()
  beginShape()
  if (beat){
    objectSize = random(30, 200)
    sizeModRand = random(10, 1000)
    circleFill = random(-100, 155)
    circleSize = random(1)
  }
  drawObjects(objectSize, objectSize/2, 0)
  endShape()
  circle(w * amp, h -30, 10)
}

function drawObjects(x, y, count){
  if (x > w - objectSize){
    y += objectSize
    x = (objectSize)
    endShape()
    beginShape()
  }
  if (y > h) return

  curAmp = 0
  if(count % 7 == 0) curAmp = amp

  sizeMod = objectSize
  if(count % 4 == 0) sizeMod = sizeModRand

  endX = x + sin(millis() * speed) * objectSize * curAmp
  endY = y + cos(millis() * speed) * sizeMod

  stroke(0, 255, 255)

  line(x, y, endX, endY)

  if (beat) circles = !circles

  //Circle Fill
  stroke(circleFill)
  noFill()
  circle(endX, endY, objectSize * amp * circleSize)
  fill(30, 200, 230, 70)
  triangle(x, y, x+ objectSize, endY, endX, endY + objectSize)

  stroke(200)
  if (circles) vertex(endX, y)
  if (circles) vertex(x, endY)
  //rect(x, y, endX, endY)
  drawObjects(x + objectSize, y, count + 1)
}


function checkBeat(){
  beat = false
  if (millis() > (lastBeat + beatLength)){
    beat = true
    lastBeat = millis()
  }
}