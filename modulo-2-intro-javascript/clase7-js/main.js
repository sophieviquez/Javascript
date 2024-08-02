//addEventListener

//Esta esperando (escuchando) que pase alfo pata que despues --> un evento ocurra

document.getElementById("miBoton").addEventListener("click", Saludar);

function Saludar() {
  alert("hola");
}

//DOMContentLoaded

document.addEventListener("DOMContentLoaded", function () {
  console.log("La pagina esta lista para ser usada");
});
