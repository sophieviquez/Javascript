//1. Crea un programa que imprima en consola los números impares del 1 al 50.

for (let index = 1; index < 50; index++) {
  if (index % 2 !== 0) {
    console.log(index);
  }
}

/* 2. Crea un programa que pregunte al usuario un número. Usando el archivo de 
arreglo de Pokémons, mostrar solo los nombres de los Pokémons cuyos números que son 
múltiplos de 5 desde 1 hasta el número introducido por el usuario. https://pastebin.com/Zzk8g7Z6. */

let pokemons = [
  "bulbasaur",
  "ivysaur",
  "venusaur",
  "charmander",
  "charmeleon",
  "charizard",
  "squirtle",
  "wartortle",
  "blastoise",
  "caterpie",
  "metapod",
  "butterfree",
  "weedle",
  "kakuna",
  "beedrill",
  "pidgey",
  "pidgeotto",
  "pidgeot",
  "rattata",
  "raticate",
  "spearow",
  "fearow",
  "ekans",
  "arbok",
  "pikachu",
  "raichu",
  "sandshrew",
  "sandslash",
  "nidoran-f",
  "nidorina",
  "nidoqueen",
  "nidoran-m",
  "nidorino",
  "nidoking",
  "clefairy",
  "clefable",
  "vulpix",
  "ninetales",
  "jigglypuff",
  "wigglytuff",
  "zubat",
  "golbat",
  "oddish",
  "gloom",
  "vileplume",
  "paras",
  "parasect",
  "venonat",
  "venomoth",
  "diglett",
  "dugtrio",
  "meowth",
  "persian",
  "psyduck",
  "golduck",
  "mankey",
  "primeape",
  "growlithe",
  "arcanine",
  "poliwag",
  "poliwhirl",
  "poliwrath",
  "abra",
  "kadabra",
  "alakazam",
  "machop",
  "machoke",
  "machamp",
  "bellsprout",
  "weepinbell",
  "victreebel",
  "tentacool",
  "tentacruel",
  "geodude",
  "graveler",
  "golem",
  "ponyta",
  "rapidash",
  "slowpoke",
  "slowbro",
  "magnemite",
  "magneton",
  "farfetchd",
  "doduo",
  "dodrio",
  "seel",
  "dewgong",
  "grimer",
  "muk",
  "shellder",
  "cloyster",
  "gastly",
  "haunter",
  "gengar",
  "onix",
  "drowzee",
  "hypno",
  "krabby",
  "kingler",
  "voltorb",
];

console.log(pokemons.length);

const numero = parseInt(prompt("ingresar un numero entre el 1 al 100"));

if (!isNaN(numero) && numero <= 100) {
  for (let i = 0; i < numero; i++) {
    if (i % 5 === 0) {
      console.log(pokemons[i]);
    }
  }
} else {
  alert("ingresar un numero valido entre 1 y 100");
}

let arreglo = [3, "hola", true, 5, 19, "vanessa", false];

console.log("Elementos numeros de mi arreglo");

for (let i = 0; i < arreglo.length; i++) {
  if (typeof arreglo[i] === "string") {
    console.log(arreglo[i]);
  }
}

/* 3. Crea un programa que recorra el arreglo [4,”dos”,8,”tres”,5,9,1,”cero”] y muestre en
 consola solo los elementos que son tipo número.c */

const array = [4, "dos", 8, "tres", 5, 9, 1, "cero"];

for (let index = 0; index < array.length; index++) {
  if (typeof array[index] === "number") {
    console.log(array[index]);
  }
}
