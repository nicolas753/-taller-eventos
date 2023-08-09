const divcontenedor = document.getElementById("contenedor");
const solucionclick = document.getElementById("boton");boton
divcontenedor.addEventListener("click", function () {
    alert("Hola! Soy el div");
});
solucionclick.addEventListener("click", function(event) {
    event.stopPropagation();
});
