<template>
  <div class="contenedorformulario">
    <p v-show="required">Tienes datos aún por rellenar</p>

    <label for="nombre">Mail o nombre de usuario:</label>
    <input type="text" name="email" placeholder="email de usuario" v-model="email" />
    <br />

    <label for="password">Contraseña:</label>
    <input type="password" name="password" placeholder="contraseña" v-model="password" />
    <br />

    <button @click="registerUser(email, password)">REGISTR0</button>
    <p>
      <a>
        <router-link :to="{ name: 'login' }">regresar login.</router-link>
      </a>
    </p>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "register",

  components: {},
  data() {
    return {
      email: "",
      password: "",
      correctData: false,
      required: false
    };
  },
  methods: {
    validatingData() {
      if (this.email === "" || this.password === "") {
        this.correctData = false;
        this.required = true;
      } else {
        this.correctData = true;
        this.required = false;
      }
    },

    registerUser(email, password) {
      this.validatingData();
      if (this.correctData === true) {
        let self = this;
        axios
          .post("http://localhost:3051/register", {
            email: self.email,
            password: self.password
          })
          .then(function(response) {
            self.emptyFields();
            self.required = false;
            alert("todo okey!");
          })
          .catch(function(error) {
            console.error(error);
          });
      } else {
        alert("Que haces?! faltan datos por cubrir");
      }
    },

    emptyFields() {
      this.email = "";
      this.password = "";
      this.$router.push("/");
    }
  }
};
</script>

<style scoped></style>