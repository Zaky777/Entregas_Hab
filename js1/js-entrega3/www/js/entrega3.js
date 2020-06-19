"use strict";

// !!!PALABRA MAS LARGA!!!

/*
function letterCount(frase) {
  let palabraMasLarga = '';
  let palabraSeparada = frase.replace(',:;.,', ' ').split(' ');
  palabraSeparada.forEach(function(palabraSeparada) {
    if (palabraSeparada.length > palabraMasLarga.length) {
      palabraMasLarga = palabraSeparada;
    }
  });
  console.log(palabraMasLarga);
  return palabraMasLarga;
}
letterCount('Esto ya se pasa de castaño oscurisimo');
*/

// !!!!! EJERCICIO BINARIOS!!!!!
/* function binaryConverter() {
  let numero = prompt("número binario a convertir ");
  numero = numero.split("");
  console.log("Primera comprobacion");
  console.log(numero);
  let numeroEntero = 0;
  let contador = 0;

  console.log(numero.length);
  const numeroReves = numero.reverse();
  console.log("ANTES DEL BUCLE comprobación");
  for (let i = 0; i < numeroReves.length; i++) {
    console.log("Ha entrado en el bucle " + i + " veces");
    console.log("Ahora numero Entero es = " + numeroEntero);
    numeroEntero += Math.pow(2, i) * numeroReves[i];
    console.log(
      "Estoy elevando Dos a " + i + "para sumarselo ahora a  " + numeroEntero
    );
    console.log("Ahora numero Entero es = " + numeroEntero);
    console.log("Ahora el valor de i es  " + i);
  }
  alert("Es el número decimal " + numeroEntero);
} 
binaryConverter(); */
/* 
//!!!!!PALINDROMOS
function palindromeTwo() {
  let frase = prompt(
    "Cuál es la frase que deseas comprobar si es un palídromo?"
  );
  let fraseDerecho = frase.toLowerCase().replace(/[\W_]/g, ""); //VIsto en internet para eliminar caracteres que no sean números ni letras
  console.log(fraseDerecho); //comprobación
  let fraseReves = fraseDerecho.split("").reverse().join(""); // Descubrí esta manera de aplicar varias funciones al mismo array, tarde, pero sí.
  console.log(fraseReves); //comprobación
  if (fraseDerecho == fraseReves) {
    alert("La frase introducida es un palíndromo");
  } else if (fraseDerecho !== fraseReves) {
    alert("La frase introducida no es un palíndromo");
  }
}
palindromeTwo();
 */

