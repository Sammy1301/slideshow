function fecha(){
    var time = document.getElementById("fecha");
    var dat = new Date();
    time.innerText =dat.getFullYear();
}
//#region animacion de servicios
$(document).ready(function() {

window.addEventListener('scroll', servicios);
function servicios(){
    var a = Math.round(window.scrollY);
    if(a>=100 ){
        $("#imgs").fadeIn(2000);
        $("#imgs").css({"display":"flex"});
        
    }
    if(a>=400){
        $("#cons").fadeIn(2000);
        $("#cons").css({"display":"flex"});
    }
    if(a>=680){
        $("#sono").fadeIn(2000);
        $("#sono").css({"display":"flex"});
    }
}    
})



//#endregion
function modal(){
    document.getElementById("modal").style.display = "block";
    document.getElementById("contacto").style.display = "flex";
}
function qmodal(){
    document.getElementById("modal").style.display = "none";
    document.getElementById("contacto").style.display = "none";    
}


