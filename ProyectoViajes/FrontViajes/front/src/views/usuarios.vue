<template>
  <div class="container">
    <div class="w-auto p-3" style="background-color: #eee;">
      <menucustom></menucustom>

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

      <!-- formulario edición -->

      <div class="listausuarios" v-show="true">
        <listausuarios
          :usuarios="usuarios"
          v-on:editar="showEditUsers"
          v-on:borrar="deleteUser"
        ></listausuarios>
      </div>
      <div class="editar" v-show="editar">
        <input type="text" v-model="newNombre" name="nombre" />
        <input type="text" v-model="newApellidos" name="apellidos" />
        <input
          type="text"
          v-model="newFecha_nacimiento"
          name="fecha_nacimiento"
        />
        <input type="text" v-model="newAlias" name="alias" />
        <input type="text" v-model="newEmail" name="email" />
        <input type="password" v-model="newContraseña" name="contraseña" />
        <input
          type="text"
          v-model="newLugares_visitados"
          name="lugares_visitados"
        />
        <input type="text" v-model="newFoto_perfil" name="foto_perfil" />

        <!-- Botón que llama a la función de modificar -->
      </div>
      <button @click="editUser()">MODIFICAR</button>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import Swal from "sweetalert2";
import listausuarios from "@/components/listausuarios.vue";
import menucustom from "@/components/MenuCustom.vue";

export default {
  name: "usuarios",
  components: {
    listausuarios,
    menucustom,
  },
  data() {
    return {
      usuarios: [],
      id: null,

      newNombre: "",
      newApellidos: "",
      newFecha_nacimiento: "",
      newAlias: "",
      newEmail: "",
      newContraseña: "",
      newLugares_visitados: "",
      newFoto_perfil: "",

      editar: false,
    };
  },
  methods: {
    mostrarUsuarios() {
      var self = this;
      axios
        .get("http://localhost:3051/usuarios")
        // SI TODOO OK
        .then(function(response) {
          console.log(response);
          self.usuarios = response.data;
        })
        // SI SALE MAL
        .catch(function(error) {
          console.log(error);
        });
    },
    // FUNCIÓN PARA MOSTRAR DATOS DE LOS USUARIOS SELECCIONADO PARA EDITAR.
    showEditUsers(data) {
      this.id = data.id;
      this.newNombre = data.nombre;
      this.newApellidos = data.apellidos;
      this.newFecha_nacimiento = data.fecha_nacimiento;
      this.newAlias = data.alias;
      this.newEmail = data.email;
      this.newContraseña = data.contraseña;
      this.newLugares_visitados = data.lugares_visitados;
      this.newFoto_perfil = data.foto_perfil;

      this.editar = true;
    },
    //FUNCIÓN PARA GUARDAR LOS DATOS MODIFICADOS.
    editUser() {
      let self = this;
      axios
        // Hacemos un put, indicando la ruta a la que debe sumarse el id, en forma de "parámetro".
        .put("http://localhost:3051/usuarios/update/" + self.id, {
          id: self.id,
          nombre: self.newNombre,
          apellidos: self.newApellidos,
          fecha_nacimiento: self.newFecha_nacimiento,
          alias: self.newAlias,
          email: self.newEmail,
          contraseña: self.newContraseña,
          lugares_visitados: self.newLugares_visitados,
          foto_perfil: self.newFoto_perfil,
        })
        //SI SALE BIEN
        .then(function(response) {
          Swal.fire({
            title: "okey",
            text: "Usuario editado!",
            confirmButtonText: " O.K. ",
          });
          location.reload();
        })
        //SI SALE MAL
        .catch(function(error) {
          console.log(error);
        });
    },
    // FUNCIÓN PARA BORRAR UN CLIENTE
    deleteUser(data) {
      const self = this;
      axios
        // Hacemos una petición delete.
        .delete("http://localhost:3051/usuarios/del/" + data)
        //SI SALE BIEN
        .then(function(response) {
          Swal.fire({
            title: "okey",
            text: "Usuario borrado",
            confirmButtonText: " O.K. ",
          });
          location.reload();
        })
        //SI SALE MAL
        .catch(function(error) {
          console.error(error);
        });
    },
  },

  //Llamada automática
  created() {
    this.mostrarUsuarios();
  },
};
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  box-shadow: 0 0 100px rgb(5, 86, 179);
  height: 100%;
  width: 100%;
  padding: 2rem;
  margin: 0 auto;
  padding-top: 30px;
  padding-bottom: 10px;
}
</style>
