import axios from "axios";
import jwt from "jwt-decode";

const ENDPOINT = "http://localhost:3051";
const AUTH_TOKEN_KEY = "authToken";
const ROLE = "role";

export function loginUser(usuario, contrasena) {
  return new Promise(async (resolve, reject) => {
    try {
      let res = await axios({
        url: `${ENDPOINT}/auth`,
        method: "POST",
        data: {
          usuario: usuario,
          contrasena: contrasena,
          grant_type: "contrasena",
        },
      });
      setAuthToken(res.data.token);
      setIsAdmin(res.data.isAdmin);
      resolve();
    } catch (err) {
      console.log("Error  en login:", err);
      reject(err);
    }
  });
}

export function setAuthToken(token) {
  axios.defaults.headers.common["Authorization"] = `Bearer${token}`;
  localStorage.setItem(AUTH_TOKEN_KEY, token);
}

export function clearLogin() {
  axios.defaults.headers.common["Authorization"] = "";
  localStorage.removeItem(AUTH_TOKEN_KEY);
  clearAdmin();
}

export function getAuthToken() {
  return localStorage.getItem(AUTH_TOKEN_KEY);
}

export function getTokenExpirationDate(encodedToken) {
  let token = jwt(encodedToken);
  if (!token.exp) {
    return null;
  }
  let date = new Date(0);
  date.setUTCSeconds(token.exp);
  return date;
}

export function isTokenExpired(token) {
  let expirationDate = getTokenExpirationDate(token);
  return expirationDate < new Date();
}

export function isLoggedIn() {
  let authToken = getAuthToken();
  return !!authToken && !isTokenExpired(authToken);
}

//funciones para comprabar el rol de user

//guardar si es admin en local storage

export function setIsAdmin(isAdmin) {
  localStorage.setItem(ROLE, isAdmin);
}

//BORRAR ROL DE USER EN LOCAL STORAGE
export function clearAdmin() {
  return localStorage.removeItem(ROLE);
}

//funcion q reccupera el rol desde el localstorage
export function getIsAdmin() {
  return localStorage.getItem(ROLE);
}

//Comprobar si el rol es true o false para ver si es Admin o no
export function checkAdmin() {
  let role = false;
  let isAdmin = getIsAdmin();
  if (isAdmin === "true") {
    role = true;
  } else {
    role = false;
  }
  return role;
}
