
walkingDistance = 50
rectSize = 50

function mouseMoved(){
    randomSize =- 5
    walkingDistance = 2
}

function setup() {
    createCanvas(windowWidth, windowHeight)
    w = windowWidth
    h = windowHeight
    newX = w/2
    newY = h/2
    colorMode(HSL, 255)
    strokeWeight(5)
    background(0)
}
function draw() {
    background(0)
    strokeWeight((sin(frameCount * 0.005) + 1) * noise(frameCount * 0.004) * 20)
    fillAlpha = (50 + (cos(frameCount * 0.003) + 1) * 50)
    console.log(fillAlpha)
    for (let x =0; x < width; (x += rectSize)){
        for (let y =0; y < height; y += rectSize){
            curNoise = noise(x * 0.002 + (millis() / 2500), y * 0.002, (millis() / 2500))
            hue = 400 - curNoise * 400 //* 100) + frameCount * 0.5
            //sat = ((noise(x * 0.0008, y * 0.0008, frameCount * 0.1) - 0.5) *2 ) * 255
            //console.log(hue)
            fill(hue, 255, 150, fillAlpha)
            stroke(hue , 255, 150, 255 - fillAlpha)
            //rect(x, y, rectSize * 3, rectSize * 3)
            offset = (rectSize * 4 * curNoise) - rectSize * 2
            let size1 = x + offset
            let x2 = (mouseX - x) * 0.1 //size1 + ((mouseX - x) * 0.01)
            let y2 = (mouseY - y) * 0.1 //size1 + ((mouseX - x) * 0.01)
            //line(x, y, x2, y2 + offset)//y - rectSize * curNoise)
            circle(x, y, offset)
            //point(x, y)
            //ellipse()
        }
    }
}