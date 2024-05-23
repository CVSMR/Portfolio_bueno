function mostrarMenu() {
   var icono = document.getElementById('icono');
   var menu = document.getElementById('menu');
   var numTel = document.getElementById("numero")
   const cerrar = document.getElementById("cerrar")

   icono.style.display = 'none';
   menu.style.display = 'block';
}


//Cambio de imagen del menu
var iconoNormal = "./recursos/Icono.png";
var iconoHover = "./recursos/Icono2bueno.png";


var iconoElement = document.getElementById("icono");

//Cuando pasas por encima
iconoElement.addEventListener("mouseenter", function () {
   this.src = iconoHover;
});

// Cuando quitas el raton
iconoElement.addEventListener("mouseleave", function () {
   this.src = iconoNormal;
});
// Parte para cerrar la barra de navegacion
cerrar.addEventListener('click', () => {
   menu.style.display = 'none'
   icono.style.display = 'block'
})

//parte del slider dinamico
let currentIndex = 0;

document.querySelector('.prev-button').addEventListener('click', () => {
   navigate(-1);
});

document.querySelector('.next-button').addEventListener('click', () => {
   navigate(1);
});

function navigate(direction) {
   const galleryContainer = document.querySelector('.gallery-container');
   const totalImages = document.querySelectorAll('.gallery-item').length;

   currentIndex = (currentIndex + direction + totalImages) % totalImages;
   const offset = -currentIndex * 100;

   galleryContainer.style.transform = `translateX(${offset}%)`;
}
//meter un autoplay
let autoplayInterval = null;

function startAutoplay(interval) {
   stopAutoplay(); // Detiene cualquier autoplay anterior para evitar múltiples intervalos.
   autoplayInterval = setInterval(() => {
      navigate(1); // Navega a la siguiente imagen cada intervalo de tiempo.
   }, interval);
}

function stopAutoplay() {
   clearInterval(autoplayInterval);
}

// Iniciar autoplay con un intervalo de 3 segundos.
startAutoplay(3000);

//  Detener autoplay cuando el usuario interactúa con los botones de navegación.
document.querySelectorAll('.nav-button').forEach(button => {
   button.addEventListener('click', stopAutoplay);
});


//Parte para el formulario sea capaz de enviar correos a mi cuenta personal 
// function enviarmail(){
//    let params = {
//       name : document.getElementById("Nombre").value,
//       email : document.getElementById("Email").value,
//       asunto : document.getElementById("Asunto").value,
//       mensaje : document.getElementById("mensaje").vlaue,
//    }
//    emailjs.send("service_h7dus76","template_th6iicf",params).then(alert("Email enviado con exito"));
// }
function enviarmail(event) {
   event.preventDefault(); // Prevent the default form submission
   let params = {
      name: document.getElementById("name").value,
      email: document.getElementById("email").value,
      asunto: document.getElementById("asunto").value,
      mensaje: document.getElementById("mensaje").value,
      telefono: document.getElementById("telefono").value,
   };
   console.log(params); // Añadir esto para depuración

   emailjs.send("service_h7dus76", "template_th6iicf", params)
      .then(response => {
         console.log("SUCCESS!", response.status, response.text);
      }, error => {
         console.log("FAILED...", error);
      });
}
document.getElementById("formu").addEventListener("submit", enviarmail);


