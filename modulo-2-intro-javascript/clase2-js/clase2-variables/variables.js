//El nombre de las funciones siempre empiezan con mayuscula
/* function Saludar() {
  let nombre = prompt("Cual es tu nombre?");
  console.log("Hola" + nombre);
}

Saludar();
console.log(nombre); */

function Suma(a, b) {
  let resultado = a + b;
  console.log(resultado);
}

let resultado = Suma;
console.log(resultado);

Suma(4, 6);

/*******************/
/*!IMPORTANT NOTES!*/
/*******************/

//let = se usa esta variable cuando sabemos puede cambiar con el tiempo
//const= se usa cuando esta variable no va a cambiar y se va a mantener constante siempre

//let encapsula una variable dentro de un bloque, porque no podra ser usada fuera del mismo
//Let evita reescribir el valor de una variable, cosa que var no hace
/* var y let comparten el mismo scope (scope, lo que esta dentro de las {} es privado y mientras 
este dentro no se pueden acceder a esos datos, es local, si esta fuera de los {} es global) */
