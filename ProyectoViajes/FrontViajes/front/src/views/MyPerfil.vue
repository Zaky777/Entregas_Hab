<template>
<div class="container">
  <!-- 
    INDICANDO EL USO DE BOOTSTRAP 

  -->
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
  <vue-headful title="Mi perfil" description="mi perfil" />
  <menucustom></menucustom>
  <div class="jumbotron">
    <h1 class="display-4" style="height:12rem; width: 12rem;">Bienvenido! {{ usuario.nombre }}</h1>
    <div class="lead">
      <div class="img">
        <img class="mr-3" :src="usuario.url_foto" alt="Foto de perfil de usuario" />
      </div>
      <hr class="my-4" />
      <h2>Nombre y apellidos</h2>
      <ul>
        {{
        usuario.nombre
        }},
        {{
        usuario.apellidos
        }}
      </ul>

      <div class="btn-group" role="group" aria-label="Basic example">
        <button
          type="button"
          class="btn btn-primary btn-dark"
          @click="showEditPerfil()"
        >Edita tu perfil</button>
        <button
          type="button"
          class="btn btn-secondary"
          @click="showEditPassword()"
        >Cambia tu contraseña</button>
      </div>
    </div>
  </div>

  <!--     
    BOTONES!!

  -->
  <div class="botones">
    <h1 class="tituloVotaciones">
      ¿Has visitado alguno de nuestros viajes?
      <button
        type="button"
        class="btn btn-primary btn-lg btn-block"
        @click="showVote()"
      >Puntualos!</button>
    </h1>
    <br />
  </div>

  <div class="editUser" v-show="showEdit">
    <h2>Haz tus cambios:</h2>
    <form class="formEditarUsuario">
      <div>
        <label for="url_foto">Cambiar foto de perfil</label>
        <br />
        <input
          type="file"
          id="url_foto"
          name="url_foto"
          ref="url_foto"
          @change="handleFileUpload()"
        />
      </div>
      <br />
      <label for="nombre">Nombre</label>
      <br />
      <input type="text" v-model="newNombre" placeholder="Nombre" />
      <br />
      <label for="apellidos">Apellidos</label>
      <br />
      <input type="text" v-model="newApellidos" placeholder="Apellidos" />
      <br />
      <label for="email">Email</label>
      <br />
      <input type="text" v-model="newEmail" placeholder="Email" />
      <br />
      <label for="descripcion">Descripcion</label>
      <br />
      <input type="text" v-model="newDescripcion" placeholder="Descripcion" />
      <br />
      <br />
      <br />
      <button class="btn btn-primary" @click="editUsuario()">Confirmar</button>
      <button class="btn btn-secondary" @click="showEdit = false">Atras</button>
      <br />
      <br />
      <br />
      <br />
    </form>
  </div>
  <div class="editPassword" v-show="seeEditPassword">
    <h2 class="editPassword">Cambia tu contraseña!</h2>
    <form class="formEditPassword">
      <label for="oldpassword">Contraseña Anterior</label>
      <br />
      <input type="password" v-model="oldPassword" placeholder="Anterior contraseña" />
      <br />
      <label for="password">Nueva contraseña</label>
      <br />
      <input type="password" v-model="password" placeholder="Nueva contraseña" />
      <br />
      <label for="passwordRepeat">Repetir contraseña</label>
      <br />
      <input type="password" v-model="passwordRepeat" placeholder="Repite nueva contraseña" />
    </form>
    <button @click="editPassword()">Editar</button>
    <button class="passwordBack" @click="seeEditPassword = false">Volver</button>
    <br />
    <br />
    <br />
  </div>
  <!-- 

MODAL BOOTSTRAP


  -->
  <!-- 

  MOSTAR LOS LUGARES y votarlos



  -->
  <div class="Mostrar y Votar" v-show="seeVote">
    <h2 class="title">Nuestros viajes</h2>
    <button class="votarBack" @click="seeVote = false">Volver</button>
    <div class="row row-cols-1 row-cols-md-2">
      <div v-for="lugar in lugares_experiencias" :key="lugar.id" class="card" style="width: 18rem;">
        <img :src="lugar.fotos" class="card-img-top" alt="..." />
        <div class="card-body">
          <h5 class="card-title">{{ lugar.localizacion }}</h5>
          <p class="card-text">País:{{ lugar.pais }}</p>
          <p class="card-text">Sitios de interes:{{ lugar.enclaves_de_interes }}</p>
          <a href="#" class="btn btn-primary" @click="openModal(lugar)">Vota este viaje</a>
        </div>
      </div>
    </div>
    <div v-show="modal">
      <div class="modalBox">
        <star-rating @rating-selected="valoracion = $event" :rating="rating" v-bind:star-size="33"></star-rating>
        <h3>Haz un comentario!</h3>

        <textarea v-model="comentario" name="comentario" id="comentario" cols="30" rows="10"></textarea>
        <br />
        <button @click="votarViaje(lugarVotado, valoracion,comentario)">Valora Este Viaje!</button>
        <button @click="closeModal()">Volver</button>
      </div>
    </div>
  </div>
  <!-- 

  -->
</div>
</template>

<script>
import menucustom from "@/components/MenuCustom.vue";
import axios from "axios";
import StarRating from "vue-star-rating";
import VModal from "vue-js-modal";
import vueHeadful from "vue-headful";
import Swal from "sweetalert2";

