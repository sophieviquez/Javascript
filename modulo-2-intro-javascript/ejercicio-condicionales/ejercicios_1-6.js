/******************/
/*   EJERCICIO 1  */
/******************/
/* 1. Solicitar al usuario que responda a la pregunta (“¿Eres bellisimo/a?”), en caso de 
contestar sí, responder “Ciertamente”, en caso de contestar no, responder: “No te creo”. */

const pregunta = prompt("¿Eres bellisimo/a? Si/No").toLowerCase();

if (pregunta === "si") {
  alert("Ciertamente lo eres!");
} else if (pregunta === "no") {
  alert("No te creo");
} else {
  alert("Respuesta no valida");
}

/*******************/
/* EJERCICIO 2 y 3 */
/*******************/
/* 2. Solicitar al usuario un número, y determinar si es divisible entre dos o no. Mostrando
 al usuario un mensaje de “x número es divisible entre 2” o “x núm no es divisible entre 2”. */
/* 3. Crear un programa que determine si un número introducido en un Prompt es par o no, la respuesta
 será mostrada en un Alert. */

const numero = parseInt(prompt("Ingresa un numero"));

if (!isNaN(numero)) {
  if (numero % 2 === 0) {
    alert(`${numero} numero es divisible entre 2`);
  } else {
    alert(`${numero} NO es un numero divisible entre 2`);
  }
} else {
  alert("Ingresa un numero valido");
}

/******************/
/*   EJERCICIO 4  */
/******************/
/* 4. Solicitar al usuario un número de cliente. Si el número es el 1000, imprimir
 'Ganaste un premio', en caso contrario mostrar el número y el mensaje “Lo sentimos, sigue participando”. */

const numeroCliente = parseInt(prompt("Ingresa numero de cliente"));

if (!isNaN(numeroCliente)) {
  if (numeroCliente === 100) {
    alert("Felicidades! Ganaste un Premio");
  } else {
    alert("Lo sentimos, sigue partcipando");
  }
} else {
  alert("ingresa un numero de cliente valido");
}

/******************/
/*   EJERCICIO 5  */
/******************/
/* 5. Solicitar al usuario que ingrese dos números y mostrar cuál de los dos es menor.
 No considerar el caso en que ambos números son iguales. */

const numero1 = parseInt(prompt("Ingresa un numero"));
const numero2 = parseInt(prompt("Ingresa el segundo numero "));

if (!isNaN(numero1) && !isNaN(numero2)) {
  if (numero2 < numero1) {
    alert(`${numero2} es menor que ${numero1}`);
  } else if (numero1 < numero2) {
    alert(`${numero1} es menor que ${numero2}`);
  } else if (numero1 === numero2) {
    alert(
      "Ambos numeros numeros son iguales, favor de escirbir diferentes numeros"
    );
  }
} else {
  alert("Por favor, ingresa números válidos.");
}

/******************/
/*   EJERCICIO 6  */
/******************/
/* 6. Solicitar al usuario que ingrese tres números y mostrar cuál de los tres es el 
número mayor. Considerar el caso en que 2 números sean iguales. */

const instrucciones = alert(
  "A continuacion se ingresaran 3 numeros y se mostrara el resultado mayor de los 3"
);

const numero3 = parseInt(prompt("Ingresar el tercer numero"));

if (!isNaN(numero1) && !isNaN(numero2) && !isNaN(numero3)) {
  if (numero1 === numero2 || numero2 === numero3 || numero1 === numero3) {
    alert("Todos los números deben ser diferentes");
  } else if (numero1 > numero2 && numero1 > numero3) {
    alert(`${numero1} es mayor que ${numero2} y ${numero3}`);
  } else if (numero2 > numero1 && numero2 > numero3) {
    alert(`${numero2} es mayor que ${numero1} y ${numero3}`);
  } else if (numero3 > numero1 && numero3 > numero2) {
    alert(`${numero3} es mayor que ${numero1} y ${numero2}`);
  }
} else {
  alert("Ingresar numeros validos");
}
