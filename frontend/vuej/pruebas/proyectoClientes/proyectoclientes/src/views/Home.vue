<template>
  <div class="home">
    <div class="clientes" v-for="(cliente, index) in clientes" :key="cliente.id">
      <p>efafarf</p>
      <p>ID: {{ cliente.id }}</p>
      <p>nombre: {{ cliente.nombre }}</p>
      <p>apellido: {{ cliente.apellido }}</p>
      <p>ciudad: {{ cliente.ciudad }}</p>
      <p>Empresa: {{ cliente.empresa }}</p>
      <button @click="deleteClients(index)">Borrar</button>
      <button @click="openModal()">EDITAR</button>
    </div>

    <!-- modal para editar -->
    <div v-show="modal" class="modal">
      <div class="modalBox">
        <h2>MODAL PARA DATOS</h2>
        <input type="text" placeholder="Hola,soy un input" />
        <br />
        <br />
        <button @click="closeModal()">Cerrar</button>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import axios from "axios";

export default {
  name: "Home",
  components: {},
  data() {
    return {
      clientes: [],
      modal: true
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
    },
    openModal() {
      this.modal = true;
    },
    closeModal() {
      this.modal = false;
    }
  },
  created() {
    this.getClients();
  }
};
</script>
<style scoped>
.modal {
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  width: 100%;
}
.modalBox {
  background: #fefefe;
  margin: 15% auto;
  padding: 20px;
  border: 1px solid #888;
  width: 80%;
}
</style>