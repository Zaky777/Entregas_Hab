<template>
<div>
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
  <h2>Registrate!</h2>
  <form>
    <div class="form-row">
      <div class="col">
        <label for="exampleInputEmail1">Nombre</label>
        <input
          type="text"
          class="form-control"
          id="nombre"
          aria-describedby="emailHelp"
          v-model="nombre"
        />
      </div>
      <div class="col">
        <label for="exampleInputEmail1">Apellidos</label>
        <input
          type="text"
          class="form-control"
          id="nombre"
          aria-describedby="emailHelp"
          v-model="apellidos"
        />
      </div>
    </div>
    <br />
    <br />
    <div class="form-row">
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
    <div class="form-group form-check">
      <input type="checkbox" class="form-check-input" id="exampleCheck1" />
      <label class="form-check-label" for="exampleCheck1">Dispuesto a comenzar la aventura!</label>
    </div>
    <button type="submit" class="btn btn-primary" @click="registro()">Registrate!</button>
  </form>
</div>
</template>
<script>
import menucustom from "@/components/MenuCustom.vue";
import axios from "axios";
import Swal from "sweetalert2";

export default {
  name: "registro",
  components: {
    menucustom,
  },
  data() {
    return {
      nombre: "",
      apellidos: "",
      email: "",
      password: "",
    };
  },
  methods: {
    validatingData() {
      if (
        this.nombre === "" ||
        this.apellidos === "" ||
        this.password === "" ||
        this.email === ""
      ) {
        this.correctData = false;
        this.required = true;
      } else {
        this.correctData = true;
        this.required = false;
      }
    },
    registro(nombre, apellidos, email, password) {
      this.validatingData();
      if (this.correctData === true) {
        let self = this;
        axios
          .post("http://localhost:3003/usuarios/", {
            nombre: self.nombre,
            apellidos: self.apellidos,
            email: self.email,
            password: self.password,
          })
          .then(function (response) {
            self.emptyFields();
            self.required = false;
            const Toast = Swal.mixin({
              toast: true,
              position: "top-center",
              showConfirmButton: false,
              timer: 5000,
              timerProgressBar: true,
              onOpen: (toast) => {
                toast.addEventListener("mouseenter", Swal.stopTimer);
                toast.addEventListener("mouseleave", Swal.resumeTimer);
              },
            });
            Toast.fire({
              icon: "success",
              title: "Te has Registrado correctamente, ahora logueate!!",
            });
            self.$router.push("/login");
          })
          .catch(function (error) {
            alert(`Error:${error}`);
            console.log(error);
          });
      }
    },
    emptyFields() {
      this.nombre = "";
      this.apellidos = "";
      this.email = "";
      this.password = "";
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
.menu {
  height: 200px;
}
</style>
