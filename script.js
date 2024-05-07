function abrirNav(){
    document.getElementById("menuOculto").style.width="250px";
    document.getElementById("principal").style.marginLeft="250px";

}
function fecharNav(){
    document.getElementById("menuOculto").style.width="0";
    document.getElementById("principal").style.marginLeft="0";

}

  window.ondragstart = function() {return false;} 

document.addEventListener('contextmenu', function(e) {
    e.preventDefault();   
});

document.onkeydown = function(e) {
   if (e.keyCode == 123) { 
        return false; 
    }
}; 
     
