<template>
  <div>
    <h2>Clientes</h2>

    <div id="formulario">
      <label for="Search">Buscando por...</label>
      <br />
      <input
        v-model="search"
        id="search"
        name="Search"
        type="search"
        placeholder=" nombre, apellidos, ciudad, empresa "
      />
    </div>

    <div class="clientes">
      <div class="listaClientes" v-for="(cliente,index) in filteredClientes" :key="cliente.id">
        <p>
          <b>{{cliente.id}}</b>
        </p>
        <p>
          <b>
            NOMBRE
            <u>{{cliente.nombre}}</u>
          </b>
        </p>
        <p>
          <b>
            APELLIDO
            <u>{{cliente.apellidos}}</u>
          </b>
        </p>
        <p>
          CIUDAD:
          <b>{{cliente.ciudad}}</b>
        </p>
        <p>
          EMPRESA:
          <b>{{cliente.empresa}}</b>
        </p>
        <hr />
        <br />
        <div id="botones">
          <button @click="editClientsEvent(index)">EDITAR</button>
          <button @click="deleteClientsEvent(index)">BORRAR</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "listaclientes",
  data() {
    return {
      search: ""
    };
  },
  props: {
    clientes: Array
  },
  computed: {
    filteredClientes() {
      if (!this.search) {
        return this.clientes;
      }
      return this.clientes.filter(
        cliente =>
          cliente.nombre.toLowerCase().includes(this.search.toLowerCase()) ||
          cliente.apellidos.toLowerCase().includes(this.search.toLowerCase()) ||
          cliente.ciudad.toLowerCase().includes(this.search.toLowerCase()) ||
          cliente.empresa.toLowerCase().includes(this.search.toLowerCase())
      );
    }
  },
  methods: {
    editClientsEvent(index) {
      let data = this.clientes[index];
      this.$emit("editar", data);
    },
    deleteClientsEvent(index) {
      let data = this.clientes[index].id;
      this.$emit("borrar", data);
    }
  }
};
</script>

<style scoped>
</style>