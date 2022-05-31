var btnacercade = document.getElementById('btn-acercade')
var btnmenu = document.getElementById('btn-menu');
var btngaleria = document.getElementById('btn-galeria');
var btnubicacion = document.getElementById('btn-ubicacion');

var acercade = document.getElementById('acercade');
var menu = document.getElementById('menu');
var galeria = document.getElementById('galeria');
var ubicacion = document.getElementById('ubicacion');

function movetoacercade(e){
    e.preventDefault();
    btnacercade.moveTo(0,2000);
}

function movetomenu(){

    
}

function movetogaleria(){
   
}

function movetoubicacion(){
   
}

acercade.addEventListener.on('click', movetoacercade(e));
menu.addEventListener('click', movetomenu);
galeria.addEventListener('click', movetogaleria);
ubicacion.addEventListener('click', movetoubicacion)