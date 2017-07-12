// init variable
  var i =0
  var img =document.getElementsByClassName("img")

// On load page , slider is on
  document.addEventListener("load", function(){
    slider()
  });

// function slider
function slider() {
    for(let y=0;y < img.length ; y++){
     img[y].style.display = "none";
   }

    img[i].style.display = "block";
    i++
    if(i === img.length){
      i=0
    }
  }

// function slider all 3sec
setInterval(slider, 3000);
