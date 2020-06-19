<template>
  <div>
    <h2>
      Tu login, colega:
    </h2>
    <input type="text" placeholder="Escribe tu usuario" v-model="usuario" />
    <input
      type="password"
      placeholder="Escribe tu contraseña"
      v-model="contrasena"
    />
    <button @click="login()">Haz login</button>
  </div>
</template>

<script>
import { loginUser } from "../api/utils";
export default {
  name: "Login",
  data() {
    return {
      usuario: "",
      contrasena: "",
    };
  },
  methods: {
    async login() {
      try {
        await loginUser(this.usuario, this.contrasena);
        this.$router.push("/home");
      } catch (error) {
        alert(`Error:${error}`);
      }
    },
  },
};
</script>

<style scoped></style>
