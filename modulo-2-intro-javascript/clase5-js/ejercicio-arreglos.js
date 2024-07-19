//Ejercicio 1

/* Crear un array vacío, luego generar 10 números al azar y guardarlos en un array. 
Mostrar en consola el resultado del array. */
const array = [];
for (let i = 0; i <= 10; i++) {
  let randomNumber = Math.floor(Math.random() * 50);
  array.push(randomNumber);
}

console.log(array);

/* El usuario deberá ingresar un string con varias palabras separadas por coma en un popup
 y se deben convertir en un array, (el usuario ingresa: '1,2,3,4,5' y se convierte en [1,2,3,4,5]).
Mostrar en consola dicho resultado. */

let datos = prompt(
  "Ingresa tus marcas de chocolate favoritas, separados por comas"
);
const chocolate = datos.split(",");

console.log(chocolate);

/* De acuerdo al array [10,40,30,20,15,5], imprime lo siguiente: El arreglo ordenado de menor a mayor, 
muestra el número menor y el número mayor. Tip: Busca en google los métodos de JavaScript que regresan el 
mayor y menor elemento de un arreglo. */

let numeros = [10, 40, 30, 20, 15, 5];

// Ordenar el array de menor a mayor
numeros.sort(function (a, b) {
  return a - b; // Si a es menor que b, retorna un valor negativo, lo que coloca a antes de b
});

// Encontrar el número menor usando Math.min y recorriendo el array
let numeroMenor = Math.min.apply(null, numeros);

// Encontrar el número mayor usando Math.max y recorriendo el array
let numeroMayor = Math.max.apply(null, numeros);

// Mostrar los resultados en la consola
console.log("Array ordenado de menor a mayor:", numeros);
console.log("Número menor:", numeroMenor);
console.log("Número mayor:", numeroMayor);
