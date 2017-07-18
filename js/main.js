// init variable
var i = 0
var img = document.getElementsByClassName("img")

// On load page , slider is on
document.addEventListener("load", function() {
    slider()
});

// previous button
document.getElementById("gauche").addEventListener("click", function() {
slider(-1)
});

// next button
document.getElementById("droite").addEventListener("click", function() {
    setTimeout(slider, 0)
});

// function slider
function slider() {
    for (let y = 0; y < img.length; y++) {
        img[y].style.display = "none"
    }
    if (i == img.length) {
      i=0
    }
    else if(i<0){
      i = img.length-1
    }
          img[i].style.display = "block"
          i++
}

// function slider all 3sec
setInterval(slider, 1500);
