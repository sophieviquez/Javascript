/* Ejercicio 1 */
//numeros impares del 1 al 50 - FOR

for (let index = 1; index < 50; index++) {
  if (index % 2 !== 0) {
    console.log(index);
  }
}

let arreglo = [3, "hola", true, 5, 19, "vanessa", false];

console.log("Elementos numeros de mi arreglo");

for (let i = 0; i < arreglo.length; i++) {
  if (typeof arreglo[i] === "number") {
    console.log(arreglo[i]);
  }
}
