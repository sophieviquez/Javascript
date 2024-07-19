/******************/
/*  EJERCICIO 10  */
/******************/
/* 10. Un conocido portal de educación en tecnología está ofreciendo programas 
para aprender a desarrollar aplicaciones. Escribe un programa que le indique a la 
persona interesada cuánto deberá pagar mensualmente de acuerdo a la opción elegida.
El programa educativo contempla 3 diferentes niveles, cada uno con su costo mensual: 
Course: $4999 MXN
Carrera $3999 MXN
Master: $2999 MXN
Adicionalmente preguntar si cuenta con alguna beca y aplicar el descuento correspondiente al precio final.
Beca Facebook: 20% de descuento.
Beca Google: 15% de descuento.
Beca Jesua: 50% de descuento.
Finalmente, además del precio mensual con descuento, indicar al usuario cuánto gastaría 
en total por el curso elegido, tomando en cuenta las siguientes duraciones:
Course: 2 meses
Carrera 6 meses
Master: 12 meses */

const bienvenida = alert(
  "Bienvenido a Dev.f contamos con los siguientes 3 programas educativos: Course $4999 MXN, Carrera $3999 MXN, Master $2999 MXN"
);
const nivel = prompt(
  "Cual programa es de tu interes cursar? Course/ Carrera/ Master"
).toLowerCase();

const tipoBeca = prompt(
  "Con cual de estas becas cuentas? Facebook/ Google/ Jesua / Sin Beca"
).toLowerCase();

let costoMes;
let duracion;
let descuento;

switch (nivel) {
  case "course":
    costoMes = 4999;
    duracion = 2;
    break;

  case "carrera":
    costoMes = 3999;
    duracion = 6;
    break;

  case "master":
    costoMes = 2999;
    duracion = 12;
    break;

  default:
    alert("Ingresa un programa valido: Course, Master o Carrera");
    costoMes = 0;
    duracion = 0;

    break;
}

switch (tipoBeca) {
  case "facebook":
    descuento = 0.2;
    break;

  case "google":
    descuento = 0.15;
    break;

  case "jesua":
    descuento = 0.5;
    break;

  case "sin beca":
    descuento = 0;
    break;

  default:
    alert("Beca no válida. No se aplicará ningún descuento.");
    descuento = 0;
    break;
}

const programaConDescuento = costoMes * descuento;
const precioDescuento = costoMes - programaConDescuento;
const totalPrograma = precioDescuento * duracion;

if (totalPrograma > 0) {
  alert(
    `El precio de tu programa ${nivel} con los descuentos aplicados es de $${totalPrograma.toFixed(
      2
    )} MXN con duracion de ${duracion} meses`
  );
} else {
  alert("Por favor ingresa correctamente los datos solicitados");
}

console.log("total programa: ", totalPrograma);
console.log("nivel: ", nivel);
console.log("costo mes:", costoMes);
console.log("descuento: ", descuento);
console.log("duracion: ", duracion);
/******************/
/*  EJERCICIO 11  */
/******************/

/* 11. Realizar un programa que ayude a calcular el total a pagar de acuerdo a 
la distancia recorrida por un vehículo con cargo extra por los litros consumidos, 
tomando en consideración lo siguiente: Si el vehículo es “coche”, el precio kilometro 
ha de ser 0.20, si es “moto” ha de ser 0.10 y si es “autobús” 0.5.
Si los litros consumidos están entre 0 y 100 se ha de añadir 5 al costo total, 
si es mayor la cantidad de litros consumidos se ha de añadir 10 al total. Considere qué:
total a pagar = (precio kilometro x kms recorridos) + extra por litros consumidos. */

let precioKms;

function CalculoTotal() {
  const vehiculo = prompt("ingresa vehiculo").toLocaleLowerCase();
  const distancia = parseInt(prompt("ingresa distancia"));
  const litros = parseInt(prompt("ingresa litros"));
  let precioKms;

  if (vehiculo == "coche") {
    precioKms = 0.2;
  } else if (vehiculo == "moto") {
    precioKms = 0.1;
  } else if (vehiculo == " autobus") {
    precioKms = 0.5;
  } else {
    alert("Ingresa un vehiculo valido");
  }

  const recorrido = precioKms * distancia;
  const extraLitros = litros <= 100 ? 5 : 10;

  const totalPagar = recorrido + extraLitros;

  alert(`El total a pagar es de $${totalPagar} pesos`);
}

CalculoTotal();
