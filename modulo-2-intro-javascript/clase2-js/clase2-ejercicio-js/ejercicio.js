//Ejercicio:Area de Triangulo y Cuadrado en una funcion

function AreaTriangulo() {
  let base = Number(prompt("Escribe la base del triangulo"));
  let altura = Number(prompt("Escribe la altura del triangulo"));
  let triangulo = (base * altura) / 2;

  console.log("El area de tu triangulo es: " + triangulo);
  return triangulo;
}

AreaTriangulo();

function AreaCuadrado() {
  let lado = Number(prompt("Escribe el lado del cuadrado"));
  let cuadrado = lado * lado;

  console.log("El area de tu cuadrado es:" + cuadrado);
  return cuadrado;
}

AreaCuadrado();
