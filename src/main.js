var like = true;
var shufflee = false;
var repeatt = true;
var moree = false;


function shadowanimation(value){
    if(value){
        let cancionimg=document.querySelector(".content #imagendesktop img");
        cancionimg.style.boxShadow="0 0 13px #FF564C";
    }else{
        let cancionimg=document.querySelector(".content #imagendesktop img");
        cancionimg.style.boxShadow="0 0 13px #FFF";
    }
    
}
function changeColor(id) {

    switch (id) {
        case 'h':
            if (like == true) {
                heart.style.fill = "#111111";
                heart.style.stroke = "#FFF";
                like = false;
            }
            else {
                heart.style.fill = "#FF564C"
                like = true;

            }
            break;
        case 's':
            if (shufflee == true) {
                shuffle.style.fill = "#959595";
                shufflee = false;
            }
            else {
                shuffle.style.fill = "#FF564C"
                shufflee = true;
            }
            break;
        case 'r':
            if (repeatt == true) {
                repeat.style.fill = "#959595";
                repeatt = false;
            }
            else {
                repeat.style.fill = "#FF564C"
                repeatt = true;

            }
            break;
        case 'm':
            if (moree == true) {
                more.style.fill = "#959595";
                moree = false;
            }
            else {
                more.style.fill = "#FF564C"
                moree = true;
            }
            break;
    }
}