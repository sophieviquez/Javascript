//escribir en consola
console.log("Hola mundo");

//mandar un pop up, depliega una ventana emergente
alert("Bienvenido");

//texto de salida en el navegador
document.write("Hola mundo");

//Prompt escrcibir informacion, despliega un pop up con input preguntando tu nombre
//console.log("Hola", prompt("¿Cual es tu nombre?"));

//Mostrar informacion personal basico
var nombre = prompt("¿Cual es tu nombre?");
var apellido = prompt("¿Cual es tu apellido?");
var direccion = prompt("¿Cual es tu direccion?");
var edad = prompt("¿Cual es tu edad?");

//Concatenando informacion
console.log(
  "Tu informacion: Te llamas " +
    nombre +
    " tu primer apellido es " +
    apellido +
    " vives en " +
    direccion +
    " y tu edad es " +
    edad
);

var firstName = "Sophia";
var lastName = "Acostaviques";
var age = 25;
var isAlive = true;
var city = "cdmx";

console.log(firstName, lastName, age, isAlive, city);

var numero1 = Number(prompt("Dime un numero del 1 al 10"));
var numero2 = Number(prompt("Dime otro numero entre el 50 y el 100"));

var resultado = numero1 + numero2;

console.log("el resultado es: " + resultado);

let text = "variable de tipo let";
console.log(text);

//String - cadena de tipo texto
// Number - de tipo numero

//*********Ejercicio*********//
//Una encuesta al usuario preguntando su nombre, cuantos gatos tiene, cuantos perros tiene y vamos a motrar la info asi:
// Ana tiene 3 perros y 2 gatos, en total tiene 3 mascotas

var nombre = prompt("Cual es tu nombre?");
var perros = Number(prompt("Cuantos perros tienes?"));
var gatos = Number(prompt("Cuantos gatos tienes?"));

var resultadoMascotas = gatos + perros;

console.log(
  nombre +
    " tiene " +
    perros +
    " perros y tiene " +
    gatos +
    " gatos " +
    "en total tiene " +
    resultadoMascotas +
    " mascotas"
);

//operaciones basicas
var a = 5;
var b = 12;

var suma = a + b;
var resta = a - b;
var multiplicacion = a * b;
var division = a / b;
var modulo = a % b;
var exponencial = a ** b;

console.log(suma, resta, multiplicacion, division, modulo, exponencial);
