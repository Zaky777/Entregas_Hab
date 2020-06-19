"use strict";

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getRandomColor() {
  const red = getRandomInt(0, 255);
  const green = getRandomInt(0, 255);
  const blue = getRandomInt(0, 255);

  return `rgb(${red}, ${green}, ${blue})`;
}

const squares = document.querySelectorAll("li");

function colorSquare() {
  //coger un cuadrado aleatorio
  //ponerle un color aleatorio
  const chosen = squares[getRandomInt(0, squares.length - 1)];
  chosen.style.backgroundColor = getRandomColor();
}

setInterval(colorSquare, 20);
