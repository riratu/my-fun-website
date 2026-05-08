document.addEventListener("DOMContentLoaded", function () {
    // Replace the URLs with the paths to your isometric images
    imgSize = 200

    const gridContainer = document.getElementById("grid-container");
    let z = 0;
    let margin = 0.8
    let imageCount = 1
    let numberofImages = 181
    let frames = 0
    // Loop through the array of isometric images and create image elements

    for (y = 0; y < (window.screen.height * 3.5); y += imgSize) {
        createRow()
    }

    function createRow(){
       // alert("xes")
        for (x = 0; x < window.screen.width * 1.5; x += imgSize) {
            createImage(x, y)
        }
    }
    function createImage(x, y){
        //let imageNo = Math.floor(Math.random() * 112) + 1
        let imageNo = (imageCount) % numberofImages + 1
        imageCount += Math.round(Math.random() * 10) + 1
        //let imageUrl = isometricImages[imageNo]
        const isometricImage = document.createElement("img");
        isometricImage.src = `./img/done/Image${imageNo}.png`
        isometricImage.classList.add("isometric-image");
        isometricImage.style.top = y / 2 * margin + "px"
        let xoffset = y % (imgSize * 2) / 2
        isometricImage.style.left = (x + xoffset) *margin + "px"
        isometricImage.style.width = imgSize + "px"
        isometricImage.style.height = imgSize + "px"
        isometricImage.style.zIndex = 2
        isometricImage.onmouseover = changeSrc
        //isometricImage.style.opacity = 0.1
        gridContainer.appendChild(isometricImage);
    }

    // Function to move images one pixel down using requestAnimationFrame
    function moveImagesDown() {
        // Get all images on the page
        const images = document.querySelectorAll('img');

        // Iterate over each image
        images.forEach((image) => {
            // Increase the top value by 1 pixel
            let currentTop = parseInt(image.style.top) || 0;
            let newTop = currentTop + 1

            if (currentTop > window.screen.height){
                //image.style.opacity = 0
                newTop = currentTop - window.screen.height - (imgSize * 2)
                image.style.zIndex = 1 //-frames
                let imageNo = Math.round(Math.random()* numberofImages) +1
                image.src = `./img/done/Image${imageNo}.png`
                image.onclick = changeSrc
                changeSrc(image)

            }
            // if (currentTop < imgSize / 2){
            //     image.style.opacity = currentTop / imgSize * 2
            // }
            image.style.top = newTop + 'px';
            image.style.zIndex = newTop + imgSize;

        });

        // Call the function recursively for smoother animation
        requestAnimationFrame(moveImagesDown);

        if (frames % imgSize == 0){
            //createRow()
        }
    }

    // Call the function after the page has loaded
    window.onload = moveImagesDown;

    function changeSrc(img){
        let imageNo = Math.round(Math.random()* 33) +1
        this.src = `./img/donedyst/Image${imageNo}.png`
        //this.style.opacity = 1
    }

});


