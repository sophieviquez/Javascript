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
2. Crea un programa que solicite al usuario 2 números entre 1 y 50. Posteriormente 
mostrar en consola los números del 1 hasta el 50, pero añadir el mensaje “¡Lotería!” solo al mostrar
 los números indicados por el usuario. */

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
