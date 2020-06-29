import axios from "axios";
import jwt from "jwt-decode";

const ENDPOINT = "http://localhost:3051";
const AUTH_TOKEN_KEY = "authToken";
const ROLE = "role";
const ISUSER = "isUser";

//función para logearse
export function loginUser(email, contraseña) {
  return new Promise(async (resolve, reject) => {
    try {
      let res = await axios({
        url: `${ENDPOINT}/auth`,
        method: "POST",
        data: {
          email: email,
          contraseña: contraseña,
          grant_type: "contraseña",
        },
      });
      setAuthToken(res.data.token);
      setIsAdmin(res.data.admin);
      setIsUser(res.data.email);
      resolve();
    } catch (err) {
      console.log("Error  en login:", err);
      reject(err);
    }
  });
}
//guardar token en localstorage
export function setAuthToken(token) {
  axios.defaults.headers.common["Authorization"] = `Bearer${token}`;
  localStorage.setItem(AUTH_TOKEN_KEY, token);
}
//logout
export function clearLogin() {
  axios.defaults.headers.common["Authorization"] = "";
  localStorage.removeItem(AUTH_TOKEN_KEY);
  clearAdmin();
}
//pillar el token
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

//funciones para comprobar el rol de user

//guardar si es admin en local storage

export function setIsAdmin(isAdmin) {
  localStorage.setItem(ROLE, isAdmin);
}
//guardar si es el usuario

export function setIsUser(user) {
  localStorage.setItem(ISUSER, user);
}
//BORRAR ROL DE USER EN LOCAL STORAGE
export function clearAdmin() {
  return localStorage.removeItem(ROLE);
}
export function clearIsUser() {
  return localStorage.removeItem(ISUSER);
}
//funcion q recupera el rol desde el localstorage
export function getIsAdmin() {
  return localStorage.getItem(ROLE);
}
export function getIsUser() {
  return localStorage.getItem(ISUSER);
}

//Comprobar si el rol es true o false para ver si es Admin o no
export function checkAdmin() {
  let role = false;
  let admin = getIsAdmin();
  if (admin === "true") {
    role = true;
  } else {
    role = false;
  }
  return role;
}
export function checkIsUser() {
  let isUser = getIsUser();
  let id = false;
  if (id === "true") {
    isUser = true;
  } else {
    isUser = false;
  }
  return isUser;
}
