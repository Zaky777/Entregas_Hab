<template>
  <div class="container">
    <menucustom></menucustom>
    <div class="MyUser">
      <h2>Bienvenido! {{ usuarios.email }}</h2>
    </div>
    <!--    Uso bootstrap!!!!
 
 
 
  -->
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




 --></div>
</template>

<script>
import menucustom from "@/components/MenuCustom.vue";
import axios from "axios";
export default {
  name: "MyPerfil",
  components: {
    menucustom,
  },
  data() {
    return {
      usuarios: {},
    };
  },
  methods: {
    getDataUser() {
      const self = this;
      // pillo token e id.
      const token = localStorage.getItem("token");
      const data = localStorage.getItem("email");
      axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;

      axios
        .get("http://localhost:3051/usuarios/" + data)
        .then(function(response) {
          console.log(response);
          // En usuario tengo ahora el acceso.
          self.usuarios = response.data.email;
        })
        .catch(function(error) {
          alert("error");
          console.log(error);
        });
    },
  },
};
/* import axios from "axios";
import menucustom from "@/components/MenuCustom.vue";
import footercustom from "@/components/FooterCustom.vue";

export default {
  name: "MyPerfil",
  components: {
    menucustom,
    footercustom,
  },
  data() {
    return {
      id: null,
      usuario: {},
      newNombre: "",
      newApellidos: "",
    };
  },
  methods: {
    // FUNCIÓN PARA MOSTRAR DATOS DE LOS USUARIOS SELECCIONADO PARA EDITAR.
    showEditMyUser(data) {
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
    getUser() {
      const self = this;
      // pillo token e id.
      const token = localStorage.getItem("token");
      const data = localStorage.getItem("id");
      axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;

      axios
        .get("http://localhost:3051/usuarios/" + data)
        .then(function(response) {
          console.log(response);
          self.usuario = response.data.data;
        })
        .catch(function(error) {
          alert("error");
          console.log(error);
        });
    },
    //FUNCIÓN PARA PEDIR LOS DATOS DE MI USUARIO
    selectEditUser() {
      const self = this;

      const data = localStorage.getItem("id");
      const token = localStorage.getItem("token");
      axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
      //Hago la petición a servidor
      axios;
      put("http://localhost:3051/usuarios/update/" + data, {
        nombre: self.nuevoNombre,
        apellidos: self.nuevoApellido,
      })
        .then(function(response) {
          self.editMyUser = true;
        })
        .catch(function(error) {
          console.error(error);
          console.log(error.response.data.message);
        });
    },
  },
}; */
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
