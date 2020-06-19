"use strict";

const selectorUno = document.getElementById("selector_uno"); //con getelement pillo la parte del Html que me interesa
const cantidadUno = document.getElementById("cantidad_uno");
const selectorDos = document.getElementById("selector_dos");
const cantidadDos = document.getElementById("cantidad_dos");
const elementoRate = document.getElementById("rate");
const botonInvertir = document.getElementById("botoninvertir");

function calcular() {
  //creo una función para realizar los cálculos
  const cantidad_uno = selectorUno.value; //pillo el valor de la moneda/selector que vaya a calcular
  const cantidad_dos = selectorDos.value;

  fetch(`https://api.exchangerate-api.com/v4/latest/${cantidad_uno}`) //hago una llamada a la api us
    .then((res) => res.json())
    .then((data) => {
      const rate = data.rates[cantidad_dos];

      elementoRate.innerText = `1 ${cantidad_uno} = ${rate} ${cantidad_dos}`; //indico que me aparezca el resultado

      cantidadDos.value = (cantidadUno.value * rate).toFixed(3); //hago que en el resultado solo me salga 3 decimales como máx
    });
}

selectorUno.addEventListener("change", calcular); //con eventlistener le indico el evento a escuchar
cantidadUno.addEventListener("input", calcular); // "change" o "input"
selectorDos.addEventListener("change", calcular);
cantidadDos.addEventListener("input", calcular);

botoninvertir.addEventListener("click", () => {
  //realizo el evento "click para invertir los valores seleccionados en los selectores"
  const temp = selectorUno.value;
  selectorUno.value = selectorDos.value;
  selectorDos.value = temp;
  calcular();
});

calcular();
