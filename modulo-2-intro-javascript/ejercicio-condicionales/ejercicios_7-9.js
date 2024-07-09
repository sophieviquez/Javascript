/******************/
/*   EJERCICIO 7  */
/******************/
/* 7. Requerir al usuario que ingrese un día de la semana e imprimir un mensaje si 
es lunes, otro mensaje diferente si es viernes, otro mensaje diferente si es sábado 
o domingo. Si el día ingresado no es ninguno de esos, imprimir otro mensaje */

const diaSemana = prompt("Ingresa un dia de la semana").toLowerCase();

if (diaSemana == "lunes") {
  alert("¡Hoy es lunes, a empezar la semana con energía!");
} else if (diaSemana == "viernes") {
  alert(
    "¡Por fin es viernes, el fin de semana está a la vuelta de la esquina!"
  );
} else if (diaSemana == "sabado" || diaSemana == "domingo") {
  alert("¡Disfruta del descanso y las buenas compañías este fin de semana!");
} else {
  alert("Disfruta cada dia al maximo");
}

/******************/
/*   EJERCICIO 8  */
/******************/
/* 8. Solicitar al usuario una calificación (entre 1 y 10). Luego se debe comprobar que 
el número efectivamente esté en ese rango, si no lo está imprima un mensaje de error. 
Si lo está, imprima “reprobado” si la calificación es inferior a 6, “regular” si está 
entre 6 y 8, “bien” si es 9, y por último, “excelente” si es 10. */

const calificacion = parseInt(prompt("Ingresa una calificacion del 1 al 10"));

if (!isNaN(calificacion && calificacion >= 1 && calificacion <= 10)) {
  if (calificacion < 6) {
    alert("Reprobado");
  } else if (calificacion >= 6 && calificacion <= 8) {
    alert("Regular");
  } else if (calificacion === 9) {
    alert("Bien");
  } else if (calificacion === 10) {
    alert("Excelente");
  }
} else {
  alert("Numero invalido, ingresa un numero del 1 al 10");
}

/*******************/
/*   EJERCICIO 9   */
/*******************/
/* Escribe un programa que responda a un usuario que quiere 
comprar un helado en una conocida marca de comida rápida 
cuánto le costará en función del topping que elija.
El helado sin topping cuesta 50 MXN.
El topping de oreo cuesta 10 MXN.
El topping de KitKat cuesta 15 MXN.
El topping de brownie cuesta 20 MXN.
En caso de no disponer del topping solicitado por el usuario,
el programa le indicará “no tenemos este topping, lo sentimos.” 
y a continuación le informará el precio del helado sin ningún topping */

alert(
  "¡Hola! En la heladeria, el precio inicial de nuestros helados es de $50, y puede subir según los toppings adicionales que selecciones."
);

alert(
  "El helado sin topping cuesta $50 MXN, Oreo: $10 MXN, KitKat: $15 MXN, Brownie: $20 MXN."
);

const helado = prompt(
  "¿Quieres algun topping con tu helado? Si/No "
).toLowerCase();

const precioBase = 50;
const toppings = {
  oreo: 10,
  kitkat: 15,
  brownie: 20,
};
let precioTotal = precioBase;

if (helado === "si") {
  const topping = prompt("¿Que topping quieres? Oreo /Kitkat /Brownie");

  if (topping === "oreo") {
    precioTotal += toppings.oreo;

    alert(`El total de tu helado con topping de es de: $ ${precioTotal}MNX`);
  } else if (topping === "kitkat") {
    precioTotal += toppings.kitkat;

    alert(`El total de tu helado con topping de es de: $ ${precioTotal}MNX`);
  } else if (topping === "brownie") {
    precioTotal += toppings.brownie;

    alert(`El total de tu helado con topping de es de: $ ${precioTotal}MNX`);
  } else if (topping !== "oreo" || "kitkat" || "brownie") {
    alert("No tenemos este topping, lo sentimos");

    alert(`El total de tu helado sin topping de es de: $ ${precioBase}MNX`);
  } else {
    alert("Respuesta no válida");
    alert(`El total de tu helado sin topping de es de: $ ${precioBase}MNX`);
  }
} else if (helado === "no") {
  alert(`El total de tu helado sin topping de es de: $ ${precioBase}MNX`);
} else {
  alert("Respuesta no válida");
  alert(`El total de tu helado sin topping de es de: $ ${precioBase}MNX`);
}
