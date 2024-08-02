//Funcion para iniciar sesión
function iniciarSesion() {
  // Obtengo los valor del campo de entrada de usuario y contraseña
  // A traves de su ID
  let username = document.getElementById("usuario");
  let password = document.getElementById("password").value;
  let mensaje = document.getElementById("error");

  //Comparacion de datos
  if (username.value === "12345" && password === "hola") {
    window.location.href = "/cajeroATM/cajero.html";

    /*     alert("Bienvenida Sophia a tu inicio de sesion");
     */ //Logica para dejarme entrar a la pagina
  } else {
    mensaje.style.color = "red";
    mensaje.innerText = "Contraseña invalida";
    alert("Contraseña o usuario invalidos");
  }
}
