"use strict";
//ALERTA!!!!
//COMENTAR Y DESCOMENTAR PARA DIFERENTES VERSIONES DE LA CALCULADORA

//CALCULADORA 1!!!

/* 
function introducirNum() {
  let valor1 = +prompt("Introduce un número del 1 al 10");
  if (valor1 == null || valor1 == "") {
    alert("Debes introducir algún valor");
    valor1 = +prompt("Introduce un número del 1 al 10");
  }
  return valor1;
}

function introducirNum2() {
  let valor2 = +prompt("Introduce otro número del 1 al 10");
  if (valor2 == null || valor2 == "") {
    alert("Debes introducir algún valor");
    valor2 = +prompt("Introduce un número del 1 al 10");
  }
  return valor2;
}

function darResultados(valor1, valor2) {
  let suma = valor1 + valor2;
  alert("la suma es " + suma);
  let resta = valor1 - valor2;
  alert("la resta es " + resta);
  let multiplicar = valor1 * valor2;
  alert("la multiplicacion es " + multiplicar);
  let dividir = valor1 / valor2;
  alert("la division es " + dividir);
  let exponenciar = Math.pow(valor1, valor2);
  alert(valor1 + " elevado a " + valor2 + " es " + exponenciar);
}

darResultados(introducirNum(), introducirNum2());
 */

//CALCULADORA 2!!!!

/* let valor1 = +prompt("Introduce un número");
let operador = prompt("Introduce operacion a realizar");
while (
  operador != "+" &&
  operador != "-" &&
  operador != "*" &&
  operador != "/" &&
  operador != "2"
) {
  alert("Debes introducir un operador válido");
  operador = prompt("Introduce +, -, *, / o 2 para elevar al cuadrado");
}

let valor2 = +prompt("Introduce otro número del 1 al 10");

let resultado;

if (operador == "+") {
  resultado = valor1 + valor2;
} else if (operador == "-") {
  resultado = valor1 - valor2;
} else if (operador == "*") {
  resultado = valor1 * valor2;
} else if (operador == "/") {
  resultado = valor1 / valor2;
} else if (operador == "2") {
  resultado = Math.pow(valor1, valor2);
}

alert("El resultado es " + resultado);
 */

// CALCULADORA 3

/* let resultado;
let valor1 = +prompt("Introduce número");
let valor2 = +prompt("Introduce número");
let operador = prompt("Introduce operación a realizar");
while (
  operador != "+" &&
  operador != "-" &&
  operador != "*" &&
  operador != "/" &&
  operador != "2"
) {
  alert("Debes introducir una operación válida");
  operador = prompt(" Introduce +, -, *, / o 2 para elevar al cuadrado");
}

switch (operador) {
  case "+":
    resultado = valor1 + valor2;
    break;
  case "-":
    resultado = valor1 - valor2;
    break;
  case "/":
    resultado = valor1 / valor2;
    break;
  case "*":
    resultado = valor1 * valor2;
    break;
  case "2":
    resultado = Math.pow(valor1, valor2);
    break;
}

alert("El resultado es " + resultado);
 */
