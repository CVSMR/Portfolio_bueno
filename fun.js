function mostrarMenu() {
    var icono = document.getElementById('icono');
    var menu = document.getElementById('menu');
 
    icono.style.display = 'none';
    menu.style.display = 'block';
}
 
 
//Cambio de imagen del menu
var iconoNormal = "./recursos/Icono.png";
var iconoHover = "./recursos/Icono2.jpg";
 
 
var iconoElement = document.getElementById("icono");
 
//Cuando pasas por encima
iconoElement.addEventListener("mouseenter", function() {
    this.src = iconoHover;
});
 
// Cuando quitas el raton
iconoElement.addEventListener("mouseleave", function() {
    this.src = iconoNormal;
});



