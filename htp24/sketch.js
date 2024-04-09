let forms = []
let startX, startY
let stepSize = 200 //
let formSteps = 200 //Number of Points of the Form
let path = []
let timeScale = 15

let animationFrames = 2000

function setup() {
    createCanvas(windowWidth, windowHeight)
    colorMode(HSB, 255)
    angleMode(DEGREES)
    noFill()
}

function draw() {

    background(255, 55)

    if (forms.length < 1){
        for (fcdr = 8; fcdr > 1; fcdr --){
            createForms(frameCount - (fcdr * 120))
        }
    }
    if(frameCount % 120 == 0) {
        createForms(frameCount)
    }
    drawForms()
}

function createForms(currentFrame){
    let numberOfEdges = round(random(2)) + 3
    let newForm = {
        oldForm: createPoints(stepSize, numberOfEdges),
        newForm: createPoints(stepSize, numberOfEdges),
        startFrame: currentFrame
    }

    forms.push(newForm)
}

function drawForms() {
    for(formCount = 0; formCount < forms.length; formCount++) {
        let frame = frameCount - forms[formCount].startFrame
        strokeWeight(40 - (frame / animationFrames / 5))
        push()
        translate(0, - frame / animationFrames * (stepSize * formSteps) / animationFrames * 5)
        translate(width/2, height/2)
        scale(frame / animationFrames / timeScale)
        beginShape()

        if (frame > animationFrames){
            forms.shift()
        }

        for(i = 0; i < forms[formCount].oldForm.length; i++) {
            oldFormX = forms[formCount].oldForm[i].x
            oldFormY = forms[formCount].oldForm[i].y
            newFormX = forms[formCount].newForm[i].x
            newFormY = forms[formCount].newForm[i].y

            let diffX = newFormX - oldFormX
            let diffY = newFormY - oldFormY

            x = oldFormX + (diffX / animationFrames * frame)
            y = oldFormY + (diffY / animationFrames * frame)

            vertex(x, y)
            animVal = frame / animationFrames

            alpha = (animationFrames - frame)
            stroke(255 - (animVal * 100), 140, alpha, alpha)
            fill(155 - (animVal * 55), 190, 555, alpha)
        }
        endShape(CLOSE)
        pop()
    }
}
function createPoints(stepSize, numberOfEdges) {
//let angleChange = 360
    let formNumber = 10
    let randomSteps = formSteps / random(5, 20)
    //let edges = 100
    //angleChange = 1

    //The Start Angle
    let angle = 0

    let angleChange = round(360 / numberOfEdges)

    let pointsPerEdge = formSteps / numberOfEdges

    let currPoints = []

    startPoint = 0 - formSteps * stepSize / (numberOfEdges * 2)
    x = startPoint
    y = startPoint
    oldX = startPoint
    oldY = startPoint
    oldCenterY = startPoint
    oldCenterX = startPoint


    for(i = 0; i < formSteps; i++) {
        // noprotect

        angle = floor(i / pointsPerEdge) * angleChange

        //forward line
        forwardStepX = cos(angle) * stepSize
        forwardStepY = sin(angle) * stepSize

        x1 = oldX + forwardStepX
        y1 = oldY + forwardStepY

        $nv = createVector(x1, y1)
        //ellipse(x1, y1, 10)
        currPoints.push($nv)

        //perpendicular line
        offseAngle = angle + 90
        offset = round(random(-randomSteps, randomSteps)) * stepSize
        offsetX = cos(offseAngle) * offset
        offsetY = sin(offseAngle) * offset

        x2 = oldCenterX + forwardStepY + offsetX
        y2 = oldCenterY + forwardStepY + offsetY

        //ellipse(x2, y2, 10)

        $vec = createVector(x2, y2)
        currPoints.push($vec)

        oldCenterX += forwardStepX
        oldCenterY += forwardStepY
        oldX = x2
        oldY = y2

    }
    return currPoints
}