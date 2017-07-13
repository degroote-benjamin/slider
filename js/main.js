// init variable
var i = 0
var img = document.getElementsByClassName("img")
var calcul = document.getElementsByClassName("calculet")
var tabcalcul = []
var tabtotal = []
var total = 0
var resultat = document.getElementById("resultatcalcul")
resultat.innerHTML = 0

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
    if (i >= 0 && i !== img.length) {
      img[i].style.display = "block"
      i++
    }
    else{
      i=0
      img[i].style.display = "block"
      i++
    }

}

// function slider all 3sec
setInterval(slider, 3000);
