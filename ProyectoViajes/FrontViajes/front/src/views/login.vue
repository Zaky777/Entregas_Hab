<template>
<div class="banner">
  <div class="menu">
    <menucustom></menucustom>
  </div>

  <!-- 
    INDICANDO EL USO DE BOOTSTRAP 

  -->
  <div class="bootstrap">
    <link
      rel="stylesheet"
      href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css"
      integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk"
      crossorigin="anonymous"
    />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  </div>

  <body>
    <script
      type="application/javascript"
      src="https://code.jquery.com/jquery-3.5.1.slim.min.js"
      integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj"
      crossorigin="anonymous"
    ></script>
    <script
      type="application/javascript"
      src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js"
      integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo"
      crossorigin="anonymous"
    ></script>
    <script
      type="application/javascript"
      src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/js/bootstrap.min.js"
      integrity="sha384-OgVRvuATP1z7JjHLkuOU7Xw704+h835Lr+6QL9UvYjZE3Ipu6Tp75j7Bh/kR0JKI"
      crossorigin="anonymous"
    ></script>
  </body>
  <!-- 
  -->
  <div class="jumbotron">
    <h1 class="display-4" style="¡">Logueate!!</h1>
    <div class="lead">
      <div class="col">
        <label for="exampleInputEmail1">Email</label>
        <input
          type="email"
          class="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
          v-model="email"
        />
        <small id="emailHelp" class="form-text text-muted">Pon un email correcto</small>
      </div>
      <div class="col">
        <label for="exampleInputPassword1">Contraseña</label>
        <input type="password" class="form-control" id="exampleInputPassword1" v-model="password" />
      </div>
    </div>
    <button type="submit" class="btn btn-primary" @click="login()">Haz login!</button>
  </div>

  <!-- 
  -->

  <footercustom></footercustom>
</div>
</template>
<script>
import { loginUser } from "../api/utils.js";
import menucustom from "@/components/MenuCustom.vue";
import footercustom from "@/components/FooterCustom.vue";
import axios from "axios";
import Swal from "sweetalert2";

export default {
  name: "login",
  components: {
    menucustom,
    footercustom,
  },
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    login(email, password) {
      let self = this;
      axios
        .post("http://localhost:3003/usuarios/login", {
          email: self.email,
          password: self.password,
        })
        .then(function (response) {
          localStorage.setItem("token", response.data.data.token);
          localStorage.setItem("email", response.data.email);
          localStorage.setItem("id", response.data.id);
          localStorage.setItem("role", response.data.role);

          const Toast = Swal.mixin({
            toast: true,
            position: "top-center",
            showConfirmButton: false,
            timer: 3000,
            timerProgressBar: true,
            onOpen: (toast) => {
              toast.addEventListener("mouseenter", Swal.stopTimer);
              toast.addEventListener("mouseleave", Swal.resumeTimer);
            },
          });
          Toast.fire({
            icon: "success",
            title: "Te has logueado correctamente",
          });
          self.$router.push("/myUser");
        })
        .catch(function (error) {
          Swal.fire({
            title: "!!",
            text: "Debes introducir los datos para tu inicio de sesión.",
            confirmButtonText: "O.K",
            confirmButtonColor: "#42f5e3",
            width: "900px",
            customClass: "swal-wide",
          });
          console.log("Errooor");
        });
    },

    /*   async login() {
      try {
        await loginUser(this.email, this.password);
        this.$router.push("/");
      } catch (error) {
        alert(`Error:${error}`);
      }
    }, */
  },
};
</script>

<style scoped>
.jumbotron {
  margin-top: 70px;
  margin-left: 35%;
  height: 650px;
  width: 600px;
  background: linear-gradient(-90deg, black, rgb(0, 26, 255));
  font-family: "Mystery Quest";
  box-shadow: 3px 5px 15px rgb(0, 10, 10);
  text-align: center;
  color: cornsilk;
  font-size: 1.5rem;
}
.jumbotron button {
  margin-top: 100px;
  font-size: 2rem;
  background: green;
}
.banner {
  height: 100vh;
  width: 100%;
  background: url("foto.jpg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
</style>
