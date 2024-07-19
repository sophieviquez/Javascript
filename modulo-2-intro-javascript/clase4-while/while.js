let index = 11;

while (index < 10) {
  console.log(index);
  index++;
}
console.log("----------");

//do while,
let contador = 11;

do {
  contador++;
  console.log(contador);
} while (contador < 10);

/* 1. Crea un programa que pregunte al usuario un número. Mostrar los números que son 
múltiplos de 5 desde 1 hasta el número introducido por el usuario.
*/

console.log("----------");

const numero = parseInt(prompt("Ingresa un numero"));
let i = 1;
while (i <= numero) {
  if (i % 5 === 0) {
    console.log(i);
  }
  i++;
}

/* 2. Crea un programa que solicite al usuario 2 números entre 1 y 50. Posteriormente 
mostrar en consola los números del 1 hasta el 50, pero añadir el mensaje “¡Lotería!” solo al mostrar
 los números indicados por el usuario. */

let numero1 = parseInt(prompt("Ingresa un numero del 1 al 50"));
let numero2 = parseInt(
  prompt("Ingresa nuevamente un numero difente del 1 al 50")
);

let a = 1;
while (a <= 50) {
  if (a == numero1 || a == numero2) {
    console.log(a + " ¡Lotería!");
  } else {
    console.log(a);
  }
  a++;
}

/* 3. Crea un programa que solicite al usuario números, si lo que este introduce es un número guardarlo
  en un arreglo. Para terminar el capturar el usuario debe ingresar el número 0. Finalmente mostrar la 
  lista de números capturados en pantalla o en la consola. */

let numbers;
let arrayNumbers = [];

while (numbers !== 0) {
  numbers = parseInt(
    prompt("Ingresar numeros aleatorios, para finalizar ingresar 0")
  );

  arrayNumbers.push(numbers);
}
console.log(arrayNumbers);

/* 4. Crea un programa que solicite al usuario letras o palabras, si es así guardar el resultado. 
  Para terminar de capturar el usuario no debe escribir valor alguno. Al terminar de capturar, mostrar
   en pantalla la concatenación de todas las palabras capturadas. */

let letters;
let arrayLetters = [];

while (letters !== "") {
  letters = prompt("Ingresar letras o palabras al azar");
  arrayLetters.push(letters);
}
arrayLetters.pop(); //le quito el ultimo elemento pues no me aporta nada
let words = arrayLetters.toString(); //lo convierto a string con el metodo ToString()
let texto = words.replaceAll(",", " "); //Elimino todas las comas generadas por el metodo anterior, con replaceAll()
console.log(texto);
console.log(arrayLetters);

/* 5. Crea un programa que solicite al usuario un día de la semana (ej: lunes, jueves, domingo, etc). 
El programa mostrará un mensaje personalizado para cada día de la semana por medio de un alert. Y seguirá pidiendo 
al usuario introducir otro día. En caso de que el día introducido sea domingo mostrar al usuario el mensaje 
“Ve a descansar” y terminar la captura de información. */

let day;

while (day !== "domingo") {
  day = prompt("Ingresa un dia de la semana");
  alert("Ten un buen " + day);
}
alert("Ve a descansar");
