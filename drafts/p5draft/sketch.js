let img = [];
function preload() {
  img[0] = loadImage('beton.jpg');
  img[1] = loadImage('beton2.jpg');
  img[2] = loadImage('beton4.jpg');
  img[3] = loadImage('beton5.jpg');
}

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
  camera(0, -400, 2000, 0, 0, 0, 0, 1, 0);

  describe('spinning cube with a texture from an image');

  noStroke()
}

function draw() {
  background(0)
  let locX = mouseX - height / 2;
  let locY = mouseY - width / 2;

  //ambientLight(60, 60, 60);
  pointLight(255, 255, 255, locX, locY, 1000);
  pointLight(155, 155, 155, 0, 0, 1000);

  //push()
  //rotateZ(frameCount * 0.0001);
  //rotateX(frameCount * 0.0001);
  rotateY(frameCount * 0.001);

  offset = millis() * 0.0001

  cubeSize = 200
  for (x = 0; x < width * 2; x+= cubeSize){
    for (z = 0; z < width * 2; z += cubeSize) {
      texture(img[x % 3]);
      push()
      translate(x - width ,  noise(z * 0.01, x * 0.01, millis() * 0.0001) * 400, z - width)
      //translate(-100 , 0, -100)
      box(cubeSize, cubeSize, cubeSize);
      pop()
    }
  }
  pop();

}
