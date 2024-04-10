let forms = []
let startX, startY
//let stepSize = 200
let formSize = 1000
let maxformSteps = 400
let minFormSteps = 5
let path = []
let timeScale = 1

let animationFrames = 1560

function setup() {

    let htpHolder = document.getElementById('objectHolder');

    // Use getComputedStyle to get the actual dimensions of the div
    let computedStyle = getComputedStyle(htpHolder);

    // Extract width and height from the computed style, parsing them as integers
    let w = parseInt(computedStyle.width);
    let h = parseInt(computedStyle.height);

    // Create the canvas with the dimensions of the parent div
    let htpCanvas = createCanvas(w, h);

    htpCanvas.id('ObjHTP24');
    colorMode(HSB, 255)
    angleMode(DEGREES)
    noFill()
}

function draw() {

    clear()
    background(0, 0)

    if (forms.length < 1) {
        for (fcdr = 8; fcdr > 1; fcdr--) {
            createForms(frameCount - (fcdr * 120))
        }
    }
    if (frameCount % 120 == 0) {
        createForms(frameCount)
    }
    drawForms()
}

function createForms(currentFrame) {
    let formSteps = minFormSteps + random(0.5, 1) * random(maxformSteps)
    let numberOfEdges = 4 // round(random(1)) + 4;
    let newForm = {
        oldForm: createPoints(formSteps, numberOfEdges),
        newForm: createPoints(formSteps, numberOfEdges),
        startFrame: currentFrame,
        rotationSpeed: random(-0.3, 0.3) // Random rotation speed between -0.5 and 0.5
    };

    forms.push(newForm);
}

function drawForms() {
    let formEol = false

    for (let formCount = 0; formCount < forms.length; formCount++) {
        let frame = frameCount - forms[formCount].startFrame;
        strokeWeight(40 - (frame / animationFrames * 5));

        if (frame > animationFrames) {
            formEol = true
        }

        push();
        translate(width / 2, height / 2);

        // Here's where we apply the rotation
        // The rotation amount can be adjusted as per the desired effect
        //let rotationAmount = frame / 128; // Adjust this value to control rotation speed
        let rotationAmount = forms[formCount].rotationSpeed * (frame / 5);
        rotate(rotationAmount);

        // Moving the scaling here so it applies after the translation and rotation
        scale(frame / animationFrames / timeScale);

        beginShape();

        for (let i = 0; i < forms[formCount].oldForm.length; i++) {
            let oldFormX = forms[formCount].oldForm[i].x;
            let oldFormY = forms[formCount].oldForm[i].y;
            let newFormX = forms[formCount].newForm[i].x;
            let newFormY = forms[formCount].newForm[i].y;

            let diffX = newFormX - oldFormX;
            let diffY = newFormY - oldFormY;

            let x = oldFormX + (diffX * frame / animationFrames);
            let y = oldFormY + (diffY * frame / animationFrames);

            vertex(x, y);
        }
        let animVal = frame / animationFrames;
        let alpha = (animationFrames - frame);
        stroke(255 - (animVal * 100), 140, alpha, alpha);
        fill(155 - (animVal * 55), 190, 555, alpha);
        endShape(CLOSE);
        pop();
    }

    if (formEol){
        forms.shift()
    }

}

function createPoints(formSteps, numberOfEdges) {
//let angleChange = 360
    let stepSize = formSize / (formSteps * numberOfEdges)
    let formNumber = 10
    let randomOffsetSize = formSteps / random(5, 20)
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

    offsetSkipProbability = random()
    offsetWeirdProbabilityX = random()
    offsetWeirdProbabilityY = random()

    for (i = 0; i < formSteps; i++) {
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

        offsetY = 0
        offsetX = 0

        if (random() < offsetSkipProbability) {
            //perpendicular line
            offseAngle = angle + 90
            offset = round(random(-randomOffsetSize, randomOffsetSize)) * stepSize
            offsetX = cos(offseAngle) * offset
            offsetY = sin(offseAngle) * offset
        } else {
            if (random(0.5) > offsetWeirdProbabilityX){
                offsetY = oldCenterX - oldX
            }
            if (random(0.5) > offsetWeirdProbabilityY){
                offsetX = oldCenterY - oldY
            }
        }

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