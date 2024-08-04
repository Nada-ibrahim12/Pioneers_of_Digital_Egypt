var imgs = Array.from(document.querySelectorAll(".imgBox > img"));
var layOut = document.querySelector(".layOut");
var imgLay = document.querySelector(".imgLay img");
var iconX = document.querySelector(".iconX")
var iconR = document.querySelector(".iconR")
var iconL = document.querySelector(".iconL")

var currentIndex = 0;
for (var i = 0; i < imgs.length; i++) {
    imgs[i].addEventListener("click", function (event) {
        layOut.classList.replace("d-none", "d-flex");
        var currentSrc = event.target.src;
        imgLay.src = currentSrc;
        currentIndex = imgs.indexOf(event.target)
    });
}


// exit image 
function exit() {
    layOut.classList.replace("d-flex", "d-none");
}
// previous image 
function prevImg() {
    currentIndex--;
    if (currentIndex < 0) {
        currentIndex = imgs.length - 1;
    } else {
        imgLay.src = imgs[currentIndex].src;
    }
}
// next image 
function nextImg() {
    currentIndex++;
    if (currentIndex == imgs.length) {
        currentIndex = 0;
    } else {
        imgLay.src = imgs[currentIndex].src;
    }
}

// SLIDER USING MOUSE

// exit using mouse
iconX.addEventListener("click", function () {
    exit();
});
// previous using mouse
iconL.addEventListener("click", function () {
    prevImg();
});
// next using mouse
iconR.addEventListener("click", function () {
    nextImg();
});


// slider using keyboard
document.addEventListener("keyup", function (e) {
    if (e.code == "ArrowLeft") {
        prevImg();
    } else if (e.code == "ArrowRight") {
        nextImg();
    } else if (e.code == "Escape") {
        exit();
    }
});

