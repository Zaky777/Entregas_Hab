<template>
  <div class="home">
    <menucustom></menucustom>
    <div class="clientes" v-for="(cliente, index) in clientes" :key="cliente.id">
      <p>efafarf</p>
      <p>ID: {{ cliente.id }}</p>
      <p>nombre: {{ cliente.nombre }}</p>
      <p>apellido: {{ cliente.apellido }}</p>
      <p>ciudad: {{ cliente.ciudad }}</p>
      <p>Empresa: {{ cliente.empresa }}</p>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import axios from "axios";
import addClients from "@/views/addClients.vue";
import login from "@/views/login.vue";
import menucustom from "@/components/MenuCustom.vue";

export default {
  name: "Home",
  components: {
    menucustom
  },
  data() {
    return {
      clientes: []
    };
  },
  methods: {
    getClients() {
      var self = this;
      axios
        .get("http://localhost:3051/clientes")
        // SI SALE BIEN
        .then(function(response) {
          console.log(response);
          self.clientes = response.data;
        })
        // SI SALE MAL
        .catch(function(error) {
          console.log(error);
        });
    },
    deleteClients(index) {
      this.id = this.clientes[index].id;
      axios
        .delete("http://localhost:3051/clientes/del/" + this.id, {
          id: this.id
        })
        .then(function(response) {
          console.log(response);
        })
        .catch(function(error) {
          console.log(error);
        });
    }
  },

  created() {
    this.getClients();
  }
};
</script>
