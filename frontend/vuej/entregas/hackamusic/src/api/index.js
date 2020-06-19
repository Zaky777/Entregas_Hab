import config from "./config.js";

const axios = require("axios").default;

const apiKey = config.apiKey;
//PILLANDO LOS ARTISTAS DE LA API
const BASE_URL_Art = "https://ws.audioscrobbler.com/";
const URL_GEO_Art =
  "2.0/?method=geo.gettopartists&country=spain&api_key=" +
  apiKey +
  "&format=json";
//PILLANDO LAS CANCIONES DE LA API
const BASE_URL_Tra = "https://ws.audioscrobbler.com/";
const URL_GEO_Tra =
  "2.0/?method=geo.gettoptracks&country=spain&api_key=" +
  apiKey +
  "&format=json";
//PILLANDO LOS TAGS DE LA API
const BASE_URL_Tag = "https://ws.audioscrobbler.com/";
const URL_GEO_Tag =
  "2.0/?method=chart.gettoptags&api_key=" + apiKey + "&format=json";
async function getArtists() {
  try {
    const response = await axios.get(`${BASE_URL_Art}${URL_GEO_Art}`);
    return response;
  } catch (error) {
    console.log(error);
  }
}

async function getTopTracks() {
  try {
    const response = await axios.get(`${BASE_URL_Tra}${URL_GEO_Tra}`);

    return response;
  } catch (error) {
    console.log(error);
  }
}
async function getTopTags() {
  try {
    const response = await axios.get(`${BASE_URL_Tag}${URL_GEO_Tag}`);
    console.log(response);

    return response;
  } catch (error) {
    console.log(error);
  }
}
export default {
  getArtists,
  getTopTracks,
  getTopTags,
};
