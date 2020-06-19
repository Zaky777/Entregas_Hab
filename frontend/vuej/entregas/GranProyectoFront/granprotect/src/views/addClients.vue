<template>
  <div>
    <menucustom></menucustom>
    <div>
      <p v-show="required">tienes datos aún por rellenar</p>
      <label for="nombre">Nombre:</label>
      <input type="text" name="nombre" placeholder="Nombre del cliente" v-model="nombre" />
      <label for="apellidos">Apellidos:</label>
      <input type="text" name="apellidos" placeholder="apellidos del cliente" v-model="apellidos" />
      <label for="ciudad">Ciudad:</label>
      <input type="text" name="Ciudad" placeholder="Ciudad del cliente" v-model="ciudad" />
      <label for="empresa">Empresa:</label>
      <input type="text" name="empresa" placeholder="Empresa del cliente" v-model="empresa" />
    </div>
    <button @click="addClient(nombre, apellidos, ciudad, empresa)">CREAAR</button>
  </div>
</template>

<script>
import axios from "axios";
import menucustom from "@/components/MenuCustom.vue";
import listaclientes from "@/components/listaClientes.vue";
export default {
  name: "addClients",
  components: {
    menucustom,
    listaclientes
  },
  data() {
    return {
      nombre: "",
      apellidos: "",
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
        this.apellidos === "" ||
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
    addClient(nombre, apellidos, ciudad, empresa) {
      this.validatingData(); //validando datos del formulario
      if (this.correctData === true) {
        var self = this;
        axios
          .post("http://localhost:3051/add", {
            nombre: self.nombre,
            apellidos: self.apellidos,
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
      this.apellidos = "";
      this.ciudad = "";
      this.empresa = "";
    }
  }
};
</script>

<style></style>
