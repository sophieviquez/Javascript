/* prompt ¿Cuanto dinero tienes? 
Una cuenta no debe de tener más de $990 y menos de $10.
Es necesario hacer las validaciones pertinentes para que no se rompa esta regla de negocio. */

let pregunta = prompt("¿Cuanto dinero tienes?");

if (pregunta < 10) {
  alert("No puedes tener menor de $10 pesos en la cuenta");
} else if (pregunta >= 990) {
  alert("No puedes tener mayor de $990 pesos en la cuenta");
} else {
  alert("Estas dentro del rango permitido de dinero en la cuenta");
}
