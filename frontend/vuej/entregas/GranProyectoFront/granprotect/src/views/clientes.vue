<template>
  <div class="home">
    <menucustom></menucustom>
    <!-- <div class="clientes" v-for="(cliente, index) in clientes" :key="cliente.id">
      <p>efafarf</p>
      <p>ID: {{ cliente.id }}</p>
      <p>nombre: {{ cliente.nombre }}</p>
      <p>apellido: {{ cliente.apellido }}</p>
      <p>ciudad: {{ cliente.ciudad }}</p>
      <p>Empresa: {{ cliente.empresa }}</p>
    </div>-->

    <div class="editar" v-show="showEditar">
      <input type="text" v-model="newNombre" name="nombre" />
      <input type="text" v-model="newApellidos" name="apellidos" />
      <input type="text" v-model="newCiudad" name="ciudad" />
      <input type="text" v-model="newEmpresa" name="empresa" />

      <button @click="editClient()">✔️MODIFICAR</button>
    </div>
    <listaclientes :clientes="clientes"></listaclientes>
  </div>
</template>

<script>
// @ is an alias to /src
import axios from "axios";
import listaclientes from "@/components/listaClientes.vue";
import addclients from "@/views/addClients.vue";
import login from "@/views/login.vue";
import menucustom from "@/components/MenuCustom.vue";

export default {
  name: "clientes",
  components: {
    menucustom,
    listaclientes
  },
  data() {
    return {
      clientes: [],
      id: null,
      newNombre: "",
      newApellidos: "",
      newCiudad: "",
      newEmpresa: "",
      showEditar: false
    };
  },
  methods: {
    mostrarClients() {
      var self = this;
      axios
        .get("http://localhost:3051/clientes")
        // SI TODOO OK
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
    showEditClients(data) {
      this.id = data.id;
      this.newNombre = data.nombre;
      this.newApellidos = data.apellidos;
      this.newCiudad = data.ciudad;
      this.newEmpresa = data.empresa;
      this.showEditar = true;
    },
    editClient() {
      let self = this;
      axios
        .put("http://localhost:3051/clientes/update" + self.id, {
          id: self.id,
          nombre: self.newNombre,
          apellidos: self.newApellidos,
          ciudad: self.newCiudad,
          empresa: self.newEmpresa
        })
        //SI SALE BIEN
        .then(function(response) {
          console.log(response);
        })
        //SI SALE MAL
        .catch(function(error) {
          console.log(error);
        });
    }
  },

  created() {
    this.mostrarClients();
  }
};
</script>
