let dispositivo = prompt(
  "¿Como quieres ver netflix, celular/television/tablet"
);

if (dispositivo == "celular") {
  console.log("Entra a la app Google y escribe Netflix");
} else if (dispositivo == "television") {
  console.log("Prende la tv y presiona el boton rojo");
} else if (dispositivo == "tablet") {
  console.log("Descarga la app Netflix e inicia sesion");
} else {
  console.log("No puedes ver Netflix ahi");
}

//Ejercicio Funciones Figuras

let figura = prompt("Cual es tu figura: triangulo, cuadrado o rectandulo");

function areaTriangulo(base, altura) {
  return (base * altura) / 2;
}

function areaCuadrado(base, altura) {
  return base * altura;
}

function areaCuadrado(lado) {
  return lado * lado;
}

if (figura == "triangulo") {
  let base = parseFloat(prompt("Cuanto mide la base del triangulo: "));
  let altura = parseFloat(prompt("Cuanto mide la altura del triangulo: "));
  alert("El area del triangulo es: " + areaTriangulo(base, altura));
} else if (figura == "rectangulo") {
  let base = parseFloat(prompt("Cuanto mide la base del rectangulo: "));
  let altura = parseFloat(prompt("Cuanto mide la altura del rectangulo: "));
  alert("El area del rectangulo es: " + areaCuadrado(base, altura));
} else if (figura == "cuadrado") {
  let lado = parseFloat(prompt("Cuanto mide un lado del cuadrado: "));
  alert("El area del cuadrado es: " + areaCuadrado(lado));
} else {
  console.log("Lo siento, no puedo calcular esa figura");
}

let edad = Number(prompt("Cual es tu edad?"));
let membresia = prompt("Cual es tu membresia? VIP, Plata, Bronce");

if (membresia == edad >= 21 && "VIP") {
  console.log("tienes permitido el acceso al VIP");
} else if ((membresia === "Plata" || "Bronce") && edad >= 18) {
  console.log("Acceso Permitido");
} else {
  console.log("Lo siento no cumples con los requisitos para entrar");
}

const dia = new Date().getDay();
