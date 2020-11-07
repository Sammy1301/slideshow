function fecha(){
    var time = document.getElementById("fecha");
    var dat = new Date();
    
    switch(dat.getMonth()){
        case 0: time.innerText =  "Enero"+" "+dat.getFullYear();
        break;
        case 1: time.innerText =  "febrero"+" "+dat.getFullYear();
        break;
        case 2: time.innerText =  "Marzo"+" "+dat.getFullYear();
        break;
        case 3: time.innerText =  "Abril"+" "+dat.getFullYear();
        break;
        case 4: time.innerText =  "Mayo"+" "+dat.getFullYear();
        break;
        case 5: time.innerText =  "Junio"+" "+dat.getFullYear();
        break;
        case 6: time.innerText =  "Julio"+" "+dat.getFullYear();
        break;
        case 7: time.innerText =  "Agosto"+" "+dat.getFullYear();
        break;
        case 8: time.innerText =  "Septiembre"+" "+dat.getFullYear();
        break;
        case 9: time.innerText =  "Octubre"+" "+dat.getFullYear();
        break;
        case 10: time.innerText =  "Noviembre"+" "+dat.getFullYear();
        break;
        default: time.innerText =  "Diciembre"+" "+dat.getFullYear();
        break;
    }
}
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
