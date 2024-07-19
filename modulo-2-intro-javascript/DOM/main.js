// Crear function

function Saludar() {
  alert("Hola, ¿Como estas?");
}

// funciones para cambiar color panatalla
function screenBlue() {
  let cuerpo = document.getElementById("pantalla");
  cuerpo.style.backgroundColor = "blue";
  let fontSize = document.getElementById("titulo");
  fontSize.style.fontSize = "50px";
}

function screenPink() {
  let cuerpo = document.getElementById("pantalla");
  cuerpo.style.backgroundColor = "pink";
  let fontSize = document.getElementById("titulo");
  fontSize.style.fontSize = "100px";
}

function screenWhite() {
  let cuerpo = document.getElementById("pantalla");
  cuerpo.style.backgroundColor = "white";
  let fontSize = document.getElementById("titulo");
  fontSize.style.fontSize = "150px";
}

// Instrucciones

// Buscar el elemento que quieren cambiar - h1
// Le quiero cambiar el tamaño - Font Size
// ¿Como lo voy a buscar? id, etiqueta, class
// Decido que sera por id **
// Hago mi fucion

function cambiarTamaño() {
  let titulo = document.getElementById("titulo");
  titulo.style.fontSize = "12px";
}

//Funcion para iniciar sesión
function iniciarSesion() {
  // Obtengo los valor del campo de entrada de usuario y contraseña
  // A traves de su ID
  let username = document.getElementById("usuario");
  let password = document.getElementById("password").value;
  let mensaje = document.getElementById("error");

  //Comparacion de datos
  if (username.value === "12345" && password === "Hola") {
    //Logica para dejarme entrar a la pagina
  } else {
    mensaje.style.color = "red";
    mensaje.innerText = "Contraseña invalida";
  }
}
