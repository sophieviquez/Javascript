//Objetos literales

let disquette = {
  capacidad: 20,
  archivos: ".jpn",
  fecha: 2023,
};

//Acceder con notacion de grupo
console.log(disquette.capacidad);
console.log(disquette.archivos);
console.log(disquette.fecha);

let laptop = {
  marca: "dell",
  color: "plata",
  pantalla: 7,
  camara: true,
};

//Acceder con notacion de corchetes

console.log(laptop["marca"]);
console.log(laptop["color"]);
console.log(laptop["pantalla"]);
console.log(laptop["camara"]);

//Metodos, acciones
//Palabra reservada this

//La diferencia con otros lenguajes es que podemos
//Modificar nuestros ibjetos iterales (r, c, u, d)

//Desestructuracion ES6 -JVscript Moderno

let persona = {
  nombre: "Ana",
  edad: 22,
  escolaridad: "licenciatura",
  sexo: "femenino",
  vivo: true,
};

console.log(
  `${persona.nombre} tiene ${persona.edad} años y su escolaridad es ${persona.escolaridad}`
);

let nombre = "Ana";
let edad = 22;
let escolaridad = "licenciatura";
let sexo = "femenino";
let vivo = true;

console.log("El nombre del clientes" + nombre + "y tiene " + edad + " años");
console.log(
  `El nombre del cliente es ${nombre} y tiene ${edad} escolaridad de: ${escolaridad}`
); // ${variable}

/*Ejercicio, hacer objeto literal y con variables MASCOTA, mostrando el
console.log con desestructuracion ${ } - Mandarlo a discord
*/

let mascota = {
  nombre: "Midas",
  raza: "pug",
  edad: 5,
  color: " negro",
  vivo: true,
};

console.log(
  `Mi perro ${mascota.nombre} es un ${mascota.raza} de color ${mascota.color} y tiene ${mascota.edad} años `
);
