//indicando el uso de axios
const axios = require("axios").default;

// Base url de la api

const apiUrl = "https://rickandmortyapi.com/api";

//funcion para pillar todos los personajes

function getAll() {
  return axios.get(`${apiUrl}/character`);
}
export default {
  getAll,
};
