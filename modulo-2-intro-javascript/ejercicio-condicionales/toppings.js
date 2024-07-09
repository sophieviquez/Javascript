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

/*******************/
/*   EJERCICIO 9   */
/*******************/

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