export default {
  name: "MyPerfil",
  components: {
    menucustom,
    StarRating,
    vueHeadful,
  },
  data() {
    return {
      usuario: {},
      showEdit: false,
      seeEditPassword: false,
      newDescripcion: "",
      newNombre: "",
      newApellidos: "",
      newEmail: "",
      url_foto: "",
      oldPassword: "",
      password: "",
      passwordRepeat: "",
      valoracion: 0,
      comentario: "",
      modal: false,
      lugares_experiencias: [],
      lugarVotado: "",
      seeVote: false,
    };
  },
  methods: {
    handleFileUpload() {
      this.url_foto = this.$refs.url_foto.files[0];
    },
    getDataUser() {
      const self = this;
      // pillo token e id.
      const token = localStorage.getItem("token");
      const data = localStorage.getItem("id");
      axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;

      axios
        .get("http://localhost:3003/usuarios/perfil/" + data)
        .then(function (response) {
          console.log(response);

          // En usuario tengo ahora el acceso.
          self.usuario = response.data.data;
          self.usuario.url_foto =
            "http://localhost:3003/uploads/" + self.usuario.url_foto;
        })

        .catch(function (error) {
          alert("error");
          console.log(error.response.data.message);
        });
    },

    //Mostrar Viajes

    mostrarLugares() {
      var self = this;
      const data = localStorage.getItem("id");
      const token = localStorage.getItem("token");
      axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
      axios
        .get("http://localhost:3003/lugaresexp")
        // SI TODOO OK
        .then(function (response) {
          self.lugares_experiencias = response.data.data.map((lugar) => {
            lugar.fotos = "http://localhost:3003/uploads/" + lugar.fotos;

            return lugar;
          });
          console.log(response);
        })
        // SI SALE MAL
        .catch(function (error) {
          console.log(error);
        });
    },

    //Editar Usuario

    editUsuario() {
      const self = this;
      const data = localStorage.getItem("id");
      const token = localStorage.getItem("token");
      let formData = new FormData();
      formData.append("url_foto", self.url_foto);
      formData.append("nombre", self.newNombre);
      formData.append("apellidos", self.newApellidos);
      formData.append("descripcion", self.newDescripcion);
      formData.append("email", self.newEmail);

      axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
      axios
        .put("http://localhost:3003/usuarios/editar/" + data, formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        })
        .then(function (response) {
          self.showEdit = true;
          Swal.fire({
            icon: "v",
            tittle: "has editado tus datos correctamente",
            timer: "4000",
          });
          location.reload();
        })
        .catch(function (error) {
          console.error(error.response.data.message);
          console.log(error);
        });
    },
    showEditPerfil() {
      this.url_foto = this.usuario.url_foto;
      this.newNombre = this.usuario.nombre;
      this.newApellidos = this.usuario.apellidos;
      this.newDescripcion = this.usuario.descripcion;
      this.newEmail = this.usuario.email;
      this.showEdit = true;
    },
    editPassword() {
      const self = this;
      const data = localStorage.getItem("id");
      const token = localStorage.getItem("token");
      axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
      axios
        .put("http://localhost:3003/usuarios/password/" + data, {
          oldPassword: self.oldPassword,
          newPassword: self.password,
          newPasswordRepeat: self.passwordRepeat,
        })
        .then(function (response) {
          self.emptyPassword();
          self.seeEditPassword = false;
        })
        .catch(function (error) {
          console.error(error.response.data.message);
        });
    },
    showEditPassword() {
      this.seeEditPassword = true;
      this.password = "";
      this.passwordRepeat = "";
    },
    emptyPassword() {
      this.oldPassword = "";
      this.newPassword = "";
      this.newPasswordRepeat = "";
    },

    showVote() {
      this.seeVote = true;
    },
    votarViaje(lugar, valoracion, comentario) {
      console.log("fafaefa", valoracion);
      console.log("laefoafeonaef", comentario);
      self = this;

      const id = lugar.id;
      const token = localStorage.getItem("token");
      const data = localStorage.getItem("id");

      axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
      axios
        .post("http://localhost:3003/valoraciones/" + id, {
          valoracion: valoracion,
          comentario: comentario,
        })
        .then(function (response) {
          console.log(response);
          this.seeVote = false;
          closeModal();
        });

      Swal.fire({
        title: "Perfecto!",
        text: "Sabia opinión",
        confirmButtonText: "O.K",
        confirmButtonColor: "#42f5e3",
        width: "900px",
        customClass: "swal-wide",
      }).catch(function (error) {
        console.log(error.response.data.message);
      });
    },
    openModal(lugar) {
      this.lugarVotado = lugar;
      this.modal = true;
    },
    closeModal() {
      this.modal = false;
    },
  },
  created() {
    this.getDataUser();
    this.mostrarLugares();
  },
};
</script>

<style scoped>
.modal {
  position: relative;
  top: 65rem;
  left: 0;
  right: 50rem;
  padding: 5rem;
  bottom: 0;
  width: 100%;
  background: rgb(0, 0, 0);
}

.modalBox {
  position: relative;
  top: -65rem;
  left: 0;
  right: 50rem;
  padding: 5rem;
  bottom: 0;
  width: 100%;
  background: rgba(49, 109, 237);
}
.container {
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  box-shadow: 0 0 100px rgb(17, 18, 20);
  height: 100%;
  width: 100%;
  padding: 2rem;
  margin: 0 auto;
  padding-top: 30px;
  padding-bottom: 10px;
}
</style>
