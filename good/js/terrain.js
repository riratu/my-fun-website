var cols, rows;
var scl = 50;
var w = 1400;
var h = 1000;
var terrain = [];
var row = [];
var currentRow = 0
var amp = 3
rotation = 0
window

var flying = 1;

function setup() {
  background(0, 255)
  createCanvas(windowWidth, windowHeight, WEBGL);
  cols = w * 2 / scl
  rows = h / scl
  //for (var x = 0; x < cols; x++) {
  //  terrain[x] = [];
  //  for (var y = 0; y < rows; y++) {
  //    terrain[x][y] = 0; //specify a default value for now
  //  }
  //}
  

}

function draw () {
  amp = (noise(millis() * 0.001) - 0.5) * 10
rotation += 0.01

if (terrain.length < 50){
    var newRow = []
    for (var x = 0; x < cols; x++) {
        newRow.push(amp * 10 * noise(x * .01 * x))
    }
    terrain.unshift(newRow)
}

if (terrain.length > 48) terrain.pop()
    
  rotate(rotation + (amp * 0.01))
  
  background(0, 0,0);
  translate(0, 50, -500);
  rotateX(PI / 2.27);
  stroke(255)
  translate(-w / 2, -h / 2);
  
  let locX = mouseX - height / 2;
  let locY = mouseY - width / 2;

  //ambientLight(20, 0, 60);
  if (millis() % 2000 < 1000) pointLight(250 * amp, 255 * amp, 55, -4000, 0, -200);
  pointLight(250, 250, 255, w/2, 1000, 0);
  
 
  for (var y = 0; y < terrain.length; y++) {
    beginShape(TRIANGLE_STRIP);
    row = terrain[y]
    for (var x = 0; x < row.length; x++) {
      stroke(255, 200)
      vertex(x * scl -w/2, (y * scl), row[x] * 20);
      for(i=0;i<4;i++){
        push()
  translate((x * scl) -w/2, (y * scl)-1000, row[x] * 5 + (i * 200))
  noStroke()
  ambientMaterial(250);
  sphere(5 - i * 3, 50)
  pop()
      }

      //vertex(x * scl, (y + 1) * scl, ]);
    }
    endShape();
  }
}