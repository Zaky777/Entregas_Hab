"use strict";

//hago llamada a la api
const url = "https://api.exchangerate-api.com/v4/latest/EUR";

//realizo un fetch llamando a la url.
const fetchPromise = fetch(url);

fetchPromise

  .then((response) => response.json()) //recibo la respuesta y la informacion que le pido a la APi
  .then((data) => {
    const valorDelEuro = data.rates.EUR; //me devuelve la información del valor de la moneda
    console.log(`Valor del euro es ${valorDelEuro}`);
    const valorDelYen = data.rates.JPY;
    console.log(`Valor actual del Yen es ${valorDelYen} euros `);
    const valorDelDolar = data.rates.USD;
    console.log(`Valor actual del dólar es ${valorDelDolar} euros`);
    //realizo un prompt para introducir los valores en una ventana en el navegador
    let valorIntroducidoEnEuros = prompt(
      "Introduce la cifra en Euros que quieres convertir"
    );
    let convertidoADolares = valorIntroducidoEnEuros * valorDelDolar; //calculo el valor convertido de los euros puestos en la pantalla del prompt
    let convertidoAYenes = valorDelDolar * valorDelYen;
    //realizo un alert para que se muestren los resultados
    alert(
      `${valorIntroducidoEnEuros} euros son ${convertidoADolares} dólares y ${convertidoAYenes} yenes`
    );
  });
