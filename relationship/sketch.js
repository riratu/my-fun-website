let cursorX, cursorY
let velocity = 7
const damping = velocity / 400;
var offsetJumps= 200;
const dottedDistance = 20;
width = window.outerWidth
height = window.outerHeight
let fish1

const Fisch = {
    insectX: Math.random() * width / 2,
    insectY: Math.random() * height / 2,
    trailPoints: [],
    offsetX: 200,
    offsetY: -200,
    angle: 0.0,
    move() {

        fill(this.hue, 100, 250)
        circle(this.insectX, this.insectY, this.size)

        if (this.insectX < 0 || this.insectX > width || this.insectY < 0 || this.insectY > width) {
            cursorX = width / 2
            cursorY = height / 2
            this.offsetX = random(100, 100)
            this.offsetY = random(100, 100)
        }
        let deltaX = (width/2 + this.offsetX) - this.insectX;
        let deltaY = (height/2 + this.offsetY) - this.insectY;

        if (Math.abs(deltaX) < 30 || Math.abs(deltaY) < 30) {
            this.offsetY += Math.random() * offsetJumps - offsetJumps / 2
            if (this.offsetY > 500) this.offsetX = 0
            this.offsetY += Math.random() * offsetJumps - offsetJumps / 2
            if (this.offsetY > 500) this.offsetY = 0
        }

        newAngle = Math.atan2(deltaY, deltaX) + Math.PI / 2;

        let angleDifference = (newAngle - this.angle)
        let angleDifferenceDegrees = angleDifference * (180 / Math.PI)

        //find the shortest move to the object
        shortest_angle = ((((angleDifferenceDegrees) % 360) + 540) % 360) - 180;
        this.angle += (shortest_angle * (Math.PI / 180)) * damping;

        // Update insect position incrementally
        this.insectX += Math.sin(this.angle) * velocity;
        this.insectY += Math.cos(Math.PI - this.angle) * velocity;

        //create Trail
        this.trailPoints.push([this.insectX + random(1), this.insectY + random(1),])

        scale = (sin(millis() * 0.000052)) * 10
        translateX = noise(millis() * 0.0001) * 3
        for (let i = 2; i < this.trailPoints.length; i++) {

            this.trailPoints[i][0] -= (this.trailPoints[i][0] - width/2) / width/2 * scale + translateX
            this.trailPoints[i][1] -= (this.trailPoints[i][1] - height/2) / height/2 * scale

            if (i % 2 == 0){
                strokeWeight(1)
                stroke(i * (250 / this.trailPoints.length), 30, i * (250 / this.trailPoints.length), (i - (this.trailPoints.length - i) / 2) * 0.05)
                line(this.trailPoints[i - 1][0], this.trailPoints[i - 1][1], this.trailPoints[i][0], this.trailPoints[i][1])
            }
        }

        if ((this.trailPoints.length > 50 && frameRate < 25)
            || this.trailPoints.length > 2000) {
            for (let i = 0; i < 2; i++) {
                this.trailPoints.shift()
            }

        }
    },
}

function setup() {
    colorMode(HSB, 255)
    createCanvas(windowWidth, windowHeight)
    cursorX = width / 2;
    cursorY = height / 2;
    fish1 = Object.create(Fisch)
    fish1.size = 20
    fish1.hue = 20
    fish2 = Object.create(Fisch)
    fish2.size = 22
    fish2.hue = 165

}

function draw() {
    //frameRate(3)
    background(0)

    fish1.move()
    fish2.move()
    //fish3.move()
}
