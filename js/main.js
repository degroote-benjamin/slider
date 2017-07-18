// init variable
var i = 0
var img = document.getElementsByClassName("img")

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

// function slider all 1.5sec
setInterval(slider, 1500);
