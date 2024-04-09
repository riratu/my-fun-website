let speed = 0.002
let nmspeed = 1
let circleSize = 150
let randomSize = 1
let jitterSize = 0.5
var path = []
let middleX
let middleY
let lineSpacing = 100
let vel = 50
let noiseScale = 0.005
let strokeNum = 1

function setup() {

  colorMode(HSB, 255)
  mic = new p5.AudioIn()
  mic.start()
  mic.amp(25)
  //smooth(true)
  //toggleNormalize(1)

  createCanvas(windowWidth, windowHeight, WEBGL)
  middleX = 0//width/2
  middleY = 0//height/2

  noFill()
  noStroke()
  strokeWeight(1)
  //angleMode(DEGREES);

  for(let i = 0; i < strokeNum; i ++) {
    path[i] = []
  }

}

function draw() {
  //frameRate(3)
  background(0, 10)
  //translate(width/2, height/2)

  //amp = mic.getLevel(1)

  time = millis()* speed
  for(let i = 0; i < strokeNum; i ++) {

    offsetX = noise(millis() * 0.01) * randomSize
    offsetY = noise(millis() * 0.02) * randomSize

    x = sin(time) * (circleSize + (lineSpacing * i)) + offsetX + middleX
    y = cos(time) * (circleSize + (lineSpacing * i)) + offsetY + middleY

    rS = 3
    hue = ((millis() * 0.035) % 255)
    //console.log(col)

    path[i].push(createVector(x + random(-rS, rS), y + random(-rS, rS), hue));
    // path[i].push(createVector(x + random(-rS, rS), y + random(-rS, rS), col));

  }


  for(let i = 0; i < path.length; i ++) {
    for(l = 0; l < path[i].length; l++){
      let p = path[i][l];

      alpha = 1 + 0.2 * (path[i].length / (path[i].length - l))
      fill(p.z ,25, 250, 255)
      //fill(255)
      size = 2 + (path[i].length - l) * 3
      //10 / path[i].length * l
      ellipse(p.x, p.y, size);
      //ellipse(p.x, p.y, size / 3);
      //point(p.x, p.y)

      let n = noise(p.x * noiseScale, p.y * noiseScale, frameCount * 0.01);
      let b = TAU * n * ((p.x / width));
      let a = TAU * n * ((p.y / height))
      let windSpeed = 1 * noise(frameCount * 0.001)
      p.x += (cos(a) * nmspeed) + windSpeed + random(-1, 1) - 0.5
      p.y += (sin(b) * nmspeed) - windSpeed + random(-1, 1) - 0.5
      //if(!onScreen(p)) {
      //  p.x = random(width);
      //  p.y = random(height);
      //}
      if (path[i].length > 1000){
        path[i].shift()
      }
    }
  }
  console.log(floor(frameRate()), width -40, height - 20)
  function onScreen(v) {
    return v.x >= 0 && v.x <= width && v.y >= 0 && v.y <= height;
  }

  function checkBeat(){
    beat = false
    if (millis() > (lastBeat + beatLength)){
      lastBeat = millis()
      beat = true
    }
  }}