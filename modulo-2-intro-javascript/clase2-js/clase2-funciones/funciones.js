/* FUNCIONES */
//El nombre de las funciones siempre empiezan con mayuscula y camelCase

function EdadFuturo(edad) {
  //edad es el parametro
  //instrucciones
  let resultado = edad + 80;
  //Mostrar la informacion
  return resultado;
}

let Ana = EdadFuturo(23);
console.log(Ana);

function Saludar() {
  // funcion sin paramtros
  let nombre = prompt("Cual es tu nombre");
  console.log("Bienvenido/a " + nombre);
}

Saludar(); //mandarla a llamar

function EdadBebe() {
  let edad = parseInt(prompt("Cual es tu edad?"));
  let resultado = edad + 10;
  console.log(resultado);
}

EdadBebe();

//Pasar de cadena string a numero:
//Number, parseInt, parseFloat(decimales)
