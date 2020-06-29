<template>
  <div class="Formulario">
    <menucustom></menucustom>
    <div>
      <p v-show="required">tienes datos aún por rellenar</p>
      <br />
      <label for="nombre">Nombre:</label>
      <input type="text" name="nombre" placeholder="Nombre del usuario" v-model="nombre" />
      <br />
      <label for="apellidos">Apellidos:</label>
      <input type="text" name="apellidos" placeholder="Apellido del usuario" v-model="apellidos" />
      <br />
      <label for="fecha_nacimiento">Fecha Nacimiento:</label>
      <input
        type="text"
        name="fecha_nacimiento"
        placeholder="Nacimiento usuario"
        v-model="fecha_nacimiento"
      />
      <br />
      <label for="alias">Alias:</label>
      <input type="text" name="alias" placeholder="Alias del usuario" v-model="alias" />
      <br />
      <label for="email">Email:</label>
      <input type="text" name="email" placeholder="Nombre del usuario" v-model="email" />
      <br />
      <label for="contraseña">Contraseña:</label>
      <input type="password" name="contraseña" placeholder="contraseña" v-model="contraseña" />
      <br />
      <label for="lugares_visitados">Lugares Visitados:</label>
      <input
        type="text"
        name="lugares_visitados"
        placeholder="Nombre del lugar"
        v-model="lugares_visitados"
      />
    </div>

    <button
      @click="
        registroUser(
          nombre,
          apellidos,
          fecha_nacimiento,
          alias,
          email,
          contraseña,
          lugares_visitados
        )
      "
    >REGISTRAR</button>
    <!--     dudando si meter un link de navegación hacia login
    -->
    <!--  <p>
      <a>
        <router-link :to="{ name: 'login' }">Ir al Login.</router-link>
      </a>
    </p>-->
  </div>
</template>

<script>
import axios from "axios";
import menucustom from "@/components/MenuCustom.vue";

export default {
  name: "registro",
  components: {
    menucustom
  },
  data() {
    return {
      nombre: "",
      apellidos: "",
      fecha_nacimiento: "",
      alias: "",
      email: "",
      contraseña: "",
      lugares_visitados: "",
      foto_perfil: "",
      correctData: false,
      required: false
    };
  },
  methods: {
    validatingData() {
      if (
        this.nombre === "" ||
        this.apellidos === "" ||
        this.fecha_nacimiento === "" ||
        this.alias === "" ||
        this.email === "" ||
        this.email === "" ||
        this.lugares_visitados === "" ||
        this.foto_perfil
      ) {
        this.correctData = false;
        this.required = true;
      } else {
        this.correctData = true;
        this.required = false;
      }
    },
    registroUser(email, contraseña) {
      this.validatingData();
      if (this.correctData === true) {
        var self = this;
        axios
          .post("http://localhost:3051/registro", {
            nombre: self.nombre,
            apellidos: self.apellidos,
            fecha_nacimiento: self.fecha_nacimiento,
            alias: self.alias,
            email: self.email,
            contraseña: self.contraseña,
            lugares_visitados: self.lugares_visitados,
            foto_perfil: self.foto_perfil
          })
          .then(function(response) {
            self.emptyFields();
            self.required = false;
            console.log(response);
          })
          .catch(function(error) {
            console.error(error);
          });
      } else {
        alert("ey! debes rellenar todos los campos");
      }
    },
    emptyFields() {
      this.nombre = "";
      this.apellidos = "";
      this.fecha_nacimiento = "";
      this.alias = "";
      this.email = "";
      this.contraseña = "";
      this.lugares_visitados = "";
      this.$router.push("/");
    }
  }
};
</script>

<style scoped></style>
