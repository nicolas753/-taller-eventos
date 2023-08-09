const divcontenedor = document.getElementById("contenedor");
const boton = document.getElementById("boton");boton
divcontenedor.addEventListener("click", function () {
    alert("Hola! Soy el div");
});
boton.addEventListener("click", function(event) {
    event.stopPropagation();
});
