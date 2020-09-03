<template>
<div>
  <br />
  <br />
  <br />
  <br />
  <!--Encabezado de página -->
  <h2>USUARIOS DE VIAJES DIFERENTES:</h2>

  <!-- Formulario para la búsqueda -->

  <!--  INDICANDO EL USO DE bootstrap -->

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
  <div
    class="card mb-3"
    style="max-width: 540px
"
    v-for="(usuario, index) in filteredUser"
    :key="usuario.id"
  >
    <div class="row no-gutters">
      <div class="col-md-8">
        <div class="card-body">
          <h5 class="card-title">Lista Usuarios</h5>

          <br />
          <h5>ID: {{ usuario.id }}</h5>
          <br />
          <h5>nombre: {{ usuario.nombre }}</h5>
          <br />
          <h5>apellidos: {{ usuario.apellidos }}</h5>
          <br />
          <h5>Fecha Nacimiento: {{ usuario.fecha_nacimiento }}</h5>
          <br />
          <h5>alias: {{ usuario.alias }}</h5>
          <br />
          <h5>email: {{ usuario.email }}</h5>
          <br />
          <h5>contraseña: {{ usuario.contraseña }}</h5>
          <br />
          <h5>Lugares visitados: {{ usuario.lugares_visitados }}</h5>
          <br />
          <br />
          <!--    <button type="button" class="btn btn-success" @click="editUserEvent(index)">EDITAR</button> -->
          <button type="button" class="btn btn-danger" @click="deleteUserEvent(index)">BORRAR</button>
        </div>
      </div>
    </div>
  </div>
  <!--   <div
      class="card text-center"
      style="width:18rem"
      v-for="(usuario, index) in filteredUser"
      :key="usuario.id"
    >
    
      <div class="card-body">
        <img :src="usuario.foto_perfil" class="card-img-top" alt="..." />
        <h2 class="card-title">Lista Usuarios</h2>
        <br />
        <p>ID: {{ usuario.id }}</p>
        <br />
        <p>nombre: {{ usuario.nombre }}</p>
        <br />
        <p>apellidos: {{ usuario.apellidos }}</p>
        <br />
        <p>Fecha Nacimiento: {{ usuario.fecha_nacimiento }}</p>
        <br />
        <p>alias: {{ usuario.alias }}</p>
        <br />
        <p>email: {{ usuario.email }}</p>
        <br />
        <p>contraseña: {{ usuario.contraseña }}</p>
        <br />
        <p>Lugares visitados: {{ usuario.lugares_visitados }}</p>
        <br />
  <br />-->
  <!--Eventos de botón para ser escuchados -->
  <!-- <button @click="editUserEvent(index)">EDITAR</button>
        <button @click="deleteUserEvent(index)">BORRAR</button>
      </div>
  </div>-->
</div>
</template>

<script>
import axios from "axios";
export default {
  name: "listausuarios",
  data() {
    return {
      search: "",
    };
  },
  props: {
    usuarios: Array,
  },
  computed: {
    filteredUser() {
      if (!this.search) {
        return this.usuarios;
      }
      return this.usuarios.filter(
        (usuario) =>
          usuario.nombre.toLowerCase().includes(this.search.toLowerCase()) ||
          usuario.apellidos.toLowerCase().includes(this.search.toLowerCase()) ||
          usuario.alias.toLowerCase().includes(this.search.toLowerCase()) ||
          usuario.email.toLowerCase().includes(this.search.toLowerCase()) ||
          usuario.lugares_visitados
            .toLowerCase()
            .includes(this.search.toLowerCase())
      );
    },
  },
  methods: {
    // LLAMADA A EVENTOS

    editUserEvent(index) {
      let data = this.usuarios[index];
      this.$emit("editar", data);
    },
    deleteUserEvent(index) {
      let data = this.usuarios[index].id;
      this.$emit("borrar", data);
    },
  },
};
</script>

<style scoped>
/* .usuarios {
  display: flex;
  flex-direction: column;
  justify-content: center;
} */
</style>
