// init variable
  var i =0
  var img =document.getElementsByClassName("img")
  var calcul = document.getElementsByClassName("calculet")
  var tabcalcul= []
  var tabtotal = []
  var total = 0
  var resultat = document.getElementById("resultatcalcul")
  resultat.innerHTML = 0
// On load page , slider is on
  document.addEventListener("load", function(){
    slider()
  }
);

// function slider
function slider() {
    for(let y=0;y <img.length ; y++){
     img[y].style.display = "none"
   }

    img[i].style.display = "block"
    i++
    if(i === img.length){
      i=0
    }
  }

// function slider all 3sec
setInterval(slider, 3000);

for (let i = 0; i < calcul.length; i++) {
    calcul[i].addEventListener("click", function() {
tabcalcul.push(calcul[i].innerHTML)

if(tabcalcul.length ===1)
{
  total = tabcalcul[0]
}

if(tabcalcul.length ===3){
  if(tabcalcul[1] === "+"){
    total = Number(tabcalcul[0]) + Number(tabcalcul[2]) + total
  }
  // else if(tabcalcul[1] = ".")
}
resultat.innerHTML =total
}
)
}
