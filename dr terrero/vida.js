function fecha(){
    var time = document.getElementById("fecha");
    var dat = new Date();
    var months = ['Enero', 'Febrero', 'Marzo', 'Abril','Mayo', 'Junio', 'Julio', 'Agosto','Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];
    time.innerText = months[dat.getMonth()]+ " " +dat.getFullYear();
}
// var pantalla = window.innerWidth;
// collapse(pantalla);
// function collapse(x){
//     // var menu = ;
//     console.log(document.getElementById("menu"));
//     if(x<=768){
//         document.getElementById("menu").style.display = "flex";
//         document.getElementById("menu").style.flexDirection = "column";
//     }
// }


//#region animacion de servicios
window.addEventListener('scroll', servicios);
function servicios(){
    var a = Math.round(window.scrollY);
    if(a>=151 ){
        document.getElementById("imgs").style.display = "flex";
    }
    if(a>=400){
        document.getElementById("sono").style.display = "flex";
    }
    if(a>=578){
        document.getElementById("cons").style.display = "flex";
    }
}
//#endregion
function modal(){
    document.getElementById("modal").style.display = "block";
    document.getElementById("contacto").style.display = "flex";
}
function qmodal(){
    document.getElementById("modal").style.display = "none";
    document.getElementById("contacto").style.display = "none";    
}


$(document).ready(function(){
    $(".logo").on("click", function(){

    // $("#menu").css({"display": "flex", 
    // "flex-direction":"column", 
    // "z-index":"999", 
    // "margin-top":"130px", 
    // "align-items":"center"});
  $("body").effect("shake");
  })
  });