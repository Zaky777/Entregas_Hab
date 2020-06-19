<template>
  <div>
    <div>
      <p v-show="required">tienes datos aún por rellenar</p>
      <label for="nombre">Nombre:</label>
      <input type="text" name="nombre" placeholder="Nombre del cliente" v-model="nombre" />
      <label for="apellido">Apellido:</label>
      <input type="text" name="apellido" placeholder="apellido del cliente" v-model="apellido" />
      <label for="nombre">Ciudad:</label>
      <input type="text" name="Ciudad" placeholder="Ciudad del cliente" v-model="ciudad" />
      <label for="nombre">Empresa:</label>
      <input type="text" name="empresa" placeholder="Empresa del cliente" v-model="empresa" />
    </div>
    <button @click="addClient(nombre, apellido, ciudad, empresa)">CREAAR</button>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "addClient",
  data() {
    return {
      nombre: "",
      apellido: "",
      ciudad: "",
      empresa: "",
      correctData: false,
      required: false
    };
  },
  methods: {
    validatingData() {
      if (
        this.nombre === "" ||
        this.apellido === "" ||
        this.ciudad === "" ||
        this.empresa === ""
      ) {
        this.correctData = false;
        this.required = true;
      } else {
        this.correctData = true;
        this.required = false;
      }
    },
    addClient(nombre, apellido, ciudad, empresa) {
      this.validatingData(); //validando datos del formulario
      if (this.correctData === true) {
        var self = this;
        axios
          .post("http://localhost:3051/add", {
            nombre: self.nombre,
            apellido: self.apellido,
            ciudad: self.ciudad,
            empresa: self.empresa
          })
          .then(function(response) {
            self.emptyFields();
            console.log(response);
          })
          .catch(function(error) {
            console.log(error);
          });
      } else {
        alert("¡que haces tio?? no has rellenado los campos");
      }
    },
    emptyFields() {
      this.nombre = "";
      this.apellido = "";
      this.ciudad = "";
      this.empresa = "";
    }
  }
};
</script>

<style></style>
